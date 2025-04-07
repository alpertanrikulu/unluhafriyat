import React from "react";

const Map = () => (
  <iframe
    className="w-full lg:w-[1000px] max-xs:h-[60vh]"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d983.2073413230324!2d29.374228094202934!3d40.67804375748761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cae23f31d32241%3A0x9255dc0c8d7d1c24!2zQmV0dWxhIMOHacOnZWvDp2lsaWs!5e1!3m2!1str!2str!4v1743954239618!5m2!1str!2str"
    height={500}
    style={{ border: 1 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default Map;
