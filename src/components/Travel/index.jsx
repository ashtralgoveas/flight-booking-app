import usa from "../../assets/usa.jpg";
import london from "../../assets/london.jpg";
import bangkok from "../../assets/bangkok.jpg";
import italy from "../../assets/italy.jpg";
import paris from "../../assets/paris.jpg";
import india from "../../assets/india.jpg";
import dubai from "../../assets/dubai.jpg";
import morocco from "../../assets/morocco.jpg";

const travel = [
  {
    id: 1,
    destinationImage: usa,
    placeName: "USA",
  },
  {
    id: 2,
    destinationImage: london,
    placeName: "London",
  },
  {
    id: 3,
    destinationImage: bangkok,
    placeName: "Bangkok",
  },
  {
    id: 4,
    destinationImage: italy,
    placeName: "Italy",
  },
  {
    id: 5,
    destinationImage: india,
    placeName: "India",
  },
  {
    id: 6,
    destinationImage: paris,
    placeName: "Paris",
  },
  {
    id: 7,
    destinationImage: dubai,
    placeName: "Dubai",
  },
  {
    id: 8,
    destinationImage: morocco,
    placeName: "Morocco",
  },
];

const Travel = () => {
  return (
    <div className="travelers container section" data-testid="travel">
      <div className="sectionContainer">
        <h2>Top Places to Visit!</h2>

        <div className="travelersContainer grid">
          {travel.map(({ id, destinationImage, placeName }) => {
            return (
              <div key={id} className="singleTraveler">
                <img
                  src={destinationImage}
                  className="destinationImage"
                  alt="destinationImage"
                />
                <div className="travelersDetails">
                  <div className="travelerName">
                    <span>{placeName}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travel;
