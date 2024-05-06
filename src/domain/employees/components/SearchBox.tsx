import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import Filters from "./Filters";
import ClearIcon from "@mui/icons-material/Clear";

type SearchBoxProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  department: string;
  position: string;
  handleOpenFormDialog: () => void;
};

const SearchBox = ({
  setQuery,
  handleOpenFormDialog,
  department,
  position,
  setDepartment,
  setPosition,
}: SearchBoxProps) => {
  const [search, setSearch] = useState<string>("");

  const isFilterApplied = department || position || search;

  const handleClearFilters = () => {
    setSearch("");
    setQuery("");
    setDepartment("");
    setPosition("");
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      marginBottom={3}
      gap={2}
      borderRadius={1}
      p={2}
      boxShadow="1px 1px 3px"
    >
      <Stack
        width="80%"
        display="flex"
        gap={4}
        alignItems="flex-start"
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
      >
        <Filters
          department={department}
          position={position}
          setDepartment={setDepartment}
          setPosition={setPosition}
        />

        <TextField
          fullWidth
          value={search}
          id="outlined-basic"
          label="Search employees by name"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setSearch(e.target.value.trim());
            // mimics debounce
            setTimeout(() => {
              setQuery(
                e.target.value.trim().charAt(0).toUpperCase() +
                  e.target.value.trim().slice(1)
              );
            }, 700);
          }}
        />

        {isFilterApplied && (
          <IconButton
            aria-label="clear filters"
            color="error"
            onClick={handleClearFilters}
          >
            <Tooltip TransitionComponent={Zoom} title="Clear Filters">
              <ClearIcon color="error" /> 
            </Tooltip>
          </IconButton>
        )}
      </Stack>
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={handleOpenFormDialog}
      >
        Add Employee
      </Button>
    </Box>
  );
};

export default SearchBox;
