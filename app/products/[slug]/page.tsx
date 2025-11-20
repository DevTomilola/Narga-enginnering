import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart, AlertTriangle, CheckCircle, ArrowLeft, Camera, Wifi, MapPin, Shield, Sun, Smartphone, Zap, Mic, Disc, Cpu, Battery, Radio } from 'lucide-react';
import { products } from '@/lib/products';
import BuyNowButton from '@/components/BuyNowButton';
import ProductGallery from '@/components/ProductGallery';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

const iconMap = {
  Camera, Wifi, MapPin, Shield, Sun, Smartphone, Zap, Mic, Disc, Cpu, Battery, Radio
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4 text-gray-800">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link href="/products" className="text-gray-500 hover:text-[#523831] flex items-center gap-2 transition-colors font-medium">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      {/* LOGIC SWITCH: AVAILABLE VS COMING SOON */}
      {product.status === 'available' ? (
        <div className="max-w-7xl mx-auto">
          {/* Main Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Left: Images */}
            <ProductGallery images={product.images || []} productName={product.name} />

            {/* Right: Basic Details & Actions */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#523831] mb-2">{product.name}</h1>
              <p className="text-xl text-[#8a6d65] mb-6 font-medium">{product.tagline}</p>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Key Highlights */}
              {product.highlights && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {product.highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon.type;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[#f9fafb] rounded-xl border border-gray-200">
                        <IconComponent size={20} className="text-[#523831]" />
                        <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Actions Area */}
              <div className="space-y-4 p-8 bg-[#f9fafb] rounded-3xl border border-gray-200 shadow-sm">
                {/* Price & Primary Action */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-[#523831]">₹{product.price?.toLocaleString()}</div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle size={16} /> In Stock
                  </div>
                </div>
                
                <BuyNowButton product={product} />
                
                {/* Secondary Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  {product.links?.amazon && (
                    <a 
                      href={product.links.amazon} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#232F3E] hover:bg-[#374151] text-white py-4 rounded-xl transition-all font-medium shadow-sm hover:shadow-md"
                    >
                      <ShoppingCart size={18} /> Buy on Amazon
                    </a>
                  )}
                  {product.links?.flipkart && (
                    <a 
                      href={product.links.flipkart} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#2874F0] hover:bg-[#4080e0] text-white py-4 rounded-xl transition-all font-medium shadow-sm hover:shadow-md"
                    >
                      <ShoppingCart size={18} /> Buy on Flipkart
                    </a>
                  )}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                 <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> 1 Year Warranty</div>
                 <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> Free Shipping</div>
                 <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> 24/7 Support</div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications Section */}
          {product.specs && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#523831] mb-8 text-center">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-3">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-gray-900 font-semibold text-lg leading-relaxed">
                      {Array.isArray(value) ? value.join(', ') : (value as string)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          {product.features && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#523831] mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-[#f9fafb] rounded-xl border border-gray-200 hover:border-[#523831]/30 transition-colors">
                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Call-to-Action */}
          <div className="text-center p-8 bg-linear-to-r from-[#523831] to-[#8a6d65] rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience {product.name}?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Narga Engineering for premium automotive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white text-[#523831] hover:bg-gray-100 py-3 px-6 rounded-xl transition-all font-medium shadow-sm hover:shadow-md">
                <BuyNowButton product={product} />
              </div>
              {product.links?.amazon && (
                <a 
                  href={product.links.amazon} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#523831] hover:bg-gray-100 py-3 px-6 rounded-xl transition-all font-medium shadow-sm hover:shadow-md"
                >
                  <ShoppingCart size={18} /> Buy on Amazon
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        // COMING SOON VIEW - Clean version without features or specs
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
          <div className="w-24 h-24 bg-[#523831]/5 rounded-full flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-[#523831]" />
          </div>
          <h1 className="text-5xl font-bold text-[#523831] mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-500 mb-8 max-w-2xl font-light">
            {product.tagline}
          </p>
          <div className="inline-block px-6 py-2 rounded-full border border-[#523831]/20 bg-[#523831]/5 text-[#523831] font-mono font-bold animate-pulse">
            STATUS: DEVELOPMENT IN PROGRESS
          </div>
          <p className="mt-12 text-gray-400">Expected Launch: Q4 2025</p>
        </div>
      )}
    </div>
  );
}