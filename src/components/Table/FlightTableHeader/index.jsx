import React from "react";

const FlightTableHeader = () => {
  return (
    <tr>
      <th>Source</th>
      <th>Arrival Time</th>
      <th>Destination</th>
      <th>Departure Time</th>
      <th>Airline</th>
      <th>Stop Information</th>
      <th>Total Duration</th>
      <th>Fare</th>
    </tr>
  );
};

export default FlightTableHeader;
