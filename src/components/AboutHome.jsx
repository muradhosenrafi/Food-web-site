import React from "react";
import { aboutfeature } from "../assets/dummydata";

const AboutHome = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0a0a] via-[#2a1e1e] to-[#0f0a0a] py-10 text-white sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-20 top-1/4 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl mix-blend-soft-light" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl mix-blend-soft-light" />
      </div>

      <div className="container relative mx-auto flex items-center px-4 sm:px-5 lg:px-8">
        <div className="w-full space-y-8 sm:space-y-12">
          <div className="space-y-4 px-4 sm:space-y-8 sm:px-0">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              <span className="font-cursive bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl">
                Epicurean Elegance
              </span>

              <br />

              <span className="mt-2 inline-block text-2xl font-light opacity-90 sm:mt-4 sm:text-3xl md:text-4xl">
                Where Flavors Dance &amp; Memories Bloom
              </span>
            </h2>

            <p className="max-w-3xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/20 to-transparent py-3 pl-4 text-base italic leading-relaxed text-white/90 sm:pl-6 sm:text-lg md:text-xl">
              “In our kitchen, passion meets precision. We craft not just meals,
              but culinary journeys that linger on the palate and in the heart.”
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
 {aboutfeature.map((item, i) =>(
   <div key={i} className="flex flex-col items-center justify-center gap-3 sm:gap-4 transition-transform duration-300 p-4 sm:p-5 hover:translate-x-2 ">
      <div className={` p`}>

      </div>
   </div>
 ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;