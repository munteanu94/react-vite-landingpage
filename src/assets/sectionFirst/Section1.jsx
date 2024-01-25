import img1 from "/src/assets/img/img1.png";
import img2 from "/src/assets/img/img2.png";
import img3 from "/src/assets/img/img3.png";
import img4 from "/src/assets/img/img4.png";
import "./Section1.css";

export default function SectionFirst() {
  return (
    <section className="sectionFirst">
      <img src={img1} />
      <img src={img2} className="imgHide" />
      <div className="text">
        <h2>MEJIWOO</h2>
        <p>
          make your everyday look prettier
          <br /> with MEJIWOO Korean Made
        </p>
      </div>
      <img src={img3} className="imgHide" />
      <img src={img4} />
    </section>
  );
}
