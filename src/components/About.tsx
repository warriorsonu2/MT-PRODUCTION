import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Projects Completed', value: '15' },
  { label: 'Awards Won', value: '0' },
  { label: 'Years of Experience', value: '3+' },
  { label: 'Clients', value: '150+' },
];

import { Link } from 'react-router-dom';

function Counter({ value, isInView }: { value: string, isInView: boolean }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (isInView && target > 0) {
      let startTime: number;
      const duration = 2000;
      
      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        
        setCount(Math.floor(easeOutQuad * target));
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(updateCounter);
    } else if (isInView && target === 0) {
      setCount(0);
    }
  }, [isInView, target]);
  
  return <>{count}{suffix}</>;
}

export function About({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-[60px] md:py-[80px] lg:py-[120px] bg-mt-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 border border-mt-dark translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2912&auto=format&fit=crop" 
              alt="Director looking through camera" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-mt-card p-6 md:p-8 border-l-4 border-mt-gold">
              <p className="font-bebas text-3xl md:text-5xl tracking-widest text-white">EST. 2024</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-12 lg:mt-0"
          >
            <h2 className="font-bebas text-[clamp(42px,5vw,72px)] tracking-widest text-white mb-6 uppercase leading-none">
              Crafting <span className="text-mt-crimson">Cinema</span>
            </h2>
            <div className="w-20 h-1 bg-mt-gold mb-6 md:mb-8"></div>
            
            <h3 className="font-montserrat text-xl md:text-2xl font-light text-white mb-6 leading-relaxed">
              We are a visionary production house dedicated to telling stories that matter.
            </h3>
            
            <p className="font-poppins text-sm md:text-base text-mt-muted leading-relaxed mb-10 md:mb-12">
              From breathtaking feature films to cutting-edge commercial campaigns, MT Production merges artistic vision with technical excellence. Our award-winning team of directors, cinematographers, and visual effects artists push the boundaries of visual storytelling to create unforgettable cinematic experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="border-t border-mt-dark pt-4"
                >
                  <p className="font-bebas text-[clamp(32px,4vw,48px)] text-mt-gold mb-1 leading-none">
                    <Counter value={stat.value} isInView={isInView} />
                  </p>
                  <p className="font-montserrat text-[10px] md:text-xs uppercase tracking-widest text-mt-muted mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {preview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  to="/about"
                  className="inline-flex min-h-[48px] items-center justify-center font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase text-white border-b border-white hover:text-mt-gold hover:border-mt-gold transition-colors"
                >
                  Read Our Story
                </Link>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
