import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Support from ".";

test("renders Support component", () => {
  render(<Support />);

  const supportElement = screen.getByTestId("support");
  expect(supportElement).toBeInTheDocument();
});

test("renders correct titles in Support component", () => {
  render(<Support />);

  const travelRequirementsTitle = screen.getByText(
    "Travel requirements for USA"
  );
  const travelInsuranceTitle = screen.getByText("Travel Insurance");
  const servicesAtArrivalTitle = screen.getByText("Services at your arrival");

  expect(travelRequirementsTitle).toBeInTheDocument();
  expect(travelInsuranceTitle).toBeInTheDocument();
  expect(servicesAtArrivalTitle).toBeInTheDocument();
});
