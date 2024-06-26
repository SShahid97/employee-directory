import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from "@mui/material";

type DrawerListItemProps = {
  onClick: () => void;
  open: boolean;
  text: string;
  icon: React.ElementType<SvgIconProps>;
  active: boolean;
};

const DrawerListItem = ({ onClick, open, text, icon: Icon, active }: DrawerListItemProps) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }} style={active ? {backgroundColor:'#9c27b0', color: "white"}: {}}>
      <ListItemButton
        onClick={onClick}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            ml: open ? "auto" : 3,
            pr: open ? 3 : 0,
            justifyContent: "center",
          }}
        >
          {<Icon style={active ? {color:'white'}:{}}/>}
        </ListItemIcon>
        <ListItemText
          sx={{
            pl: open ? 0 : 3,
          }}
          primary={text}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerListItem;
