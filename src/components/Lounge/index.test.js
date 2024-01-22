// Lounge.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Lounge from ".";

test("renders Lounge component with content", () => {
  render(<Lounge />);

  // Check if the component is rendered
  const loungeComponent = screen.getByTestId("lounge");
  expect(loungeComponent).toBeInTheDocument();

  // Check if the image is rendered
  const imageElement = screen.getByAltText("");
  expect(imageElement).toBeInTheDocument();

  // Check if the title is rendered
  const titleElement = screen.getByText("Unaccompanied Minor Lounge");
  expect(titleElement).toBeInTheDocument();

  // Check if each grid title and description is rendered
  const gridTitles = [
    "Help through the airport",
    "Priority Boarding",
    "Chauffeur-drive service",
    "Care on Flight",
  ];

  gridTitles.forEach((title) => {
    const gridTitle = screen.getByText(title);
    expect(gridTitle).toBeInTheDocument();
  });
});
