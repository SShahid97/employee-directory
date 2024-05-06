/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { CardActions, Divider, IconButton, Tooltip, Zoom } from "@mui/material";
import {
  Call,
  MailOutline,
  Place,
  Visibility,
  DeleteOutline,
  AttachMoney,
} from "@mui/icons-material";
import CardContentBox from "./CardContentBox";
import { useNavigate } from "react-router-dom";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  addEmployeeToSeniors,
  removeEmployeeFromSeniors,
} from "../../slices/employeeSlice";
import { EmployeeResponse } from "../../types";
import { isEmployeeAddedToSeniors } from "../../../../utils/helpers";
import { useSnackbar } from "notistack";
import { paths } from "../../../../paths";

type EmployeeCardProps = {
  employee: EmployeeResponse;
  openEditModal: () => void;
  openDeleteModal: () => void;
  seniorsCard: boolean;
};

function EmployeeCard({
  employee,
  openEditModal,
  openDeleteModal,
  seniorsCard,
}: EmployeeCardProps) {
  // store function
  const dispatch = useAppDispatch();
  const { seniorEmployees } = useAppSelector((state) => state.reducer.employee);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // function for adding employee to seniors list
  const handleAddToSeniors = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      dispatch(addEmployeeToSeniors(employee));
      enqueueSnackbar("Added to seniors successfully!", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("Failed to add to seniors ", { variant: "error" });
    }
  };

  // function for removing employee from seniors list
  const handleRemoveFromSeniors = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      dispatch(removeEmployeeFromSeniors(employee.id!));
      enqueueSnackbar("Removed from seniors successfully!", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("Failed to remove from seniors", { variant: "error" });
    }
  };

  const handleNavigate = () => {
    navigate(`/${paths.employeeDetail}/${employee?.id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} role="combobox">
        <CardHeader
          avatar={
            <Avatar
              alt={employee?.firstName}
              src=""
              sx={{
                width: 56,
                height: 56,
                padding: 1,
                border: `1px solid #e1dede`,
              }}
            />
          }
          title={`${employee?.firstName} ${employee?.lastName}`}
          subheader={employee?.position}
          titleTypographyProps={{ fontWeight: 500, fontSize: 18 }}
        />
        <Divider style={{ width: "90%", margin: "auto" }} />
        <CardContent style={{ paddingTop: 10, paddingBottom: 0 }}>
          <CardContentBox icon={MailOutline} text={employee?.email} />
          <CardContentBox icon={Call} text={employee?.phone} />
          <CardContentBox icon={Place} text={employee?.address} />
          <CardContentBox icon={AttachMoney} text={employee?.salary} />
        </CardContent>
        <Divider style={{ width: "90%", margin: "auto", marginTop: 10 }} />
        <CardActions style={{ justifyContent: "center" }}>
          <IconButton
            aria-label="view detail"
            color="info"
            onClick={handleNavigate}
          >
            <Tooltip TransitionComponent={Zoom} title="Click to view details">
              <Visibility color="info" />
            </Tooltip>
          </IconButton>
          {!seniorsCard && (
            <>
              <IconButton
                aria-label="edit employee"
                color="secondary"
                onClick={openEditModal}
              >
                <Tooltip TransitionComponent={Zoom} title="Click to Edit">
                  <EditIcon color="secondary" />
                </Tooltip>
              </IconButton>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={openDeleteModal}
              >
                <Tooltip TransitionComponent={Zoom} title="Click to delete">
                  <DeleteOutline color="error" />
                </Tooltip>
              </IconButton>
            </>
          )}

          {isEmployeeAddedToSeniors(seniorEmployees, employee.id!) ? (
            <IconButton
              aria-label="Remove from seniors"
              color="error"
              onClick={(e) => handleRemoveFromSeniors(e)}
            >
              <Tooltip TransitionComponent={Zoom} title="Remove from seniors">
                <Diversity1Icon color="error" />
              </Tooltip>
            </IconButton>
          ) : (
            <IconButton
              aria-label="Add to seniors"
              onClick={(e) => handleAddToSeniors(e)}
              color="success"
            >
              <Tooltip TransitionComponent={Zoom} title="Add to seniors">
                <Diversity1OutlinedIcon color="success" />
              </Tooltip>
            </IconButton>
          )}
        </CardActions>
      </Card>
    </>
  );
}
export default EmployeeCard;
