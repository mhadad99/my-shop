export default function ProductsHome() {
  return (
    <>
      <section className="mb-5 container">
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
      </section>
    </>
  );
}
