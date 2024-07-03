import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section id="projects" className="pt-28">
      <h2 className="font-bold text-4xl md:text-6xl">
        Proyectos<span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col flex-wrap justify-center items-center md:grid md:grid-cols-3">
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
        <Cards
          src="/project-picture.webp"
          alt="Imagen de Proyectos de Leonardo Valdez"
          name="Portafolio Web"
        />
      </div>
    </section>
  );
};

export default Projects;
