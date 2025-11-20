'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-5xl font-bold text-[#523831] mb-8">Get in Touch</h1>
            <p className="text-gray-600 mb-12 text-lg">
              Have a project in mind? Reach out to our engineering team to discuss your requirements for automotive or aerospace integration.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-[#f5f0ee] rounded-lg text-[#523831]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-1">Headquarters</h3>
                  <p className="text-gray-600">
                    #409, Nandanavanam, Silicon Ridge,<br/>
                    Hyderabad, Telangana, India - 500030
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-[#f5f0ee] rounded-lg text-[#523831]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">+91 7075 572 180</p>
                  <p className="text-gray-600">+91 4031 806 193</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-[#f5f0ee] rounded-lg text-[#523831]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-1">Email</h3>
                  <p className="text-gray-600">info@narga.co.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-[#f5f0ee] rounded-lg text-[#523831]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:30 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="bg-[#faf9f7] p-8 rounded-3xl border border-[#523831]/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#523831] mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-[#523831] focus:ring-1 focus:ring-[#523831] outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-[#523831] focus:ring-1 focus:ring-[#523831] outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <select className="w-full bg-white border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-[#523831] focus:ring-1 focus:ring-[#523831] outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Product Sales</option>
                  <option>Engineering Services</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-[#523831] focus:ring-1 focus:ring-[#523831] outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#523831] hover:bg-[#8a6d65] text-white py-4 rounded-xl font-bold transition-colors shadow-lg"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}