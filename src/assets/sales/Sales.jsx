import sale1 from "/src/assets/img/sale1.png";
import sale2 from "/src/assets/img/sale2.png";
import sale3 from "/src/assets/img/sale3.png";
import "./Sales.css";
export default function Sales() {
  return (
    <div className="sales">
      <div>
        <img src={sale1} alt=" poza" />
      </div>
      <div>
        <img src={sale3} alt=" poza" />
      </div>
      <div>
        <h3>Get 50% Off</h3>
        <p>
          for all new product purchases <br />
          min. purchase Rp. 350.000
        </p>
        <a href="#">SHOP NOW</a>
      </div>
      <div>
        <img src={sale2} alt=" poza" />
      </div>
    </div>
  );
}
