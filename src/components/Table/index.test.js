import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightDetailsTable from ".";

describe("FlightDetailsTable", () => {
  const mockDisplayData = {
    source: {
      airport: {
        airportName: "Source Airport",
      },
      depTime: "2022-01-01T12:00:00Z",
    },
    destination: {
      airport: {
        airportName: "Destination Airport",
      },
      arrTime: "2022-01-01T14:00:00Z",
    },
    airlines: [
      {
        airlineName: "Example Airline",
      },
    ],
    stopInfo: "Non-stop",
    totalDuration: "2h",
  };

  const mockPrice = 200;

  it("renders FlightDetailsTable component with correct data", () => {
    render(
      <table>
        <FlightDetailsTable displayData={mockDisplayData} price={mockPrice} />
      </table>
    );

    expect(screen.getByText("Source Airport")).toBeInTheDocument();
    expect(screen.getByText("Destination Airport")).toBeInTheDocument();
    expect(screen.getByText("Example Airline")).toBeInTheDocument();
    expect(screen.getByText("Non-stop")).toBeInTheDocument();
    expect(screen.getByText("2h")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
  });
});
