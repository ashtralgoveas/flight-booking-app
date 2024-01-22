import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import MainHome from "./pages/MainHome";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import AvailableFlights from "./pages/AvailableFlights";

test("renders without crashing", () => {
  render(<App />);
});

test("renders main home component", () => {
  render(
    <Router>
      <MainHome />
    </Router>
  );

  const mainHomeElement = screen.getByTestId("main-home");
  expect(mainHomeElement).toBeInTheDocument();
});

test("navigates to available flights page", () => {
  render(
    <Router initialEntries={["/available-flights"]}>
      <AvailableFlights />
    </Router>
  );
  const availableFlightsElement = screen.getByTestId("available-flights");
  expect(availableFlightsElement).toBeInTheDocument();
});
