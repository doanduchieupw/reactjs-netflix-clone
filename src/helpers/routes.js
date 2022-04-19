import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function IsUserRedirect(user) {
  console.log(user);
  console.log(<Outlet />);
  return <>{user ? <Navigate to={ROUTES.BROWSE} /> : <Outlet />}</>;
}
