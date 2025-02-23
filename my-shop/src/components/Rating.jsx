import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Rating({ value, text }) {
return (
    <div className="rating">
        <span>
            <FontAwesomeIcon
                style={value> 0? {color: "#f3e835"}: {color:"#fff"} }
                icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : farStar}
            />
        </span>
        <span>
            <FontAwesomeIcon
                style={value> 1? {color: "#f3e835"}: {color:"#fff"} }
                icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : farStar}
            />
        </span>
        <span>
            <FontAwesomeIcon
                style={value> 2? {color: "#f3e835"}: {color:"#fff"} }
                icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : farStar}
            />
        </span>
        <span>
            <FontAwesomeIcon
                style={value> 3? {color: "#f3e835"}: {color:"#fff"} }
                icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : farStar}
            />
        </span>
        <span>
            <FontAwesomeIcon
                style={value> 4? {color: "#f3e835"}: {color:"#fff"} }
                icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : farStar}
            />
        </span>
        {text && <span>{text}</span>}
    </div>
);
}
