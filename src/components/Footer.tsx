import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        
        {/* Brand */}
        <div className="flex flex-col items-start col-span-1">
          <Link to="/" className="font-bebas text-4xl tracking-widest text-white hover:text-mt-gold transition-colors mb-2">
            MT<span className="text-mt-crimson">.</span>
          </Link>
          <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-mt-muted mb-6">
            Stories Beyond Imagination
          </p>
          <a href="mailto:warriorsonu2@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-mt-gold transition-colors font-poppins text-sm">
            <Mail size={16} /> warriorsonu2@gmail.com
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 font-montserrat text-xs tracking-widest uppercase text-mt-muted">
          <h4 className="text-white mb-2 font-bold">Navigation</h4>
          <Link to="/" className="hover:text-mt-gold transition-colors w-fit">Home</Link>
          <Link to="/about" className="hover:text-mt-gold transition-colors w-fit">About</Link>
          <Link to="/projects" className="hover:text-mt-gold transition-colors w-fit">Projects</Link>
          <Link to="/services" className="hover:text-mt-gold transition-colors w-fit">Services</Link>
          <Link to="/team" className="hover:text-mt-gold transition-colors w-fit">Team</Link>
          <Link to="/gallery" className="hover:text-mt-gold transition-colors w-fit">Gallery</Link>
          <Link to="/contact" className="hover:text-mt-gold transition-colors w-fit">Contact</Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 font-montserrat text-xs tracking-widest uppercase text-mt-muted">
          <h4 className="text-white mb-2 font-bold">Quick Links</h4>
          <Link to="/privacy.html" className="hover:text-mt-gold transition-colors w-fit">Privacy Policy</Link>
          <Link to="/terms.html" className="hover:text-mt-gold transition-colors w-fit">Terms of Service</Link>
          <a href="#" className="hover:text-mt-gold transition-colors w-fit">Careers</a>
          <a href="#" className="hover:text-mt-gold transition-colors w-fit">Press Kit</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4 font-montserrat text-xs tracking-widest uppercase text-mt-muted">
          <h4 className="text-white mb-2 font-bold">Social Media</h4>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/mtproductionofficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Follow MT Production on Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mt-gold hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mt-gold hover:text-black transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mt-gold hover:text-black transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <div className="font-poppins text-xs text-mt-muted/50">
          MT Production &copy; 2026. All rights reserved.
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 font-montserrat text-[10px] tracking-widest uppercase text-mt-muted hover:text-mt-gold transition-colors"
        >
          <span>Back To Top</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <ArrowUp size={14} />
          </div>
        </button>
      </div>
    </footer>
  );
}
