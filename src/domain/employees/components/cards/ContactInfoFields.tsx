import { Box, Typography, styled } from "@mui/material";

type ContactInfoFieldProps = {
  fieldName: string;
  value: string | number;
  valueColor?: string;
};
const ContactInfoField = ({ fieldName, value, valueColor='gray' }: ContactInfoFieldProps) => {
  const InfoFields = styled("div")(({ theme }) => ({
    display: "flex",
    width:'70%',
    alignItems:'center',
    gap: 4,
    wordBreak: 'break-all',
    [theme.breakpoints.down("md")]: {
      width:'100%',
    },
  }));
  return (
    <InfoFields >
      <Box width='30%' minWidth={110}>
        <Typography variant="subtitle1" component="h5" fontWeight={500} color="black">
          {fieldName}
        </Typography>
      </Box>
      <Box width='70%' minWidth={150}>
        <Typography variant="subtitle2" component="h5" color={valueColor}>
          {value}
        </Typography>
      </Box>
    </InfoFields>
  );
};

export default ContactInfoField;
