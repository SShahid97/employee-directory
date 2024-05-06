import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BackDropLoader from "./components/BackDropLoader";

/* lazy imports */
const Layout = React.lazy(() => import("./domain/employees/layout/Layout"));
const Dashboard = React.lazy(() => import("./domain/employees/dashboard/Employees"));
const UserDetail = React.lazy(
  () => import("./domain/employees/employee-details/EmployeeDetails")
);
const SeniorEmployees = React.lazy(
  () => import("./domain/employees/senior-employees/SeniorEmployees")
);

const PageNotFound = React.lazy(() => import("./page-not-found/PageNotFound"));

interface AppRoutesProps {}

const AppRoutes: React.FC<AppRoutesProps> = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<BackDropLoader open={true} />}>
          <Layout />
        </Suspense>
      }
    >
      <Route
        path="/"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/employees"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/employee-detail/:id"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <UserDetail />
          </Suspense>
        }
      />
      <Route
        path="/senior-employees"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <SeniorEmployees />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<BackDropLoader open={true} />}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
