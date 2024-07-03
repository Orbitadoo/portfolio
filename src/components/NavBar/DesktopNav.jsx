import React from "react";
import Link from "next/link";
import Image from "next/image";
export const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row lg:justify-between items-center">
      <Link href={"/"} className="text-lg font-bold">
        Leonardo<span className="text-primary">.</span>
      </Link>
      <div className="flex gap-8">
        <Link
          href="/"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Inicio
        </Link>
        <Link
          href="/#projects"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Proyectos
        </Link>
        <Link
          href="/#about"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Acerca de
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <Image
            src="https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg"
            alt="Imagen de Contacto"
            width={20}
            height={20}
            className="bg-secondary p-2 rounded-full"
          />
        </Link>
      </div>
    </ul>
  );
};
