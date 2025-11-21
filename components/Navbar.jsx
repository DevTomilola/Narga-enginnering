'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/products';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 glass-nav shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Made Larger */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-40">
              <Image 
                src="/logo/narga-logo.png"
                alt="Narga Engineering"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link with Line Animation */}
            <Link href="/" className="relative text-gray-600 hover:text-[#523831] text-sm font-medium transition-colors py-2 group/navlink">
              <span className="relative z-10">Home</span>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {pathname === '/' && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            
            {/* PRODUCTS DROPDOWN with Line Animation */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoverProducts(true)}
              onMouseLeave={() => setHoverProducts(false)}
            >
              <button className="relative flex items-center gap-1 text-gray-600 group-hover:text-[#523831] text-sm font-medium py-2 focus:outline-none transition-colors">
                <span className="relative z-10">Products</span>
                <ChevronDown size={14} className={`relative z-10 transition-transform duration-200 ${hoverProducts ? 'rotate-180' : ''}`} />
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {(pathname.startsWith('/products') || pathname === '/products') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {hoverProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-72 pt-4"
                  >
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden p-3 ring-1 ring-black/5">
                      {/* Added link to main products page */}
                      <Link 
                        href="/products"
                        className="block px-4 py-3 rounded-lg hover:bg-[#f5f0ee] transition-colors group/item border-b border-gray-100 mb-2"
                        onClick={() => setHoverProducts(false)}
                      >
                        <div className="text-sm font-bold text-gray-900 group-hover/item:text-[#523831]">All Products</div>
                        <div className="text-xs text-gray-500">Browse all our products</div>
                      </Link>
                      
                      {products.map((product) => (
                        <Link 
                          key={product.id} 
                          href={`/products/${product.slug || product.id}`}
                          className="block px-4 py-3 rounded-lg hover:bg-[#f5f0ee] transition-colors group/item"
                          onClick={() => setHoverProducts(false)}
                        >
                          <div className="text-sm font-bold text-gray-900 group-hover/item:text-[#523831]">{product.name}</div>
                          <div className="text-xs text-gray-500 truncate">{product.tagline}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ABOUT DROPDOWN with Line Animation */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoverAbout(true)}
              onMouseLeave={() => setHoverAbout(false)}
            >
              <button className="relative flex items-center gap-1 text-gray-600 group-hover:text-[#523831] text-sm font-medium py-2 focus:outline-none transition-colors">
                <span className="relative z-10">About</span>
                <ChevronDown size={14} className={`relative z-10 transition-transform duration-200 ${hoverAbout ? 'rotate-180' : ''}`} />
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {(pathname.startsWith('/about') || pathname === '/about' || pathname === '/company-profile') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {hoverAbout && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-56 pt-4"
                  >
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden p-3 ring-1 ring-black/5">
                      <Link 
                        href="/about"
                        className="block px-4 py-3 rounded-lg hover:bg-[#f5f0ee] transition-colors group/item"
                        onClick={() => setHoverAbout(false)}
                      >
                        <div className="text-sm font-bold text-gray-900 group-hover/item:text-[#523831]">About Us</div>
                        <div className="text-xs text-gray-500">Our story and mission</div>
                      </Link>
                      <Link 
                        href="/company-profile"
                        className="block px-4 py-3 rounded-lg hover:bg-[#f5f0ee] transition-colors group/item"
                        onClick={() => setHoverAbout(false)}
                      >
                        <div className="text-sm font-bold text-gray-900 group-hover/item:text-[#523831]">Company Profile</div>
                        <div className="text-xs text-gray-500">Business details & certifications</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links with Line Animations */}
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative text-gray-600 hover:text-[#523831] text-sm font-medium transition-colors py-2 group/navlink"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {pathname === link.href && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#523831]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-[#523831] p-2 rounded-lg hover:bg-[#f5f0ee] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {/* Home Link */}
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-3 font-medium border-b border-gray-100 transition-colors ${
                  pathname === '/' ? 'text-[#523831] bg-[#f5f0ee]' : 'text-gray-700 hover:bg-[#f5f0ee]'
                }`}
              >
                Home
              </Link>
              
              {/* Products Section */}
              <div className="px-3 py-3 text-[#523831] font-bold text-xs uppercase tracking-wider opacity-70 border-b border-gray-100">
                Products
              </div>
              
              {/* Main products page link */}
              <Link 
                href="/products" 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 text-gray-600 pl-6 rounded-lg transition-colors ${
                  pathname === '/products' ? 'bg-[#f5f0ee] text-[#523831]' : 'hover:bg-[#f5f0ee]'
                }`}
              >
                All Products
              </Link>
              
              {products.map(p => (
                 <Link 
                   key={p.id} 
                   href={`/products/${p.slug || p.id}`} 
                   onClick={() => setIsOpen(false)} 
                   className={`block px-3 py-2 text-gray-600 pl-6 rounded-lg transition-colors ${
                     pathname === `/products/${p.slug || p.id}` ? 'bg-[#f5f0ee] text-[#523831]' : 'hover:bg-[#f5f0ee]'
                   }`}
                 >
                   {p.name}
                 </Link>
              ))}

              {/* About Section */}
              <div className="px-3 py-3 text-[#523831] font-bold text-xs uppercase tracking-wider opacity-70 border-b border-gray-100">
                About
              </div>
              
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 text-gray-600 pl-6 rounded-lg transition-colors ${
                  pathname === '/about' ? 'bg-[#f5f0ee] text-[#523831]' : 'hover:bg-[#f5f0ee]'
                }`}
              >
                About Us
              </Link>
              
              <Link 
                href="/company-profile" 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 text-gray-600 pl-6 rounded-lg transition-colors ${
                  pathname === '/company-profile' ? 'bg-[#f5f0ee] text-[#523831]' : 'hover:bg-[#f5f0ee]'
                }`}
              >
                Company Profile
              </Link>

              {/* Other Links */}
              {navLinks.map(link => (
                 <Link 
                   key={link.name} 
                   href={link.href} 
                   onClick={() => setIsOpen(false)} 
                   className={`block px-3 py-3 font-medium border-t border-gray-100 transition-colors ${
                     pathname === link.href ? 'text-[#523831] bg-[#f5f0ee]' : 'text-gray-700 hover:bg-[#f5f0ee]'
                   }`}
                 >
                   {link.name}
                 </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}