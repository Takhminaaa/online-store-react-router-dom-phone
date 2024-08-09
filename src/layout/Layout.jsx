import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MainPage from "./MainPage";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
