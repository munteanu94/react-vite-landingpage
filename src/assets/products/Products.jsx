import "./Products.css";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "./images.json";
import { useState } from "react";

export default function Products() {
  const [items, setItems] = useState(images);
  const filterItems = (catItem) => {
    const updateItems = images.filter((item) => {
      return item.category === catItem;
    });
    setItems(updateItems);
  };

  return (
    <div className="containerProducts">
      <h2>Our Products</h2>
      <div className="buttons">
        <button
          type="button"
          className="active"
          onClick={() => setItems(images)}
        >
          All
        </button>
        <button
          className="active"
          type="button"
          onClick={() => filterItems("Bottom")}
        >
          Bottom
        </button>
        <button
          className="active"
          type="button"
          onClick={() => filterItems("Dress")}
        >
          Dress
        </button>
        <button
          className="active"
          type="button"
          onClick={() => filterItems("Set")}
        >
          Set
        </button>
        <button
          className="active"
          type="button"
          onClick={() => filterItems("Knit")}
        >
          Knit
        </button>
        <button
          className="active"
          type="button"
          onClick={() => filterItems("Outer")}
        >
          Outer
        </button>
      </div>

      <div className="products">
        {items.map((record) => {
          return (
            <div className="cart" key={record.id}>
              <img src={record.src} />
              <p>{record.title}</p>
              <p>{record.price}</p>
            </div>
          );
        })}
      </div>
      <div className="btnSeeMore">
        <button>
          SEE MORE <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
