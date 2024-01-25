import col1 from "/src/assets/img/col1.png";
import col2 from "/src/assets/img/col2.png";
import col3 from "/src/assets/img/col3.png";
import col4 from "/src/assets/img/col4.png";
import col5 from "/src/assets/img/col5.png";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import "./Colections.css";

export default function Colections() {
  return (
    <div className="colectionsContainer">
      <h2>Our Featured Collections</h2>
      <div className="colections">
        <div>
          <img src={col1} />
          <h6>
            COLORFUL KNITWEAR <br /> SERIES
          </h6>
          <div className="arrow">
            <PiArrowBendUpRightBold />
          </div>
        </div>
        <div>
          <img src={col3} />
          <h6>
            COLORFUL KNITWEAR <br /> SERIES
          </h6>
          <div className="arrow">
            <PiArrowBendUpRightBold />
          </div>
        </div>
        <div>
          <img src={col2} />
          <h6>
            COLORFUL KNITWEAR <br /> SERIES
          </h6>
          <div className="arrow">
            <PiArrowBendUpRightBold />
          </div>
        </div>
        <div>
          <img src={col4} />
          <h6>
            COLORFUL KNITWEAR <br /> SERIES
          </h6>
          <div className="arrow">
            <PiArrowBendUpRightBold />
          </div>
        </div>
        <div>
          <img src={col5} />
          <h6>
            COLORFUL KNITWEAR
            <br /> SERIES
          </h6>
          <div className="arrow">
            <PiArrowBendUpRightBold />
          </div>
        </div>
      </div>
    </div>
  );
}
