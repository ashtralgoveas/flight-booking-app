// FilterSortUI.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterSortUI from ".";

const airlines = ["Airline 1", "Airline 2", "Airline 3"];

test("renders FilterSortUI component", () => {
  const onFilterChangeMock = jest.fn();
  const onSortChangeMock = jest.fn();

  render(
    <FilterSortUI
      airlines={airlines}
      onFilterChange={onFilterChangeMock}
      onSortChange={onSortChangeMock}
    />
  );

  // Check if the filter container is rendered
  const filterContainer = screen.getByLabelText("Filter by Airline:");
  expect(filterContainer).toBeInTheDocument();

  // Check if the sort container is rendered
  const sortContainer = screen.getByLabelText("Sort by Fare:");
  expect(sortContainer).toBeInTheDocument();

  // Check if the "All Airlines" option is present
  const allAirlinesOption = screen.getByText("All Airlines");
  expect(allAirlinesOption).toBeInTheDocument();

  // Check if each airline option is present
  airlines.forEach((airline) => {
    const airlineOption = screen.getByText(airline);
    expect(airlineOption).toBeInTheDocument();
  });

  // Check if the "All" option for sorting is present
  const allSortOption = screen.getByText("All");
  expect(allSortOption).toBeInTheDocument();

  // Check if the "Low to High" option for sorting is present
  const lowToHighSortOption = screen.getByText("Low to High");
  expect(lowToHighSortOption).toBeInTheDocument();

  // Check if the "High to Low" option for sorting is present
  const highToLowSortOption = screen.getByText("High to Low");
  expect(highToLowSortOption).toBeInTheDocument();

  // Simulate a change in the filter dropdown and check if the callback is called
  fireEvent.change(screen.getByLabelText("Filter by Airline:"), {
    target: { value: "Airline 1" },
  });
  expect(onFilterChangeMock).toHaveBeenCalledWith("Airline 1");

  // Simulate a change in the sort dropdown and check if the callback is called
  fireEvent.change(screen.getByLabelText("Sort by Fare:"), {
    target: { value: "asc" },
  });
  expect(onSortChangeMock).toHaveBeenCalledWith("asc");
});
