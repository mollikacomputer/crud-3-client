import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center">
      <h3 className="text-2xl">Services</h3>
      <h2 className="text-3xl">Our Services</h2>
      <p>
        The mejority have suffered alteration in some form, by injected humour,
        or randomise <br />
        words which do not look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}>
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
