// AvailableFlights.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightDetailsTable from "../components/Table";
import FlightTableHeader from "../components/Table/FlightTableHeader";
import FilterSortUI from "../components/FilterSortUI";

const AvailableFlights = () => {
  const [flightData, setFlightData] = useState(null);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("all");
  const [selectedAirline, setSelectedAirline] = useState("");
  const [uniqueAirlines, setUniqueAirlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/4829d4ab0e96bfab50e7"
        );
        const data = await response.json();
        setFlightData(data?.data?.result);
        setFilteredFlights(data?.data?.result);
        setIsLoading(false);

        const airlinesSet = new Set(
          data?.data?.result?.map(
            (flight) => flight?.displayData?.airlines[0]?.airlineName
          )
        );
        setUniqueAirlines([...airlinesSet]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle sorting change
  const handleSortChange = (selectedSortOrder) => {
    setSortOrder(selectedSortOrder);
    applyFilterAndSort(selectedAirline, selectedSortOrder);
  };

  // Handle airline filter change
  const handleFilterChange = (selectedAirline) => {
    setSelectedAirline(selectedAirline);
    applyFilterAndSort(selectedAirline, sortOrder);
  };

  // Apply filter and sort based on selectedAirline and sortOrder
  const applyFilterAndSort = (airline, sort) => {
    let filteredAndSortedFlights = [...flightData];

    if (airline && airline !== "all") {
      filteredAndSortedFlights = filteredAndSortedFlights.filter(
        (flight) => flight?.displayData?.airlines[0]?.airlineName === airline
      );
    }

    if (sort && sort !== "all") {
      filteredAndSortedFlights = filteredAndSortedFlights.sort((a, b) => {
        const fareA = parseFloat(a?.fare) || 0;
        const fareB = parseFloat(b?.fare) || 0;

        return sort === "asc" ? fareA - fareB : fareB - fareA;
      });
    }

    // If no filter or sorting applied, show all flights
    if ((!airline || airline === "all") && (!sort || sort === "all")) {
      filteredAndSortedFlights = [...flightData];
    }

    setFilteredFlights(filteredAndSortedFlights);
  };

  return (
    <div data-testid="available-flights">
      <Navbar />
      <div className="tableStyles container">
        <h1 className="tableTitle">Available Flights</h1>
        <FilterSortUI
          airlines={uniqueAirlines}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        {isLoading ? (
          <h3 className="section">Loading...</h3>
        ) : filteredFlights && filteredFlights.length > 0 ? (
          <>
            <table>
              <thead>
                <FlightTableHeader />
              </thead>
              {filteredFlights.map((airplaneData) => (
                <FlightDetailsTable
                  key={airplaneData.id}
                  displayData={airplaneData?.displayData}
                  price={airplaneData?.fare}
                />
              ))}
            </table>
          </>
        ) : (
          <h3 className="section">No Flights Available!</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AvailableFlights;
