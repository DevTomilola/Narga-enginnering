'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || '');
  const thumbnailContainerRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const scrollAmount = 120;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-video bg-[#f5f0ee] rounded-3xl border border-[#523831]/10 flex items-center justify-center relative overflow-hidden group shadow-inner">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={productName}
            fill
            className="object-contain p-4"
            priority
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-linear-to-tr from-[#523831]/5 to-transparent" />
            <span className="text-[#523831]/50 font-mono font-bold text-lg">Product Image: {productName}</span>
          </>
        )}
      </div>
      
      {/* Thumbnail Slider */}
      {images && images.length > 0 && (
        <div className="relative">
          {/* Left Arrow */}
          {images.length > 3 && (
            <button
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft size={20} className="text-[#523831]" />
            </button>
          )}

          {/* Thumbnail Container */}
          <div
            ref={thumbnailContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`shrink-0 aspect-square bg-gray-50 rounded-xl border-2 transition-all relative overflow-hidden ${
                  selectedImage === image 
                    ? 'border-[#523831] scale-105 shadow-md' 
                    : 'border-gray-100 hover:border-[#523831]/30'
                }`}
                style={{ width: '80px', height: '80px' }}
              >
                <Image
                  src={image}
                  alt={`${productName} ${index + 1}`}
                  fill
                  className="object-contain p-1"
                />
                {/* Overlay for selected state */}
                {selectedImage === image && (
                  <div className="absolute inset-0 bg-[#523831]/10" />
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {images.length > 3 && (
            <button
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight size={20} className="text-[#523831]" />
            </button>
          )}
        </div>
      )}

      {/* Fallback when no images */}
      {(!images || images.length === 0) && (
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#523831]/30 transition-colors" />
          ))}
        </div>
      )}
    </div>
  );
}