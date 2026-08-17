import { Toaster } from "react-hot-toast";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactCompunent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 animate-gradient-x py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-[poppins] relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
      {/* ADDITONAL DECORATIVE ELEMTN */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full animate-float " />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-green-500/20 rounded-full animate-float-delayed  " />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-300">
            Conntect With Us
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CONTACT INFO SECTION */}
          <div className="space-y-6">
            <div
              className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300
            hover:scale-[1.02] animate-card-float border-1-4 border-amber-500 hover:border-amber-400 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-xl">
                  <FiMapPin className="text-amber-400 text-2xl animate-pulse" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold ">
                  Our Headquater
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-amber-100 font-light text-lg">
                  নোয়াখালী-জেলা
                </p>
              </div>
            </div>

            <div
              className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300
            hover:scale-[1.02] animate-card-float border-1-4 border-amber-500 hover:border-amber-400 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-700/30 rounded-xl">
                  <FiPhone className="text-green-400 text-2xl animate-ping" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold ">
                  Contact Number
                </h3>
              </div>
              <div className="pl-12 relative space-y-2 z-10">
                <p className="text-amber-100 font-light flex items-center">
                  <FiGlobe className="text-green-400 text-xl mr-2" />
                  01810456068
                </p>
              </div>
            </div>

            <div
              className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300
            hover:scale-[1.02] animate-card-float border-1-4 border-orange-500 hover:border-orange-400 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-orange-500/30 to-orange-700/30 rounded-xl">
                  <FiMail className="text-orange-400 text-2xl animate-pulse" />
                </div>
                <h3 className="ml-4 text-orange-100 text-xl font-semibold ">
                  Email Address
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-orange-100 font-light text-lg">
                  muradhosenrafi@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FROM */}
          
        </div>
      </div>
    </div>
  );
};

export default ContactCompunent;
