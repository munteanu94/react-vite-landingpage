import Header from "./assets/header/Header.jsx";
import SectionFirst from "./assets/sectionFirst/Section1.jsx";
import SectionSecond from "./assets/sectionSecond/SectionSecond.jsx";
import Sales from "./assets/sales/Sales.jsx";
import Products from "./assets/products/Products.jsx";
import Colections from "./assets/colections/Colections.jsx";
import Feedback from "./assets/feedback/feedback.jsx";
import Sing from "./assets/singUp/SingUp.jsx";
import Footer from "./assets/footer/Footer.jsx";
import "./index.css";

export default function App() {
  const newLocal = <Products />;
  return (
    <div className="mainContainer">
      <Header />
      <SectionFirst />
      <SectionSecond />
      <Sales />
      <Products />
      <Colections />
      <Feedback />
      <Sing />
      <Footer />
    </div>
  );
}
