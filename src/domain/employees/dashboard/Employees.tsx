import Box from "@mui/material/Box";
import {
  useAddEmployeeMutation,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeesQuery,
} from "../apis";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import { Button, CircularProgress, TablePagination } from "@mui/material";
// import DashboardStats from "../components/DashboardStats";
import { useSnackbar } from "notistack";
import Empty from "../../../components/Empty";
import EmployeesList from "../components/EmployeesList";
import AddEmployeeForm from "../forms/add-employee-form";
import { useBoolean } from "../../../hooks/use-boolean";
import { ConfirmDialog, FormDialog } from "../../../components/custom-dialog";
import { Employee, EmployeeResponse } from "../types";

const Employees = () => {
  const defaultPageSize = 8;
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPageSize);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeResponse>();
  const formDialog = useBoolean();
  const confirmDialog = useBoolean();

  // get employees endpoint
  const {
    data: employeesData,
    isError,
    isFetching,
    isSuccess,
  } = useGetEmployeesQuery({
    _page: page+1,
    _per_page: rowsPerPage,
    firstName: query,
    department: department==="" ? undefined : department,
    position: position==="" ? undefined : position 
  });

  // add employee endpoint
  const [addEmployee, { isLoading: empAddLoading }] = useAddEmployeeMutation();

  // edit employee endpoint
  const [editEmployee, { isLoading: empEditLoading }] =
    useEditEmployeeMutation();

  // delete employee endpoint
  const [deleteEmployee, { isLoading: empDeleteLoading }] =
    useDeleteEmployeeMutation();

  const handleAddEmployee = async (body: Employee) => {

    const payload: EmployeeResponse = {
      ...body,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
    try {
      await addEmployee(payload).unwrap();
      formDialog.onFalse();
      enqueueSnackbar("Employee Added successfully!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Error adding employee", {
        variant: "error",
      });
    }
  };

  const handleEditEmployee = async (body: EmployeeResponse, id: string) => {
    const payload: EmployeeResponse = {
      ...body,
      createdAt: selectedEmployee?.createdAt ?? new Date().getTime(),
      updatedAt: new Date().getTime()
    }
    try {
      await editEmployee({
        payload,
        id,
      }).unwrap();
      formDialog.onFalse();
      enqueueSnackbar(
        selectedEmployee
          ? "Employee Edited successfully!"
          : "Employee Added successfully!",
        {
          variant: "success",
        }
      );
    } catch (error) {
      enqueueSnackbar(
        selectedEmployee ? "Error editing employee" : "Error adding employee",
        {
          variant: "error",
        }
      );
    }
  };

  const handleDeleteEmployee = async () => {
    if (selectedEmployee && selectedEmployee?.id) {
      try {
        await deleteEmployee({
          id: selectedEmployee.id,
        }).unwrap();
        confirmDialog.onFalse();
        enqueueSnackbar("Employee Deleted successfully!", {
          variant: "success",
        });
      } catch (error) {
        enqueueSnackbar("Error deleting employee", {
          variant: "error",
        });
      }
    }
  };

  // error handling
  useEffect(() => {
    if (isError) {
      enqueueSnackbar("Error while fetching data", {
        variant: "error",
      });
    }
  }, [isError, enqueueSnackbar, isSuccess]);

  useEffect(() => {
    // for backdrop
    if (isFetching) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isFetching]);

  const handleOpenFormDialog = () => {
    setSelectedEmployee(undefined);
    formDialog.onTrue();
  };
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box width="100%">
      <SearchBox
        setQuery={setQuery}
        department={department}
        position={position}
        setDepartment={setDepartment}
        setPosition={setPosition}
        handleOpenFormDialog={handleOpenFormDialog}
      />
      {employeesData && employeesData?.data?.length > 0 ? (
        <EmployeesList
          employeeList={employeesData?.data ?? []}
          backdropOpen={open}
          setSelectedEmployee={setSelectedEmployee}
          openFormDialog={() => formDialog.onTrue()}
          openDeleteDialog={()=>confirmDialog.onTrue()}
        />
      ) : (
        <Empty description="No results found" />
      )}

      <Box
        width="100%"
        padding={2}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        borderTop="1px solid #e1dede"
        marginTop={3}
      >
        <TablePagination
          component="div"
          count={employeesData?.items ?? 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[4, 8, 12, 24, 48, 72, 100]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Items per page"
        />
      </Box>
      <FormDialog
        role="form-dialog"
        open={formDialog.value}
        onClose={formDialog.onFalse}
        title={selectedEmployee ? "Edit Employee" : "Add Employee"}
        maxWidth="lg"
        content={
          <AddEmployeeForm
            onClose={formDialog.onFalse}
            handleAddEmployee={handleAddEmployee}
            isLoading={empAddLoading || empEditLoading}
            handleEditEmployee={handleEditEmployee}
            employeeDetails={selectedEmployee}
            formBtnText={selectedEmployee ? "Update" : "Add"}
          />
        }
        action={null}
      />

      <ConfirmDialog
        role="confirm-dialog"
        open={confirmDialog.value}
        onClose={confirmDialog.onFalse}
        title="Delete Employee"
        closeBtnText="Close"
        content={<>Are you sure you want to delete this employee?</>}
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteEmployee();
            }}
          >
            {empDeleteLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Delete"
            )}
          </Button>
        }
      />
    </Box>
  );
};

export default Employees;
