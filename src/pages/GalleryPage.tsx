import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Search } from 'lucide-react';

const CATEGORIES = ['All', 'Projects', 'Behind The Scenes', 'Events', 'Commercial Shoots', 'Photography', 'Video Frames'];

const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2912&auto=format&fit=crop', category: 'Behind The Scenes' },
  { id: 2, src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop', category: 'Projects' },
  { id: 3, src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop', category: 'Events' },
  { id: 4, src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop', category: 'Commercial Shoots' },
  { id: 5, src: 'https://images.unsplash.com/photo-1579970979510-18e3c54d48ce?q=80&w=2864&auto=format&fit=crop', category: 'Photography' },
  { id: 6, src: 'https://images.unsplash.com/photo-1582215951680-60b54fc12ea0?q=80&w=2835&auto=format&fit=crop', category: 'Video Frames' },
  { id: 7, src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop', category: 'Photography' },
  { id: 8, src: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=2796&auto=format&fit=crop', category: 'Behind The Scenes' },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h1 
            className="font-bebas text-5xl md:text-7xl tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-mt-crimson">Gallery</span>
          </motion.h1>
          <motion.p
            className="font-poppins text-mt-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated collection of our best visual moments.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-montserrat text-xs uppercase tracking-widest transition-colors ${
                activeCategory === category 
                  ? 'bg-mt-gold text-black font-bold' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="relative aspect-square group overflow-hidden bg-mt-dark cursor-pointer rounded-lg"
                onClick={() => setLightboxImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage} 
              alt="Lightbox" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
