'use client';
import { motion } from 'framer-motion';
import { Layers, Radio, Code, Database, Cpu, Truck } from 'lucide-react';

const services = [
  {
    title: "E-Mobility Powertrains",
    desc: "Comprehensive development of Battery Management Systems (BMS) and Motor Controllers. We optimize energy density and thermal efficiency for next-gen electric vehicles.",
    icon: <Layers className="w-8 h-8" />,
    tags: ["BMS", "Inverters", "Thermal Logic"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Telematics & IoT",
    desc: "Real-time 5G fleet tracking units with OBD-II integration. Our hardware captures granular vehicle data for predictive maintenance.",
    icon: <Radio className="w-8 h-8" />,
    tags: ["5G", "OBD-II", "GPS"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Embedded Firmware",
    desc: "Bare-metal and RTOS firmware development. We write highly optimized, low-latency code compliant with MISRA C standards.",
    icon: <Code className="w-8 h-8" />,
    tags: ["C/C++", "RTOS", "MISRA"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Cloud & Data Pipelines",
    desc: "Connecting edge devices to secure AWS/Azure architectures. We build the pipelines that turn sensor data into actionable insights.",
    icon: <Database className="w-8 h-8" />,
    tags: ["AWS IoT", "Big Data", "Security"],
    colSpan: "md:col-span-2",
  },
  {
    title: "FPGA & ASIC Design",
    desc: "Custom silicon design for specialized processing tasks. From Verilog coding to physical layout and verification.",
    icon: <Cpu className="w-8 h-8" />,
    tags: ["Verilog", "VHDL", "Silicon"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Autonomous Navigation",
    desc: "Sensor fusion algorithms for drones and AGVs. Integrating LiDAR, Radar, and Vision systems for precise localization.",
    icon: <Truck className="w-8 h-8" />,
    tags: ["LiDAR", "SLAM", "AI"],
    colSpan: "md:col-span-1",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl font-bold text-[#523831] mb-6">Engineering Services</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We deliver end-to-end product engineering, moving swiftly from hardware schematic design to mass manufacturing and cloud deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className={`${service.colSpan} p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#523831]/30 transition-all group`}
            >
              <div className="mb-6 text-[#523831] group-hover:text-[#8a6d65] transition-colors bg-[#f5f0ee] w-fit p-3 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#f5f0ee] text-[#523831] text-xs font-medium rounded-full border border-[#523831]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}