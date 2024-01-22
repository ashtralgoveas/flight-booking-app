import React from "react";
import { convertDate } from "../../helpers";

const FlightDetailsTable = ({ displayData, price }) => {
  return (
    <tbody>
      <tr>
        <td className="airportName">
          {displayData?.source?.airport?.airportName}
        </td>
        <td className="date">{convertDate(displayData?.source?.depTime)}</td>
        <td className="airportName">
          {displayData?.destination?.airport?.airportName}
        </td>
        <td className="date">
          {convertDate(displayData?.destination?.arrTime)}
        </td>
        <td className="">{displayData?.airlines[0]?.airlineName}</td>
        <td className="stopInfo">{displayData?.stopInfo}</td>
        <td className="duration">{displayData?.totalDuration}</td>
        <td className="fare">{price}</td>
      </tr>
    </tbody>
  );
};

export default FlightDetailsTable;
