import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Make memories of the World</h2>
          <button className="btn">View All</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid" data-testid="info-card">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle" data-testid="card-title">
              Book Now
            </span>
            <p data-testid="card-description">
              Lorem ipsum, dolor sit amet elit. Dignissimos provident quod.
            </p>
          </div>

          <div className="singleCard grid" data-testid="info-card">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle" data-testid="card-title">
              Safety
            </span>
            <p data-testid="card-description">
              Lorem ipsum, dolor sit amet elit. Dignissimos provident quod.
            </p>
          </div>

          <div className="singleCard grid" data-testid="info-card">
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkFill className="icon" />
            </div>
            <span className="cardTitle" data-testid="card-title">
              Save More
            </span>
            <p data-testid="card-description">
              Lorem ipsum, dolor sit amet elit. Dignissimos provident quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
