'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, CheckCircle, ArrowLeft } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProductsPage() {
  const availableProducts = products.filter(product => product.status === 'available');
  const comingSoonProducts = products.filter(product => product.status === 'coming_soon');

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link href="/" className="text-gray-500 hover:text-[#523831] flex items-center gap-2 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#523831] mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative range of engineering solutions designed for the future of mobility and automation.
          </p>
        </motion.div>

        {/* Available Products Section */}
        {availableProducts.length > 0 && (
          <section className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle size={24} className="text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#523831]">Available Now</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="aspect-video bg-[#f5f0ee] relative overflow-hidden">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Zap size={48} className="text-[#523831]/30" />
                      </div>
                    )}
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle size={14} /> In Stock
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-[#8a6d65] font-medium mb-3">{product.tagline}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    {/* Price */}
                    {product.price && (
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[#523831]">₹{product.price.toLocaleString()}</span>
                      </div>
                    )}

                    {/* Features Preview */}
                    {product.features && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#f5f0ee] text-[#523831] text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                              +{product.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full bg-[#523831] hover:bg-[#8a6d65] text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      View Details
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon Products Section */}
        {comingSoonProducts.length > 0 && (
          <section>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock size={24} className="text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#523831]">Coming Soon</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.4 }}
                  className="group bg-white rounded-3xl border-2 border-dashed border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock size={24} className="text-orange-600" />
                      </div>
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                        COMING SOON
                      </div>
                      <p className="text-gray-600 text-sm">Expected Launch: Q4 2025</p>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="aspect-video bg-[#f5f0ee] relative overflow-hidden">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-4 opacity-60"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-40">
                        <Zap size={48} className="text-[#523831]" />
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-[#8a6d65] font-medium mb-3">{product.tagline}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    {/* Features Preview */}
                    {product.features && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Preview Button */}
                    <button className="w-full border-2 border-[#523831] text-[#523831] py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                      Preview Details
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 p-8 bg-linear-to-r from-[#523831] to-[#8a6d65] rounded-3xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Contact us for custom engineering solutions tailored to your specific requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#523831] hover:bg-gray-100 rounded-xl font-semibold transition-all shadow-lg"
          >
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}