import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-600 ">Service</h2>
        <p className="text-5xl font-bold">Our Service Area</p>
        <p className="text-gray-500 mt-5 px-56 text-xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-7 ">
        {/* {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))} */}
      </div>
      

       <Link>   <button className="mx-auto text-center btn btn-outline btn-orange">More Services</button></Link>
   
   
    </div>
  );
};

export default Services;
