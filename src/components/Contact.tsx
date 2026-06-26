import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Private Residence',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email) return;

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "48916da5-017e-45cb-8268-8d9f3c3374d3",

          subject: "New Consultation Request - 4 FOLDS DESIGN STUDIO",

          from_name: "4 FOLDS DESIGN STUDIO Website",

          full_name: formData.name,

          client_email: formData.email,

          spatial_classification: formData.type,

          site_vision: formData.message,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);

        setFormData({
          name: "",
          email: "",
          type: "Private Residence",
          message: "",
        });
      }, 5000);
    } else {
      alert("Submission failed.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#faf9f6] w-full relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Full Cinematic Image and overlay cards */}
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-2xl border border-black/10 min-h-[650px] lg:min-h-[750px] grid grid-cols-1 lg:grid-cols-12 items-center p-6 md:p-14 lg:p-20">
          
          {/* Sunset Architectural Background */}
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=80"
            alt="Atelier Consultation Backdrop"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover absolute inset-0 z-0 opacity-15 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6]/95 via-[#faf9f6]/70 to-[#faf9f6]/20 z-10 pointer-events-none" />

          {/* Left Column: Direct Call to Collaboration */}
          <div className="lg:col-span-12 xl:col-span-5 relative z-20 text-slate-850 flex flex-col justify-center mb-12 lg:mb-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold block mb-3">
              Consultation Gate
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-zinc-900 mb-4">
              Let’s Shape Meaningful Spaces
            </h2>
            <p className="text-slate-700 text-sm md:text-base font-light leading-relaxed mb-10 max-w-md">
              Collaborate with 4 FOLDS DESIGN STUDIO to create timeless architectural experiences. Let us translate your spatial dreams into gravity, light, and material truths.
            </p>

            {/* Direct Studio Contact Cards */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-zinc-900" />
                </div>
                <div className="text-xs text-slate-800">
                  <span className="text-slate-500 block font-mono font-semibold">STUDIO LOCATION</span>
                  <span className="font-light text-slate-700 leading-normal">
                    Madhapur, Hyderabad, India
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-zinc-900" />
                </div>
                <div className="text-xs text-slate-800">
                  <span className="text-slate-500 block font-mono font-semibold">STUDIO MAIL</span>
                  <span className="font-light text-slate-700 leading-normal hover:underline cursor-pointer">
                    4foldsdesignstudio@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-zinc-900" />
                </div>
                <div className="text-xs text-slate-800">
                  <span className="text-slate-500 block font-mono font-semibold">STUDIO HOTLINE</span>
                  <span className="font-light text-slate-700 leading-normal hover:underline cursor-pointer">
                    +91 (040) 4944-4244
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Frosted Glass Consultation Form */}
          <div className="lg:col-span-12 xl:col-span-7 flex justify-end relative z-20">
            <div className="w-full max-w-[550px] rounded-[2rem] md:rounded-[2.8rem] bg-white border border-black/10 p-6 md:p-10 shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="consultation-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="text-xl font-normal text-zinc-900 mb-1.5">Consult the Atelier</h3>
                      <p className="text-slate-600 text-xs font-light">Tell us about your context, material affinity, and landscape scale.</p>
                    </div>

                    <div className="h-[1px] bg-black/10 w-full" />

                    {/* Inputs */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold pl-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sir Alistair Sterling"
                        className="w-full px-5 py-3.5 rounded-full bg-slate-50/50 text-zinc-900 border border-black/10 text-sm focus:outline-none focus:border-zinc-800 placeholder-slate-400"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold pl-1">
                        Commissions Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sterling@commission.com"
                        className="w-full px-5 py-3.5 rounded-full bg-slate-50/50 text-zinc-900 border border-black/10 text-sm focus:outline-none focus:border-zinc-800 placeholder-slate-400"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold pl-1">
                        Spatial Classification
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-full bg-slate-50/50 text-zinc-900 border border-black/10 text-sm focus:outline-none focus:border-zinc-800 cursor-pointer"
                      >
                        <option value="Private Residence" className="bg-white text-zinc-900">Private Luxury Residence</option>
                        <option value="Civic Sanctuary" className="bg-white text-zinc-900">Civic & Public Library</option>
                        <option value="Cultural Museum" className="bg-white text-zinc-900">Cultural Exhibition Gallery</option>
                        <option value="Landscape Sanctuary" className="bg-white text-zinc-900">Landscape & Hot Springs</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold pl-1">
                        Materials or Site Vision
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Private resort responding to cliffs, raw travertine claddings, and ocean salt sprays."
                        className="w-full px-5 py-4 rounded-[1.5rem] bg-slate-50/50 text-zinc-900 border border-black/10 text-xs focus:outline-none focus:border-zinc-800 placeholder-slate-400 resize-none h-24"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full mt-2 py-4 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white font-semibold text-xs md:text-sm tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>Submit Spatial Proposal</span>
                      <Send className="w-4 h-4 text-white" />
                    </motion.button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="submission-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center text-zinc-900"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-600 mb-6 animate-pulse" />
                    <h3 className="text-2xl font-normal text-zinc-900 mb-2">Proposal Received Successfully</h3>
                    <p className="text-slate-600 text-xs max-w-sm leading-relaxed mb-6">
                      An elder design strategist of 4 FOLDS DESIGN STUDIO will study your coordinates and site descriptions. We will initiate dialogue within 48 hours.
                    </p>
                    <div className="w-10 h-[1px] bg-black/10" />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
