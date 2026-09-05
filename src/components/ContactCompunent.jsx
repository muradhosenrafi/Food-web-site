import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { contactFormFields } from "./../assets/dummydata";

const ContactCompunent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dish: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited :", formData);
    toast.success("Your quary has been submitted successfully!", {
      style: {
        border: "2px solid #f59e0b",
        padding: "16px",
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: { primary: "#f59e0b", secondary: "#fff" },
    });
    setFormData({ name: "", phone: "", email: "", address: "", dish: "", query: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 animate-gradient-x py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-[poppins] relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 4000 }} />

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
                <h3 className="ml-4 text-amber-100 text-xl font-semibold ">Our Headquater</h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-amber-100 font-light text-lg">নোয়াখালী-জেলা</p>
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
                <h3 className="ml-4 text-amber-100 text-xl font-semibold ">Contact Number</h3>
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
                <h3 className="ml-4 text-orange-100 text-xl font-semibold ">Email Address</h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-orange-100 font-light text-lg">muradhosenrafi@gmail.com</p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-slide-in-right border-2
              border-amber-500/30 hover:border-amber-500/50 transform-border duration-300"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500/30 rounded-full animate-ping-slow" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {contactFormFields.map(({ label, name, type, placeholder, pattern, Icon }) => (
                <div key={name}>
                  <label className="block text-amber-100 text-sm font-medium mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    {Icon && (
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-lg" />
                    )}

                    {type === "textarea" ? (
                      <textarea
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        rows={4}
                        className={`w-full ${
                          Icon ? "pl-10" : "pl-4"
                        } pr-4 py-3 bg-white/10 border border-amber-500/30 rounded-lg text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-400 transition-colors`}
                      />
                    ) : (
                      <input
                        type={type || "text"}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        pattern={pattern}
                        className={`w-full ${
                          Icon ? "pl-10" : "pl-4"
                        } pr-4 py-3 bg-white/10 border border-amber-500/30 rounded-lg text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-400 transition-colors`}
                      />
                    )}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg"
              >
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCompunent;