import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const PrivacyPolicy = () => {
  return (
    <section data-section id='next-section' className="bg-gray-100 flex justify-center items-start pt-12 pb-16 lg:py-20 px-8 lg:px-24 xl:px-40">
      <div className="max-w-8xl text-black text-left md:text-justify space-y-3 md:space-y-4 text-[15px] md:text-[18px] leading-relaxed">

        <ScrollReveal><h3 className="font-semibold text-2xl">Customer Data Usage</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Skorpion Digi Solutions refers as “We”. We agrees not to utilize Customer Data to enrich its own lists or 
          those of any third party. It's crucial to understand that reselling, brokering, or disclosing any part of 
          Customer Data to third parties, for any purpose, is strictly prohibited. We further undertakes not to 
          employ Customer Data for sending unsolicited marketing messages, announcements, or feedback requests. 
          Copying or reproducing Customer Data is only allowed when fulfilling specific Customer Orders.
        </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We value your privacy and want you to know that we collect your contact and payment information 
            solely to process your orders and provide customer support. Your personal information may be shared 
            with trusted service providers for these purposes and may be disclosed when required by law or in 
            business transfers. We use cookies to enhance your browsing experience, but you can manage your 
            preferences. We do not control third-party websites linked on our site. You can review and update 
            your information, opt out of marketing communications, and if you have questions, please contact us. 
            Your trust in us is essential, and we are committed to protecting your data.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We may use cookies and similar technologies to enhance your platform experience, but these are used 
            primarily for improving the functionality and reliability of the platform.
          </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Confidentiality</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          We takes the confidentiality of both the customer and its information seriously and only shares it when 
          legally obligated to do so by government authorities while providing its services.
        </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
           We will not disclose any confidential information such as business strategies, pricing structure, 
           financial information, and Customer Data. Such information must remain confidential. 
          </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Contact Us</h3></ScrollReveal>
        <ScrollReveal>
            <p>
            If you have any queries or suggestions about our Privacy Policy, contact us at 
            <a href="mailto:info@skorpion.in" className='text-blue-600'> info@skorpion.in</a>
            </p>
        </ScrollReveal>
        <ScrollReveal>
            <p>
            Allows your customers to easily order for food from the customers front end panel or via mobile app.
            </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PrivacyPolicy;