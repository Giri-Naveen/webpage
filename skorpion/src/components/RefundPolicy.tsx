import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const RefundPolicy = () => {
  return (
    <section data-section id='next-section' className="bg-gray-100 flex justify-center items-start pt-12 pb-12 lg:py-20 px-8 md:px-40">
      <div className="max-w-8xl text-black text-left md:text-justify space-y-4 text-[18px] leading-relaxed">
        <ScrollReveal><h3 className="font-semibold text-2xl">General Terms</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          At Skorpion Digi Solutions, we are committed to ensuring customer satisfaction. This policy outlines conditions 
          for refunds and cancellations.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Cancellation Policy</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Customers can cancel services within 7 days unless specified otherwise. Certain services, such as custom software 
          development, are non-cancellable once started.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Refund Policy</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Refunds are issued for undelivered services or technical issues caused by us. Non-refundable items include partially 
          completed services or custom solutions. Refunds are processed within 7–10 business days.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Exceptions</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Refunds and cancellations are not applicable to trial services or force majeure events.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Contact Information</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          For assistance, reach us at:
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:info@skorpion.in">info@skorpion.in</a>
          <br />
          <strong>Phone: </strong>
          <a href="tel:+919600052850"> +91-96000-52850 </a>
        </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RefundPolicy;