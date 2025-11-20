'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Globe, Zap, Users, Award, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

// Subtle Floating Circles Animation
function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Background Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-[#523831] opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-[#8a6d65] opacity-5"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.03, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-[#523831] opacity-5"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#523831] rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-[#8a6d65] opacity-15"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-8 h-8 border border-[#523831] opacity-10"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#8a6d65] opacity-25"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: <Cpu size={32} />,
      title: "Embedded Systems",
      desc: "Cutting-edge firmware and hardware integration for automotive and aerospace applications."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Connectivity",
      desc: "5G Telematics and IoT fleet solutions with real-time data processing."
    },
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      desc: "ISO 26262 functional safety compliance and rigorous testing standards."
    },
    {
      icon: <Zap size={32} />,
      title: "E-Mobility",
      desc: "Advanced BMS and powertrain solutions for next-generation electric vehicles."
    }
  ];

  const testimonials = [
    {
      name: "Automotive OEM",
      role: "Tier 1 Supplier",
      content: "Narga's telematics solutions transformed our fleet management with 40% improvement in operational efficiency.",
      rating: 5
    },
    {
      name: "EV Startup",
      role: "Electric Vehicle Manufacturer",
      content: "Their BMS and motor controller designs exceeded our performance expectations while maintaining cost efficiency.",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-white via-[#faf9f7] to-[#f5f0ee]">
        {/* Subtle Floating Circles Animation */}
        <FloatingCircles />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#523831]/20 bg-white/80 backdrop-blur-sm text-[#523831] text-sm font-medium"
          >
            <Award size={16} />
            ISO 9001:2015 & ISO 27001 CERTIFIED
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#523831] mb-6 leading-tight"
          >
            Precision
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-linear-to-r from-[#523831] to-[#8a6d65] block"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [1, 0.95, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Drives Progress
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <motion.p
              className="text-2xl md:text-3xl font-light text-[#8a6d65] mb-4"
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Semiconductor Excellence
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/products" 
              className="px-8 py-4 bg-[#523831] hover:bg-[#8a6d65] text-white rounded-xl font-semibold transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 border-2 border-[#523831] text-[#523831] hover:bg-[#523831] hover:text-white rounded-xl font-semibold transition-all flex items-center gap-3"
            >
              <Users size={20} />
              About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#523831] mb-6">
              Why Choose Narga Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge semiconductor technology with industry expertise to deliver solutions that drive innovation in mobility and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-[#523831] mb-6 bg-[#f5f0ee] w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#523831] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-linear-to-r from-[#523831] to-[#8a6d65]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                <Zap size={16} />
                Featured Product
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Seslaa N1-Rex</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                3-Channel 4K Ultra HD Dash Cam with AI collision detection, GPS tracking, and 24/7 parking surveillance. Professional-grade automotive safety technology.
              </p>
              <div className="space-y-4 mb-8">
                {['4K Front + 1K Rear + 1K Cabin', 'AI Collision Detection', 'GPS Tracking', '24H Parking Mode'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-white/80" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                href="/products/seslaa-n1-rex" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#523831] hover:bg-gray-100 rounded-xl font-semibold transition-all shadow-lg"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/products/main1.webp"
                    alt="Seslaa N1-Rex Dash Cam"
                    width={600}
                    height={400}
                    className="object-contain w-full h-full p-4"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#523831] mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with automotive and aerospace companies to deliver exceptional engineering solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#523831] mb-6">
              Ready to Transform Your Mobility Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let's discuss how our engineering expertise can bring your automotive or aerospace projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#523831] hover:bg-[#8a6d65] text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-[#523831] text-[#523831] hover:bg-[#523831] hover:text-white rounded-xl font-semibold transition-all flex items-center gap-3"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}