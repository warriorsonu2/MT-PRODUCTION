import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import silentGoodbyeImg from '../assets/images/silent_goodbye_poster_1783960855583.jpg';

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'WARRIORS',
    category: 'Feature Series',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop',
    status: 'IN PROGRESS',
    statusColor: 'text-mt-gold',
    statusBg: 'bg-mt-gold/20 border-mt-gold/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]',
    dotColor: 'bg-mt-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]',
    description: 'An ambitious cinematic feature series currently under development by MT Production, focused on immersive storytelling, compelling characters, and high-quality production.'
  },
  {
    id: 2,
    title: 'Sharp Dart',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop',
    status: 'IN PROGRESS',
    statusColor: 'text-mt-gold',
    statusBg: 'bg-mt-gold/20 border-mt-gold/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]',
    dotColor: 'bg-mt-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]',
    description: 'A documentary project exploring real stories through cinematic visuals, authentic narratives, and meaningful perspectives.'
  },
  {
    id: 3,
    title: 'One Vision',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop',
    status: 'COMING SOON',
    statusColor: 'text-blue-400',
    statusBg: 'bg-blue-400/20 border-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.3)]',
    dotColor: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]',
    description: 'A commercial production showcasing powerful visual storytelling, modern branding, and creative direction.'
  },
  {
    id: 4,
    title: 'Silent Goodbye',
    category: 'Short Film',
    image: silentGoodbyeImg,
    status: 'COMING SOON',
    statusColor: 'text-blue-400',
    statusBg: 'bg-blue-400/20 border-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.3)]',
    dotColor: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]',
    description: 'A heartfelt short film centered on emotion, relationships, and unforgettable storytelling through cinematic filmmaking.'
  }
];

export function Projects({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const displayProjects = preview ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-[60px] md:py-[80px] lg:py-[120px] bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <motion.p 
              className="font-montserrat text-mt-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Selected Work
            </motion.p>
            <motion.h2 
              className="font-bebas text-[clamp(42px,6vw,72px)] tracking-widest text-white uppercase leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured <br className="md:hidden" /><span className="text-mt-crimson">Projects</span>
            </motion.h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-mt-dark shadow-2xl transition-all duration-500 border border-white/5 hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageErrors(prev => ({...prev, [project.id]: true}))}
                  className={`w-full h-full object-cover transition-transform duration-1000 ${hoveredId === project.id ? 'scale-110 opacity-30' : 'scale-100 opacity-90'} ${imageErrors[project.id] ? 'hidden' : ''}`}
                />
                
                {imageErrors[project.id] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-mt-dark p-6 text-center">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
                    <div className="w-16 h-16 border-2 border-mt-gold/30 rounded-full flex items-center justify-center mb-4 relative">
                       <div className="absolute inset-0 bg-mt-gold/20 rounded-full blur-[10px]"></div>
                       <span className="font-bebas text-2xl text-mt-gold relative z-10">MT</span>
                    </div>
                    <h4 className="font-bebas text-2xl tracking-widest text-white uppercase relative z-10">{project.title}</h4>
                    <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-mt-gold/60 mt-2 relative z-10">Image Coming Soon</p>
                  </div>
                )}
                
                {/* Soft lighting effect / Glassmorphism */}
                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent backdrop-blur-[2px]"></div>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-end items-start transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md ${project.statusBg} text-white`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor} ${project.status === 'IN PROGRESS' ? 'animate-pulse' : 'animate-[pulse_3s_ease-in-out_infinite]'}`}></span>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="transform translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-mt-gold mb-2">{project.category}</p>
                     <h3 className="font-bebas text-4xl md:text-5xl tracking-widest text-white uppercase mb-4">{project.title}</h3>
                     
                     {/* Animated accent line */}
                     <div className="w-12 h-[2px] bg-mt-gold mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-200"></div>
                     
                     <p className="font-poppins text-sm text-white/80 leading-relaxed font-light mb-6 line-clamp-3">
                        {project.description}
                     </p>
                     
                     {/* View Details button */}
                     <button className="flex items-center justify-between md:justify-start w-full md:w-auto min-h-[48px] px-6 md:px-0 bg-white/10 md:bg-transparent rounded-lg md:rounded-none gap-2 font-montserrat text-[10px] tracking-[0.2em] uppercase text-white hover:text-mt-gold transition-colors duration-300">
                        View Details <span className="text-mt-gold">→</span>
                     </button>
                  </div>
                </div>
              </div>
              
              {/* Default labels visible below image on mobile, or when not hovered on desktop */}
              <div className={`mt-6 transition-opacity duration-300 ${hoveredId === project.id ? 'md:opacity-0' : 'opacity-100'}`}>
                <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-mt-muted mb-2">{project.category}</p>
                <h3 className="font-bebas text-3xl tracking-widest text-white uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
