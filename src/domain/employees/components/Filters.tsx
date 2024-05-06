import { MenuItem, Stack, TextField } from "@mui/material";
import { departments, positions } from "../../../utils/static-data";

type FiltersProps = {
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  department: string;
  position: string;
};

const Filters = ({
  setDepartment,
  setPosition,
  department,
  position,
}: FiltersProps) => {
  return (
    <Stack
      display="flex"
      flexDirection={{ xs: "column", sm: "row", md: "row" }}
      gap={2}
      alignItems="center"
      justifyContent="flex-start"
    >
      <TextField
        select
        label="Select Department"
        value={department}
        size="small"
        sx={{ minWidth: 200 }}
        onChange={(e) => setDepartment(e.target.value)}
      >
        {departments.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Select Position"
        value={position}
        size="small"
        sx={{ minWidth: 200 }}
        onChange={(e) => setPosition(e.target.value)}
      >
        {positions.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

export default Filters;
