import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmployeeCard from "./cards/EmployeeCard";
import BackDropLoader from "../../../components/BackDropLoader";
import {  EmployeeResponse } from "../types";
import { SetStateAction } from "react";

type EmployeeListProps = {
  employeeList: EmployeeResponse[];
  backdropOpen: boolean;
  setSelectedEmployee: React.Dispatch<SetStateAction<EmployeeResponse | undefined>>;
  openFormDialog: () => void;
  openDeleteDialog: ()=>void;
};

const EmployeesList = ({
  employeeList,
  backdropOpen,
  setSelectedEmployee,
  openFormDialog,
  openDeleteDialog,
}: EmployeeListProps) => {
  return (
    <Box sx={{ flexGrow: 1, minHeight:'65vh' }}>
      <BackDropLoader open={backdropOpen} />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {employeeList &&
          employeeList?.length > 0 &&
          employeeList?.map((employee) => (
            <Grid key={employee?.id} item xs={12} sm={6} md={4} lg={3}>
              <EmployeeCard
                seniorsCard={false}
                employee={employee}
                openEditModal={() => {
                  openFormDialog();
                  setSelectedEmployee(employee);
                }}
                openDeleteModal={() => {
                  setSelectedEmployee(employee);
                  openDeleteDialog();
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default EmployeesList;
