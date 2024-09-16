import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button as={Link} to="/login">
          Login
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/products">
          Product
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
