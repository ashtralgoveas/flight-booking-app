import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from ".";

test("renders Search component with default values", () => {
  render(<Search />);

  // Check if the component is rendered
  const searchComponent = screen.getByTestId("search");
  expect(searchComponent).toBeInTheDocument();

  // Check if default values are present
  const oneWayButton = screen.getByText("One way");
  const adultInput = screen.getByTestId("adult-input");
  const childInput = screen.getByTestId("child-input");
  const fromInput = screen.getByTestId("from-input");
  const checkInInput = screen.getByTestId("check-in-input");

  expect(oneWayButton).toBeInTheDocument();
  expect(adultInput).toHaveValue("");
  expect(childInput).toHaveValue("");
  expect(fromInput).toHaveValue("");
  expect(checkInInput).toHaveValue("");
});

test("updates search inputs when values are changed", () => {
  render(<Search />);

  // Check if the component is rendered
  const searchComponent = screen.getByTestId("search");
  expect(searchComponent).toBeInTheDocument();

  // Update input values
  const fromInput = screen.getByTestId("from-input");
  const adultInput = screen.getByTestId("adult-input");
  const checkInInput = screen.getByTestId("check-in-input");

  fireEvent.change(fromInput, { target: { value: "New York" } });
  fireEvent.change(adultInput, { target: { value: "2" } });
  fireEvent.change(checkInInput, { target: { value: "2022-02-15" } });

  // Check if the inputs are updated
  expect(fromInput).toHaveValue("New York");
  expect(adultInput).toHaveValue("2");
  expect(checkInInput).toHaveValue("2022-02-15");
});
