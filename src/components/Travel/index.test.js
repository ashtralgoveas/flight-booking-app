import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Travel from ".";

test("renders Travel component", () => {
  render(<Travel />);

  const travelElement = screen.getByTestId("travel");
  expect(travelElement).toBeInTheDocument();
});

test("renders correct number of destinations in Travel component", () => {
  render(<Travel />);

  const destinationImages = screen.getAllByAltText("destinationImage");
  expect(destinationImages.length).toBe(8);
});

test("renders correct destination names in Travel component", () => {
  render(<Travel />);

  const usaDestination = screen.getByText("USA");
  const londonDestination = screen.getByText("London");
  const bangkokDestination = screen.getByText("Bangkok");

  expect(usaDestination).toBeInTheDocument();
  expect(londonDestination).toBeInTheDocument();
  expect(bangkokDestination).toBeInTheDocument();
});
