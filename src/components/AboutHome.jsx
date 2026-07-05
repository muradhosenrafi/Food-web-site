import React from "react";
import { aboutfeature } from "../assets/dummydata";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import AboutImage from "../assets/AboutImage.png";
import FloatingParticale from "./FloatingParticale";

const AboutHome = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0a0a] via-[#2a1e1e] to-[#0f0a0a] py-10 text-white sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-20 top-1/4 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl mix-blend-soft-light" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl mix-blend-soft-light" />
      </div>

      <div className="container relative mx-auto flex flex-col items-center gap-10 px-4 sm:px-5 lg:flex-row lg:gap-16 lg:px-8">
      <div className="order-1 w-full space-y-8 sm:space-y-12 lg:order-2 lg:w-7/12">
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
            {aboutfeature.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 sm:gap-4 transition-transform duration-300 p-4 sm:p-5 hover:translate-x-2 "
              >
                <div
                  className={` p-3 sm:p-4 rounded-full bg-gradient-to-br ${item.color} 
                transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold font-cursive">
                    {item.title}
                  </h3>
                  <p className="opacity-80 text-sm sm:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-6 sm:mt-8 px-4 sm:px-0">
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-bold hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-amber-500/20 group relative overflow-hidden "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <FaInfoCircle className="text-lg sm:text-xl animate-pulse" />
              <span className="font-cursive text-lg sm:text-xl">
                Unveil Our Legacy
              </span>
            </Link>
          </div>
        </div>
        <div className="relative order-2 mt-10 w-full max-w-md lg:order-1 lg:mt-0 lg:w-5/12 lg:max-w-[430px]">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-amber-500/40 bg-[#1a1010] shadow-2xl shadow-black/50">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-amber-400/15 via-transparent to-amber-600/10 mix-blend-soft-light" />

            <img
              src={AboutImage}
              alt="Restaurant chef"
              className="h-[430px] w-full object-cover object-center transition-transform duration-500 hover:scale-105 sm:h-[520px] lg:h-[560px]"
            />

            <div className="absolute -bottom-10 left-1/2 h-16 w-4/5 -translate-x-1/2 bg-amber-900/30 blur-3xl" />
          </div>

          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-amber-500/10 blur-xl" />
        </div>
      </div>
      <FloatingParticale />
    </div>
  );
};

export default AboutHome;
