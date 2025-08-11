'use client';
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

type ShopData = {
  shopName: string;
  websiteUrl: string;
  email: string;
  phoneNumber: string;
};

type ShopTermsSectionProps = {
  shopName: string;
};

const ShopTermsSection = ({ shopName }: ShopTermsSectionProps) => {
  const [shopData, setShopData] = useState<ShopData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    console.log('shopName:', shopName);
    if (!shopName) return;

    const fetchShopData = async () => {
      setError(null);
      setLoading(true);
      try {
        const res = await fetch(`https://api.skorpion.in/fetchShopDetails?shopName=${shopName}`);
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`API returned status ${res.status}: ${text}`);
        }
        const data = await res.json();

        if (data?.shopName) {
          setShopData({
            shopName: data.shopName,
            websiteUrl: `https://www.${data.shopName}.com`,
            email: data.mail,
            phoneNumber: data.contactNumber,
          });
        } else {
          setError("Invalid API response: Missing shopName");
          setShopData(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setShopData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchShopData();
  }, [shopName]);

  if (loading) return <p>Loading shop data...</p>;
  //if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!shopData) return <p>No Shop Data available</p>;
  
  const { shopName: name, phoneNumber: phone } = shopData;

  return (
    <section
      data-section
      id="next-section"
      className="bg-gray-100 flex justify-center items-start pt-12 pb-16 lg:py-20 px-8 lg:px-24 xl:px-40"
    >
      <div className="max-w-7xl text-black text-left md:text-justify space-y-4 text-[15px] md:text-[18px] leading-relaxed">
        <ScrollReveal>
        <h1 className="font-semibold text-3xl md:text-4xl mb-4 md:mb-6">Terms and Conditions</h1>
        </ScrollReveal>

        <ScrollReveal>
          <p>{name} Terms of Use are a set of regulations that govern the utilization of the {name} platform, which is primarily 
            accessible through a mobile app. When users engage with the platform, they implicitly commit to abiding by these 
            rules and any associated policies. If a user disagrees with these terms, they have the prerogative to uninstall the app.</p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Platform Ownership:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The {name} platform is owned and operated by respective owner of the shop, the company is responsible for its 
            management and functionality of the application.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Delivery Services:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            One of {name} prominent features is its extensive delivery service, which covers a broad geographic area. 
            This service is specifically designed to cater to the city of Chennai, India. {name} collaborates with third-party 
            delivery partners to ensure swift and reliable order deliveries, ensuring that users receive their orders promptly.
          </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Role of PDPs (Pick-up and Delivery Partners):</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          It's essential to understand that Pick-up and Delivery Partners, commonly referred to as PDPs, are not considered 
          employees of the {name}. Instead, they operate as independent contractors, granting them the autonomy to set their own work 
          schedules and arrangements. This relationship between PDPs and {name} is characterized as a collaboration rather than a 
          traditional employer-employee dynamic.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Service Fees:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          In consideration of the convenience provided by PDPs for executing deliveries and tasks, users may be subject to service fees. 
          These fees are typically calculated based on several factors, including the distance of the delivery, the time taken, 
          demand fluctuations for delivery services or tasks, and real-time assessments of traffic and weather conditions. Additionally, 
          these fees may fluctuate in response to seasonal peaks or other parameters determined over time.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Amendments to Terms of Use and Policies:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          {name} Terms of Use and related policies are subject to occasional modifications and updates. {name} reserves the right to 
          make changes to these Terms of Use and other policies at any time. These modifications are communicated by posting the 
          updated documents directly on the {name} platform. Additionally, users are notified of these changes to ensure transparency 
          and awareness.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">User Responsibility for Staying Informed:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Users are responsible for staying informed about any changes to the {name} Terms of Use and policies. This involves 
          regularly reviewing the updated documents and taking note of any alterations made on the platform. Keeping up-to-date 
          with these changes is essential as it ensures that users are aware of the most recent guidelines governing their use 
          of the platform.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Acceptance of Amended Terms:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          By continuing to use {name} services after any changes to the Terms of Use or other policies have been posted, users 
          indicate their acceptance of these amended terms. This means that users are bound by the updated terms and agree to 
          abide by them as long as they continue to use the platform.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">User Privileges:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          As long as users comply with {name} Terms of Use, they are granted a personal, non-exclusive, non-transferable, and 
          limited privilege. This privilege allows them to access, enter, and use {name} platform according to the established guidelines.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Comprehensive Acceptance:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          By accepting {name} Terms of Use, users also acknowledge their agreement to be bound by the various terms, conditions, 
          and policies outlined on the platform. This includes, but is not limited to, policies such as the Cancellation & Refund 
          Policy, Privacy Policy which may be posted on the platform from time to time.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Use of Platform and Services</h3></ScrollReveal>
        <ScrollReveal>
          <h3 className="font-semibold text-2xl">
            The utilization of the {name} platform involves several important considerations:
          </h3>
        </ScrollReveal>
        <ScrollReveal><h3 className="font-semibold text-2xl">Commercial/Contractual Terms:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          All commercial and contractual terms are established exclusively between Buyers and Merchants concerning the products and 
          services offered. These terms encompass a wide range of aspects, including prices, applicable taxes, delivery costs, 
          payment terms and delivery details. {name} as the platform operator, takes responsible for the creation or acceptance of 
          these terms.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Contract with PDPs:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          When a PDP (Pick-up and Delivery Partner) accepts an Order, a distinct contract for services is formed between the PDP and 
          the Merchants or Buyers. {name} does not assume responsibility for the services provided by PDPs through the platform. 
          However, {name} may offer support services to PDPs related to order fulfilment, payment collection, and customer support under 
          separate agreements.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Product/Service Quality:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          {name} neither represents nor warranties any specific details (e.g., quality, value, marketability) of products or services 
          available on the platform. It does not endorse or support the sale or purchase of any products or services. Users should 
          exercise judgment and due diligence when engaging with offers on the platform.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">PDP Services:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          {name} makes no representation or warranty concerning the services offered by PDPs through the platform. This includes 
          services related to pick-up, delivery, and task completion for Merchants or Buyers.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Platform for Communication:</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          {name} role is limited to providing a platform for communication. For Delivery Services, {name} connects Merchants/Buyers 
          with PDPs but does not provide pick-up and delivery services or Task completion services directly. Any complaints related 
          to PDP services are communicated to the PDP for resolution with assistance from {name}.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">App Guidelines for Secure and Respectful Online Experience</h3></ScrollReveal>
        <ScrollReveal>
        <p>
          Your interaction with the {name} mobile applications for Android, is subject to specific binding principles. When using the 
          platform, you commit to follow these principles:
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Refrain from hosting, displaying, uploading, downloading, altering, publishing, transmitting, refreshing, or sharing information 
          that rightfully belongs to others without proper authorization.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Forbidden content includes material that is exceedingly harmful, harassing, blasphemous, defamatory, indecent, pornographic, 
          paedophilic, libelous, slanderous, encourages criminal conduct, invades privacy, propagates hate, or exhibits racial or ethnic 
          bias.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content that is conspicuously offensive, sexually explicit, endorses obscenity, paedophilia, racism, bigotry, hatred, or any 
          form of harm towards individuals or groups is strictly prohibited.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Activities such as sending unsolicited mass emails, "chain letters," or spam messages are not permitted.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content that encourages illegal activities, abusive behaviour, threats, obscenity, defamation, or libel is prohibited.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Supplying unauthorized copies of copyrighted works or attempting to bypass copyright protection is strictly forbidden.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content containing restricted or password-protected pages or concealed content is not allowed.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Attempting unauthorized access to the platform or other users' profiles, blogs, communities, or personal data is strictly 
          prohibited.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Engaging in commercial activities, sales, contests, sweepstakes, advertising, or pyramid schemes without prior written 
          consent from {name} is not allowed.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content that harms minors in any way is strictly prohibited.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content that breaches prevailing laws or regulations is not allowed.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Pretending to be another person is strictly forbidden.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content containing harmful software, viruses, or other detrimental computer code or programs is not allowed.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Threats to the unity, integrity, security, or sovereignty of India, friendly foreign relations, public order, or incitement 
          of criminal offenses are prohibited.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p>
          Content that imposes liability on the {name} or causes us to lose services from our internet service provider or other 
          suppliers is not allowed.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Mechanisms and Billing</h3></ScrollReveal>
        <ScrollReveal><h3 className="font-semibold text-2xl">Payment Mechanisms for Customers:</h3></ScrollReveal>
        <ScrollReveal>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Electronic Payment Mechanism: Customers can make electronic payments for their orders using various online payment methods.
          </li>
          <li>
            Redemption of Vouchers and Discount Coupons: Customers may redeem vouchers and/or discount coupons approved by the {name} as 
            a means of payment for their orders.
          </li>
        </ol>
        </ScrollReveal>


        <ScrollReveal>
        <h1 className="font-semibold text-3xl md:text-4xl mt-8 md:mt-10 mb-4 md:mb-6">Privacy Policy</h1>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Customer Data Usage:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            {name} agrees not to utilize Customer Data to enrich its own lists or those of any third party. It's crucial to understand 
            that reselling, brokering, or disclosing any part of Customer Data to third parties, for any purpose, is strictly prohibited. 
            {name} further undertakes not to employ Customer Data for sending unsolicited marketing messages, announcements, or feedback 
            requests. Copying or reproducing Customer Data is only allowed when fulfilling specific Customer Orders.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We value your privacy and want you to know that we collect your contact and payment information solely to process your 
            orders and provide customer support. Your personal information may be shared with trusted service providers for these 
            purposes and may be disclosed when required by law or in business transfers. We use cookies to enhance your browsing 
            experience, but you can manage your preferences. We do not control third-party websites linked on our site. You can 
            review and update your information, opt out of marketing communications, and if you have questions, please contact us. 
            Your trust in {name} is essential, and we are committed to protecting your data.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We may use cookies and similar technologies to enhance your platform experience, but these are used primarily for improving 
            the functionality and reliability of the platform.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Confidentiality:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            {name} takes the confidentiality of both the customer and its information seriously and only shares it when legally obligated 
            to do so by government authorities while providing its services.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            {name} will not disclose any confidential information such as business strategies, pricing structure, financial information, 
            Customer Data, and Order-related data. Such information must remain confidential. 
          </p>
        </ScrollReveal>

         <ScrollReveal>
          <h3 className="font-semibold text-2xl">Contact Us:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            If you have any queries or suggestions about our Privacy Policy, contact us at {phone}.
          </p>
        </ScrollReveal>

        <ScrollReveal>
        <h1 className="font-semibold text-3xl md:text-4xl mt-8 md:mt-10 mb-4 md:mb-6">Cancellation and Refund Policy</h1>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            Once an order is placed, customers are generally not entitled to cancel it. {name} may not refund for orders that need 
            to be cancelled for reasons not attributable. These reasons include:
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Incorrect or out-of-range delivery address provided by the buyer.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Failure to establish contact with the buyer via phone or email at the time of delivery.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Inability to deliver the order due to insufficient information, directions, or authorization from the buyer.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Refund policies for various scenarios where a customers may request refunds, which includes:
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Quality or Missing Items:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            If you receive an order with issues related to quality or missing items, you can reach out to the {name}. They may offer a 
            refund or redelivery, depending on the circumstances.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Payment Issues:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            In cases where there are payment issues, such as double payment or overcharges, {name} will usually refunds the excess amount.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Refund Disputes:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            In rare cases where there's a dispute over a refund, it may investigate and resolve the matter by considering order 
            history and communication between the customer and the restaurant.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Document Issues:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
             In cases where you receive a damaged or incomplete order, it's helpful to take clear photos as evidence. This can be 
             useful for a refund.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Refund Processing Time:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Refunds may take a few business days (within 21days) to reflect in your account, depending on your payment method and bank.
          </p>
        </ScrollReveal>

        <ScrollReveal>
        <h1 className="font-semibold text-3xl md:text-4xl mt-8 md:mt-10 mb-4 md:mb-6">Shipping Policy</h1>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            {name} primarily offer food delivery services, and their shipping policies mainly revolve around delivering food 
            orders to customers.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The PND Services provided by Third party which enables to connect with merchants to complete tasks requested by users. 
            These tasks include picking up and delivering orders (referred to as "User Items") from merchant locations, known as 
            "Pick-Up Locations," and delivering them to other locations, referred to as "Drop Locations." Each of these tasks is called 
            a "Delivery Task."
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            By using our platform, you agree to comply with the terms and policies mentioned herein.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Ordering Process</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Customers can place orders through our mobile app.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            All orders are subject to confirmation and availability.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Delivery Area and Charges</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We operate within specific delivery zones, which may vary by location.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Delivery charges, if applicable, will be clearly displayed during the order process.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Some restaurants may offer free delivery based on minimum order requirements.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Delivery Times</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Estimated delivery times are provided during the ordering process.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            These times are approximate and may vary based on factors such as order volume, traffic conditions, and weather.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p> 
            We make every effort to deliver orders promptly.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Delivery Partners</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Our dedicated delivery partners ensure your food reaches you in a timely and safe manner.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We maintain high standards for hygiene and professionalism among our delivery partners.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Order Confirmation</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Customers will receive an order confirmation notification via email or SMS.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Please review your order confirmation for accuracy and contact us immediately if there are any discrepancies.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Order Tracking</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            You can track your order in real-time through our app.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            This feature allows you to monitor the progress of your delivery and receive updates.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Special Instructions</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Customers can provide special delivery instructions during the order process.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We will make every effort to accommodate these requests but cannot guarantee fulfilment in all cases.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Refunds and Returns</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Refunds and returns are subject to our Refund Policy. Please refer to that policy for details.
          </p>
        </ScrollReveal>
        
        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Customer Support</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Our customer support team is available to assist with any delivery-related inquiries or issues.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            You can reach us through the contact information provided on our platform.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Feedback</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We value customer feedback to enhance our delivery services. Please share your thoughts with us.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Changes to Delivery Policy</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We reserve the right to update and modify our Delivery Policy as needed.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Any changes will be posted on our website, and customers will be notified accordingly.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Conclusion:</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Thank you for choosing {name}. We look forward to serving you and providing a delightful food delivery experience. If 
            you have any questions or concerns about our delivery policy, please do not hesitate to contact us at {phone}.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ShopTermsSection;
