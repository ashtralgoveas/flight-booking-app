import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Search from "../components/Search";
import Support from "../components/Support";
import Info from "../components/Info";
import Lounge from "../components/Lounge";
import Travel from "../components/Travel";
import Subscribers from "../components/Subscribers";
import Footer from "../components/Footer";

const MainHome = () => {
  return (
    <div data-testid="main-home">
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travel />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default MainHome;
