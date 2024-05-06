import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Empty from "../../../components/Empty";
import SeniorEmployeeList from "../components/SeniorEmployeeList";
import { clearAllSeniors } from "../slices/employeeSlice";
import { useSnackbar } from "notistack";

const SeniorEmployees = () => {
  const { seniorEmployees } = useAppSelector((state) => state.reducer.employee);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleRemoveAll = () => {
    try {
      dispatch(clearAllSeniors());
      enqueueSnackbar("Removed all senior employees successfully!", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("Failed to remove seniors employees", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    if (!seniorEmployees) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [seniorEmployees]);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      data-testid="seniorEmployees"
    >
      <Stack display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h5" component="h5" color="black">
          Senior Employees
        </Typography>
        {seniorEmployees?.length > 0 && (
          <Button
            variant="contained"
            type="button"
            color="error"
            onClick={handleRemoveAll}
          >
            Remove All
          </Button>
        )}
      </Stack>

      <Divider />
      {seniorEmployees?.length > 0 ? (
        <SeniorEmployeeList
          employeeList={seniorEmployees ?? []}
          backdropOpen={open}
        />
      ) : (
        <Empty description="No senior employees" />
      )}
    </Box>
  );
};

export default SeniorEmployees;
