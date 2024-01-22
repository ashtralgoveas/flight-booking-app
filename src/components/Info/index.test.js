import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Info from ".";

test("renders Info component", () => {
  render(<Info />);
});

test("renders title and 'View All' button", () => {
  render(<Info />);
  const title = screen.getByText(/Make memories of the World/i);
  const viewAllButton = screen.getByText(/View All/i);

  expect(title).toBeInTheDocument();
  expect(viewAllButton).toBeInTheDocument();
});

test("renders each card with correct content", () => {
  render(<Info />);

  const cards = screen.getAllByTestId("info-card");
  expect(cards).toHaveLength(3);

  const cardTitles = screen.getAllByTestId("card-title");
  expect(cardTitles).toHaveLength(3);

  const cardDescriptions = screen.getAllByTestId("card-description");
  expect(cardDescriptions).toHaveLength(3);
});
