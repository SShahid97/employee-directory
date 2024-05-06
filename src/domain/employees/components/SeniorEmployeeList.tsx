import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BackDropLoader from "../../../components/BackDropLoader";
import {  EmployeeResponse } from "../types";
import EmployeeCard from "./cards/EmployeeCard";

type SeniorEmployeeListProps = {
  employeeList: EmployeeResponse[];
  backdropOpen: boolean;
};

const SeniorEmployeeList = ({
  employeeList,
  backdropOpen,
}: SeniorEmployeeListProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BackDropLoader open={backdropOpen} />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {employeeList &&
          employeeList?.length > 0 &&
          employeeList?.map((employee) => (
            <Grid key={employee?.id} item xs={12} sm={6} md={4} lg={3}>
              <EmployeeCard
                seniorsCard
                employee={employee}
                openDeleteModal={()=>{}}
                openEditModal={()=>{}}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SeniorEmployeeList;
