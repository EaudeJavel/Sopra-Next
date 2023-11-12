import Link from "next/link";
import ButtonLink from "./button-link";

const Hero = () => {
  return (
    <main className="hero min-h-screen bg-base-300 flex flex-wrap flex-col justify-start">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content m-auto">
        <div className="2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Tous les{" "}
            <span className="bg-gradient-TS bg-clip-text title-fill-color">
              détails
            </span>{" "}
            de vos villes à portée de{" "}
            <span className="bg-gradient-TS bg-clip-text title-fill-color">
              main
            </span>
            .
          </h1>
          <p className="mb-5">
            This project is part of a technical test carried out over 1 week for
            Sopra Banking Software, aimed at mastering the use of an API. The
            project uses technologies such as React, Nextjs, Tailwind, etc.
          </p>
          <ButtonLink link="/dashboard" content="C'est parti ->" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
