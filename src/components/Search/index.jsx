import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

function Search() {
  const [way, setWay] = useState("one-way");

  return (
    <div className="search section container" data-testid="search">
      <div className="sectionContainer">
        <div className="sectionTab ">
          <div className="btns flex">
            <div className="singleBtn">
              <span>Economy</span>
            </div>
            <div className="singleBtn">
              <span>Business Class</span>
            </div>
            <div className="singleBtn">
              <span>First Class</span>
            </div>
          </div>
          <div className="btns flex">
            <div className="singleBtn" onClick={() => setWay("one-way")}>
              <span>One way</span>
            </div>
            <div className="singleBtn" onClick={() => setWay("two-way")}>
              <span>Two Way</span>
            </div>
          </div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>From</h4>
              <input
                type="text"
                placeholder="Destination"
                data-testid="from-input"
              />
            </div>
          </div>
          {way === "two-way" && (
            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon" />
              </div>
              <div className="texts">
                <h4>To</h4>
                <input
                  type="text"
                  placeholder="Destination"
                  data-testid="to-input"
                />
              </div>
            </div>
          )}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Adult</h4>
              <input
                type="text"
                placeholder="No. of adults"
                data-testid="adult-input"
              />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Child</h4>
              <input
                type="text"
                placeholder="No. of children"
                data-testid="child-input"
              />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input
                type="text"
                placeholder="Add date"
                data-testid="check-in-input"
              />
            </div>
          </div>
          {way === "two-way" && (
            <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className="icon" />
              </div>
              <div className="texts">
                <h4>Check Out</h4>
                <input
                  type="text"
                  placeholder="Add date"
                  data-testid="check-out-input"
                />
              </div>
            </div>
          )}
          <button className="btn btnBlock flex">Search Flights</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
