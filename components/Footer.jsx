import { Facebook, Linkedin, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#523831] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo/narga-logo.png"
                  alt="Narga Engineering"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-wide">NARGA</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Revolutionizing automotive and aerospace industries with precision engineering and semiconductor excellence.
            </p>
            
            {/* Three Logos - Fixed sizing */}
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-16 bg-white/10 rounded-lg p-2">
                <Image
                  src="/logo/logo.png"
                  alt="Certified"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
        
              <div className="relative w-16 h-16 bg-white/10 rounded-lg p-2">
                <Image
                  src="/logo/msme.png"
                  alt="MSME Certified"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              
              <div className="relative w-16 h-16 bg-white/10 rounded-lg p-2">
                <Image
                  src="/logo/Startup-India.png"
                  alt="Startup India"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" /> 
                <span>Hyderabad, India - 500030</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 mt-0.5" /> 
                <span>+91 7075 572 180</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 mt-0.5" /> 
                <span>info@narga.co.in</span>
              </li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://linkedin.com/company/narga-engineering" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#523831] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/nargaengineering/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#523831] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/917075572180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#523831] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            <div className="text-xs text-white/50 space-y-1">
              <p>ISO 9001:2015 Certified</p>
              <p>ISO 27001 Certified</p>
              <p>AS9100D Certified</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Narga Engineering Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/trademark" className="hover:text-white">Trademark</Link>
            <Link href="/copyright" className="hover:text-white">Copyright</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}