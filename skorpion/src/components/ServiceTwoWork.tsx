import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const ServiceTwoWork = () => {
  return (
    <section
      data-section
      id="next-section"
      data-bg-section
      className="flex flex-col xl:flex-row w-full h-full px-8 md:px-8 lg:px-24 pt-16 pb-8 md:pt-20 md:pb-14 lg:pt-24 lg:pb-12 xl:py-28 xl:gap-10 bg-gray-100"
    >
      <div className="w-full xl:w-1/2 h-auto flex flex-col justify-center xl:pl-14">
        <ScrollReveal>
          <h2 className="text-[38px] md:text-[52px] lg:text-[60px] xl:text-[68px] text-black font-sans font-light leading-tight">
            <span className="block font-semibold">Innaiku.com</span>
            <span className="block">
              <span className="text-black">Workflow</span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-3 md:mt-6 xl:mt-10">
         {[
            {
              title: "Brand Setup",
              desc: `We collect your product details, brand elements, categories, and preferences to create a fully customized online store under your name.`,
            },
            {
              title: "App Development",
              desc: `We build a branded mobile app with product listing, cart, order tracking, secure payment integration, and logistic support — tailored to your business.`,
            },
            {
              title: "Go Live",
              desc: `Your app is launched on the Play Store with your branding. Customers can now place orders directly — no marketplace needed.`,
            },
            {
              title: "Order & Delivery Management",
              desc: `Orders appear in your dashboard instantly. You manage dispatch while delivery is handled by integrated logistic partners.`,
            },
            {
              title: "COD & Prepaid Payments",
              isList: true,
              items: [
                "COD payments are collected by your delivery partner and handed over to you directly.",
                "Prepaid payments are settled every Saturday, transferred to your bank account securely and on time.",
              ],
            },
            {
              title: "Marketing & Digital Support",
              desc: `We help drive sales through tailored marketing campaigns, digital promotions, and branding strategies designed to grow your customer base.`,
            }
          ].map((item, index) => (
            <div key={index} className="mt-6">
              <ScrollReveal>
                <h3 className="font-semibold text-[20px] md:text-[21px] lg:text-[24px] xl:text-[22px] ">{item.title}</h3>
              </ScrollReveal>
              <ScrollReveal>
                {item.isList ? (
                  <ul className="list-disc pl-5 mt-2 text-[14px] md:text-[15px] lg:text-[18px] xl:text-[16px] text-black space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 md:mt-2 lg:mt-4 xl:mt-2 text-[14px] md:text-[15px] lg:text-[18px] xl:text-[16px] text-gray-800">
                    {item.desc}
                  </p>
                )}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full xl:w-1/2 xl:pl-12 xl:pr-16 md:pt-10 lg:pt-6">
        <ScrollReveal>
          <div className="relative w-full h-[400px] hidden md:block lg:block md:h-[500px] lg:h-[600px] xl:hidden">
            <Image
              src="/images/work2.jpg"
              alt="Mobile Image"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative w-full h-[800px] block md:hidden lg:hidden xl:block">
            <Image
              src="/images/service2.jpg"
              alt="Desktop Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceTwoWork;
