import hero from '../assets/hero.png'

export default function HomeHero() {
  return (
          <div className="container my-5">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row mb-4">
                  <div className="col">
                    <button className="btn btn-outline-secondary rounded-5">
                      Create your own
                    </button>
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="title-section justify-content-end">
                      <h1 className="display-5 fw-bold">
                        Make the most
                        <br />
                        of o <br />
                        printing
                      </h1>
                    </div>
                  </div>
    
                  <div className="col-12 mb-4">
                    <h3 className="text-muted fs-6">
                      What's more, we do it right! A full administration printing
                      background. Print shirts for yourself or your online business
                    </h3>
                  </div>
    
                  <div className="col-12 mb-4">
                    <div>
                      <button className="btn btn-success me-2">Shop Now</button>
                      <span className="text-dark fw-bold">How We Work </span>
                    </div>
                  </div>
    
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 col-md-5 col-lg-3">
                        <h2 className="fw-bold">4k+</h2>
                        <p className="text-muted mb-0">collection</p>
                      </div>
                      <div className="col-6 col-md-5 col-lg-3">
                        <h2 className="fw-bold">9k+</h2>
                        <p className="text-muted mb-0">items trusted to deliver</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-md-6">
                <img
                  src={hero}
                  alt="Side Image"
                  className="img-fluid h-100 rounded-3"
                />
              </div>
            </div>
          </div>
  )
}