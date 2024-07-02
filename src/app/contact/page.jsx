import React from "react";
import Link from "next/link";
import SocialMediaLink from "@/components/SocialMediaLink";

const ContactPage = () => {
  return (
    <section className="h-[calc(100vh-290px)] px-6 py-20 flex flex-row justify-center  flex-wrap md:grid md:grid-cols-2 items-center align-middle">
      <div className="flex flex-row flex-wrap gap-4">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          ¿Creamos algo juntos?<span className="text-primary">.</span>
        </h2>
        <p>
          ¿Quieres asociarte o trabajar conmigo? Envíame un mensaje a mi correo
          electrónico o llámame, y te responderé dentro de las próximas 24
          horas.
        </p>
        <div className="flex gap-6">
          <SocialMediaLink
            link="mailto:vleonardojuanpablo@icloud.com"
            src="/mail.svg"
            alt="Mail Logo"
            size="size-8"
          />
          <SocialMediaLink
            link="tel:+5493816134310"
            src="/phone.svg"
            alt="Phone Logo"
            size="size-8"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/picture.webp"
          alt="Imagen de Leonardo Valdez"
          className="mt-14 lg:mt-0 size-60 lg:size-80 rounded-full grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </div>
    </section>
  );
};

export default ContactPage;
