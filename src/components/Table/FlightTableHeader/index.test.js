import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightTableHeader from ".";
import FlightDetailsTable from "..";

test("renders FlightTableHeader component with correct column headers", () => {
  render(
    <table>
      <thead>
        <FlightTableHeader />
      </thead>
      <FlightDetailsTable />
    </table>
  );

  const sourceHeader = screen.getByText("Source");
  const arrivalTimeHeader = screen.getByText("Arrival Time");
  const destinationHeader = screen.getByText("Destination");
  const departureTimeHeader = screen.getByText("Departure Time");
  const airlineHeader = screen.getByText("Airline");
  const stopInfoHeader = screen.getByText("Stop Information");
  const totalDurationHeader = screen.getByText("Total Duration");
  const fareHeader = screen.getByText("Fare");

  expect(sourceHeader).toBeInTheDocument();
  expect(arrivalTimeHeader).toBeInTheDocument();
  expect(destinationHeader).toBeInTheDocument();
  expect(departureTimeHeader).toBeInTheDocument();
  expect(airlineHeader).toBeInTheDocument();
  expect(stopInfoHeader).toBeInTheDocument();
  expect(totalDurationHeader).toBeInTheDocument();
  expect(fareHeader).toBeInTheDocument();
});
