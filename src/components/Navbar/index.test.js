// Navbar.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from ".";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Navbar component with default state", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the component is rendered
  const navbarComponent = screen.getByTestId("navbar");
  expect(navbarComponent).toBeInTheDocument();

  // Check if the logo is rendered
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();

  // Check if the default menu is not shown
  const defaultMenuElement = screen.queryByTestId("navBarMenu showNavBar");
  expect(defaultMenuElement).toBeNull();
});

test("renders Navbar component and shows menu on toggle click", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the component is rendered
  const navbarComponent = screen.getByTestId("navbar");
  expect(navbarComponent).toBeInTheDocument();

  // Check if the logo is rendered
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();

  // Check if the default menu is not shown
  const defaultMenuElement = screen.queryByTestId("navBarMenu showNavBar");
  expect(defaultMenuElement).toBeNull();

  // Click on the toggle icon to show the menu
  const toggleIcon = screen.getByTestId("toggle-icon");
  fireEvent.click(toggleIcon);

  // Check if the menu is now shown
  const menuElement = screen.getByTestId("navBarMenu showNavBar");
  expect(menuElement).toBeInTheDocument();
});
