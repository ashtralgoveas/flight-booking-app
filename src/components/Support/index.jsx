import supportimg from "../../assets/supporting.png";

function Support() {
  return (
    <div className="support container section" data-testid="support">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Find help with Booking</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit.{" "}
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>Travel requirements for USA</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. At!{" "}
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              className="singleInfo"
            >
              <span className="number colorOne">02</span>
              <h4>Travel Insurance</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. At!{" "}
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number colorTwo">03</span>
              <h4>Services at your arrival</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. At!{" "}
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img
              data-aos="fade-left"
              data-aos-duration="4500"
              src={supportimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
