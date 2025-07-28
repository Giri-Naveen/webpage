import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const PaymentPolicy = () => {
  return (
    <section data-section id='next-section' className="bg-gray-100 flex justify-center items-start pt-12 pb-16 lg:py-20 px-8 lg:px-24 xl:px-40">
      <div className="max-w-8xl text-black text-left md:text-justify space-y-3 md:space-y-4 text-[15px] md:text-[18px] leading-relaxed">
        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Details</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          At Skorpion Digi Solutions, we are committed to providing a seamless and secure payment experience for our valued merchants. 
          Here's an elaboration on how we manage and process payments for our merchant partners, with a strong emphasis on the security 
          of your financial transactions.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Processing</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          When users make payments for orders placed with our merchant partners through our platform, these funds are 
          transferred to Skorpion Digi Solutions, our trusted payment processing entity.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Management</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Skorpion Digi Solutions takes full responsibility for managing and overseeing all financial transactions related to our 
          merchant partners. This includes handling payments made by users and efficiently disbursing funds to our respected merchants 
          promptly.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Reliable Financial Handling</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Our payment system is meticulously designed to efficiently manage a high volume of financial transactions while maintaining 
          the accuracy and reliability of each payment. This ensures that your payments are processed without delays or errors.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Disputes</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          In the rare event of any discrepancies or payment-related disputes, our dedicated customer support team is readily available 
          to assist both our platform users and merchant partners. We are committed to resolving any payment concerns promptly and fairly.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Transparent Transactions</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          We maintain full transparency in all financial transactions. Merchant partners can access their payment history and receipts 
          directly within our platform for their records and peace of mind.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Compliance with Regulations</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Skorpion Digi Solutions adheres to all relevant financial regulations and industry standards, guaranteeing a payment 
          system that is not only convenient but also fully compliant with legal requirements.
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <p>
          By entrusting your payments to Skorpion Digi Solutions, we aim to give you the confidence that your financial transactions 
          on our platform are handled with the utmost care and security. Your satisfaction and trust in our payment services are of 
          paramount importance to us. If you have any questions or require further assistance, please do not hesitate to contact us 
          at <a href="mailto:info@skorpion.in" className='text-blue-600'> info@skorpion.in</a>
        </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PaymentPolicy;