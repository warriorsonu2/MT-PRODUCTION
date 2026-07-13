import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  metaDescription: string;
}

export function LegalLayout({ title, lastUpdated, sections, metaDescription }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = `${title} | MT Production`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', metaDescription);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }
  }, [title, metaDescription]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      let current = activeSection;
      
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = el.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection]);

  const scrollToSection = (id: string) => {
    setMobileTocOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 relative selection:bg-mt-gold selection:text-black">
      {/* Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-mt-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-montserrat text-[10px] tracking-widest uppercase text-mt-muted mb-8">
          <Link to="/" className="hover:text-mt-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-mt-gold">{title}</span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-widest text-white uppercase mb-4"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-mt-gold mb-6 origin-left"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-poppins text-sm text-mt-muted"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Mobile TOC */}
          <div className="lg:hidden w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
            <button 
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-6 font-bebas text-2xl tracking-widest text-white"
            >
              Table of Contents
              <ChevronDown className={`transition-transform duration-300 ${mobileTocOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div 
              initial={false}
              animate={{ height: mobileTocOpen ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 flex flex-col gap-4">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left font-poppins text-sm transition-colors ${activeSection === section.id ? 'text-mt-gold' : 'text-mt-muted hover:text-white'}`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Desktop TOC */}
          <div className="hidden lg:flex w-1/4 sticky top-32 flex-col gap-6 p-8 bg-white/5 border border-white/10 rounded-[24px] backdrop-blur-md shadow-2xl">
            <h3 className="font-bebas text-3xl tracking-widest text-white mb-2">Contents</h3>
            <div className="flex flex-col gap-4">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left font-poppins text-sm transition-all duration-300 relative pl-4 ${activeSection === section.id ? 'text-mt-gold translate-x-2' : 'text-mt-muted hover:text-white hover:translate-x-1'}`}
                >
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-colors ${activeSection === section.id ? 'bg-mt-gold' : 'bg-transparent'}`} />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/4 max-w-[900px] bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[24px] backdrop-blur-md shadow-2xl">
            <div className="space-y-16">
              {sections.map((section, idx) => (
                <motion.section 
                  key={section.id} 
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32"
                >
                  <h2 className="font-bebas text-3xl md:text-4xl tracking-widest text-white mb-6 uppercase border-b border-white/10 pb-4">
                    {idx + 1}. {section.title}
                  </h2>
                  <div className="font-poppins text-mt-muted text-sm md:text-base leading-relaxed space-y-6 prose prose-invert prose-p:text-mt-muted prose-headings:text-white prose-a:text-mt-gold prose-strong:text-white max-w-none">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
