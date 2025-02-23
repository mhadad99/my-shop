import brand1 from "../assets/home-pics/brands/Group-1.png"
import brand2 from "../assets/home-pics/brands/Group.png"
import brand3 from "../assets/home-pics/brands/gucci-logo-1 1.png"
import brand4 from "../assets/home-pics/brands/prada-logo-1 1.png"
import brand5 from "../assets/home-pics/brands/zara-logo-1 1.png"

export function Brand() {
    return (
        <section className="bg-dark p-4 d-flex flex-wrap justify-content-around">
            <div className="brand-item">
                <img src={brand1} alt="brand1" className="img-fluid m-2" />
            </div>
            <div className="brand-item">
                <img src={brand2} alt="brand2" className="img-fluid m-2" />
            </div>
            <div className="brand-item">
                <img src={brand3} alt="brand3" className="img-fluid m-2" />
            </div>
            <div className="brand-item">
                <img src={brand4} alt="brand4" className="img-fluid m-2" />
            </div>
            <div className="brand-item">
                <img src={brand5} alt="brand5" className="img-fluid m-2" />
            </div>
        </section>
    )
}