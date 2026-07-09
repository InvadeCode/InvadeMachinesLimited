import React, { useState, useEffect } from 'react';
import { 
  Microscope, Camera, ScanLine, Eye, Aperture, Cpu, Database, ArrowRight, ArrowUpRight, 
  MapPin, Menu, X, Globe2, Activity, ChevronDown, Layers, BarChart3, Network, ShieldCheck,
  Zap, Focus, MonitorPlay, Binary, Microchip, Beaker, TestTube2, Settings, Mail,
  Phone, Building, FileText, PieChart, ChevronRight, Briefcase, Search, Lightbulb, ShieldAlert, Code2,
  CheckCircle2
} from 'lucide-react';

// ---------------------------------------------------------
// IMAGE DICTIONARY & ASSETS
// ---------------------------------------------------------
const IMAGES = {
  heroBackground: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1920&q=80",
  visionLeft: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
  visionRight: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=1000&q=80",
  microscopy: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1600&q=80",
  digitalCameras: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80",
  machineVision: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  lifeSciences: "https://static.wixstatic.com/media/548938_ee986b9cde8a444e965b360d0e32cf9f~mv2.jpg",
  manufacturing: "https://static.wixstatic.com/media/548938_4bb00b6d0cc34170b0956cc0f8358c95~mv2.jpg",
  inspectionLabs: "https://static.wixstatic.com/media/548938_69de316ace644d248d6f4e3369e838af~mv2.jpg",
  aboutHero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  teamHero: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  contactHero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  applicationsHero: "https://images.unsplash.com/photo-1713371398479-4410ca153b1f?auto=format&fit=crop&w=1600&q=80",
  logo: "https://static.wixstatic.com/media/548938_9affdac24a7542fa808fa917c71400da~mv2.png",
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  integration: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80"
};

// ---------------------------------------------------------
// REUSABLE HOOK FOR SCROLL ANIMATIONS
// ---------------------------------------------------------
function usePageScroll(currentPage) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    setTimeout(handleScroll, 100); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);
}

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = IMAGES.microscopy;
};

// lucide-react no longer ships brand/logo icons, so LinkedIn is a small inline SVG
function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// ---------------------------------------------------------
// MAIN APP COMPONENT & ROUTER
// ---------------------------------------------------------
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      body { 
        font-family: 'Poppins', sans-serif; 
        background-color: #f8fafc; 
        overflow-x: hidden;
      }
      .tracking-ultra { letter-spacing: 0.25em; }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 4px; }
      html { scroll-behavior: smooth; }
      
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }

      @keyframes kenburns {
        0% { transform: scale(1.05) translate(0, 0); }
        100% { transform: scale(1.15) translate(-1%, -1%); }
      }
      .animate-kenburns {
        animation: kenburns 20s ease-in-out infinite alternate;
      }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 22s linear infinite;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { 
      label: 'About Us', 
      id: 'about',
      dropdown: [
        { label: 'Our Vision', id: 'about' },
        { label: 'Leadership Team', id: 'team' }
      ]
    },
    { 
      label: 'Products', 
      id: 'products-overview', 
      dropdown: [
        { label: 'Microscopy & IVF', id: 'microscopy' },
        { label: 'Digital Cameras', id: 'cameras' },
        { label: 'Machine Vision', id: 'machine-vision' }
      ] 
    },
    { label: 'Applications', id: 'applications' },
    { label: 'Clients', id: 'clients' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen w-full selection:bg-amber-500 selection:text-emerald-950 relative flex flex-col text-slate-900">
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-emerald-950 z-[200] transition-transform duration-700 flex flex-col justify-center items-center gap-6 text-white overflow-y-auto py-20 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-xl hover:bg-amber-500 hover:text-emerald-950 transition-colors">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center w-full">
            <button 
              onClick={() => {
                if (!item.dropdown) {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }
              }}
              className={`text-xl font-light tracking-widest uppercase transition-colors ${currentPage === item.id ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {item.label}
            </button>
            {item.dropdown && (
              <div className="flex flex-col items-center gap-4 mt-4 w-full bg-emerald-900/50 py-4">
                {item.dropdown.map(sub => (
                  <button 
                    key={sub.label} 
                    onClick={() => {
                      setCurrentPage(sub.id);
                      setMobileMenuOpen(false);
                    }} 
                    className="text-[13px] uppercase tracking-widest hover:text-amber-400 transition-colors text-emerald-100"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl py-3 text-white mx-[2%] mt-4 rounded-xl' 
        : 'bg-transparent border-transparent py-4 text-white rounded-none'
      }`}>
        <div className="flex justify-between items-center px-[3%] w-full">
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer flex flex-col items-center justify-center gap-1 drop-shadow-md hover:scale-105 transition-transform duration-300">
             <div className="h-9 md:h-11 overflow-hidden flex items-start">
               <img src={IMAGES.logo} alt="Invade Machines Limited" className="h-[124%] w-auto max-w-none" />
             </div>
             <span className="text-[11px] md:text-[12px] font-normal tracking-wide leading-none whitespace-nowrap">INVADE MACHINES LIMITED</span>
          </button>
          
          {/* Main Menu Links */}
          <div className="hidden xl:flex items-center justify-end gap-10 text-[12px] font-semibold tracking-widest uppercase w-full pr-10 pl-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id || (item.dropdown && item.dropdown.some(sub => sub.id === currentPage));
              return (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => { if(!item.dropdown) setCurrentPage(item.id) }}
                    className={`flex items-center gap-2 uppercase transition-colors py-4 drop-shadow-sm ${
                      isActive ? 'text-amber-400' : 'text-emerald-50 hover:text-white'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 bg-amber-400 rounded-sm flex-shrink-0 shadow-[0_0_8px_#fbbf24]"></span>}
                    <span className="uppercase">{item.label}</span>
                    {item.dropdown && <ChevronDown size={14} strokeWidth={2} className="opacity-70" />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-64 bg-black border border-emerald-800/50 shadow-2xl rounded-xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col p-2">
                      {item.dropdown.map(subItem => (
                        <button 
                          key={subItem.label} 
                          onClick={() => setCurrentPage(subItem.id)}
                          className="text-left px-5 py-3.5 text-[11px] text-emerald-100 hover:bg-emerald-900 hover:text-amber-400 rounded-xl transition-colors tracking-widest uppercase font-semibold"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all duration-500 ${
              isScrolled 
              ? 'bg-amber-500 text-emerald-950 hover:bg-white hover:text-emerald-900 shadow-xl shadow-amber-500/20' 
              : 'bg-amber-500 text-emerald-950 border border-transparent hover:bg-white hover:border-white hover:text-emerald-950'
            }`}>
              GET IN TOUCH <ArrowRight size={14} />
            </button>
            <button className="xl:hidden text-white ml-auto" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Router Switch */}
      <div className="flex-grow bg-neutral-50">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'about' && <AboutContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'team' && <TeamContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'products-overview' && <ProductsOverviewContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'microscopy' && <MicroscopyContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'cameras' && <CamerasContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'machine-vision' && <MachineVisionContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'applications' && <ApplicationsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'clients' && <ClientsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} currentPage={currentPage} />}
      </div>

      {/* Global Footer */}
      <footer className="bg-emerald-950 text-emerald-50 pt-24 pb-12 relative z-10 border-t border-emerald-900 mt-auto">
        <div className="mx-[2%]">
        <div className="px-[3%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-4 lg:pt-6">
            <div className="flex flex-col items-center gap-2 mb-8 w-fit">
              <div className="h-11 overflow-hidden flex items-start">
                <img src={IMAGES.logo} alt="Invade Machines Limited" className="h-[124%] w-auto max-w-none opacity-90" />
              </div>
              <span className="text-[13px] font-normal tracking-wide leading-none text-emerald-50">INVADE MACHINES LIMITED</span>
            </div>
            <p className="text-emerald-200/60 font-light text-[14px] max-w-sm leading-relaxed mb-8 text-balance">
              Seeing is Believing. Offering world-class solutions in diversified fields by adding value through precision microscopy, smart cameras, and automated industrial vision.
            </p>
            <div className="flex gap-4">
              <button type="button" onClick={() => setCurrentPage('contact')} aria-label="Connect with us" className="w-10 h-10 flex items-center justify-center rounded-xl border border-emerald-800 text-emerald-300 hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 transition-all">
                <LinkedInIcon size={16} />
              </button>
              <a href="mailto:info@invademachines.com" aria-label="Email us" className="w-10 h-10 flex items-center justify-center rounded-xl border border-emerald-800 text-emerald-300 hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 transition-all">
                <Mail size={16} />
              </a>
              <button type="button" onClick={() => setCurrentPage('contact')} aria-label="Contact us" className="w-10 h-10 flex items-center justify-center rounded-xl border border-emerald-800 text-emerald-300 hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 transition-all">
                <Phone size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-6 grid grid-cols-2 gap-6">
             <div>
                <h4 className="text-[12px] font-bold tracking-widest uppercase text-amber-500 mb-6">Solutions</h4>
                <ul className="space-y-4 text-[14px] text-emerald-200/70 font-light">
                  <li><button onClick={() => setCurrentPage('microscopy')} className="hover:text-amber-400 transition-colors">Microscopy & IVF</button></li>
                  <li><button onClick={() => setCurrentPage('cameras')} className="hover:text-amber-400 transition-colors">Digital Cameras</button></li>
                  <li><button onClick={() => setCurrentPage('machine-vision')} className="hover:text-amber-400 transition-colors">Machine Vision</button></li>
                  <li><button onClick={() => setCurrentPage('applications')} className="hover:text-amber-400 transition-colors">Industries</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[12px] font-bold tracking-widest uppercase text-amber-500 mb-6">Company</h4>
                <ul className="space-y-4 text-[14px] text-emerald-200/70 font-light">
                 <li><button onClick={() => setCurrentPage('about')} className="hover:text-amber-400 transition-colors">Our Vision</button></li>
                 <li><button onClick={() => setCurrentPage('team')} className="hover:text-amber-400 transition-colors">Leadership</button></li>
                 <li><button onClick={() => setCurrentPage('clients')} className="hover:text-amber-400 transition-colors">Success Stories</button></li>
                 <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
                </ul>
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-xl bg-emerald-900/30 border border-emerald-800/50 flex items-start gap-4 hover:bg-emerald-900/50 transition-all duration-500">
                  <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[12px] font-bold tracking-widest uppercase text-emerald-400 mb-1">Corporate HQ</h4>
                      <p className="text-[14px] font-light leading-relaxed text-emerald-100">
                        2306-Solus Business Park,<br />
                        Hiranandani Estate, Thane - 400 607.<br/>
                        Maharashtra, BHARAT.
                      </p>
                  </div>
              </div>
              <div className="p-6 rounded-xl bg-emerald-900/30 border border-emerald-800/50 flex items-start gap-4 hover:bg-emerald-900/50 transition-all duration-500">
                  <Mail className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[12px] font-bold tracking-widest uppercase text-emerald-400 mb-1">Direct Support</h4>
                      <a href="mailto:info@invademachines.com" className="text-[14px] font-light leading-relaxed text-emerald-100 hover:text-amber-400 transition-colors">info@invademachines.com</a>
                  </div>
              </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium text-emerald-500 uppercase tracking-widest">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} INVADE MACHINES LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12">
            <button className="hover:text-amber-400 transition-all">Privacy Policy</button>
            <button className="hover:text-amber-400 transition-all">Terms of Use</button>
          </div>
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------
function HomeContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden z-0 pt-32 relative bg-black">
        <img src={IMAGES.heroBackground} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 animate-kenburns" alt="Precision optics" />
        {/* Softened the gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0"></div>

        <div className="relative z-10 flex flex-col items-start text-left px-[3%] w-full max-w-6xl mb-20">
          <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-xl border border-white/20 reveal-on-scroll visible">
            <div className="w-2.5 h-2.5 bg-amber-400 rounded-sm shadow-[0_0_12px_#fbbf24] animate-pulse"></div>
            <p className="text-[14px] font-semibold tracking-[0.3em] uppercase text-white">Welcome to Invade Machines</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter mb-6 text-white uppercase reveal-on-scroll visible leading-[1]">
            SEEING IS <br />
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300 drop-shadow-2xl">BELIEVING</span>
          </h1>
          <p className="text-[17px] font-light text-emerald-50 max-w-3xl leading-relaxed mb-10 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            Empowering research, life sciences, and industrial manufacturing with world-class optical solutions. From sub-micron IVF microscopy to high-speed automated machine vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 w-full reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button onClick={() => setPage('products-overview')} className="w-full sm:w-auto bg-amber-500 text-emerald-950 px-10 py-4 text-[12px] font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-emerald-900 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              EXPLORE PORTFOLIO
            </button>
            <button onClick={() => setPage('about')} className="group flex items-center justify-center gap-3 w-full sm:w-auto text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-amber-400 transition-all py-4">
              OUR VISION
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        
        <ChevronDown size={32} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-500 animate-bounce opacity-80 z-20" />
      </section>

      <main className="relative z-10 bg-neutral-50 rounded-t-xl shadow-[0_-30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
        
        {/* Core Competencies */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-white relative z-10 overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col items-center text-center mb-16">
               <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Precision Engineering</p>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-emerald-950 leading-[1.1] uppercase">
                 BUILT FOR COMPLEX <br /><span className="font-medium text-emerald-700">ANALYSIS & INSPECTION</span>
               </h2>
               <p className="text-black/60 font-light text-[17px] leading-relaxed max-w-3xl mt-6 text-balance">
                 Modern industries cannot rely on human visual limitations. We bring structure to complex manufacturing and research by integrating cutting-edge lenses, high-speed cameras, and proprietary software into a unified operating standard.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto">
              {[ 
                {icon: Microscope, title: "Stereo Microscopes", desc: "Large FOV & Long working distance with Ring, Goose Neck & Spot lighting.", route: 'microscopy'},
                {icon: Beaker, title: "Compound Microscopes", desc: "Upright & Inverted systems with Phase Contrast, Dark Field & DIC.", route: 'microscopy'},
                {icon: Camera, title: "Digital Cameras", desc: "USB2/3, Cooled CMOS & Smart Cameras capturing data at the edge.", route: 'cameras'},
                {icon: ScanLine, title: "Industrial Vision", desc: "Print inspection, Measurement, Sorting & Colour registration.", route: 'machine-vision'} 
              ].map((item, i) => (
                <div key={i} onClick={() => setPage(item.route)} className="p-8 bg-neutral-50 rounded-xl border-2 border-slate-300 shadow-lg hover:border-emerald-300 hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-emerald-600 transition-colors shadow-sm text-emerald-600 group-hover:text-white flex-shrink-0">
                      <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-emerald-950 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed flex-grow">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Partners */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-950 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
           <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll text-center relative z-10">
              <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-8">Our Global Brand Ecosystem</p>
              <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max items-center gap-16 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-[filter,opacity] duration-700 text-white animate-marquee">
                  {[0, 1].map((set) => (
                    <div key={set} className="flex items-center gap-16 md:gap-20 flex-shrink-0">
                       <span className="text-3xl font-bold tracking-tighter hover:text-blue-300 transition-colors cursor-default whitespace-nowrap">euromex</span>
                       <span className="text-3xl font-black tracking-widest hover:text-yellow-400 transition-colors cursor-default whitespace-nowrap">Nikon</span>
                       <span className="text-3xl font-bold tracking-tight hover:text-blue-400 transition-colors cursor-default whitespace-nowrap">TUCSEN</span>
                       <span className="text-3xl font-semibold tracking-tighter hover:text-red-400 transition-colors cursor-default whitespace-nowrap">BASLER</span>
                       <span className="text-2xl font-bold tracking-widest hover:text-orange-400 transition-colors cursor-default whitespace-nowrap">pixelr</span>
                       <span className="text-2xl font-medium tracking-tight hover:text-emerald-300 transition-colors cursor-default whitespace-nowrap">Vision Engineering</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </section>

        {/* Real Challenges -> Tech Solutions */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Application Areas</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                REAL CHALLENGES<br /><span className="font-medium text-emerald-700">PRECISE SOLUTIONS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                { icon: Beaker, color: 'text-rose-500', bg: 'bg-rose-50', title: "Clinical & IVF (Life Sciences)", solution: "Advanced micro-manipulator integration for ICSI & IMSI, providing unparalleled cellular clarity and uncompromised safety protocols.", img: IMAGES.lifeSciences, route: 'applications' },
                { icon: Binary, color: 'text-blue-500', bg: 'bg-blue-50', title: "Automated Manufacturing", solution: "Web viewing systems and presence/absence detection algorithms operating at line speeds exceeding 1000 units per minute.", img: IMAGES.manufacturing, route: 'applications' },
                { icon: Focus, color: 'text-emerald-500', bg: 'bg-emerald-50', title: "Material Science & Metallurgy", solution: "End-to-end setups from cutting, mounting, grinding, and polishing to highly detailed microscopic grain analysis.", img: IMAGES.inspectionLabs, route: 'applications' }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-lg border-2 border-slate-300 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                  <div className="h-[200px] lg:h-[260px] overflow-hidden relative flex-shrink-0">
                    <img src={item.img} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-6 border border-black/5 flex-shrink-0`}>
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight mb-3 text-emerald-950 leading-snug">{item.title}</h3>
                    <p className="text-black/60 font-light text-[17px] leading-relaxed mb-6 flex-grow">{item.solution}</p>
                    <button onClick={() => setPage(item.route)} className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-600 hover:text-emerald-900 transition-colors w-fit">
                      Explore Sectors <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 1: IMPACT METRICS --- */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900 rounded-xl blur-[150px] opacity-30 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto w-full relative z-10 reveal-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center divide-x-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center">
                <h3 className="text-5xl lg:text-7xl font-light text-amber-500 mb-4">15+</h3>
                <p className="text-[12px] font-bold tracking-widest uppercase text-emerald-300">Years of Excellence</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl lg:text-7xl font-light text-amber-500 mb-4">500+</h3>
                <p className="text-[12px] font-bold tracking-widest uppercase text-emerald-300">Systems Deployed</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl lg:text-7xl font-light text-amber-500 mb-4">&lt;1<span className="text-3xl">ms</span></h3>
                <p className="text-[12px] font-bold tracking-widest uppercase text-emerald-300">Logic Processing</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl lg:text-7xl font-light text-amber-500 mb-4">0</h3>
                <p className="text-[12px] font-bold tracking-widest uppercase text-emerald-300">Defect Tolerance</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: METHODOLOGY --- */}
        <section className="px-[3%] w-full py-[7vh] lg:py-[9vh] bg-neutral-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Our Methodology</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                FROM CONCEPT TO <span className="font-medium text-emerald-700">INTEGRATION</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-black/5 -translate-y-1/2 z-0"></div>
              
              {[
                { step: "01", icon: Lightbulb, title: "Discovery & Analysis", text: "We assess your production line speeds, lighting constraints, and precise defect criteria to formulate a bespoke visual architecture." },
                { step: "02", icon: Cpu, title: "Hardware Orchestration", text: "Selecting the exact lenses, high-speed cameras, and polarized lights required to capture perfect data points at extreme velocities." },
                { step: "03", icon: ShieldCheck, title: "Deployment & Support", text: "Seamless PLC integration, software calibration, and 24/7 technical backing to ensure zero downtime." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-slate-300 rounded-xl p-10 relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-emerald-950 text-[10px] tracking-widest font-black px-4 py-1.5 rounded-md shadow-md">STEP {item.step}</div>
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-black/5">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-emerald-950">{item.title}</h3>
                  <p className="text-black/60 font-light text-[17px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: TECHNICAL SUPPORT & SERVICING --- */}
        <section className="px-[3%] w-full py-[7vh] lg:py-[9vh] bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 w-full">
                <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Post-Installation Care</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                  MAINTENANCE & <span className="font-medium text-emerald-700">VALIDATION</span>
                </h2>
                <p className="text-black/60 font-light text-[17px] leading-relaxed mb-8">
                  Selling the equipment is only the beginning. In regulated sectors like pharmaceuticals and clinical research, regular calibration and documented validation are mandatory. We offer comprehensive Annual Maintenance Contracts (AMCs) to ensure zero downtime.
                </p>
                <ul className="space-y-4">
                  {[
                    "Preventative Maintenance & Deep Cleaning",
                    "Optical Calibration & Alignment",
                    "Software Updates & PSA-CFR 21 Validation",
                    "On-call Emergency Technical Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-emerald-950 font-medium text-[14px]">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-black/5 flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={14} className="text-emerald-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full bg-emerald-950 rounded-xl p-10 md:p-14 shadow-2xl relative border border-emerald-900 overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-xl blur-[80px] opacity-30"></div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-amber-500 border border-white/20">
                      <Settings size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4">Dedicated Service Hubs</h3>
                    <p className="text-emerald-100/70 font-light text-[17px] leading-relaxed mb-8">
                      Our factory-trained engineers are strategically located to provide rapid response times across major industrial corridors, ensuring your critical optical systems operate at peak efficiency year-round.
                    </p>
                    <button onClick={() => setPage('contact')} className="text-[11px] font-bold tracking-widest uppercase text-amber-400 hover:text-white transition-colors flex items-center gap-2 border-b border-amber-400 pb-1 w-fit">
                      Inquire About AMCs <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: TESTIMONIALS --- */}
        <section className="px-[3%] w-full py-[7vh] lg:py-[9vh] bg-neutral-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Industry Voices</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                PROVEN IN <span className="font-medium text-emerald-700">THE FIELD</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[17px] font-light leading-relaxed mb-8 relative z-10">
                  "Invade Machines completely transformed our packaging line. The ability to verify print quality and serialization codes at 800 bottles per minute with zero false-rejects is phenomenal. Their technical support is unmatched."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    SK
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-950">Plant Director</h4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Global Pharma Corp</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[17px] font-light leading-relaxed mb-8 relative z-10">
                  "For our critical metallurgical research, clarity is everything. The inverted microscopy setup provided by Invade Machines gave us unprecedented insight into our alloy grain structures, directly improving our aerospace component yield."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-950">Lead Metallurgist</h4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">AeroTech Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: FEATURED CASE STUDY --- */}
        <section className="px-[3%] w-full py-[7vh] bg-emerald-950 text-white relative overflow-hidden">
          <img src={IMAGES.manufacturing} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity" alt="Manufacturing Background" />
          <div className="max-w-[1440px] mx-auto w-full relative z-10 reveal-on-scroll">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <p className="text-amber-400 text-[14px] font-bold tracking-widest uppercase mb-4">Featured Integration</p>
                <h3 className="text-3xl lg:text-4xl font-light mb-6">High-Speed Ampoule Inspection</h3>
                <p className="text-emerald-100/70 leading-relaxed mb-6 font-light text-[17px]">
                  A leading vaccine manufacturer required absolute particulate detection in sealed glass ampoules moving at extremely high speeds. Human inspection was yielding a 3% false-pass rate.
                </p>
                <p className="text-emerald-100/70 leading-relaxed mb-8 font-light text-[17px]">
                  We integrated a custom 360-degree array of polarized backlights synced with Cooled CMOS GigE cameras. The result: 100% detection of sub-millimeter particles, zero false-passes, and a 40% increase in total line throughput.
                </p>
                <button onClick={() => setPage('machine-vision')} className="text-amber-400 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 hover:text-white transition-colors w-fit">
                  Explore Vision Solutions <ArrowRight size={16} />
                </button>
              </div>
              <div className="md:w-1/2 h-[300px] md:h-auto relative border-l border-white/10">
                <img src={IMAGES.machineVision} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-80" alt="Ampoule Inspection" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: CTA BANNER --- */}
        <section className="px-[3%] w-full py-[15vh] bg-amber-500 text-emerald-950 text-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mb-6">
              READY TO AUTOMATE <br /><span className="font-bold">YOUR INSPECTION?</span>
            </h2>
            <p className="text-emerald-900 font-medium text-[17px] max-w-2xl mx-auto mb-10">
              Stop relying on human limitations. Upgrade your line with industrial-grade optical intelligence.
            </p>
            <button onClick={() => setPage('contact')} className="bg-emerald-950 text-white px-10 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-white hover:text-emerald-950 transition-all shadow-xl hover:shadow-2xl">
              Talk to an Engineer
            </button>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// 2. ABOUT US (OUR VISION)
// ---------------------------------------------------------
function AboutContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.aboutHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="About Us" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-6">OUR VISION</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            ADDING VALUE <br /><span className="font-medium text-emerald-400">THROUGH VISION</span>
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed max-w-2xl">
              Invade Machines Limited exists to offer uncompromising quality in diversified fields. We bring global optical engineering to Bharat's most critical manufacturing and research hubs.
            </p>
          </div>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Section 1: Who We Are */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-[55%]">
                <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Who We Are</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  SEEING IS <br /><span className="font-medium">BELIEVING</span>
                </h2>
                <div className="space-y-6 text-black/60 font-light text-[17px] leading-relaxed">
                  <p>
                    Headquartered in Thane, Invade Machines Limited is an authorized distributor and integration partner for the world's leading brands in microscopy and machine vision, including Euromex (Netherlands), Nikon (Japan), and Basler.
                  </p>
                  <p>
                    We don't just sell equipment; we architect visual intelligence. From providing full PSA-CFR 21 compliant systems for strictly regulated pharmaceutical environments to delivering robust online inspection capabilities that sort and measure with sub-millisecond precision.
                  </p>
                  <p className="font-medium text-emerald-900 border-l-2 border-emerald-500 pl-4 bg-emerald-50 py-3 pr-4 rounded-r-xl border-t border-r border-b border-emerald-100">
                    Backed by dedicated technical service teams ensuring zero downtime for critical workflows.
                  </p>
                </div>
              </div>
              <div className="lg:w-[45%] w-full">
                 <div className="h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl relative border border-black/5">
                   <img src={IMAGES.microscopy} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Lab" />
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-black/5">
                     <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-1">Corporate HQ</p>
                     <p className="text-[15px] font-medium text-neutral-900">Solus Business Park, Thane</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Global Presence */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-emerald-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-16 lg:mb-24 max-w-5xl mx-auto">
              <p className="text-[14px] font-bold tracking-ultra text-amber-400 uppercase mb-6">The Mission</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-8 text-white">
                Engineering industrial perfection through <span className="font-medium text-amber-400">dependable hardware</span> and <span className="font-medium text-amber-400">scalable visual AI</span>.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.1)] border-emerald-500/30">
                <MapPin className="text-emerald-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[14px] font-bold tracking-ultra text-emerald-400/70 uppercase mb-2">Corporate HQ</p>
                <h3 className="text-2xl font-light text-white mb-4">Thane, India</h3>
                <p className="text-white/60 font-light text-[17px] leading-relaxed">
                  The operational core. Orchestrating machine vision integration, laboratory compliance, and direct engineering support across the subcontinent.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Globe2 className="text-blue-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[14px] font-bold tracking-ultra text-white/40 uppercase mb-2">Global Partnerships</p>
                <h3 className="text-2xl font-light text-white mb-4">International Sourcing</h3>
                <p className="text-white/60 font-light text-[17px] leading-relaxed">
                  Direct channels established with Euromex (Netherlands) and Nikon (Japan) ensuring priority access to world-class optical glass.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Network className="text-amber-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[14px] font-bold tracking-ultra text-white/40 uppercase mb-2">Edge Logistics</p>
                <h3 className="text-2xl font-light text-white mb-4">On-Site Deployment</h3>
                <p className="text-white/60 font-light text-[17px] leading-relaxed">
                  Strategic technical teams ensuring tight quality controls, robust software integration, and seamless last-mile calibration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What Sets Us Apart */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-12 lg:mb-16">
              <p className="text-[14px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The Invade Advantage</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-neutral-900">
                WHAT SETS US APART
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              <div className="lg:col-span-2 bg-emerald-900 text-white rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <Cpu size={40} className="text-emerald-400 mb-8 relative z-10" strokeWidth={1.5} />
                <h3 className="text-3xl font-light mb-4 relative z-10">Application-Led Engineering</h3>
                <p className="text-emerald-100/80 font-light text-[17px] max-w-md relative z-10 leading-relaxed">
                  We don't push generic catalog items. We deploy proprietary visual programs, customized lighting architectures, and predictive edge-logic directly onto your assembly line.
                </p>
              </div>
              <div className="bg-white border-2 border-slate-300 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <ShieldCheck size={36} className="text-amber-500 mb-6" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-neutral-900">Absolute Compliance</h3>
                  <p className="text-black/60 font-light text-[17px] leading-relaxed">
                    Delivering PSA-CFR 21 compliant systems built entirely on governance and long-term pharmaceutical partnerships.
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-slate-300 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <Network size={36} className="text-blue-500 mb-6" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-neutral-900">Zero Latency</h3>
                  <p className="text-black/60 font-light text-[17px] leading-relaxed">
                    Embedded AI processing on the sensor level guarantees defect sorting without slowing down line velocities.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 bg-neutral-900 text-white rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-end">
                <img src={IMAGES.manufacturing} onError={handleImageError} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" alt="Fields" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-end">
                  <div>
                    <Focus size={40} className="text-emerald-400 mb-6" strokeWidth={1.5} />
                    <h3 className="text-3xl font-light mb-4">Guaranteed Quality Control</h3>
                    <p className="text-white/60 font-light text-[17px] max-w-sm leading-relaxed">
                      Error rates are non-negotiable. We track outcomes through extreme pixel precision, ensuring multi-year yield stability.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <Activity size={24} className="text-white mb-2" />
                    <p className="text-[11px] font-bold tracking-widest uppercase text-amber-400">Measurable Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 3. TEAM / LEADERSHIP
// ---------------------------------------------------------
function TeamContent({ setPage, currentPage }) {
  usePageScroll(currentPage);

  const boardMembers = [
    { name: "Vishwas Datir", title: "General Manager - Sales" },
    { name: "Meenal Patwardhan", title: "Admin, Compliance, Finance & HR" },
    { name: "Sudhakar Rathod", title: "Sr. Executive - Technical Services" },
    { name: "Kaushik Lade", title: "Head - Technical Services - IVF" }
  ];

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.teamHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Leadership" />
        
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-emerald-400 uppercase mb-6">THE MINDS BEHIND THE LENS</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            LEADERSHIP <br />TEAM
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed max-w-2xl">
              Decades of combined expertise in optical engineering, industrial sales, and life science compliance.
            </p>
          </div>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Highlight Core Leader */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1200px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-emerald-500"></span>
                <p className="text-[14px] font-bold tracking-[0.2em] text-emerald-700 uppercase">A Message from Leadership</p>
                <span className="w-12 h-[1px] bg-emerald-500"></span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter text-neutral-900 leading-[1.15] mb-16 max-w-5xl">
                "Our focus has always been on delivering <span className="font-medium text-emerald-800">uncompromising optical precision</span> that scales across complex industries."
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start pt-12 lg:pt-16 border-t border-black/5">
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left w-full">
                 <div className="w-20 h-20 rounded-xl bg-emerald-50 border border-black/5 text-emerald-600 flex items-center justify-center mb-6">
                   <span className="text-xl font-medium tracking-widest">SP</span>
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-2">Shrirang Patwardhan</h3>
                 <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-8">Business Head - Microscopy<br/>Thane, India</p>
                 <a href="#" className="inline-flex items-center gap-3 text-white bg-emerald-950 hover:bg-emerald-800 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                   <LinkedInIcon size={16} />
                   <span className="text-[11px] font-bold tracking-widest uppercase">Connect</span>
                 </a>
              </div>
              <div className="md:w-2/3 space-y-6 text-black/60 font-light text-[17px] leading-relaxed w-full">
                <p className="text-xl text-black/80 font-medium mb-4">
                  Driving clinical and industrial standards through structured optical integrations.
                </p>
                <p>
                  Shrirang Patwardhan brings vast leadership experience across optical engineering and scientific sales. He has played a key role in shaping Invade Machines’ regional expansion and building disciplined technical protocols across our product lines.
                </p>
                <p>
                  As Business Head, he oversees strategic partnerships with global brands like Euromex and Nikon, ensuring that our integrations remain both technically advanced and dependably robust for everyday industrial operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of Team Grid */}
        <section className="px-[3%] w-full flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[14px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Core Divisions</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                DIRECTORS & CORE TEAM
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, i) => (
                <div key={i} className="bg-white border-2 border-slate-300 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between text-center">
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-emerald-50 text-emerald-600 border border-black/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-950 group-hover:text-white transition-colors duration-500">
                      <span className="text-lg font-medium tracking-widest">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-neutral-900 leading-snug">{member.name}</h3>
                    <p className="text-emerald-700/80 font-bold text-[10px] tracking-widest uppercase leading-relaxed">{member.title}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-center">
                    <a href="#" className="inline-flex items-center gap-2 text-black/30 hover:text-emerald-600 transition-colors">
                      <LinkedInIcon size={18} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 4. PRODUCTS OVERVIEW PAGE
// ---------------------------------------------------------
function ProductsOverviewContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.digitalCameras} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Solutions Overview" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-6">OUR PORTFOLIO</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-10 text-white">
            COMPREHENSIVE <br /><span className="font-light text-emerald-300">SOLUTIONS</span>
          </h1>
          <div className="border-l-2 border-amber-500 pl-6 ml-2">
            <p className="text-emerald-100 font-light text-[17px] leading-relaxed max-w-2xl">
              A meticulously curated suite of optical hardware and software systems designed to solve visual challenges across research, medical, and industrial domains.
            </p>
          </div>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Core Systems</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-emerald-950">
                THE OPTICAL <span className="font-light">STACK</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                { id: 'microscopy', title: 'Microscopy & IVF', desc: 'Upright, Stereo, Fluorescence, and Inverted setups tailored for cellular and metallurgical analysis.', img: IMAGES.microscopy, icon: Microscope },
                { id: 'cameras', title: 'Digital Cameras', desc: 'Smart cameras, High-Speed, and Cooled CMOS sensors capturing data at the edge.', img: IMAGES.digitalCameras, icon: Camera },
                { id: 'machine-vision', title: 'Machine Vision', desc: 'Online inspection, color registration, and automated defect sorting directly on the assembly line.', img: IMAGES.machineVision, icon: ScanLine }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-lg border-2 border-slate-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer hover:border-amber-400 hover:-translate-y-2" onClick={() => setPage(item.id)}>
                  <div className="h-[260px] overflow-hidden relative flex-shrink-0">
                    <img src={item.img} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors border border-emerald-100">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-emerald-950 leading-snug tracking-tight">{item.title}</h3>
                    <p className="text-emerald-800/70 font-light text-[17px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <button className="mt-auto flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-emerald-700 group-hover:text-amber-500 transition-colors w-fit">
                      Explore Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A. SOLUTIONS - MICROSCOPY & IVF
// ---------------------------------------------------------
function MicroscopyContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Microscopy" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">DIVISION 01</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            MICROSCOPY <span className="font-light text-emerald-300">& IVF</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Partnering with Euromex and Nikon to bring extreme clarity to biological and industrial samples.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%] space-y-20">
          
          {/* Intro Section */}
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[50%]">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">LIFE AT <span className="font-light text-emerald-700">SUB-MICRON</span></h2>
              <p className="text-emerald-800/80 leading-relaxed mb-6">
                Our microscopy division handles diverse requirements ranging from educational setups to complex inverted microscopes equipped with micro-manipulators for ICSI & IMSI procedures.
              </p>
              <p className="text-emerald-800/80 leading-relaxed">
                We provide full hardware integrations including polarized and fluorescence capabilities for material analysis and cutting-edge biological research.
              </p>
            </div>
            <div className="lg:w-[50%] w-full h-[350px] rounded-xl overflow-hidden shadow-xl">
              <img src={IMAGES.lifeSciences} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Life Sciences" />
            </div>
          </section>

          {/* Detailed Hardware Section */}
          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[14px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Hardware</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                OPTICAL ARCHITECTURES
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Search size={28}/></div>
                  <h3 className="text-2xl font-medium text-emerald-950 mb-4">Stereo Microscopes</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed mb-6">Offering 3D images with large fields of view and long working distances. Ideal for Zoology, Forensic Science, Mining, and PCB Inspection. Minimal sample preparation required.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Boom stands & Coarse/Fine columns</li>
                    <li>• Ring Lights & Spot Lights</li>
                    <li>• Tiltable mirrors & Polarizers</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Microscope size={28}/></div>
                  <h3 className="text-2xl font-medium text-emerald-950 mb-4">Upright Compound</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed mb-6">Widely used for Clinical Diagnostics and Material Science. Features Halogen/LED illumination with high-res multi-objective nosepieces.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Phase Contrast for live cells</li>
                    <li>• Strain-free POL objectives</li>
                    <li>• Motorised joystick research ops</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Beaker size={28}/></div>
                  <h3 className="text-2xl font-medium text-emerald-950 mb-4">Inverted Setups</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed mb-6">Light source above, objectives below. Observe live cells in flasks without disruption or study heavy metallurgical polished samples.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• IVF ICSI & IMSI manipulators</li>
                    <li>• Metallurgical grain analysis</li>
                    <li>• Stem Cell observation</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* DIGITAL CONNECTIVITY & ERGONOMICS */}
          <section className="reveal-on-scroll px-[3%] w-full py-[12vh] bg-emerald-950 text-white relative overflow-hidden rounded-xl shadow-2xl mt-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-[120px] opacity-40 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-6">The Digital Lab</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-white">
                  CONNECTED <br /><span className="font-medium text-amber-400">INTELLIGENCE</span>
                </h2>
                <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed mb-8">
                  Modern laboratories demand more than just visual clarity; they require absolute data integrity, seamless reporting, and ergonomic sustainability for prolonged scientific analysis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-emerald-800 pt-8">
                  <div className="bg-emerald-900/50 p-6 rounded-xl border border-emerald-800 shadow-sm">
                    <Database size={24} className="text-amber-500 mb-4" strokeWidth={1.5} />
                    <h4 className="text-[15px] font-medium text-white mb-2">Pixelr Integration</h4>
                    <p className="text-[12px] text-emerald-200/60 font-light leading-relaxed">Direct tethering to our Pixelr software suite for automated particle size analysis and report generation.</p>
                  </div>
                  <div className="bg-emerald-900/50 p-6 rounded-xl border border-emerald-800 shadow-sm">
                    <Eye size={24} className="text-amber-500 mb-4" strokeWidth={1.5} />
                    <h4 className="text-[15px] font-medium text-white mb-2">Optical Ergonomics</h4>
                    <p className="text-[12px] text-emerald-200/60 font-light leading-relaxed">Eyepiece-less designs and tilting binocular heads to prevent operator fatigue during extended procedures.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                <div className="h-[250px] rounded-xl overflow-hidden shadow-xl border border-emerald-800 transform translate-y-8">
                  <img src={IMAGES.inspectionLabs} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Digital Lab 1" />
                </div>
                <div className="h-[250px] rounded-xl overflow-hidden shadow-xl border border-emerald-800">
                  <img src={IMAGES.microscopy} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Digital Lab 2" />
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="reveal-on-scroll bg-white p-10 md:p-14 rounded-xl shadow-lg border-2 border-slate-300 mt-16 text-center">
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-emerald-600 mb-10">Sample Preparation & Analysis Workflow</h4>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 font-bold text-sm tracking-wider uppercase">
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-slate-300 rounded-xl bg-neutral-50 shadow-md text-emerald-950">Cutting</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-slate-300 rounded-xl bg-neutral-50 shadow-md text-emerald-950">Mounting</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-slate-300 rounded-xl bg-neutral-50 shadow-md text-emerald-950">Grinding</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-slate-300 rounded-xl bg-neutral-50 shadow-md text-emerald-950">Polishing</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-amber-500 rounded-xl bg-amber-50 text-amber-600 shadow-md">Analysis</div>
              </div>
          </section>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5B. SOLUTIONS - DIGITAL CAMERAS
// ---------------------------------------------------------
function CamerasContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.digitalCameras} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Digital Cameras" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">DIVISION 02</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            DIGITAL <span className="font-light text-emerald-300">CAMERAS</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Capturing data at the speed of manufacturing. From USB3 entry-level sensors to intelligent edge-processing smart cameras.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%] space-y-20">
          <section className="reveal-on-scroll flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <div className="lg:w-[50%]">
              <p className="text-[14px] font-bold tracking-ultra text-emerald-600 uppercase mb-6">Data Capture</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                SENSORS THAT <br /><span className="font-medium">THINK</span>
              </h2>
              <div className="space-y-6 text-black/60 font-light text-[17px] leading-relaxed mb-10">
                <p>Our camera division features elite setups including the Basler ace 2 series and TrueChrome interfaces. We don't just capture images; we capture actionable logic.</p>
                <p>Equipped for fluorescence, high-speed sorting, and extreme low-light environments (Cooled CMOS), these cameras act as the digital retinas for automated systems.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-8 rounded-xl shadow-lg border-2 border-slate-300 hover:border-emerald-400 hover:shadow-xl transition-all">
                  <Zap className="text-amber-500 mb-4" size={32} strokeWidth={1.5} />
                  <h4 className="text-lg font-medium text-emerald-950 mb-1">High Speed</h4>
                  <p className="text-[13px] text-black/50 font-light">Framerate optimization for fast-moving lines.</p>
                </div>
                <div className="bg-neutral-50 p-8 rounded-xl shadow-lg border-2 border-slate-300 hover:border-emerald-400 hover:shadow-xl transition-all">
                  <Microchip className="text-amber-500 mb-4" size={32} strokeWidth={1.5} />
                  <h4 className="text-lg font-medium text-emerald-950 mb-1">Smart Logic</h4>
                  <p className="text-[13px] text-black/50 font-light">Edge processing embedded directly in the sensor.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl relative border border-black/5">
              <img src={IMAGES.digitalCameras} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Camera Sensors" />
            </div>
          </section>

          {/* Environmental Resilience */}
          <section className="reveal-on-scroll bg-white py-[10vh] px-[5%] rounded-xl shadow-lg border-2 border-slate-300 mt-16">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Environmental Resilience</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                PERFORMANCE UNDER <span className="font-medium text-emerald-800">PRESSURE</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed">
                Industrial sensors must survive environments that destroy standard consumer electronics. Our deployments are rated for extreme conditions.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Thermal Resistance', text: 'Operational stability in extreme factory heat or cold storage.', icon: Activity },
                { title: 'IP67/69K Housings', text: 'Complete protection against washdowns, dust, and particulates.', icon: ShieldCheck },
                { title: 'Vibration Tolerance', text: 'Maintaining sub-pixel calibration despite heavy machinery vibrations.', icon: Zap },
                { title: 'Cooled CMOS', text: 'Thermoelectric cooling to reduce noise in extreme low-light fluorescence.', icon: Code2 }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-8 shadow-lg border-2 border-slate-300 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-black/5 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-[15px] font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="reveal-on-scroll bg-emerald-950 text-white p-10 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden mt-16">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-light text-white mb-10">Camera Technologies We Deploy</h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-white/80 font-light text-[15px]">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Tucsen Photonics (Michrome, TrueChrome)
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Basler (ace 2, High Speed)
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Entry Level & Smart Cameras
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    USB2, USB3 & Cooled CMOS
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 md:col-span-2 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Fluorescence specific ultra-low light sensors
                  </div>
               </div>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5C. SOLUTIONS - MACHINE VISION
// ---------------------------------------------------------
function MachineVisionContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.machineVision} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Machine Vision" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-4">DIVISION 03</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            MACHINE <span className="font-light text-emerald-300">VISION</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Automated inline inspection systems ensuring absolute product integrity, zero defects, and perfect compliance across manufacturing lines.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto px-[3%] space-y-20 text-center">
            
            <div className="reveal-on-scroll max-w-4xl mx-auto">
              <p className="text-[14px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Industrial Inspection</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                FLAWLESS <span className="font-medium text-emerald-800">EXECUTION</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-16">
                Our Machine Vision architectures eliminate human error. We integrate special purpose industrial lights, lenses, and logic software to inspect, measure, and verify at speeds humanly impossible.
              </p>
            </div>

            <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MonitorPlay, title: 'Print Inspection', text: 'Real-time print verification & web viewing.' },
                { icon: Network, title: 'Track & Trace', text: 'Serialization and logistics compliance mapping.' },
                { icon: Layers, title: 'Sorting & Grading', text: 'High-speed automated presence/absence sorting.' },
                { icon: Binary, title: 'Measurement', text: 'Sub-millimeter color registration & dimensional logic.' }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-50 border-2 border-slate-300 rounded-xl p-8 shadow-lg flex flex-col items-center hover:shadow-xl hover:border-emerald-400 transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 border border-black/5 text-emerald-600 shadow-sm">
                     <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-emerald-950">{item.title}</h3>
                  <p className="text-black/60 font-light text-[13px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS OF VISION */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Integration Architecture</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                THE FOUR PILLARS OF <span className="font-medium text-emerald-800">VISION</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed">
                A successful automated inspection system requires four distinct elements working in absolute, synchronized harmony. We engineer all four.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-emerald-200 -translate-y-1/2 z-0"></div>
              {[
                { step: '01', title: 'Illumination', desc: 'Custom strobe and polarized lighting to highlight defects and eliminate ambient factory noise.' },
                { step: '02', title: 'Optics', desc: 'Telecentric and low-distortion lenses to capture flat, geometrically accurate data.' },
                { step: '03', title: 'Capture', desc: 'High-framerate global shutter sensors that freeze motion blur perfectly.' },
                { step: '04', title: 'Processing', desc: 'Deterministic edge-software that analyzes pixels and triggers PLC reject gates in milliseconds.' }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-300 relative z-10 hover:-translate-y-2 transition-all">
                  <div className="text-amber-500 font-bold text-3xl mb-4">{pillar.step}</div>
                  <h4 className="text-[16px] font-bold text-emerald-950 mb-3">{pillar.title}</h4>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Software & Ergonomics Section */}
        <section className="px-[3%] w-full py-[12vh] lg:py-[15vh] bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="bg-neutral-50 p-10 lg:p-16 rounded-xl shadow-lg border-2 border-slate-300 text-left grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h3 className="text-3xl font-light text-emerald-950 mb-8">Software & Ergonomics</h3>
                 <ul className="space-y-6 text-black/70 font-light">
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><strong className="font-medium text-black">Pixelr Software:</strong> Tailored for Vision, Particle Size Analysis, and HT Microhardness testing.</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><strong className="font-medium text-black">Vision Engineering:</strong> Eyepiece-less Inspection, Video Measuring, CMM capabilities.</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><em>Key Models:</em> Mantis, ERGO, PIXO, IOTA, Lynx EVO, DRV, TVM Series.</div>
                    </li>
                 </ul>
              </div>
              <div className="bg-emerald-950 p-10 rounded-xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-600 blur-[60px] opacity-30 rounded-xl pointer-events-none"></div>
                  <h4 className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-8 relative z-10">Key Integrations</h4>
                  <div className="space-y-4 font-light text-emerald-100 text-[15px] relative z-10">
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> Special Purpose Industrial Lenses</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> High-fidelity Baluns & Cables</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> Dedicated Lighting Controllers</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> PLC / SCADA Data Handoffs</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6. APPLICATIONS PAGE
// ---------------------------------------------------------
function ApplicationsContent({ currentPage }) {
  usePageScroll(currentPage);
  
  const markets = [
    "Cytology", "Dermatology", "Veterinary Science", "Bacteriology", "Cell Biology", "Entomology", "Virology", "Toxicology", 
    "Embryology", "Genetics", "Microbiology", "Agronomy & Forestry", "Marine Biology", "Oncology", "Horticulture", "Taxonomy", 
    "Bio-Chemistry", "Pathology", "Pharmaceutics", "Environmental Sci", "Steel Making", "Electronics", "Cement Manufacturing", 
    "Space Science", "Defence", "Forensic", "Ocean Research", "Semiconductors", "Automotive", "Packaging", "Bio Medical Devices", 
    "Water Treatment", "Food & Beverage", "Pharmaceutical", "Nutraceuticals", "Printing", "Petrology", "Soil Testing", 
    "Gems & Jewellery", "Avionics"
  ];

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.applicationsHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Industries We Serve" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">INDUSTRIES WE SERVE</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            MARKET <span className="font-light text-emerald-300">SEGMENTS</span>
          </h1>
          <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed max-w-2xl">
            Our precision instruments power research and quality control across every major industry.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%] space-y-24">
          
          <section className="reveal-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                GLOBAL SECTORS
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Aerospace & Defense", icon: Globe2 },
                    { title: "Automobiles", icon: Settings },
                    { title: "Chemicals & Oil/Gas", icon: Beaker },
                    { title: "Electronics & IT", icon: Cpu },
                    { title: "Food Processing", icon: MonitorPlay },
                    { title: "Gems & Jewellery", icon: Aperture },
                    { title: "Pharmaceuticals", icon: Activity },
                    { title: "Textile & Leather", icon: Layers }
                ].map((s,i) => (
                    <div key={i} className="flex items-center gap-5 p-6 bg-white border-2 border-slate-300 rounded-xl text-emerald-950 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div className="bg-emerald-50 p-3 rounded-xl text-amber-500 border border-emerald-100 group-hover:bg-amber-500 group-hover:text-white transition-colors"><s.icon size={24} strokeWidth={1.5}/></div>
                        {s.title}
                    </div>
                ))}
            </div>
          </section>

          {/* --- NEW SECTION: STRICT COMPLIANCE --- */}
          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center bg-white rounded-xl p-10 lg:p-16 border-2 border-slate-300 shadow-lg">
              <div className="lg:w-1/2">
                <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Regulatory Standards</p>
                <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                  STRICT <span className="font-medium text-emerald-800">COMPLIANCE</span>
                </h2>
                <p className="text-black/60 font-light text-[17px] leading-relaxed mb-6">
                  In highly regulated sectors like Pharmaceuticals and Bio-Medical devices, hardware is useless without compliant software. 
                </p>
                <p className="text-black/60 font-light text-[17px] leading-relaxed mb-8">
                  Our integrations natively support <strong className="font-bold text-black">FDA 21 CFR Part 11</strong>, ensuring that all electronic records, digital signatures, and audit trails are completely secure, immutable, and exportable.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">CFR 21 Part 11</span>
                  <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">GMP Ready</span>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-md text-center">
                    <ShieldAlert className="text-emerald-500 mb-4 mx-auto" size={32} />
                    <h4 className="font-bold text-emerald-950 text-sm mb-2">Audit Trails</h4>
                    <p className="text-[12px] text-black/50 leading-relaxed">Automated logging of every system parameter change.</p>
                 </div>
                 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-md text-center">
                    <Database className="text-emerald-500 mb-4 mx-auto" size={32} />
                    <h4 className="font-bold text-emerald-950 text-sm mb-2">Data Integrity</h4>
                    <p className="text-[12px] text-black/50 leading-relaxed">Immutable storage preventing local record tampering.</p>
                 </div>
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Specific Consumer & Medical Applications</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-10 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><Lightbulb size={18}/></div> Health-Care & FMCG
                    </h4>
                    <p className="text-black/60 font-light text-[17px] leading-relaxed">Inspection of Platinum/Blonde hair treatments, Toothbrushes, Hair Oils, Hair Colors, Toothpaste, Nail Polish, and Anti-dandruff formulations.</p>
                </div>
                <div className="p-10 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><TestTube2 size={18}/></div> Pharma Dosage Forms
                    </h4>
                    <p className="text-black/60 font-light text-[17px] leading-relaxed">Quality control for Tablets, Capsules, Creams & Cosmetics, IVs (Injectables), Sprays, Syrups, and Drops.</p>
                </div>
                <div className="p-10 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><Microscope size={18}/></div> Advanced Research
                    </h4>
                    <p className="text-black/60 font-light text-[17px] leading-relaxed">Metal Analysis, Biological Studies, and Advanced Material testing (e.g., Artery Stents down to 0.5mm precision).</p>
                </div>
            </div>
          </section>

          <section className="reveal-on-scroll bg-emerald-950 p-10 md:p-20 rounded-xl text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-xl blur-[120px] opacity-30 pointer-events-none"></div>
             <div className="relative z-10 text-center">
                <h2 className="text-4xl font-light mb-12">Complete Application Matrix</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
                    {markets.map(m => (
                        <span key={m} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-[13px] font-light tracking-wider hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 transition-colors cursor-default shadow-sm text-center">{m}</span>
                    ))}
                </div>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 7. SUCCESS STORIES (Clients)
// ---------------------------------------------------------
function ClientsContent({ currentPage }) {
  usePageScroll(currentPage);
  const [expandedSectors, setExpandedSectors] = useState({});
  const toggleSector = (i) => setExpandedSectors(prev => ({ ...prev, [i]: !prev[i] }));

  const institutions = [
      "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (MUMBAI)",
      "Indian Institute of Technology (ISM) Dhanbad",
      "Mehrangarh Museum Trust",
      "Kolkata Centre For Creativity",
      "MAP (Museum of Art & Photography)",
      "MIT World Peace University (Pune)",
      "Cama & Albless Hospitals",
      "Agharkar Research Institute",
      "National Centre for Cell Science (NCCS)",
      "Bharati Vidyapeeth University",
      "BEL Optronic Devices Limited",
      "CSIR - National Institute of Oceanography",
      "Actorius Innovations and Research Co."
  ];

  const corporateSectors = [
      { name: "Pharma & Healthcare", brands: "Pfizer, GSK, Sun Pharma, Lupin, Sanofi, Novartis, Wockhardt, Serum Institute, Johnson & Johnson, Cipla, Hikal, Emcure, Abbott, Glenmark, Piramal, Alkem", moreBrands: "Zydus Cadila, Torrent Pharma, Dr. Reddy's, Biocon, Mankind Pharma, Divi's Laboratories, Aurobindo Pharma" },
      { name: "Automotive & Engineering", brands: "Volvo, Bosch, Tata Motors, Mahindra, Ashok Leyland, Bajaj, Fiat, Mercedes-Benz, Audi, SKF, Kirloskar, L&T, JCB, CEAT", moreBrands: "Maruti Suzuki, Hyundai, Renault, Hero MotoCorp, TVS Motor, Cummins, Yamaha" },
      { name: "Chemicals & Oil", brands: "Asian Paints, PPG, Dow, Henkel, Dr. Fixit, BASF, Tata Chemicals, Reliance, Saudi Aramco, Shell, Nayara Energy, Vedanta", moreBrands: "ONGC, IOCL, BPCL, HPCL, Pidilite, Akzo Nobel, DuPont" },
      { name: "FMCG & Food", brands: "Parle, Marico, L'Oreal, Coca-Cola, PepsiCo, Bisleri, McCain, Godrej, Hindustan Unilever, Mondelez, Mother Dairy, Britannia, ITC, Kellogg's", moreBrands: "Nestle, Amul, Haldiram's, Dabur, Patanjali, Perfetti Van Melle" },
      { name: "IT, Electronics & Others", brands: "Microsoft, TCS, Wipro, IBM, Infosys, Philips, Honeywell, Bharat Electronics, Reliance Jio, Bombay Dyeing, Raymond", moreBrands: "Samsung, LG, HCL Technologies, Tech Mahindra, Siemens, ABB" }
  ];

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.integration} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Clients Hero" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR NETWORK</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            SUCCESS <span className="font-light text-emerald-300">STORIES</span>
          </h1>
          <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed max-w-2xl">
            Trusted by the foremost educational, research, and corporate entities across Bharat and beyond.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <div className="max-w-[1440px] mx-auto px-[3%] space-y-24">
          
          {/* --- NEW SECTION: FEATURED DEPLOYMENT --- */}
          <section className="reveal-on-scroll">
            <div className="bg-emerald-950 rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-700 blur-[100px] opacity-30 rounded-xl pointer-events-none"></div>
                <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4 relative z-10">Featured Integration</p>
                <h3 className="text-3xl md:text-4xl font-light mb-6 relative z-10">Global Pharma Major: <span className="font-bold">20-Line Overhaul</span></h3>
                <p className="text-emerald-100/80 text-[17px] font-light leading-relaxed mb-6 relative z-10">
                  When one of India's largest vaccine manufacturers faced stringent US FDA audits regarding their track-and-trace serialization, they turned to Invade Machines Limited.
                </p>
                <p className="text-emerald-100/80 text-[17px] font-light leading-relaxed mb-8 relative z-10">
                  We engineered and deployed 20 independent Machine Vision nodes across their facility in under 45 days. The system achieved a 100% read rate on 2D matrix codes moving at 600 units per minute, securing their export compliance and drastically reducing manual QA overhead.
                </p>
                <div className="flex items-center gap-6 relative z-10">
                   <div className="flex flex-col">
                     <span className="text-3xl font-bold text-amber-400">100%</span>
                     <span className="text-[10px] uppercase tracking-widest text-emerald-300">Code Read Rate</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-3xl font-bold text-amber-400">&lt;45</span>
                     <span className="text-[10px] uppercase tracking-widest text-emerald-300">Days to Deploy</span>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                <img src={IMAGES.manufacturing} onError={handleImageError} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-80" alt="Factory Line" />
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Eminent Installations & Institutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {institutions.map((inst, i) => (
                    <div key={i} className="p-8 border-2 border-slate-300 rounded-xl bg-white shadow-lg flex items-start gap-5 hover:border-emerald-400 hover:shadow-xl transition-all group">
                        <div className="bg-emerald-50 p-3 rounded-xl shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors border border-emerald-100">
                          <Building className="text-amber-500 group-hover:text-white" size={20} strokeWidth={1.5} />
                        </div>
                        <p className="font-medium text-[14px] text-emerald-950 pt-1 leading-snug">{inst}</p>
                    </div>
                ))}
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Corporate Clientele by Sector</h2>
            <div className="grid lg:grid-cols-2 gap-8">
                {corporateSectors.map((sector, i) => (
                    <div key={i} className="p-10 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center gap-5 mb-6">
                           <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                              <Briefcase size={24} strokeWidth={1.5} />
                           </div>
                           <h3 className="text-2xl font-medium text-emerald-950">{sector.name}</h3>
                        </div>
                        <p className="text-black/60 leading-relaxed font-light text-[17px] pl-16 md:pl-[4.5rem]">
                          {sector.brands}
                          {expandedSectors[i] && <>, {sector.moreBrands}</>}
                          {', '}
                          <button
                            type="button"
                            onClick={() => toggleSector(i)}
                            className="text-emerald-600 italic font-medium underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800 transition-colors"
                          >
                            {expandedSectors[i] ? 'show less' : 'and many more'}
                          </button>.
                        </p>
                    </div>
                ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 8. CONTACT PAGE 
// ---------------------------------------------------------
function ContactContent({ currentPage }) {
  usePageScroll(currentPage);
  const [form, setForm] = useState({ name: '', email: '', requirement: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`System Requirement Enquiry — ${form.requirement || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRequirement: ${form.requirement}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@invademachines.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.contactHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Contact" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">CONNECT</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
            START A <br /><span className="font-light text-emerald-300">CONVERSATION</span>
          </h1>
          <div className="border-l-2 border-amber-500 pl-6 ml-2">
            <p className="text-emerald-100 font-light text-[17px] leading-relaxed max-w-2xl">
              Whether you are an institution seeking microscopy upgrades or a manufacturer needing robust automated inspection lines, our team is ready to engineer a solution.
            </p>
          </div>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              <div className="lg:w-[50%] w-full">
                <h3 className="text-3xl font-light uppercase tracking-widest text-emerald-900 mb-10">Send a Direct Inquiry</h3>
                <form className="space-y-8 w-full" onSubmit={handleSubmit} noValidate>
                   <div>
                     <label className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Full Name</label>
                     <input type="text" value={form.name} onChange={handleChange('name')} className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[15px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Email Address</label>
                     <input type="email" value={form.email} onChange={handleChange('email')} className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[15px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm" placeholder="john@example.com" />
                   </div>
                   <div>
                     <label className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">System Requirement</label>
                     <input type="text" value={form.requirement} onChange={handleChange('requirement')} className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[15px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm" placeholder="Microscopes, Cameras, Vision Systems" />
                   </div>
                   <div>
                     <label className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Message</label>
                     <textarea value={form.message} onChange={handleChange('message')} className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[15px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm h-36 resize-none" placeholder="Tell us about your technical needs..."></textarea>
                   </div>
                   {error && (
                     <p className="text-[13px] font-medium text-rose-600">{error}</p>
                   )}
                   {status === 'sent' && (
                     <p className="flex items-center gap-2 text-[13px] font-medium text-emerald-700">
                       <CheckCircle2 size={16} /> Your email client should now be open with your message pre-filled — hit send to reach us directly.
                     </p>
                   )}
                   <button type="submit" className="bg-emerald-950 text-white px-12 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-amber-500 hover:text-emerald-950 transition-colors mt-6 w-full sm:w-auto shadow-xl">
                     Submit Request
                   </button>
                </form>
              </div>

              <div className="lg:w-[50%] w-full bg-emerald-950 text-white rounded-xl p-10 md:p-14 border border-emerald-900 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-800 rounded-xl blur-[120px] opacity-40 pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 rounded-xl blur-[100px] opacity-20 pointer-events-none"></div>

                 <div className="relative z-10 mb-12">
                   <img src={IMAGES.logo} alt="Invade Machines Limited" className="h-16 md:h-20 w-auto object-contain mb-6 drop-shadow-md opacity-90" />
                   <h1 className="text-3xl font-light mb-2">Invade Machines Limited</h1>
                   <p className="text-amber-500 text-[14px] font-bold tracking-widest uppercase">Corporate Directory</p>
                 </div>
                 
                 <div className="space-y-10 relative z-10">
                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm text-amber-500">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold mb-2">Headquarters</h4>
                       <p className="text-emerald-100 text-[17px] font-light leading-relaxed mb-1">
                         2306-Solus Business Park, Hiranandani Estate,<br/>
                         Thane - 400 607. <br/>
                         Maharashtra, BHARAT
                       </p>
                     </div>
                   </div>

                   <div className="w-full h-[1px] bg-white/10"></div>

                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm text-amber-500">
                       <Mail size={20} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold mb-2">Direct Email</h4>
                       <a href="mailto:info@invademachines.com" className="text-emerald-100 text-[15px] font-light leading-relaxed hover:text-amber-400 transition-colors">
                         info@invademachines.com
                       </a>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
