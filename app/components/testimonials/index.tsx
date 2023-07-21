import { getTestimonials } from "@/sanity/sanity-utils";
import TestimonialCard from "./testimonialCard";

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="mt-32 mb-16 sm:mt-44 md:mb-32">
      <h2 className="section-heading">Testimonials</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials?.length
          ? testimonials?.map((testimonial) => (
              <TestimonialCard
                key={testimonial?._id}
                testimonial={testimonial}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default Testimonials;
