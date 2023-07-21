import { getServices } from "@/sanity/sanity-utils";
import ServiceCard from "./serviceCard";

const Services = async () => {
  const services = await getServices();

  return (
    <section className="mt-32 sm:mt-44">
      <h2 className="section-heading">What I Do?</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard
            key={service?._id}
            name={service?.name}
            image={service?.image}
            description={service?.description}
            alt={service?.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
