import { Testimonial } from "@/types";
import Image from "next/image";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="relative px-4 py-6 rounded-lg sm:px-6 bg-gray-50 dark:bg-[#212121]">
      <div className="flex items-center gap-6 mb-6">
        <Image
          src={testimonial?.image}
          width={64}
          height={64}
          alt={testimonial?.alt}
          className="mb-2 rounded-full"
        />

        <div className="flex flex-col">
          <p className="italic font-medium text-gray-700 dark:text-white">
            {testimonial?.name}
          </p>

          <p className="text-sm italic font-light dark:text-gray-200">
            {testimonial?.role}
          </p>
        </div>
      </div>

      <p
        title={testimonial?.content}
        className="italic text-justify md:line-clamp-4"
      >
        {testimonial?.content}
      </p>

      <Image
        src="/images/quotes.png"
        width={40}
        height={40}
        alt="gradient colored left quotes"
        className="absolute -top-4 -left-2"
      />
    </div>
  );
};

export default TestimonialCard;
