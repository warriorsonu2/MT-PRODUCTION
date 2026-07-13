import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "warriorsonu2@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projectTypes = [
    "Creative Collaborations",
    "Film Projects",
    "Commercial Productions",
    "Music Videos",
    "Partnerships",
    "Business Inquiries",
    "General Questions"
  ];

  return (
    <section id="contact" className="py-24 bg-black relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0))', backgroundSize: '150px 150px' }}></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)' }}></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-[100px] transition-colors duration-1000 ease-in-out mix-blend-screen pointer-events-none rounded-full bg-mt-gold"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10 w-full pt-16">
        <div ref={ref} className="text-center mb-16">
           <motion.h2 
             className="font-bebas text-[clamp(42px,8vw,96px)] tracking-[0.1em] text-white uppercase mb-4 leading-none"
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
             GET IN <br className="md:hidden" /><span className="text-stroke text-mt-dark">TOUCH</span>
           </motion.h2>
           <motion.p
             className="font-poppins text-mt-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           >
             We're always open to discussing new ideas, collaborations, creative projects, and production opportunities. Reach out to us anytime.
           </motion.p>
        </div>

        <motion.div 
          className="w-full bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[28px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Subtle gold glow inside border */}
          <div className="absolute inset-0 border border-mt-gold/20 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left Side - Email Display */}
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-mt-gold/5 to-transparent opacity-50"></div>
               
               <motion.div 
                 className="relative w-32 h-32 flex items-center justify-center mb-10 group/icon cursor-pointer"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="absolute inset-0 bg-mt-gold/20 rounded-full blur-[30px] opacity-50 group-hover/icon:opacity-100 group-hover/icon:scale-150 transition-all duration-700"></div>
                 <motion.div 
                    className="absolute inset-0 border-2 border-mt-gold/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 />
                 <Mail size={48} className="text-mt-gold relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover/icon:scale-110 transition-transform duration-500" />
               </motion.div>

               <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-mt-muted mb-4 text-center">
                 Contact Us
               </span>
               <h3 className="font-bebas text-[clamp(24px,6vw,36px)] tracking-widest text-white mb-10 selection:bg-mt-gold selection:text-black break-all sm:break-normal text-center">
                 {email}
               </h3>

               <div className="w-full flex flex-col gap-4 z-10 relative max-w-sm mx-auto">
                  <a 
                    href={`mailto:${email}?subject=Inquiry from MT Production Website&body=Hello MT Production,%0D%0A%0D%0AI would like to discuss...%0D%0A%0D%0ABest Regards,`}
                    className="group/btn w-full bg-white hover:bg-mt-gold text-black px-6 py-5 rounded-xl flex items-center justify-between transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:-translate-y-1 overflow-hidden relative"
                  >
                     <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[50%] transition-transform duration-1000"></div>
                     <span className="font-inter font-semibold tracking-wider text-sm z-10">EMAIL MT PRODUCTION</span>
                     <ArrowRight size={18} className="z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>

                  <button 
                    onClick={handleCopy}
                    className="w-full bg-black/40 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:border-mt-gold/50 mb-8 md:mb-0"
                  >
                     {copied ? (
                       <>
                         <Check size={16} className="text-green-400" />
                         <span className="font-inter font-medium tracking-wide text-sm text-green-400">Email Copied</span>
                       </>
                     ) : (
                       <>
                         <Copy size={16} className="text-white/70" />
                         <span className="font-inter font-medium tracking-wide text-sm text-white/90">Copy Email</span>
                       </>
                     )}
                  </button>
               </div>

               <div className="w-full flex flex-col items-center mt-10 pt-8 border-t border-white/10 relative z-10">
                 <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-mt-muted mb-4 text-center">
                   Follow Us
                 </span>
                 <div className="flex flex-col items-center gap-1 mb-6">
                   <h3 className="font-bebas text-2xl tracking-widest text-white uppercase">Instagram</h3>
                   <span className="font-poppins text-mt-gold text-sm tracking-wide">@mtproductionofficial</span>
                 </div>
                 <a 
                    href="https://www.instagram.com/mtproductionofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow MT Production on Instagram"
                    className="group/insta w-full max-w-sm bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:border-mt-gold/50 hover:bg-white/5"
                 >
                    <span className="font-inter font-medium tracking-wide text-sm group-hover/insta:text-mt-gold transition-colors duration-300">Follow on Instagram</span>
                 </a>
               </div>
            </div>

            {/* Right Side - Info Panel */}
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-black/20">
               <h4 className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-mt-gold mb-8">
                 Areas of Expertise
               </h4>
               
               <div className="flex flex-col gap-5">
                 {projectTypes.map((type, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: 20 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                     className="group flex items-center gap-4 cursor-default"
                   >
                     <div className="w-0 h-[1px] bg-mt-gold group-hover:w-6 transition-all duration-300 ease-out"></div>
                     <span className="font-poppins text-lg text-white/60 group-hover:text-white transition-colors duration-300 font-light">
                       {type}
                     </span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
