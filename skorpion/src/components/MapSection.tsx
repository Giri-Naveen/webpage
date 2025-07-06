import React from 'react';

const MapSection = () => {
  return (
    <div  data-section className="mt-2 md:mt-2 lg:mt-4 xl:mt-0 w-full h-[600px] md:h-[620px] xl:h-screen">
      <iframe
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.413509736629!2d80.1652997223053!3d13.06089933860284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614fffad3145%3A0xc262f659b895bfab!2sDevapraskasm%20Shopping%20Center!5e0!3m2!1sen!2sin!4v1750758787686!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
