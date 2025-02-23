import { Link } from "react-router";
import hero from "../assets/home-pics/hero.png";

export default function HomeHero() {
  return (
    <div style={{ backgroundColor: "#f2f0f1" }}>
      <div className="row container mx-auto justify-content-center">
        <div className="col-md-6 py-5">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="title-section justify-content-end">
                <h1
                  className="display-5 fw-bold"
                  style={{ fontFamily: "integralcf, sans-serif" }}
                >
                  FIND CLOTHES <br />
                  THAT MATCHES <br />
                  YOUR STYLE
                </h1>
              </div>
            </div>

            <div className="col-12 mb-4">
              <h3 className="text-muted fs-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </h3>
            </div>

            <div className="col-12  my-5">
              <Link to="products" ><button
                className="btn btn-dark w-50 rounded-5 me-2 "
                style={{
                  height: " 52px",
                }}
              >
                Shop Now
              </button>
              </Link>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-3">
                  <h4 className="fw-bold">200+</h4>
                  <p className="text-muted mb-0">International Brands</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3">
                  <h4 className="fw-bold">2,000+</h4>
                  <p className="text-muted mb-0">High-Quality Products</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3">
                  <h4 className="fw-bold">30,0000+</h4>
                  <p className="text-muted mb-0">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={hero}
            alt="Side Image"
            className="img-fluid hero-pic"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
