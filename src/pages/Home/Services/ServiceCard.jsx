/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, img, price,_id } = service;
  return (
    <div className="service-card-body p-5 pb-10">
      <img
        src={img}
        className=" rounded h-3/4 w-full"
        style={{ width: "100%" }}
      />
      <p className="text-3xl font-bold py-3">{title}</p>
      <div className="flex justify-between text-orange-600 text-xl font-semibold">
        <p>Price: ${price}</p>
        <Link to={`/checkout/${_id}`} className="font-normal">
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
