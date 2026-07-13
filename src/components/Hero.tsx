import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video / Image placeholder */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2918&auto=format&fit=crop" 
          alt="Cinematic production background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="font-bebas text-[clamp(42px,8vw,96px)] md:text-[clamp(72px,10vw,96px)] tracking-widest text-white mb-6 uppercase text-stroke leading-none">
            Stories Beyond
            <br />
            <span className="text-white normal-case" style={{ WebkitTextStroke: '0px' }}>Imagination</span>
          </h1>
          <p className="font-montserrat text-base md:text-lg lg:text-xl text-mt-muted max-w-2xl mx-auto mb-10 tracking-wide uppercase px-4">
            Creating cinematic experiences that inspire generations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
            <a href="#projects" className="px-8 py-4 min-h-[48px] min-w-[48px] flex items-center justify-center bg-mt-gold text-black font-montserrat font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 w-full sm:w-auto">
              Explore Projects
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-montserrat text-xs tracking-[0.3em] text-mt-muted uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0 left-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
