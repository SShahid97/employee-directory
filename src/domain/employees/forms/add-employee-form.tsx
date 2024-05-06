/* eslint-disable @typescript-eslint/ban-types */
import { Form, Formik } from "formik";
import { EmployeeResponse } from "../types";
import { EmployeeSchema } from "../schema";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import FormControlTextField from "../../../components/form-controls/FormControlTextField";
import { countries } from "../../../utils/countries";
import FormControlSelectField from "../../../components/form-controls/FormControlSelectField";
import { departments, gennder, positions } from "../../../utils/static-data";
import FormControlDatePicker from "../../../components/form-controls/FormControlDatePicker";
import { getCurrentFormattedDate } from "../../../utils/helpers";

type AddEmployeeFormProps = {
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) &
    VoidFunction;
  handleAddEmployee: (body: EmployeeResponse) => Promise<void> | void;
  handleEditEmployee: (
    body: EmployeeResponse,
    id: string
  ) => Promise<void> | void;
  isLoading: boolean;
  employeeDetails: EmployeeResponse | undefined;
  formBtnText: string;
};

const AddEmployeeForm = ({
  onClose,
  handleAddEmployee,
  handleEditEmployee,
  employeeDetails,
  isLoading,
  formBtnText,
}: AddEmployeeFormProps) => {
  const handleSubmit = async (values: EmployeeResponse) => {
    const payload: EmployeeResponse = {
      ...values,
      firstName:
        values.firstName.charAt(0).toUpperCase() + values.firstName.slice(1),
    };
    if (employeeDetails) {
      await handleEditEmployee(payload, employeeDetails.id!);
    } else {
      await handleAddEmployee(payload);
    }
  };

  const initialValues = {
    firstName: employeeDetails?.firstName || "",
    lastName: employeeDetails?.lastName || "",
    email: employeeDetails?.email || "",
    position: employeeDetails?.position || "",
    department: employeeDetails?.department || "",
    phone: employeeDetails?.phone || "",
    country: employeeDetails?.country || "",
    address: employeeDetails?.address || "",
    gender: employeeDetails?.gender || "",
    employeeCode: employeeDetails?.employeeCode || "",
    joiningDate: employeeDetails?.joiningDate || getCurrentFormattedDate,
    salary: employeeDetails?.salary || ""
  } as EmployeeResponse;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmployeeSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form id="employee-form">
          <Stack width="100%" spacing={4} mt={1}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <FormControlTextField name="firstName" label="First Name" />
              <FormControlTextField name="lastName" label="Last Name" />
              <FormControlTextField name="email" label="Email" />
            </Box>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <FormControlSelectField name="position" label="Select Position" options={positions}/>
              <FormControlSelectField name="department" label="Select Department" options={departments}/>
              <FormControlTextField name="employeeCode" label="Employee Code" />
            </Box>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <FormControlSelectField name="country" label="Select Country" options={countries}/>
              <FormControlTextField name="address" label="Address" />
              <FormControlSelectField name="gender" label="Select Gender" options={gennder}/>
            </Box>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <FormControlTextField name="phone" label="Phone Number" />
              <FormControlDatePicker name="joiningDate" label="Select Joining Date"/>
              <FormControlTextField name="salary" label="Salary" />
            </Box>

            <Stack
              display="flex"
              justifyContent="flex-end"
              flexDirection="row"
              gap={2}
            >
              <Button type="submit" color="secondary" variant="contained">
                {isSubmitting || isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  formBtnText
                )}
              </Button>
              <Button variant="outlined" color="inherit" onClick={onClose}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployeeForm;
