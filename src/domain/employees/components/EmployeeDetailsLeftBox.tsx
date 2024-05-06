import { Avatar, Box, Typography } from "@mui/material";
import { EmployeeResponse } from "../types";
import ContactInfoField from "./cards/ContactInfoFields";

type EmployeeDetailsLeftBoxProps = {
  employeeData: EmployeeResponse;
};

const EmployeeDetailsLeftBox = ({ employeeData }: EmployeeDetailsLeftBoxProps) => {
  return (
    <Box role='contentinfo' display="flex" flexDirection="column" gap={3}>
      <Avatar
          alt={employeeData?.firstName}
          src=""
          sx={{
            width: 150,
            height: 150,
            padding: 1,
            border: `1px solid #e1dede`,
          }}
        />
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="subtitle2" component="h5" color={"gray"}>
          {"Work".toUpperCase()}
        </Typography>
        <ContactInfoField
          fieldName="Position:"
          value={employeeData?.position}
        />
         <ContactInfoField
          fieldName="Department:"
          value={employeeData?.department}
        />
         <ContactInfoField
          fieldName="Joining Date:"
          value={employeeData?.joiningDate}
        />
        <ContactInfoField
          fieldName="Salary:"
          value={`$${employeeData?.salary}`}
        />
      </Box>
    </Box>
  );
};

export default EmployeeDetailsLeftBox;
