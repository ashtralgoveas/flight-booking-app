import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AvailableFlights from "./pages/AvailableFlights";
import MainHome from "./pages/MainHome";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home */}
        <Route path="/" element={<MainHome />} />
        {/* Available Flights  */}
        <Route path="/available-flights" element={<AvailableFlights />} />
      </Routes>
    </Router>
  );
}

export default App;
