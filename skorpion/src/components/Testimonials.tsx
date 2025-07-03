import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

type Testimonial = {
  name: string;
  company: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Triplicane Briyani",
    company: "Restaurant",
    quote: "“Skorpion’s app made online ordering seamless and boosted our delivery sales beyond expectations!”",
    image: "/images/triplicane-briyani.jpg",
  },
  {
    name: "Hotel Kalyana Bhavan",
    company: "Restaurant",
    quote: "“With Skorpion, we gained more control over pricing and branding — a game changer for our business.”",
    image: "/images/kalyana-bhavan.jpg",
  },
  {
    name: "Kareem’s Briyani",
    company: "Restaurant",
    quote: "“Reliable, easy-to-use, and built for restaurants like ours. Skorpion delivers results every time!”",
    image: "/images/kareems.png",
  },
  {
    name: "1 PM Lunch Box",
    company: "Restaurant",
    quote: "“Skorpion’s platform is a perfect fit for daily lunch services. Our customers love the seamless experience!”",
    image: "/images/1-pm.png",
  },
  {
    name: "Chef’s Paradise",
    company: "Restaurant",
    quote: "“Thanks to Skorpion, we’ve built a strong online presence and streamlined our operations with ease.”",
    image: "/images/chef-paradise.png",
  },
  {
    name: "Chef’s Company",
    company: "Restaurant",
    quote: "“A true partner for growth — Skorpion’s technology and support have taken our business to the next level.”",
    image: "/images/chef-company.jpg",
  },
  {
    name: "Subiksham",
    company: " E‑Commerce",
    quote: "“With Skorpion, we launched our online shop and grew our customer base in no time. Reliable, seamless, and built for entrepreneurs!”",
    image: "/images/subiksham.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setDirection("right");
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section data-section data-bg-section className="bg-gray-100 pt-28 pb-32 text-center px-4">
      <ScrollReveal>
      <div className="text-right mr-80 text-gray-500 text-base mb-14 relative">
        Customer reviews are a valuable source<br />
        of information for both business and customers.
        <div className="absolute left-[104%] top-1/4 w-[32%] border-t border-gray-500 " />
      </div>
      </ScrollReveal>

      <ScrollReveal>
      <h2 className="text-3xl md:text-[68px] font-sans text-black font-light mt-20 mb-12">
        <span className="mb-20"><span className="font-semibold ">Customer</span> Voices:<br /></span>
      </h2>
      </ScrollReveal>
      <ScrollReveal>
      <h2 className="text-3xl md:text-[68px] font-sans text-black font-light mb-20">
        <span className="font-semibold ">Hear What</span> They Say!
      </h2>
      </ScrollReveal>

      <ScrollReveal>
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {testimonials.map((t, index) => {
            const isEvenPosition = index % 2 === 1;
            const verticalOffset = isEvenPosition ? "translate-y-10" : "-translate-y-0";
            const isActive = index === currentIndex;

            return (
            <div
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 transform ${verticalOffset}`}
            >
               <div 
                   className={`p-1 rounded-full transition-all duration-300 ${
                   isActive ? "border-4 border-[black]" : "border-4 border-transparent hover:border-white"}`}
                >
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-24 h-24 rounded-full object-cover object-top border-2 border-gray-100"
                    />
                </div>
            </div>
            );
        })}
      </div>
      </ScrollReveal>
      
      <ScrollReveal>
      <div className="flex items-center justify-center gap-2 max-w-5xl mx-auto px-14">
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-medium transition-transform duration-500
              ${
                currentIndex === 0
                  ? "bg-gray-200 cursor-not-allowed opacity-50"
                  : "bg-gray-300 hover:scale-[115%]"
              }`}
            >
            <span className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center">
              <svg
                className='mr-1 transform -scale-x-100'
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="1" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
        </button>

        <div className="relative w-full max-w-2xl h-[220px] mx-auto overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (dir: "left" | "right") => ({
                  x: dir === "right" ? 70 : -70,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: "left" | "right") => ({
                  x: dir === "right" ? -10 : 10,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.3 },
                opacity: { duration: 0.2 },
              }}
              className="absolute top-0 left-0 w-full"
            >
              <div className="text-center space-y-3 px-4">
                <h4 className="text-[24px] font-sans font-semibold mt-14 text-black">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[13px] text-gray-500 font-semibold tracking-widest uppercase">
                  {testimonials[currentIndex].company}
                </p>
                <p className="text-gray-600 text-[20px] pt-4 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            className={`w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-medium transition-transform duration-500
              ${
                currentIndex === testimonials.length - 1
                  ? "bg-gray-200 cursor-not-allowed opacity-50"
                  : "bg-gray-300 hover:scale-[115%]"
              }`}
            >
            <span className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center">
              <svg
                className='ml-1'
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="1" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
        </button>
     </div>
     </ScrollReveal>
    </section>
  );
};

export default Testimonials;
