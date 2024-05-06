import { matchRoutes, useLocation } from "react-router-dom";
import { paths } from "../paths";

const routes = [
  {
    path: paths.dashboard,
  },
  {
    path: paths.seniorEmployees,
  },
  {
    path: paths.employeeDetails,
  },
];

export const useCurrentPath = () => {
  const location = useLocation();
  const route = matchRoutes(routes, location);

  return route;
};
