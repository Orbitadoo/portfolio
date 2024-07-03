import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-row xl:grid-cols-2 pt-28 content-center items-center"
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="">¡Hey! Soy Leonardo. 👋🏻</p>
          <h1 className=" text-5xl md:text-8xl font-extrabold overflow-hidden">
            <span className="text-primary">Front</span>end Developer
          </h1>
          <p className="pr-12">
            Soy un desarrollador FrontEnd en Argentina. Con mi experiencia y
            creatividad, haré tus ideas tangibles.
          </p>
        </div>
        <div className="mt-8 flex flex-row flex-wrap gap-4 items-center">
          <Link
            href="/contact"
            className="rounded-full text-white font-bold bg-primary py-2 px-4 hover:bg-primary-white hover:text-white transition-all ease-in-out duration-300"
          >
            Contactame
          </Link>
          <Link
            href="/resume-leonardo-valdez.pdf"
            download="resume-leonardo-valdez.pdf"
            target="_blank"
            className="rounded-full text-secondary font-bold border border-secondary py-2 px-4 hover:bg-secondary hover:text-white transition-all ease-in-out duration-300"
          >
            Descargar CV
          </Link>
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

export default Home;
