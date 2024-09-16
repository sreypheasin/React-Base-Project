import React from "react";
import { NavbarComponent } from "./NavbarComponent";
import { FooterComponent } from "./FooterComponent";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <Outlet />
      <FooterComponent />
    </>
  );
}
