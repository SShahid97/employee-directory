import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerListItem from "./components/DrawerListItem";
import { Dashboard } from "@mui/icons-material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupsIcon from '@mui/icons-material/Groups';
import { useCurrentPath } from "../../../hooks/useCurrentPath";
import { paths } from "../../../paths";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Layout() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const path = useCurrentPath();

  const getCurrentPath = () => {
    if (path) {
      return path[0]?.pathname?.slice(1);
    }
  };

  const isActiveTab = (tab: string) => {
    if (path) {
      return getCurrentPath() === tab;
    }
  };

  const handleDrawerOpenClose = () => {
    setOpen((prev) => !prev);
  };

  const handleRouteNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
          >
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpenClose}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Employee Directory
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ justifyContent: "space-between" }} sx={{backgroundColor:'#9c27b0'}}>
          {/* <Avatar sx={{ marginLeft: 10 }} /> */}
          <GroupsIcon fontSize="large" sx={{marginInline:'auto', width:50, height:50, color:'white'}} />
          <IconButton onClick={handleDrawerOpenClose}>
            <ChevronLeftIcon sx={{color:'white'}}/>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerListItem
            onClick={() => handleRouteNavigation(paths.dashboard)}
            open={open}
            text="Dashboard"
            icon={Dashboard}
            active={path === null ? true : isActiveTab(paths.dashboard)!}
          />
          <DrawerListItem
            onClick={() => handleRouteNavigation(paths.seniorEmployees)}
            open={open}
            text="Senior Employees"
            icon={Diversity1Icon}
            active={isActiveTab(paths.seniorEmployees) ?? false}
          />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pb:1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
