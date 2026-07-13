import { motion, AnimatePresence, useInView } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Crown, Sparkles, PenTool, Film, Settings, ChevronRight, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const TEAM = [
  {
    id: 'sonu',
    name: 'SONU',
    nickname: 'MT',
    position: 'Founder & Owner',
    roleDesc: 'The visionary leader behind MT Production, responsible for leading the company, shaping its creative direction, overseeing projects from concept to completion, and ensuring every production reflects the studio\'s commitment to cinematic excellence.',
    icon: <Crown />,
    color: '#FFD700',
    skills: ['Creative Direction', 'Executive Production', 'Leadership', 'Strategy'],
    status: 'Directing'
  },
  {
    id: 'sneha',
    name: 'SNEHA',
    nickname: 'DARK QUEEN',
    position: 'Female Lead',
    roleDesc: 'The lead female performer of MT Production, bringing emotion, depth, and screen presence to every story while representing the creative identity of the studio.',
    icon: <Sparkles />,
    color: '#A855F7',
    skills: ['Acting', 'Screen Presence', 'Emotional Depth', 'Character Design'],
    status: 'On Set'
  },
  {
    id: 'shivansh',
    name: 'SHIVANSH',
    nickname: 'SHIVA',
    position: 'Writing Lead',
    roleDesc: 'Responsible for story development, screenplay writing, dialogue creation, script supervision, and transforming ideas into compelling narratives that connect with audiences.',
    icon: <PenTool />,
    color: '#3B82F6',
    skills: ['Screenwriting', 'Story Development', 'Dialogue', 'World Building'],
    status: 'Writing'
  },
  {
    id: 'rohan',
    name: 'ROHAN',
    nickname: 'RONNY',
    position: 'Lead of Direction',
    roleDesc: 'Leads the direction of all productions, transforming scripts into cinematic visuals through creative storytelling, shot composition, actor guidance, and production planning.',
    icon: <Film />,
    color: '#EF4444',
    skills: ['Directing', 'Shot Composition', 'Actor Guidance', 'Visual Storytelling'],
    status: 'Location Scout'
  },
  {
    id: 'priya',
    name: 'PRIYA',
    nickname: 'PIHU',
    position: 'Pre & Post Production Manager',
    roleDesc: 'Coordinates the complete production workflow, managing schedules, logistics, editing coordination, post-production delivery, and ensuring smooth execution from planning to final release.',
    icon: <Settings />,
    color: '#22C55E',
    skills: ['Workflow Management', 'Logistics', 'Coordination', 'Post-Production'],
    status: 'Editing'
  }
];

export function Team({ preview = false }: { preview?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState('sonu');

  const displayTeam = preview ? TEAM.slice(0, 3) : TEAM;
  const activeMember = displayTeam.find(m => m.id === activeId) || displayTeam[0];

  const MemberDetail = ({ member, isMobile }: { member: typeof TEAM[0], isMobile: boolean }) => (
    <div className={`${isMobile ? 'relative mt-2 p-6' : 'absolute inset-0 p-8 lg:p-12'} bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-[24px] overflow-hidden flex flex-col shadow-2xl`}>
      {/* Abstract Icon Background */}
      <div 
        className="absolute -right-20 -bottom-20 opacity-5 blur-[20px] pointer-events-none transition-colors duration-1000" 
        style={{ color: member.color }}
      >
        {React.cloneElement(member.icon, { size: isMobile ? 200 : 400, strokeWidth: 1 })}
      </div>
      
      {/* Corner Accents */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-[24px]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 rounded-tr-[24px]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 rounded-bl-[24px]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-[24px]"></div>
        </>
      )}

      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 mb-8 lg:mb-12 relative z-10 border-b border-white/10 pb-6">
         <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors duration-700" style={{ color: member.color, borderColor: `${member.color}40` }}>
              {React.cloneElement(member.icon, { size: isMobile ? 24 : 28 })}
            </div>
            <div>
               <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">Designation</p>
               <p className="font-montserrat text-xs md:text-sm tracking-widest uppercase text-white">{member.position}</p>
            </div>
         </div>
         <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/5 w-fit">
            <Activity size={16} style={{ color: member.color }} />
            <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/50">Status</span>
            <span className="font-bebas text-lg tracking-widest uppercase" style={{ color: member.color }}>{member.status}</span>
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center">
        <span className="font-montserrat text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 opacity-80" style={{ color: member.color }}>
           "{member.nickname}"
        </span>
        <h3 className="font-bebas text-5xl sm:text-6xl lg:text-[7rem] tracking-[0.05em] text-white uppercase leading-none mb-6 lg:mb-8 drop-shadow-2xl">
           {member.name}
        </h3>
        
        <div className="relative border-l-2 pl-4 sm:pl-6" style={{ borderColor: `${member.color}60` }}>
          <div className="absolute -left-[2px] top-0 w-[2px] h-8 bg-current transition-colors duration-700" style={{ backgroundColor: member.color }}></div>
          <p className="font-poppins text-sm md:text-lg text-white/70 leading-[1.8] max-w-2xl font-light">
             {member.roleDesc}
          </p>
        </div>
      </div>

      {/* Bottom Skills */}
      <div className="relative z-10 mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/10">
        <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 lg:mb-5">Core Capabilities</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
           {member.skills.map((skill, idx) => (
             <span 
               key={idx}
               className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 border border-white/10 rounded-full font-montserrat text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/80 hover:bg-white/10 transition-colors"
             >
                {skill}
             </span>
           ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 bg-black relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0))', backgroundSize: '150px 150px' }}></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)' }}></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] opacity-20 blur-[120px] transition-colors duration-1000 ease-in-out mix-blend-screen pointer-events-none"
          style={{ backgroundColor: activeMember.color }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.p 
              className="font-montserrat text-mt-gold tracking-[0.3em] uppercase text-sm mb-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Terminal size={14} /> Core Personnel
            </motion.p>
            <motion.h2 
              className="font-bebas text-5xl md:text-7xl tracking-[0.1em] text-white uppercase leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              THE CREATIVE <span className="text-stroke text-mt-dark">FORCE</span>
            </motion.h2>
          </div>
          <motion.p
            className="font-poppins text-white/60 max-w-sm text-sm leading-relaxed text-left md:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every frame begins with an idea. Every story is brought to life by a team driven by creativity, passion, and precision.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Menu */}
          <motion.div 
            className="w-full lg:w-1/3 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6 pb-4 border-b border-white/5 flex justify-between items-center">
               <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/40">Select Operative</span>
               <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-mt-gold flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-mt-gold animate-pulse"></span> Online
               </span>
            </div>
            
            <div className="flex flex-col gap-2 mb-8">
              {displayTeam.map((member, index) => {
                const isActive = activeId === member.id;
                return (
                  <div key={member.id} className="flex flex-col">
                    <button
                      onClick={() => setActiveId(member.id)}
                      className={`group flex items-center gap-4 sm:gap-6 p-4 md:p-5 rounded-xl transition-all duration-500 relative overflow-hidden ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
                    >
                      {/* Active Line */}
                      <div 
                        className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500`} 
                        style={{ backgroundColor: isActive ? member.color : 'transparent' }}
                      />
                      
                      <span className={`font-montserrat text-[10px] sm:text-xs tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-white/60' : 'text-white/20 group-hover:text-white/40'}`}>
                         0{index + 1}
                      </span>

                      <div className={`font-bebas text-2xl sm:text-3xl md:text-4xl tracking-widest transition-colors duration-500 relative z-10 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>
                         {member.name}
                      </div>

                      <div className={`ml-auto transition-all duration-500 relative z-10 ${isActive ? 'opacity-100 translate-x-0 rotate-90 lg:rotate-0' : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}`}>
                         <ChevronRight size={20} style={{ color: isActive ? member.color : '#fff' }} />
                      </div>

                      {/* Ambient Glow on Active */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 blur-[40px] opacity-20 pointer-events-none" 
                          style={{ backgroundColor: member.color }} 
                        />
                      )}
                    </button>
                    
                    {/* Mobile Accordion Detail Pane */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden lg:hidden"
                        >
                          <MemberDetail member={member} isMobile={true} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {preview && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  to="/team"
                  className="inline-flex min-h-[48px] items-center justify-center font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase text-white border-b border-white hover:text-mt-gold hover:border-mt-gold transition-colors"
                >
                  Meet The Full Force
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Detail Pane (Desktop Only) */}
          <motion.div 
            className="hidden lg:block w-full lg:w-2/3 relative min-h-[650px] lg:min-h-[650px]"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <MemberDetail member={activeMember} isMobile={false} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
