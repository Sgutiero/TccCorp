import Header from "../helpers/Header";
import Hero1 from "../img/hero1.png";
import Hero2 from "../img/hero2.png";
import Hero3 from "../img/hero3.png";
import Footer from "../helpers/Footer";
import "../layouts/Home.css"


const Home = () => {
  return (
    <>
      <Header />
      <h1>Bienvenidos a nuestra empresa</h1>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Hero1} className="d-block w-100 imagen" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hero2} className="d-block w-100 imagen" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hero3} className="d-block w-100 imagen" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
