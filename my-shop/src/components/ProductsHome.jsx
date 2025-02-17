export default function ProductsHome() {
  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Our picks for you</h2>
        <p className="text-muted">
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec
          eturlagix adipiscing eliet, cowec tetopak
        </p>
      </div>

      <section className="mb-5 container">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="rounded h-100 position-relative">
              <img
                src="data:image/jpeg;base64,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"
                className="img-fluid mb-3 rounded"
                alt="Product 1"
              />
              <h5 className="text-center">Premium Crewneck Sweatshirt</h5>
              <p className="text-success fw-bold mb-0 text-center">
                $19.99{" "}
                <span className="text-muted fw-normal text-decoration-line-through">
                  $39.00
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="rounded h-100 position-relative">
              <img
                src="https://m.media-amazon.com/images/I/41sm+hzSHfL._AC_SY350_.jpg"
                className="img-fluid mb-3 rounded"
                alt="Product 2"
              />
              <h5 className="text-center">Midweight Cotton Tee</h5>
              <p className="text-dark fw-bold mb-0 text-center">
                $26.00 – $29.00
              </p>
              <div className="rounded-circle bg-danger color-rounded  "> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="rounded h-100 position-relative">
              <img
                src="https://m.media-amazon.com/images/I/31AqQfaBbnL._SR290,290_.jpg"
                className="img-fluid mb-3 rounded"
                alt="Product 3"
              />
              <h5 className="text-center">Youth Short Sleeve Tee</h5>
              <p className="text-dark fw-bold mb-0 text-center">
                $26.00 – $29.00
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="rounded h-100 position-relative">
              <img
                src="https://m.media-amazon.com/images/I/41BkfeDyKTL._SR290,290_.jpg"
                className="img-fluid mb-3 rounded"
                alt="Product 4"
              />
              <h5 className="text-center">Fine Jersey Tee</h5>
              <p className="text-dark fw-bold mb-0 text-center">$31.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
