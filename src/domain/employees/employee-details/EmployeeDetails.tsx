import { Box, Grid, IconButton, Tooltip, Zoom } from "@mui/material";
import { useGetEmployeeQuery } from "../apis";
import { useNavigate, useParams } from "react-router-dom";
import BackDropLoader from "../../../components/BackDropLoader";
import EmployeeDetailsLeftBox from "../components/EmployeeDetailsLeftBox";
import EmployeeDetailsRightBox from "../components/EmployeeDetailsRightBox";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { ArrowBack } from "@mui/icons-material";

const EmployeeDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // api
  const { data, isFetching, isError } = useGetEmployeeQuery({
    id: params.id!,
  });

   // error handling
   useEffect(()=>{
    if(isError){
      enqueueSnackbar("Error while fetching data", {
        variant: "error",
      });
    }
  },[isError, enqueueSnackbar])
  
  const handleNavigate = ()=>{
    navigate(-1);
  }
  return (
    <Box width={'100%'} data-testid="employee-details">
      <Box marginBottom={2}>
        <IconButton aria-label="navigate back" onClick={handleNavigate}>
        <Tooltip TransitionComponent={Zoom} title="Go back">
          <ArrowBack/>
          </Tooltip>
        </IconButton>
      </Box>  
      <Grid container sx={{xs:{paddingLeft:5},  sm:{paddingLeft:10}, md:{paddingLeft:30}}} >
      <BackDropLoader open={isFetching} />
      {data && (
        <>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <EmployeeDetailsLeftBox employeeData={data}/>
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
            <EmployeeDetailsRightBox  employeeData={data} />
          </Grid>
        </>
      )}
    </Grid>
    </Box>
  );
};

export default EmployeeDetails;
