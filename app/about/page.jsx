'use client';
import { motion } from 'framer-motion';
import { Award, Calendar, Globe, MapPin, Target, Users, Zap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#523831] selection:text-white">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-24 pt-12">

        {/* 1. HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mt-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#523831]/20 bg-[#523831]/5 text-[#523831] font-mono text-xs md:text-sm mb-8"
          >
            <Globe size={14} />
            <span className="tracking-widest uppercase font-bold">Est. 2024 • Hyderabad</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#523831] tracking-tighter mb-8"
          >
            Innovating the <span className="text-transparent bg-clip-text bg-linear-to-r from-[#523831] to-[#8a6d65]">Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light"
          >
            Narga Engineering is a premier <strong>Automotive R&D Manufacturer</strong> bridging the gap between complex aerospace hardware and intelligent autonomous software.
          </motion.p>
        </section>

        {/* 2. VISION & MISSION */}
        <section className="mb-24">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Vision Card */}
            <motion.div variants={item} className="flex flex-col h-full p-10 rounded-3xl bg-[#f5f0ee] border border-[#523831]/10 hover:border-[#523831]/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity text-[#523831]">
                <Target size={200} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-xl text-[#523831] shadow-sm">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#523831]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed grow">
                To become a global leader in <strong>Software Defined Vehicle (SDV)</strong> technologies. We aim to scale our premium brand, <strong>Seslaa</strong>, to deliver next-generation safety and intelligence to vehicles worldwide.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={item} className="flex flex-col h-full p-10 rounded-3xl bg-[#f5f0ee] border border-[#523831]/10 hover:border-[#523831]/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
               <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity text-[#523831]">
                <Zap size={200} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-xl text-[#523831] shadow-sm">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#523831]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed grow">
                To accelerate automotive intelligence by integrating <strong>5G Telematics</strong>, advanced ECU architectures, and AI-driven hardware. We are committed to manufacturing excellence that meets rigorous aerospace standards.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. DETAILED INFO GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Corporate Profile */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
             <div>
              <h2 className="text-xs font-mono text-[#523831]/70 tracking-wider mb-2 uppercase font-bold">Corporate Profile</h2>
              <h3 className="text-3xl font-bold text-[#523831] mb-4">Leadership &<br/>Origins</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded by visionary <strong>Mula Venkata Narasimha Reddy</strong>, Narga Engineering has rapidly evolved from a concept to a certified manufacturer.
              </p>
             </div>

             <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6 shadow-lg shadow-gray-100">
                <div className="flex gap-4">
                   <MapPin className="text-[#523831] shrink-0" size={20} />
                   <div>
                      <div className="text-gray-900 font-bold text-sm">Headquarters</div>
                      <div className="text-gray-600 text-sm leading-relaxed">#409 Nandanavanam, Silicon Ridge,<br/>Hyderabad, India - 500030</div>
                   </div>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="flex gap-4">
                   <Calendar className="text-[#523831] shrink-0" size={20} />
                   <div>
                      <div className="text-gray-900 font-bold text-sm">Incorporated</div>
                      <div className="text-gray-600 text-sm">April 25, 2024</div>
                   </div>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="flex gap-4">
                   <Users className="text-[#523831] shrink-0" size={20} />
                   <div>
                      <div className="text-gray-900 font-bold text-sm">Legal Entity</div>
                      <div className="text-gray-600 text-sm">Private Limited Company</div>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: Certifications & Timeline */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono text-[#523831]/70 tracking-wider mb-6 uppercase font-bold">Global Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#523831]/30 transition-colors">
                   <div className="w-12 h-12 bg-[#523831]/10 text-[#523831] rounded-full flex items-center justify-center shrink-0">
                      <Award size={24} />
                   </div>
                   <div>
                      <div className="text-xl font-bold text-[#523831]">ISO 9001:2015</div>
                      <div className="text-gray-500 text-sm">Quality Management Systems</div>
                   </div>
                </div>
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#523831]/30 transition-colors">
                   <div className="w-12 h-12 bg-[#523831]/10 text-[#523831] rounded-full flex items-center justify-center shrink-0">
                      <Award size={24} />
                   </div>
                   <div>
                      <div className="text-xl font-bold text-[#523831]">ISO 27001</div>
                      <div className="text-gray-500 text-sm">Information Security</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xs font-mono text-[#523831]/70 tracking-wider mb-8 uppercase font-bold">Our Journey</h2>
              <div className="relative border-l-2 border-[#523831]/20 ml-3 space-y-12">
                
                {/* Item 1 */}
                <div className="relative pl-10">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#523831] ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Inception</h4>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#523831]/10 text-[#523831] font-bold">APRIL 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    Narga Engineering Pvt. Ltd. is incorporated in Hyderabad. The core team establishes the R&D roadmap for hardware integration in the automotive sector.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-10">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#523831]" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Launch of Seslaa</h4>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-600">LATE 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    Introduction of the Seslaa brand and the flagship <strong>N1-Rex Dashcam</strong> series. This marked our entry into consumer automotive electronics with a focus on AI safety features.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-10">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-gray-300" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Expansion</h4>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-600">PRESENT</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    Scaling operations in 5G Telematics, Drone technology, and Embedded Protocol solutions. We are now delivering end-to-end product engineering for global markets.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}