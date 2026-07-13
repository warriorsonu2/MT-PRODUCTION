import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Film, Video, Camera, Aperture, MonitorPlay, Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Clapperboard size={40} strokeWidth={1.5} />,
    title: 'Feature Films',
    desc: 'Full-scale cinematic production from script development to final master, delivering theatrical quality.'
  },
  {
    icon: <Video size={40} strokeWidth={1.5} />,
    title: 'Commercials',
    desc: 'High-end advertising content that elevates brands through compelling visual narratives.'
  },
  {
    icon: <Film size={40} strokeWidth={1.5} />,
    title: 'Documentaries',
    desc: 'Authentic storytelling that captures real-world subjects with cinematic aesthetic and depth.'
  },
  {
    icon: <Aperture size={40} strokeWidth={1.5} />,
    title: 'Visual Effects',
    desc: 'Industry-leading CGI, compositing, and visual effects that bring the impossible to life.'
  },
  {
    icon: <MonitorPlay size={40} strokeWidth={1.5} />,
    title: 'Post-Production',
    desc: 'Masterful editing, sound design, and color grading in our state-of-the-art facilities.'
  },
  {
    icon: <Camera size={40} strokeWidth={1.5} />,
    title: 'Cinematography',
    desc: 'Award-winning camera work utilizing the latest Arri and RED digital cinema systems.'
  }
];

export function Services({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const displayServices = preview ? services.slice(0, 3) : services;

  return (
    <section id="services" className="py-[60px] md:py-[80px] lg:py-[120px] bg-mt-bg-sec relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            className="font-montserrat text-mt-crimson tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.p>
          <motion.h2 
            className="font-bebas text-[clamp(42px,6vw,72px)] tracking-widest text-white uppercase leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Production <br className="md:hidden" /><span className="text-stroke text-mt-dark">Excellence</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-mt-card p-10 group hover:-translate-y-2 transition-transform duration-500 cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-mt-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-mt-muted group-hover:text-mt-gold transition-colors duration-500 mb-8">
                {service.icon}
              </div>
              <h3 className="font-bebas text-3xl tracking-wide text-white mb-4 uppercase">{service.title}</h3>
              <p className="font-poppins text-mt-muted text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-2 text-mt-gold font-montserrat text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <span>Explore</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex min-h-[48px] items-center justify-center font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase text-white border-b border-white hover:text-mt-gold hover:border-mt-gold transition-colors"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
