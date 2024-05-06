import { Box, Typography, styled } from "@mui/material";
import { EmployeeResponse } from "../types";
import { Place } from "@mui/icons-material";
import ContactInfoField from "./cards/ContactInfoFields";
import { blue } from "@mui/material/colors";

type EmployeeDetailsLeftBoxProps = {
  employeeData: EmployeeResponse;
};

const EmployeeDetailsLeftBox = ({ employeeData }: EmployeeDetailsLeftBoxProps) => {
  const NameLocation = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  }));
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <NameLocation>
        <Typography variant="h4" component="h4" color="black" marginRight={3}>
          {employeeData?.firstName} {employeeData?.lastName}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Place color={"disabled"} />
          <Typography variant="subtitle2" component="h5" color={"gray"}>
            {employeeData?.address}
          </Typography>
        </Box>
      </NameLocation>
      <Box display="flex" flexDirection="column" alignItems="baseline">
        <Typography
          variant="subtitle2"
          component="h5"
          color={"gray"}
          marginBottom={2}
        >
          {"Personal Information".toUpperCase()}
        </Typography>
        <ContactInfoField fieldName="Phone:" value={employeeData?.phone} />
        <ContactInfoField
          fieldName="Email:"
          value={employeeData?.email}
          valueColor={blue[500]}
        />
        <ContactInfoField fieldName="Gender:" value={employeeData?.gender} />
      </Box>
    </Box>
  );
};

export default EmployeeDetailsLeftBox;
