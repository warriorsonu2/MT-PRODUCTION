import { About } from '../components/About';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    { year: '2022', title: 'Studio Inception', desc: 'The founding of MT Production with a vision for cinematic excellence.' },
    { year: '2023', title: 'First Major Commercial', desc: 'Completed our first high-end commercial campaign for a global brand.' },
    { year: '2024', title: 'Feature Film Production', desc: 'Started production on our most ambitious project to date.' },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.h2 
            className="font-bebas text-5xl md:text-7xl tracking-widest text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-mt-crimson">Timeline</span>
          </motion.h2>
        </div>
        
        <div className="relative border-l border-white/20 pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-mt-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
              <span className="font-montserrat text-sm tracking-widest uppercase text-mt-gold mb-2 block">{event.year}</span>
              <h3 className="font-bebas text-3xl tracking-wide text-white uppercase mb-3">{event.title}</h3>
              <p className="font-poppins text-mt-muted leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-mt-bg-sec relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="text-center max-w-4xl mx-auto">
          <motion.p 
            className="font-montserrat text-mt-crimson tracking-[0.3em] uppercase text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Studio Philosophy
          </motion.p>
          <motion.h2 
            className="font-bebas text-[clamp(42px,5vw,72px)] tracking-widest text-white uppercase leading-none mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every frame must <br/><span className="text-stroke text-mt-dark">tell a story</span>
          </motion.h2>
          <motion.p
            className="font-poppins text-lg md:text-xl text-mt-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We believe that true cinematic excellence is found at the intersection of unbridled creativity and technical precision. We don't just shoot footage; we capture emotion, atmosphere, and truth.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="pt-24">
      <About preview={false} />
      <Timeline />
      <Philosophy />
    </div>
  );
}
