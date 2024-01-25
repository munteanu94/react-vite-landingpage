import Frame1 from "/src/assets/img/Frame1.png";
import Frame2 from "/src/assets/img/Frame2.png";
import Frame3 from "/src/assets/img/Frame3.png";
import Slider from "/src/assets/slider/Slider.jsx";
import "./SectionSecond.css";

export default function SectionSecond() {
  return (
    <section className="containerSecond">
      <h2>Season Collections</h2>
      <div className="Season">
        <div>
          <img src={Frame1}></img>
          <div>
            <h4>SPRING</h4>
            <a>MORE</a>
          </div>
        </div>
        <div>
          <img src={Frame2}></img>
          <div>
            <h4>SUMMER</h4>
            <a>MORE</a>
          </div>
        </div>
        <div>
          <img src={Frame3}></img>
          <div>
            <h4>WINTER</h4>
            <a>MORE</a>
          </div>
        </div>
      </div>
      <h2>Our Best Seller</h2>
      <Slider />
    </section>
  );
}
