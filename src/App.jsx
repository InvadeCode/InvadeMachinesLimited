import React, { useState, useEffect } from 'react';
import { 
  Microscope, Camera, Sprout, Coffee, ScanLine, Eye, Aperture, Cpu, Database, ArrowRight,
  MapPin, Menu, X, Globe2, Activity, ChevronDown, Layers, BarChart3, Network, ShieldCheck,
  Zap, Focus, MonitorPlay, Binary, Microchip, Beaker, TestTube2, Settings, Mail,
  Phone, Building, FileText, PieChart, ChevronRight, Briefcase, Search, Lightbulb, ShieldAlert,
  CheckCircle2,
  Box, Cog, Clock, Crosshair, Users, BookOpen, Headphones, Truck, Wrench, Shield, Key,
  ZapOff, Thermometer, Anchor, Target, Sun, FileQuestion, Calendar
} from 'lucide-react';
const Bot = Cpu;

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
  integration: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
  coffee: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1600&q=80",
  water: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1600&q=80",
  oliveOil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=80",
  silos: "https://images.unsplash.com/photo-1588667508496-e17f09f069f1?auto=format&fit=crop&w=1600&q=80",
  agro: "https://images.unsplash.com/photo-1592982537447-6f2b6c0c2912?auto=format&fit=crop&w=1600&q=80",
  agroGrapes: "/agro/grape.avif",
  agroCitrus: "/agro/citrus.jpg",
  agroSugarcane: "/agro/sugarane.jpg",
  agroSeed: "/agro/seed.webp",
  agroCrop: "/agro/pesticides.jpg",
  agroCotton: "/agro/cotton-harvester.webp",
  agroAsbestos: "/agro/pipette.webp"
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

function NavDropdownItems({ items, setCurrentPage, depth = 0 }) {
  const groupNames = ['group/sub', 'group/sub2', 'group/sub3'];
  const panelStates = [
    'opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto',
    'opacity-0 -translate-x-2 pointer-events-none group-hover/sub2:opacity-100 group-hover/sub2:translate-x-0 group-hover/sub2:pointer-events-auto',
    'opacity-0 -translate-x-2 pointer-events-none group-hover/sub3:opacity-100 group-hover/sub3:translate-x-0 group-hover/sub3:pointer-events-auto'
  ];
  return items.map((item) => (
    <div key={item.label} className={`relative ${groupNames[depth % 3]}`}>
      <button
        onClick={() => setCurrentPage(item.id)}
        className="w-full flex items-center justify-between gap-3 text-left px-4 py-3 text-[11px] text-emerald-100 hover:bg-emerald-900 hover:text-amber-400 rounded-xl transition-colors tracking-widest uppercase font-normal"
      >
        <span>{item.label}</span>
        {item.submenu && <ChevronRight size={13} className="opacity-70 flex-shrink-0 rotate-180" />}
      </button>
      {item.submenu && (
        <div className={`absolute top-0 right-full w-max min-w-[9rem] bg-black border border-emerald-800/50 shadow-2xl rounded-xl transition-all duration-300 flex flex-col p-2 ${panelStates[depth % 3]}`}>
          <NavDropdownItems items={item.submenu} setCurrentPage={setCurrentPage} depth={depth + 1} />
        </div>
      )}
    </div>
  ));
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
        {
          label: 'Microscopy & IVF',
          id: 'microscopy',
          submenu: [
            { label: 'Stereo Microscopes', id: 'stereo-microscopes' },
            {
              label: 'Compound Microscopes',
              id: 'microscopy',
              submenu: [
                {
                  label: 'Upright Microscopes',
                  id: 'microscopy',
                  submenu: [
                    { label: 'Phase Contrast', id: 'phase-contrast' }
                  ]
                },
                {
                  label: 'Inverted Microscopes',
                  id: 'microscopy',
                  submenu: [
                    { label: 'Biological Microscopes', id: 'biological-microscopes' },
                    { label: 'Metallurgical Microscopes', id: 'metallurgical-microscopes' }
                  ]
                }
              ]
            }
          ]
        },
        { label: 'SPMs & Robotics', id: 'spms' },
        { label: 'Special Purpose Systems', id: 'special-purpose-systems' },
        { label: 'Machine Vision', id: 'machine-vision' },
        { label: 'Digital Cameras & Inspection Systems', id: 'cameras' },
        { label: 'Coffee Inspection', id: 'coffee' },
        { label: 'Sparkling Water QA', id: 'sparkling-water' },
        { label: 'Olive Oil Grading', id: 'olive-oil' },
        { label: 'Silos Automation', id: 'silos' }
      ]
    },
    { label: 'Agro Research', id: 'agro-research' },
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
        ? 'bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3 text-white mx-[2%] mt-4 rounded-xl' 
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
          <div className="hidden xl:flex items-center justify-end gap-10 text-[12px] font-normal tracking-widest uppercase w-full pr-10 pl-4">
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
                  
                  {/* Dropdown Menu - Applied Glassmorphism */}
                  {item.dropdown && (
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-64 bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2">
                      <NavDropdownItems items={item.dropdown} setCurrentPage={setCurrentPage} />
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
        {currentPage === 'stereo-microscopes' && <StereoMicroscopesContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'phase-contrast' && <PhaseContrastContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'biological-microscopes' && <BiologicalMicroscopesContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'metallurgical-microscopes' && <MetallurgicalMicroscopesContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'spms' && <SpmsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'special-purpose-systems' && <SpecialPurposeSystemsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'cameras' && <CamerasContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'machine-vision' && <MachineVisionContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'applications' && <ApplicationsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'clients' && <ClientsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'coffee' && <CoffeeContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'sparkling-water' && <SparklingWaterContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'olive-oil' && <OliveOilContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'silos' && <SilosContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'agro-research' && <AgroResearchContent setPage={setCurrentPage} currentPage={currentPage} />}
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
                 <ul className="space-y-4 text-[14px] text-emerald-200/70 font-light flex flex-col items-start">
                  <li><button onClick={() => setCurrentPage('microscopy')} className="text-left hover:text-amber-400 transition-colors">Microscopy & IVF</button></li>
                  <li><button onClick={() => setCurrentPage('cameras')} className="text-left hover:text-amber-400 transition-colors">Digital Cameras & Inspection Systems</button></li>
                  <li><button onClick={() => setCurrentPage('applications')} className="text-left hover:text-amber-400 transition-colors">Industries</button></li>
                 </ul>
             </div>
             <div>
                <h4 className="text-[12px] font-bold tracking-widest uppercase text-amber-500 mb-6">Company</h4>
                 <ul className="space-y-4 text-[14px] text-emerald-200/70 font-light flex flex-col items-start">
                 <li><button onClick={() => setCurrentPage('about')} className="text-left hover:text-amber-400 transition-colors">Our Vision</button></li>
                 <li><button onClick={() => setCurrentPage('team')} className="text-left hover:text-amber-400 transition-colors">Leadership</button></li>
                 <li><button onClick={() => setCurrentPage('clients')} className="text-left hover:text-amber-400 transition-colors">Success Stories</button></li>
                 <li><button onClick={() => setCurrentPage('contact')} className="text-left hover:text-amber-400 transition-colors">Contact</button></li>
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
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] tracking-tighter mb-6 text-white uppercase reveal-on-scroll visible leading-[1] inline-flex flex-col">
            <span className="font-semibold">ENGINEERED</span>
            <span className="flex items-center justify-between w-full mt-2">
              <span className="text-white font-semibold">TO</span>
              <span className="font-black tracking-wide pr-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-amber-500 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">OUTSEE</span>
            </span>
          </h1>
          <p className="text-[17px] font-light text-emerald-50 max-w-3xl leading-relaxed mb-10 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            Where human capability ends, Invade Machines begins. Deploying unparalleled optical hardware and AI inference for absolute industrial control.
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
                 Modern operations require precision beyond human visual limitations. We power scientific research, agricultural diagnostics, and industrial beverage automation by integrating advanced optics, multispectral imaging, and intelligent machine vision.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
              {[ 
                {icon: Microscope, title: "Microscopy & IVF Systems", desc: "Stereo, Compound, and Special Purpose optical setups engineered for sub-micron biological research and IVF applications.", route: 'microscopy'},
                {icon: Sprout, title: "Agro Research & Tech", desc: "Multispectral imaging and optical analysis for citrus, grape, sugarcane, seed inspection, and agricultural phenotyping.", route: 'agro-research'},
                {icon: Coffee, title: "Beverage & Process Automation", desc: "Smart vision-based inspection and quality assurance for coffee, sparkling water lines, olive oil grading, and automated silos.", route: 'coffee'}
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

        {/* Proprietary Logic Core & HMI Dashboard */}
        <section className="px-[3%] w-full py-[12vh] bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.05)_0%,transparent_70%)]"></div>
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="lg:w-1/2">
              <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">Proprietary Logic Core</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-white">
                POWERED BY <span className="font-bold text-emerald-400">PIXELR™</span>
              </h2>
              <p className="text-emerald-100/70 font-light text-[17px] leading-relaxed mb-6">
                Hardware is only half the equation. Our proprietary Pixelr Vision Architecture translates complex optical data into binary "Pass/Fail" actuation signals in under 1 millisecond.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Hardware-Agnostic Integration (GigE, USB3, CameraLink)",
                  "Sub-pixel Edge Detection & Pattern Matching",
                  "FDA 21 CFR Part 11 Compliant Audit Trails",
                  "Deep Learning & AI Inference Modules"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-emerald-100 font-light text-[15px]">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => setPage('machine-vision')} className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 hover:text-white transition-colors flex items-center gap-2 border-b border-emerald-400 pb-1 w-fit">
                Explore Vision Capabilities <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="lg:w-1/2 w-full h-[350px] lg:h-[450px] relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(52,211,153,0.15)] border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Pixelr Vision Analytics" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                     <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                     <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Live Data Processing</span>
                  </div>
                  <h3 className="text-2xl font-light text-white">Neural Network <br/><span className="font-bold">Inference</span></h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-1">Actuation Latency</p>
                  <p className="text-3xl font-mono text-emerald-300 font-bold">0.8<span className="text-lg text-emerald-500">ms</span></p>
                </div>
              </div>
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

        {/* Cost Recovery & ROI */}
        <section className="px-[3%] w-full py-[12vh] bg-white relative overflow-hidden border-b border-black/5">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-neutral-50 rounded-xl p-8 border-2 border-slate-300 shadow-lg relative">
                <div className="flex justify-between items-end mb-6 border-b border-black/10 pb-4">
                  <div>
                     <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-1">Financial Impact</p>
                     <p className="text-xl font-medium text-emerald-950">Cost Recovery Curve</p>
                  </div>
                  <div className="text-right">
                     <p className="text-3xl font-light text-amber-500 mb-1">11.4</p>
                     <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">Months to ROI</p>
                  </div>
                </div>
                
                {/* Mock Graph */}
                <div className="h-48 relative flex items-end justify-between pt-4">
                  <div className="absolute bottom-10 left-0 w-full h-[1px] bg-black/10 border-dashed border-t"></div>
                  <div className="absolute bottom-20 left-0 w-full h-[1px] bg-black/10 border-dashed border-t"></div>
                  
                  {/* Bars */}
                  {[
                    { month: 'Q1', value: 30, color: 'bg-rose-400' },
                    { month: 'Q2', value: 50, color: 'bg-amber-400' },
                    { month: 'Q3', value: 80, color: 'bg-emerald-300' },
                    { month: 'Q4', value: 120, color: 'bg-emerald-500' },
                  ].map((data, i) => (
                    <div key={i} className="flex flex-col items-center z-10 w-1/4">
                       <div className={`w-8 md:w-12 rounded-t-sm ${data.color} transition-all duration-1000`} style={{ height: `${data.value}%` }}></div>
                       <span className="text-[10px] font-bold text-black/40 mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">Capital Expenditure</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                A GUARANTEED <span className="font-bold text-emerald-800">RETURN</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-6">
                Machine vision is not an expense; it is a rapid-return investment. By eliminating manual QA labour, preventing costly product recalls, and increasing overall line speed, the system pays for itself within the first year of operation.
              </p>
              <ul className="space-y-3 mb-8 text-[14px] font-medium text-emerald-950">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Zero Product Recalls</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Reduced QA Labor Overhead</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Uncapped Line Speeds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Operator Empowerment */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Human-Centric Design</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                EMPOWERING <span className="font-bold text-emerald-800">YOUR TEAM</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-6">
                We do not just install complex black boxes. Our intuitive HMI touch-panels are designed for the shop floor, allowing your existing operators to train new inspection models, adjust tolerances, and pull compliance reports without writing a single line of code.
              </p>
              <button onClick={() => setPage('contact')} className="text-[11px] font-bold tracking-widest uppercase text-emerald-600 hover:text-emerald-950 transition-colors flex items-center gap-2 border-b border-emerald-600 pb-1 w-fit">
                Book a Software Demo <ArrowRight size={14} />
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                  <MonitorPlay size={32} className="text-emerald-500 mb-4" />
                  <h4 className="font-bold text-emerald-950 mb-2">No-Code Training</h4>
                  <p className="text-[13px] text-black/60 leading-relaxed">Train new defects by simply highlighting them on the touch-screen.</p>
               </div>
               <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 mt-8">
                  <FileText size={32} className="text-amber-500 mb-4" />
                  <h4 className="font-bold text-emerald-950 mb-2">1-Click Reporting</h4>
                  <p className="text-[13px] text-black/60 leading-relaxed">Generate PDF compliance reports for auditors instantly.</p>
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

        {/* Compliance & Certifications Bar */}
        <section className="px-[3%] w-full py-8 bg-emerald-950 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col md:flex-row items-center justify-between gap-6">
             <p className="text-[11px] font-bold tracking-widest uppercase text-emerald-400">Industrial Compliance & Safety Standards</p>
             <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-60 text-white font-medium text-sm tracking-widest">
               <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> CE CERTIFIED</span>
               <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> ISO 9001:2015</span>
               <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> FDA 21 CFR 11</span>
               <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> IP67 RATED</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              {[
                { id: 'microscopy', title: 'Microscopy & IVF', desc: 'Upright, Stereo, Fluorescence, and Inverted setups tailored for cellular and metallurgical analysis.', img: IMAGES.microscopy, icon: Microscope },
                { id: 'cameras', title: 'Digital Cameras & Inspection Systems', desc: 'Smart cameras, High-Speed, and Cooled CMOS sensors capturing data at the edge.', img: IMAGES.digitalCameras, icon: Camera }
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

function ProvenMicroscopySolutions() {
  return (
    <section className="reveal-on-scroll border-t border-emerald-200 pt-16 mt-16 px-[3%]">
      <div className="max-w-[1440px] mx-auto pb-16">
        <div className="text-center mb-12">
          <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">Trusted Across Sectors</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
            PROVEN <span className="font-bold">SOLUTIONS FOR</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
          {[
            "Heart Stents",
            "Industrial Filters",
            "Pharma API",
            "Petroleum & Oil Exploration",
            "Virology",
            "Packing Material QC",
            "Defence",
            "Space Application (ISRO)",
            "IITs & Research Institutes"
          ].map((app, i) => (
            <div key={i} className="bg-white py-4 px-6 rounded-xl border-2 border-slate-200 flex items-center gap-3 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all">
              <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
              <span className="text-[14px] font-bold text-emerald-950 whitespace-nowrap">{app}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
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
                  <h3 className="text-2xl font-medium text-emerald-950 mb-4">Compound Microscopes</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed mb-6">Upright & Inverted systems widely used for Clinical Diagnostics, Material Science, and live cell observation. Features Halogen/LED illumination with high-res multi-objective nosepieces.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Phase Contrast, Dark Field & DIC</li>
                    <li>• Strain-free POL objectives</li>
                    <li>• Inverted setups for flasks & metallurgy</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Beaker size={28}/></div>
                  <h3 className="text-2xl font-medium text-emerald-950 mb-4">Special Purpose Systems</h3>
                  <p className="text-black/60 text-[17px] font-light leading-relaxed mb-6">Advanced configurations engineered for specialised research and clinical procedures — from IVF workstations to fluorescence and polarized light analysis.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• IVF ICSI & IMSI micro-manipulators</li>
                    <li>• Fluorescence & Polarizing systems</li>
                    <li>• Metallurgical & Stem Cell analysis</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Specialized Techniques Section */}
          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-16">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Application Focus</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                SPECIALIZED <span className="font-bold">TECHNIQUES</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Live Cell Imaging", desc: "CO2 incubation enclosures and motorized stages for long-term time-lapse cellular tracking without temperature shock.", icon: TestTube2 },
                { title: "Metallography", desc: "Reflected light, DIC, and darkfield optics to evaluate grain boundaries, porosity, and phase distribution in alloys.", icon: Settings },
                { title: "IVF Micro-manipulation", desc: "Anti-vibration setups with integrated heating stages and hydraulic micromanipulators for ICSI procedures.", icon: Focus },
                { title: "Fluorescence", desc: "Multi-band LED excitation with custom bandpass filters to isolate specific fluorophores in neurobiology.", icon: Lightbulb },
                { title: "Slide Scanning", desc: "Automated whole-slide digital scanning with Pixelr image stitching for digital pathology archives.", icon: ScanLine },
                { title: "Gemology", desc: "Darkfield stands and polarization to inspect inclusions, clarity, and structural integrity of precious stones.", icon: Box }
              ].map((tech, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col items-start group">
                  <tech.icon size={28} className="text-amber-500 mb-5 group-hover:-translate-y-1 transition-transform" />
                  <h4 className="font-bold text-emerald-950 mb-3">{tech.title}</h4>
                  <p className="text-[13px] text-black/60 leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proven Solutions Section */}
          <section className="reveal-on-scroll border-t border-emerald-200 pt-16 mt-16">
            <div className="text-center mb-12">
              <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">Trusted Across Sectors</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                PROVEN <span className="font-bold">SOLUTIONS FOR</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
              {[
                "Heart Stents",
                "Industrial Filters",
                "Pharma API",
                "Petroleum & Oil Exploration",
                "Virology",
                "Packing Material QC",
                "Defence",
                "Space Application (ISRO)",
                "IITs & Research Institutes"
              ].map((app, i) => (
                <div key={i} className="bg-white py-4 px-6 rounded-xl border-2 border-slate-200 flex items-center gap-3 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all">
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-[14px] font-bold text-emerald-950 whitespace-nowrap">{app}</span>
                </div>
              ))}
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
// 5A-1. SOLUTIONS - STEREO MICROSCOPES
// ---------------------------------------------------------
function StereoMicroscopesContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Stereo Microscopes" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">MICROSCOPY & IVF</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            STEREO <span className="font-light text-emerald-300">MICROSCOPES</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Large fields of view, long working distances, and unmatched flexibility for researchers and industry.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%]">
          <section className="reveal-on-scroll bg-white p-10 md:p-14 rounded-xl border-2 border-slate-300 shadow-lg">
            <div className="max-w-4xl space-y-6 text-[17px] font-light leading-relaxed text-black/60">
              <p>
                Stereo microscopes is configured when we are in the need of Large Field of View, Long Working Distance but Low magnification. Flexibility is the key feature of Optical stereo Microscope.
              </p>
              <p>
                Stereo Microscopes are capable of offering the 3Dimensional image at Observation or Eyepiece level to the user. Generally Stereo Microscopes are offered with various combinations of Objectives, Zoom body and Eyepiece pair.
              </p>
              <p>
                Hence, stereo Microscope have become the first choice of researchers as it demands either No sample preparation or very minimal sample preparation.
              </p>
              <p>
                Mostly the Stereo Microscope are used in Reflected Light (sometimes in Transmitted Light mode) illumination. The stereo Microscope can accommodate variety of illumination or Lighting attachments.
              </p>
              <p>
                One of the most Popular or widely used Stereo microscope illumination is Ring Light illumination, Ring Light with Segment Control, Goose Neck illumination and LED Spot Light Illumination.
              </p>
              <p>
                A Transmitted Light illumination with Tiltable Mirror or Transmitted Light illumination with Polariser Analyser attachment makes the Stereo Microscope flexible of industrial | Material Science use.
              </p>
              <p>
                We can offer a suitable either Coarse Focus or Coarse and Fine focus column. Motorised Zoom, Motorised Focus or even Motorised XY Stage combination is possible with these stereo microscopes.
              </p>
              <p className="border-t border-black/5 pt-6">
                <span className="font-bold text-emerald-950">Key Words : </span>
                Zoology | Entomology | Mycology | Earth Science | Dermatology | IVF ICSI | Forensic Science | Failure Analysis | Mining | Gems - Jewellery | Cosmetology.
              </p>
            </div>
          </section>

          <section className="reveal-on-scroll mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: 1, caption: 'Stereo Microscopes with Coarse and Fine focus column' },
                { img: 3, caption: 'Stereo Microscope with Transmitted Light Base' },
                { img: 5, caption: 'Stereo Microscope ( Trinocular ) with Boom Stand' },
                { img: 6, caption: 'Spot Light or Goose neck Halogen illumination' },
                { img: 2, caption: 'Stereo Microscopes with Coarse and Fine focus column' },
                { img: 8, caption: 'Segmented Ring Light' },
                { img: 9, caption: 'Various flexible Boom Stands for Stereo Microscope' },
                { img: 7, caption: 'Spot Light or Goose neck LED illumination' },
                { img: 4, caption: 'Stereo Microscopes with Coarse and Fine focus column' }
              ].map((item) => (
                <div key={item.img} className="bg-white rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all p-6 flex flex-col">
                  <div className="flex items-center justify-center h-[300px] md:h-[340px] mb-5">
                    <img src={`/stereo/stereo-${item.img}.jpg`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" alt={item.caption} />
                  </div>
                  <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-auto">{item.caption}</p>
                </div>
              ))}
            </div>
          </section>

          <ProvenMicroscopySolutions />
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-2. SOLUTIONS - PHASE CONTRAST MICROSCOPE
// ---------------------------------------------------------
function PhaseContrastContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Phase Contrast Microscope" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">MICROSCOPY & IVF</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            PHASE CONTRAST <span className="font-light text-emerald-300">MICROSCOPE</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Observe living cells and transparent specimens in their natural state — no staining required.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%]">
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="lg:w-1/2 bg-white p-10 md:p-14 rounded-xl border-2 border-slate-300 shadow-lg">
              <div className="space-y-6 text-[17px] font-light leading-relaxed text-black/60">
                <p>
                  Phase contrast microscope is a specialized optical microscope that enhances the contrast of transparent and colorless specimens, such as living cells, bacteria, and thin tissue slices, without the need for staining.
                </p>
                <p>
                  It works by converting phase shifts in light passing through the specimen into changes in brightness in the image. This system uses a phase ring in the objective lens and a matching annular ring in the condenser to create differences in phase, which are then translated into intensity differences.
                </p>
                <p>
                  It allows for the visualization of structures that are invisible or barely visible under a standard brightfield microscope.
                </p>
                <p>
                  No Need for Staining: Specimens can be observed in their natural state, making it ideal for studying live cells and other delicate structures.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center flex-grow min-h-[400px]">
                <img src="/phase-contrast/phase-4.png" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Upright Phase Contrast Microscope" />
              </div>
              <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Upright Phase Contrast Microscope</p>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mb-12">Upright Microscopes</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/2 flex flex-col">
                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                  <img src="/phase-contrast/phase-3.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Upright Motorised Research Microscope and Joystick control" />
                </div>
                <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Upright Motorised Research Microscope and Joystick control</p>
              </div>
              <div className="lg:w-1/2 space-y-6 text-[17px] font-light leading-relaxed text-black/60 lg:pt-6">
                <p>
                  These Upright Microscopes are offered with Transmitted Light and Reflected Bright Field, Phase Contrast, Dark Field, Fluorescence and DIC attachments considering its utilisation in Biological Applications.
                </p>
                <p>
                  The Upright Microscopes are also offered with Reflected Light Bright Field, Dark Field, Differential Interference Contrast attachment which widely used in Material Science applications.
                </p>
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mb-12">Polarising Microscopes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                  <img src="/phase-contrast/phase-2.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Student Polarising Microscope" />
                </div>
                <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Student Polarising Microscope</p>
              </div>
              <div className="flex flex-col">
                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                  <img src="/phase-contrast/phase-1.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Polarising Microscope with Reflected Light POL Attachment" />
                </div>
                <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Polarising Microscope with Reflected Light POL Attachment</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mt-20 mb-12">Upright Microscopes</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/2 flex flex-col">
                <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                  <img src="/phase-contrast/phase-1.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Polarising Microscope with Reflected Light POL Attachment" />
                </div>
                <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Polarising Microscope with Reflected Light POL Attachment</p>
              </div>
              <div className="lg:w-1/2 space-y-6 text-[17px] font-light leading-relaxed text-black/60 lg:pt-6">
                <p>
                  Polarising Microscope is one of the most widely used upright Microscope with many unique features designed to cater the needs of Earth Science and Polymer Science research.
                </p>
                <p>
                  Polarised Light Transmitted Light and | or Reflected Light Microscopes are extensively used in Petrology, Sedimentology science where the need is 360 rotatable Graduated Ceramic Stage, Strain Free POL objectives.
                </p>
              </div>
            </div>
          </section>

          <ProvenMicroscopySolutions />
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-3. SOLUTIONS - BIOLOGICAL MICROSCOPES
// ---------------------------------------------------------
function BiologicalMicroscopesContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Inverted Biological Microscopes" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">MICROSCOPY & IVF</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            INVERTED BIOLOGICAL <span className="font-light text-emerald-300">MICROSCOPES</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Observe live cells and cultures from below, without disturbing the sample.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%]">
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="lg:w-1/2 bg-white p-10 md:p-14 rounded-xl border-2 border-slate-300 shadow-lg">
              <div className="space-y-6 text-[17px] font-light leading-relaxed text-black/60">
                <p>
                  Inverted biological microscope are designed where the light source and condenser are located above the stage and the Magnifying objectives are located below the stage.
                </p>
                <p>
                  The focusing mechanism is used to move the Objectives (nosepiece focussing) keeping the stage as steady as possible.
                </p>
                <p>
                  Compared to traditional Upright microscopes where the objectives are located above the stage | sample, inverted microscopes have the objectives below the stage.
                </p>
                <p>
                  This combination allows for the observation of specimens from the bottom making it easier to view specimens in larger containers, such as culture dishes or flasks.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center flex-grow min-h-[400px]">
                <img src="/biological/bio-3.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted Research Microscope" />
              </div>
              <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Inverted Research Microscope</p>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mb-12">Inverted Fluorescence Microscope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                <img src="/biological/bio-2.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted fluorescence biological microscope" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                <img src="/biological/bio-1.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted fluorescence biological microscope" />
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mb-12">Inverted Tissue Culture Microscope</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2 space-y-6 text-[17px] font-light leading-relaxed text-black/60">
                <p>
                  The light source and condenser are positioned above the stage, allowing for easy adjustment and efficient illumination of the specimen from the top.
                </p>
                <p>
                  Inverted microscopes are ideal for observing Live cells in Culture flasks or Petri dishes without disrupting the environment of the container.
                </p>
                <p>
                  Traditionally the inverted Microscope with Phase Contrast attachment is a preferred choice of users working on Live Cell Imaging, Stem Cell, Cell Biology and Bio-Technology applications.
                </p>
                <p>
                  Inverted Microscopes are also offered with Fluorescence and DIC attachments and they are configurable for Motorisation depending on the user needs | requirements.
                </p>
              </div>
              <div className="lg:w-1/2 bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px]">
                <img src="/biological/bio-5.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted Tissue Culture Microscope" />
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-950 text-center mb-12">Inverted Microscopes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/biological/bio-7.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="Cell culture flask" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/biological/bio-8.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="Petri dishes" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/biological/bio-9.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="96-well microplate" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
              <div className="lg:w-1/2">
                <img src="/biological/bio-10.jpg" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-xl border-2 border-slate-300 shadow-lg" alt="ICSI micromanipulation" />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-emerald-950 mb-6">Key Words:</h3>
                <ul className="list-disc list-inside space-y-2 text-[17px] font-light leading-relaxed text-black/60">
                  <li>Microbiology</li>
                  <li>Developmental</li>
                  <li>Biology Embryology</li>
                  <li>Virology</li>
                  <li>Microbiology</li>
                  <li>ICSI</li>
                  <li>IMSI</li>
                </ul>
              </div>
            </div>
          </section>

          <ProvenMicroscopySolutions />
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-4. SOLUTIONS - METALLURGICAL MICROSCOPES
// ---------------------------------------------------------
function MetallurgicalMicroscopesContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Inverted Metallurgical Microscope" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">MICROSCOPY & IVF</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            METALLURGICAL <span className="font-light text-emerald-300">MICROSCOPES</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Examine large, heavy, and polished material surfaces with maximum flexibility.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%]">
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="lg:w-1/2 bg-white p-10 md:p-14 rounded-xl border-2 border-slate-300 shadow-lg">
              <div className="space-y-6 text-[17px] font-light leading-relaxed text-black/60">
                <p>
                  Inverted metallurgical microscope is Optical microscope designed for the examination and analysis of the Any Microstructure of opaque materials like Metals, Minerals, Ceramics, and Composites.
                </p>
                <p>
                  Unlike traditional upright microscopes, the objective lenses of an inverted metallurgical microscope are located beneath the stage. The Stage is fixed to the microscope stand and Objective nosepiece is moved to achieve the focusing of the specimen.
                </p>
                <p>
                  This offers the maximum flexibility to the users to observe the Large, Heavy, Polished Material surface ( which is kept upside down).
                </p>
                <p>
                  The advantage of inverted Microscope is large working distance and stable XY stage.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center flex-grow min-h-[400px]">
                <img src="/metallurgical/metallurgical-1.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted Metallurgical Microscope" />
              </div>
              <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Inverted Metallurgical Microscope</p>
            </div>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16 flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="lg:w-1/2 space-y-6 text-[17px] font-light leading-relaxed text-black/60">
              <p>
                The metallurgical Microscope are used for an examination of metal surfaces, Study grain structures, Phases Analysis and defects in material.
              </p>
              <p>
                Widely used in Analysis of ceramics, Composites, and polymers to understand the microstructure and Performance characteristics.
              </p>
              <p>
                The Quality Control process in any manufacturing industry is incomplete without Optical Microscopes. Metallurgical Microscope play a key role in inspection of surface quality and integrity of materials and products.
              </p>
              <p>
                Failure Analysis and investigation, study of fracture surfaces or defects is possible only with Optical Microscopes.
              </p>
              <p>
                The Sample preparation process also play very important role in Product Development and Failure Analysis.
              </p>
              <p>
                High Quality Inspection of PCB-Printed Circuit Boards (PCBs) and semiconductor devices is incomplete without Microscopes.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center flex-grow min-h-[400px]">
                <img src="/metallurgical/metallurgical-2.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Inverted Research Metallurgical | Metallographic Microscope" />
              </div>
              <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5">Inverted Research Metallurgical | Metallographic Microscope</p>
            </div>
          </section>

          <ProvenMicroscopySolutions />
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-4. SOLUTIONS - SPMs & ROBOTICS
// ---------------------------------------------------------
function SpmsContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.manufacturing} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="SPMs & Robotics" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-4">DIVISION 02</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            SPMs & <span className="font-light text-emerald-300">ROBOTICS</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Custom-engineered Special Purpose Machines bridging the gap between advanced vision logic and high-speed robotic actuation.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Intro Section */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Engineering Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                END-TO-END <span className="font-medium text-emerald-800">AUTOMATION</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed">
                When off-the-shelf conveyors and standard mounts fail to meet precision requirements, we build the machine from the ground up. Our SPM division designs, fabricates, and programs complete mechanical environments for our vision systems.
              </p>
            </div>
          </div>
        </section>

        {/* 6-Step Process */}
        <section className="px-[3%] w-full py-[12vh] lg:py-[15vh] bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: '01', icon: Lightbulb, title: 'Conceptualization', desc: 'Analyzing payloads, line speeds, and factory floor constraints. Formulating mechanical kinematics and vision feasibility.' },
                { step: '02', icon: Box, title: '3D Mechanical Design', desc: 'Complete SolidWorks modeling of rigid frames, vibration-dampening mounts, custom conveyors, and optical enclosures.' },
                { step: '03', icon: Microchip, title: 'Control Architecture', desc: 'Programming PLC logic, servo drives, safety interlocks, and SCADA handshakes for seamless factory integration.' },
                { step: '04', icon: Eye, title: 'Vision Integration', desc: 'Deploying the exact lenses, synchronized strobe controllers, and GigE cameras into the mechanical framework.' },
                { step: '05', icon: Cog, title: 'Assembly & Actuation', desc: 'Wiring high-speed pneumatic drop-gates, flippers, or multi-axis robotic pick-and-place arms for physical rejection.' },
                { step: '06', icon: ShieldCheck, title: 'Factory Acceptance (FAT)', desc: 'Rigorous high-speed trial runs under continuous load, complete with FDA 21 CFR Part 11 documentation packages.' }
              ].map((phase, i) => (
                <div key={i} className="bg-neutral-50 p-10 rounded-xl shadow-lg border-2 border-slate-300 relative group hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 bg-emerald-950 text-amber-500 font-black text-xl px-4 py-2 rounded-bl-xl rounded-tr-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    {phase.step}
                  </div>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 text-emerald-600 border border-black/5 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <phase.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-950">{phase.title}</h3>
                  <p className="text-[15px] font-light text-black/60 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Real-World Application */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">Case in Point</p>
                <h3 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6">High-Speed <br/><span className="font-bold">Sorting Systems</span></h3>
                <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed mb-6">
                  A recent deployment required sorting thousands of automotive fasteners per minute based on micron-level dimensional deviations.
                </p>
                <p className="text-emerald-100/80 font-light text-[17px] leading-relaxed mb-8">
                  We engineered a custom centrifugal bowl feeder, feeding parts down a transparent glass track. Bi-telecentric lenses captured the parts in free-fall, and air-jets ejected defective units directly into scrap bins before they hit the collection hopper.
                </p>
                <div className="flex gap-6 border-t border-white/10 pt-8 mt-4">
                  <div>
                    <span className="block text-3xl font-bold text-amber-400 mb-1">1,200</span>
                    <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-500">Parts Per Min</span>
                  </div>
                  <div className="w-[1px] bg-white/10"></div>
                  <div>
                    <span className="block text-3xl font-bold text-amber-400 mb-1">&lt;0.1mm</span>
                    <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-500">Tolerance</span>
                  </div>
                </div>
             </div>
             <div className="lg:w-1/2 bg-white/5 rounded-xl border border-white/10 p-4 shadow-2xl">
               <div className="bg-black/50 rounded-lg h-[400px] flex items-center justify-center text-white/30 font-mono text-sm border border-white/5 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 <Cog size={120} className="animate-spin-slow opacity-20 text-emerald-500" />
                 <span className="absolute bottom-6 left-6 tracking-widest text-[10px] text-amber-500/50">3D_CAD_RENDER_PENDING</span>
               </div>
             </div>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-5. SOLUTIONS - SPECIAL PURPOSE SYSTEMS
// ---------------------------------------------------------
function SpecialPurposeSystemsContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.microscopy} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Special Purpose Systems" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">PRODUCTS</p>
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            SPECIAL PURPOSE <span className="font-light text-emerald-300">SYSTEMS</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Purpose-built optical systems for industrial inspection, forensic comparison, and digital viewing.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%]">

          <section className="reveal-on-scroll flex flex-col items-center">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px] max-w-2xl w-full">
              <img src="/special-purpose/special-3.jpg" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Industrial Inspection Microscope suitable for Silicon Wafer Inspection" />
            </div>
            <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5 max-w-2xl">Industrial Inspection Microscope suitable for Silicon Wafer Inspection</p>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[380px]">
                <img src="/special-purpose/special-1.jpg" loading="lazy" decoding="async" className="max-h-[420px] max-w-full object-contain" alt="Comparison Microscope" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[380px]">
                <img src="/special-purpose/special-2.jpg" loading="lazy" decoding="async" className="max-h-[420px] max-w-full object-contain" alt="Comparison Microscope" />
              </div>
            </div>
            <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug">Comparison Microscope</p>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/special-purpose/special-8.jpg" loading="lazy" decoding="async" className="max-h-[260px] max-w-full object-contain" alt="Digital Macroscope & Display Systems" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/special-purpose/special-9.jpg" loading="lazy" decoding="async" className="max-h-[260px] max-w-full object-contain" alt="Digital Macroscope & Display Systems" />
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[300px]">
                <img src="/special-purpose/special-10.jpg" loading="lazy" decoding="async" className="max-h-[260px] max-w-full object-contain" alt="Digital Macroscope & Display Systems" />
              </div>
            </div>
            <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug">Digital Macroscope & Display Systems</p>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16 flex flex-col items-center">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[400px] max-w-2xl w-full">
              <img src="/special-purpose/special-11.png" loading="lazy" decoding="async" className="max-h-[480px] max-w-full object-contain" alt="Micro Hardness Tester" />
            </div>
            <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5 max-w-2xl">Micro Hardness Tester</p>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16 flex flex-col items-center">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[380px] max-w-4xl w-full">
              <img src="/special-purpose/special-12.png" loading="lazy" decoding="async" className="max-h-[420px] max-w-full object-contain" alt="Particle Size Analysis" />
            </div>
            <p className="text-[16px] font-semibold text-slate-700 text-center leading-snug mt-5 max-w-2xl">Particle Size Analysis</p>
          </section>

          <section className="reveal-on-scroll mt-20 border-t border-emerald-200 pt-16 flex flex-col items-center">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[280px] max-w-4xl w-full">
              <img src="/special-purpose/special-13.png" loading="lazy" decoding="async" className="max-h-[320px] max-w-full object-contain" alt="Sample preparation and Image Analysis applications" />
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
        <img src={IMAGES.digitalCameras} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Digital Cameras & Inspection Systems" />
        <div className="px-[3%] w-full relative z-10">
        <div className="max-w-6xl w-full reveal-on-scroll">
          <p className="text-[14px] font-bold tracking-widest text-amber-400 uppercase mb-4">DIVISION 02</p>
          <h1 className="text-5xl md:text-[64px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
            DIGITAL CAMERAS <span className="font-light text-emerald-300">& INSPECTION SYSTEMS</span>
          </h1>
          <p className="text-emerald-100 font-light text-[17px] max-w-2xl border-l-2 border-amber-500 pl-4">
            Capturing data at the speed of manufacturing. From USB3 entry-level sensors to intelligent edge-processing smart cameras.
          </p>
        </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="max-w-[1440px] mx-auto px-[3%] space-y-20">
          {/* Section: Digital Cameras for Microscope */}
          <section className="reveal-on-scroll bg-white rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-[40%] w-full">
                <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-6 leading-snug">Digital Cameras for Microscope</h2>
                <ul className="space-y-3 text-slate-700 text-[16px] font-light">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Smart Cameras</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Entry Level Cameras</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>USB2 or USB 3 Cameras</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Cooled CMOS Cameras</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>USB3 Fluorescence Cameras</li>
                </ul>
              </div>
              <div className="lg:w-[60%] w-full bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6 min-h-[280px]">
                <img src="/digital-cameras/digital-cameras.jpg" loading="lazy" decoding="async" className="max-h-[260px] max-w-full object-contain" alt="Digital Cameras for Microscope" />
              </div>
            </div>
          </section>

          {/* Section: Industrial Cameras + Application Images */}
          <section className="reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[280px]">
                <img src="/digital-cameras/digital-cameras-2.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="High-Speed Industrial Cameras" />
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[280px]">
                <img src="/digital-cameras/digital-cameras-3.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="Silicon Wafer Inspection" />
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex items-center justify-center min-h-[280px]">
                <img src="/digital-cameras/digital-cameras-4.jpg" loading="lazy" decoding="async" className="max-h-[240px] max-w-full object-contain" alt="Semiconductor / PCB Inspection" />
              </div>
            </div>
          </section>

          {/* Section: Industrial Vision & Online Inspection Systems */}
          <section className="reveal-on-scroll bg-white rounded-xl border-2 border-slate-300 shadow-lg p-10 lg:p-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-10 text-center leading-snug">Industrial Vision &amp; Online Inspection Systems</h2>

            {/* Industrial Lights */}
            <p className="text-[15px] font-semibold text-slate-600 text-center mb-6">Industrial Lights</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px]">
                <img src="/digital-cameras/industrial-lights-1.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Dome / Flat Ring Light" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px]">
                <img src="/digital-cameras/industrial-lights-2.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Square LED Lights" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px]">
                <img src="/digital-cameras/industrial-lights-3.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Ring Lights" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px]">
                <img src="/digital-cameras/industrial-lights-4.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Bar LED Lights" />
              </div>
            </div>

            {/* Special Purpose Lights */}
            <p className="text-[15px] font-semibold text-slate-600 text-center mb-6">Special Purpose Lights</p>
            <div className="flex justify-center gap-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px] w-full max-w-[320px]">
                <img src="/digital-cameras/special-1.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Bright Field Ring Light" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-5 min-h-[200px] w-full max-w-[320px]">
                <img src="/digital-cameras/special-2.jpg" loading="lazy" decoding="async" className="max-h-[170px] max-w-full object-contain" alt="Dark Field / Backlight Diffuser" />
              </div>
            </div>
          </section>

          {/* Section: High Speed Camera */}
          <section className="reveal-on-scroll bg-white rounded-xl border-2 border-slate-300 shadow-lg p-10 lg:p-14">
            <p className="text-[15px] font-semibold text-slate-600 text-center mb-8">High Speed Camera</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6 min-h-[220px]">
                <img src="/digital-cameras/high-speed-camera-1.jpg" loading="lazy" decoding="async" className="max-h-[190px] max-w-full object-contain" alt="Basler aviator & ace Cameras" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6 min-h-[220px]">
                <img src="/digital-cameras/high-speed-camera-2.jpg" loading="lazy" decoding="async" className="max-h-[190px] max-w-full object-contain" alt="GigE Smart Camera" />
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6 min-h-[220px]">
                <img src="/digital-cameras/high-speed-camera-3.jpg" loading="lazy" decoding="async" className="max-h-[190px] max-w-full object-contain" alt="Basler ace 2 Basic with Lens" />
              </div>
            </div>
          </section>

          {/* Section: Lenses */}
          <section className="reveal-on-scroll bg-white rounded-xl border-2 border-slate-300 shadow-lg p-10 lg:p-14 flex flex-col items-center">
            <p className="text-[15px] font-semibold text-slate-600 text-center mb-8">Lenses</p>
            <div className="bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6 min-h-[260px] max-w-lg w-full">
              <img src="/digital-cameras/lenses.jpg" loading="lazy" decoding="async" className="max-h-[220px] max-w-full object-contain" alt="Industrial Machine Vision Lenses" />
            </div>
          </section>

          {/* Section: Industrial Vision text + image */}
          <section className="reveal-on-scroll bg-white rounded-xl border-2 border-slate-300 shadow-lg p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-[40%] w-full">
                <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-6 leading-snug">Industrial Vision &amp; Online Inspection Systems</h2>
                <ul className="space-y-3 text-slate-700 text-[15px] font-light">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Print Inspection</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Track &amp; Trace</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Sorting</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Measurement</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Presence/Absence</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Print Verification</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Web viewing system</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></span>Colour registration system</li>
                </ul>
              </div>
              <div className="lg:w-[60%] w-full rounded-xl overflow-hidden border border-slate-200 min-h-[280px] flex items-center justify-center">
                <img src="/digital-cameras/industrial-vision.jpg" loading="lazy" decoding="async" className="w-full h-full object-cover max-h-[380px]" alt="Industrial Vision System" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// Brain icon shim (lucide-react version installed lacks it)
function Brain(props) { return <Cpu {...props} />; }

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
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tight uppercase leading-[1] mb-6 text-white">
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

        {/* AI & Deep Learning */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Brain size={48} className="text-amber-400 mb-6" />
              <p className="text-[11px] font-bold tracking-widest text-amber-400 uppercase mb-4">Next-Gen Intelligence</p>
              <h3 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">AI & <span className="font-bold">Deep Learning</span></h3>
              <p className="font-light text-emerald-100/80 text-[15px] leading-relaxed mb-4">Moving beyond rigid rule-based vision. We deploy trained AI models to detect unpredictable organic defects on fruits, complex welds, and highly degraded OCR text — where traditional algorithms fail.</p>
              <p className="font-light text-emerald-100/60 text-[14px] leading-relaxed">Our models train on your specific production line samples, achieving over 99.8% confidence rates within weeks of deployment.</p>
            </div>
            <div className="md:w-1/2 bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-xs text-emerald-400 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-white/40 ml-2 text-[10px] tracking-widest">INVADE_AI_INFERENCE_ENGINE</span>
              </div>
              <div className="space-y-2 leading-relaxed">
                <p><span className="text-amber-400">&gt;</span> LOADING TENSOR MODEL v2.4...</p>
                <p><span className="text-emerald-400">&gt;</span> MODEL: defect_classifier_pharma.h5</p>
                <p><span className="text-white/40">&gt;</span> FRAME CAPTURED. EXPOSURE: 150µs.</p>
                <p><span className="text-white/40">&gt;</span> INFERENCE PROCESSING... <span className="text-amber-400">0.8ms</span></p>
                <p><span className="text-emerald-400">&gt;</span> CONFIDENCE: <span className="text-white font-bold">99.8%</span></p>
                <p><span className="text-rose-400 font-bold">&gt;</span> DEFECT_TYPE: <span className="text-rose-300">"Micro-crack on seal"</span></p>
                <p><span className="text-amber-400">&gt;</span> ACTION: FIRE_PNEUMATIC_EJECTOR()</p>
                <p><span className="text-emerald-400">&gt;</span> SYSTEM READY — AWAITING NEXT TRIGGER...</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Profiling & Multi-Spectral */}
        <section className="px-[3%] w-full py-[12vh] bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Advanced Sensing</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase text-emerald-950">Beyond Standard <span className="font-bold">Imaging</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                <Layers className="text-emerald-500 mb-4" size={40}/>
                <h3 className="text-xl font-bold mb-3 text-emerald-950">3D Laser Profiling</h3>
                <p className="text-[15px] font-light text-black/60 leading-relaxed">Using laser triangulation to measure depth, volume, and topology of automotive gaskets, PCB solder paste deposits, and bead fill in food packaging — with micron-level accuracy.</p>
              </div>
              <div className="bg-neutral-50 p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all">
                <Aperture className="text-emerald-500 mb-4" size={40}/>
                <h3 className="text-xl font-bold mb-3 text-emerald-950">Multi-Spectral Imaging</h3>
                <p className="text-[15px] font-light text-black/60 leading-relaxed">Operating in IR and UV bands to detect invisible seal leaks in blister packs, moisture contamination in agro products, and surface coatings invisible to the human eye.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Optical Precision */}
        <section className="px-[3%] w-full py-[10vh] bg-neutral-100 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll text-center">
            <h3 className="text-3xl font-light tracking-tighter uppercase text-emerald-950 mb-4">Lens Selection & <span className="font-bold">Optical Precision</span></h3>
            <p className="text-black/50 font-light max-w-xl mx-auto mb-10 text-[15px]">The wrong lens introduces distortion that invalidates all downstream logic. We specify and calibrate each lens to the exact application.</p>
            <div className="flex justify-center flex-wrap gap-4">
              {["Telecentric Lenses (Zero Edge Distortion)", "High-Res Macro Lenses", "Liquid Auto-Focus Lenses", "Bi-Telecentric Lenses", "Low-Distortion FA Lenses"].map(l => (
                <span key={l} className="px-6 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm text-sm font-bold text-emerald-950 hover:border-emerald-400 transition-colors">{l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Reject Mechanisms */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-50 relative overflow-hidden border-y border-emerald-100">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Closing the Loop</p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-emerald-950 mb-6">Precision <span className="font-light">Rejection</span></h3>
              <p className="font-light text-black/60 text-[15px] leading-relaxed mb-8">Vision without action is useless. We wire our software output directly to high-speed physical rejection mechanisms, completing the closed-loop quality control cycle in milliseconds.</p>
              <ul className="space-y-3 text-[14px] font-bold text-emerald-800">
                {["Air-Blast Blowers (light / small items)", "Pneumatic Pushers & Flippers (heavy boxes)", "Drop-Gates (bulk / gravity sorting)", "Conveyor Diverters (multi-lane routing)"].map(r => (
                  <li key={r} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>{r}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full bg-white rounded-xl border-2 border-slate-300 shadow-xl flex flex-col items-center justify-center py-16 gap-4">
              <Zap size={64} className="text-emerald-300" />
              <p className="text-[11px] font-bold tracking-widest uppercase text-black/30">Reject Gate Actuated</p>
              <p className="text-4xl font-bold text-emerald-950">&lt;2ms</p>
              <p className="text-[13px] text-black/40">Trigger-to-ejection latency</p>
            </div>
          </div>
        </section>

        {/* ROI CTA */}
        <section className="px-[3%] w-full py-[12vh] bg-emerald-950 text-white text-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">Stop Shipping Defects.</h2>
            <p className="font-light text-emerald-100/70 text-[16px] max-w-2xl mx-auto mb-10">Eliminate brand-damaging recalls and manual QA labour costs permanently. Our clients see a full ROI in under 14 months.</p>
            <button onClick={() => setPage('contact')} className="bg-amber-500 text-emerald-950 px-10 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-white hover:text-emerald-900 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              Request a Demo Line
            </button>
          </div>
        </section>

      </main>
    </>
  );
}


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
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
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
                DOMAIN EXPERTISE
              </h2>
              <p className="text-black/50 mt-4 max-w-2xl mx-auto">Deep integrations customized for the specific regulatory and mechanical demands of distinct industries.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {/* Agro & Food */}
               <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-amber-100 rounded-xl text-amber-600"><TestTube2 size={24} /></div>
                        <h3 className="text-2xl font-bold text-emerald-950">Agro & F&B</h3>
                     </div>
                     <p className="text-[14px] text-black/60 leading-relaxed mb-6 font-light">From high-speed bottling label verification to automated sorting of agricultural produce based on precise color and geometric properties.</p>
                     <ul className="space-y-2 text-[13px] font-medium text-emerald-900">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> High-speed Fill Level Inspection</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Cap & Seal Integrity Checks</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Produce Sorting (Color/Defect)</li>
                     </ul>
                  </div>
               </div>

               {/* Medical & Pharma */}
               <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-emerald-100 rounded-xl text-emerald-600"><Activity size={24} /></div>
                        <h3 className="text-2xl font-bold text-emerald-950">Medical & Pharma</h3>
                     </div>
                     <p className="text-[14px] text-black/60 leading-relaxed mb-6 font-light">Zero-defect tolerance inspection systems for life-saving medical devices and exhaustive CFR 21 Part 11 compliant pharmaceutical packaging.</p>
                     <ul className="space-y-2 text-[13px] font-medium text-emerald-900">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Blister Pack Verification</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Stent & Catheter Metrology</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Syringe Assembly Inspection</li>
                     </ul>
                  </div>
               </div>

               {/* Space & Defense */}
               <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-slate-200 rounded-xl text-slate-700"><Globe2 size={24} /></div>
                        <h3 className="text-2xl font-bold text-emerald-950">Space & Defense</h3>
                     </div>
                     <p className="text-[14px] text-black/60 leading-relaxed mb-6 font-light">Sub-micron metallurgical analysis for aerospace alloys and extremely ruggedized vision nodes for defense manufacturing pipelines.</p>
                     <ul className="space-y-2 text-[13px] font-medium text-emerald-900">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Turbine Blade Metrology</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Ammunition Sorting Automation</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Composite Material Analysis</li>
                     </ul>
                  </div>
               </div>

               {/* Automotive & Heavy Engineering */}
               <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-blue-100 rounded-xl text-blue-600"><Settings size={24} /></div>
                        <h3 className="text-2xl font-bold text-emerald-950">Automotive</h3>
                     </div>
                     <p className="text-[14px] text-black/60 leading-relaxed mb-6 font-light">Guiding robotic welding arms with 3D profiling cameras and ensuring perfect dimensional accuracy on high-speed CNC output lines.</p>
                     <ul className="space-y-2 text-[13px] font-medium text-emerald-900">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Robotic Weld Seam Tracking</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Engine Block 3D Profiling</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Component Surface Defect QA</li>
                     </ul>
                  </div>
               </div>
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
          <p className="text-[14px] font-bold tracking-[0.25em] text-amber-500 uppercase mb-6">OUR NETWORK</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
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

          {/* Deployment Stats & ROI */}
          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="lg:w-1/3 bg-emerald-950 text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-[80px] opacity-30"></div>
                 <BarChart3 size={32} className="text-amber-500 mb-6" />
                 <h3 className="text-4xl font-light mb-2">500+</h3>
                 <p className="text-[12px] font-bold tracking-widest text-emerald-400 uppercase mb-8">Deployments</p>
                 <p className="text-emerald-100/70 text-[14px] leading-relaxed font-light">From single standalone microscopy stations to fully integrated, multi-node factory automation networks across the globe.</p>
              </div>
              <div className="lg:w-1/3 bg-emerald-50 p-10 rounded-xl shadow-lg border border-emerald-100 flex flex-col justify-center">
                 <h3 className="text-4xl font-light text-emerald-950 mb-2">99.9%</h3>
                 <p className="text-[12px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Uptime Guarantee</p>
                 <p className="text-black/60 text-[14px] leading-relaxed font-light">Our hardware redundancy and resilient Pixelr logic core ensure that your QA line never becomes the production bottleneck.</p>
              </div>
              <div className="lg:w-1/3 bg-white p-10 rounded-xl shadow-lg border-2 border-slate-300 flex flex-col justify-center text-center items-center">
                 <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-500 font-bold text-xl mb-4">
                    ROI
                 </div>
                 <h3 className="text-2xl font-bold text-emerald-950 mb-2">&lt; 1 Year</h3>
                 <p className="text-[12px] font-bold tracking-widest text-black/40 uppercase">Average Payback</p>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Direct <span className="font-bold text-emerald-900">Feedback</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  "The transition from manual visual inspection to Invade's automated systems reduced our false-reject rate from 4% to 0.1%. The system paid for itself in saved raw materials within 8 months."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-white text-[12px] font-bold">AS</div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-[13px]">VP Operations</h4>
                    <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Top 10 FMCG Brand</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  "For IVF micromanipulation, there is zero room for error. The inverted setups provided by Invade Machines gave us perfect thermal stability and anti-vibration performance. Highly recommended."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-white text-[12px] font-bold">DR</div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-[13px]">Clinical Director</h4>
                    <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">National Fertility Center</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Eminent Installations & Institutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {institutions.map((inst, i) => (
                    <div key={i} className={`p-8 border-2 border-slate-300 rounded-xl bg-white shadow-lg flex items-start gap-5 hover:border-emerald-400 hover:shadow-xl transition-all group ${i === institutions.length - 1 ? 'lg:col-start-2' : ''}`}>
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
                    <div key={i} className={`p-10 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${i === corporateSectors.length - 1 ? 'lg:col-span-2 lg:w-[calc(50%-1rem)] lg:justify-self-center' : ''}`}>
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

        {/* Global Support & RMA */}
        <section className="px-[3%] w-full py-[10vh] bg-white border-t border-slate-200">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-8 rounded-xl border-2 border-slate-300 shadow-sm hover:shadow-lg transition-all text-center">
                <Headphones size={32} className="text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-emerald-950 mb-3">Tech Support Portal</h4>
                <p className="text-[13px] text-black/60 leading-relaxed mb-6">Access software drivers, user manuals, and raise priority L2 support tickets.</p>
                <button className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase border-b border-emerald-600 pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors">Client Login &rarr;</button>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl border-2 border-slate-300 shadow-sm hover:shadow-lg transition-all text-center">
                <Truck size={32} className="text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-emerald-950 mb-3">RMA & Logistics</h4>
                <p className="text-[13px] text-black/60 leading-relaxed mb-6">Need a repair? Generate a Return Merchandise Authorization (RMA) number quickly.</p>
                <button className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase border-b border-emerald-600 pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors">Initiate RMA &rarr;</button>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl border-2 border-slate-300 shadow-sm hover:shadow-lg transition-all text-center">
                <MonitorPlay size={32} className="text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-emerald-950 mb-3">Schedule a Demo</h4>
                <p className="text-[13px] text-black/60 leading-relaxed mb-6">Send us your defect samples. We'll run a live feasibility test and demo the system via video call.</p>
                <button className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase border-b border-emerald-600 pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors">Book Demo &rarr;</button>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Reps */}
        <section className="px-[3%] w-full py-[10vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center">Regional <span className="font-bold">Sales & Service</span></h2>
             <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 shadow-lg">
                   <h4 className="font-bold text-amber-500 mb-2">North India</h4>
                   <p className="text-[13px] text-emerald-100/70">Delhi, Haryana, Punjab, UP</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 shadow-lg">
                   <h4 className="font-bold text-amber-500 mb-2">West India</h4>
                   <p className="text-[13px] text-emerald-100/70">Maharashtra, Gujarat, Goa</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 shadow-lg">
                   <h4 className="font-bold text-amber-500 mb-2">South India</h4>
                   <p className="text-[13px] text-emerald-100/70">Karnataka, Tamil Nadu, Kerala</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 shadow-lg">
                   <h4 className="font-bold text-amber-500 mb-2">East India & Exports</h4>
                   <p className="text-[13px] text-emerald-100/70">Bengal, Global Distribution</p>
                </div>
             </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-[3%] w-full py-[12vh] bg-neutral-50 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto w-full reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-10 text-emerald-950 text-center">Frequently <span className="font-bold">Asked Questions</span></h2>
            <div className="space-y-4">
               {[
                 { q: "What is your typical project lead time?", a: "Standard Vision Systems deploy in 4-6 weeks. Custom SPMs and Robotics integrations take 10-14 weeks depending on mechanical complexity." },
                 { q: "Do you provide on-site training?", a: "Yes. Every deployment includes 3 days of on-site operator training, covering software usage, lens cleaning, and basic troubleshooting." },
                 { q: "Are your systems CFR 21 Part 11 Compliant?", a: "Absolutely. Our Pixelr software natively supports secure audit trails, electronic signatures, and immutable data logging out of the box." },
                 { q: "Can we send samples for a feasibility study?", a: "We encourage it. Send your 'good' and 'bad' samples to our Thane lab. We'll run them under various optical setups and provide a detailed feasibility report." }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-emerald-950 mb-2 flex items-start gap-3"><span className="text-amber-500 mt-1"><Lightbulb size={16}/></span> {faq.q}</h4>
                    <p className="text-[14px] text-black/60 pl-7 font-light">{faq.a}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-[3%] w-full py-[10vh] bg-emerald-50 border-t border-emerald-100 text-center">
          <div className="max-w-[600px] mx-auto w-full reveal-on-scroll">
             <h3 className="text-2xl font-bold text-emerald-950 mb-4">Stay Ahead of the Curve</h3>
             <p className="text-[14px] text-black/60 font-light mb-6">Join 5,000+ engineers receiving our monthly insights on optical inspection, deep learning, and industrial automation.</p>
             <form className="flex flex-col sm:flex-row gap-2 max-w-[400px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your work email" className="flex-grow bg-white border border-emerald-200 rounded-lg px-4 py-3 text-[13px] outline-none focus:border-emerald-500" />
                <button className="bg-emerald-950 text-amber-500 font-bold tracking-widest uppercase text-[11px] px-6 py-3 rounded-lg hover:bg-amber-500 hover:text-emerald-950 transition-colors shadow-lg">Subscribe</button>
             </form>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// 9. NEW PRODUCT PAGES
// ---------------------------------------------------------

function CoffeeContent({ currentPage, setPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.coffee} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity sepia-[0.3]" alt="Coffee Beans Processing" />
        <div className="px-[3%] w-full relative z-10">
          <div className="max-w-6xl w-full reveal-on-scroll">
            <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">AGRO AUTOMATION</p>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
              COFFEE <br /><span className="font-light text-amber-200">INSPECTION</span>
            </h1>
            <div className="border-l-2 border-amber-500 pl-6 ml-2">
              <p className="text-emerald-50 font-light text-[17px] leading-relaxed max-w-2xl">
                High-speed optical sorting and defect detection for premium coffee roasters, ensuring zero foreign matter and perfect roasting consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-amber-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                   <Focus size={32} className="text-amber-600 mb-6" />
                   <h3 className="text-2xl font-bold text-emerald-950 mb-4">Colorimetric Grading</h3>
                   <p className="text-[15px] font-light text-black/60 leading-relaxed">Multispectral cameras analyze every individual bean's roast profile in free-fall, calculating exact color uniformity across thousands of beans per second.</p>
                </div>
                <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                   <Target size={32} className="text-amber-600 mb-6" />
                   <h3 className="text-2xl font-bold text-emerald-950 mb-4">Foreign Body Rejection</h3>
                   <p className="text-[15px] font-light text-black/60 leading-relaxed">Deep learning algorithms isolate sticks, stones, and unripe 'quaker' beans, triggering ultra-fast pneumatic ejectors to maintain 99.9% purity.</p>
                </div>
                <div className="bg-white p-10 rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                   <Box size={32} className="text-amber-600 mb-6" />
                   <h3 className="text-2xl font-bold text-emerald-950 mb-4">Packaging Integrity</h3>
                   <p className="text-[15px] font-light text-black/60 leading-relaxed">Post-roast packaging QA verifies valve placement, seal integrity, and label placement on coffee bags moving at over 150 units per minute.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Deep Learning Article */}
        <section className="px-[3%] w-full py-[10vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6 text-emerald-950">Deep Learning <span className="font-bold text-amber-600">Bean Sorting</span></h2>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-6">
                 Traditional color sorters rely on simple thresholding, which often fails to distinguish between a dark roasted bean and a dark piece of foreign material (like a small stone or twig).
               </p>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-8">
                 Invade Machines deploys proprietary Convolutional Neural Networks (CNNs) trained on millions of coffee bean images. Our cameras capture 360-degree views of beans in free-fall, identifying complex geometric defects like insect damage, fungus, and sour beans with over 99% accuracy, firing precise pneumatic jets to eject bad beans before they hit the roasting drum.
               </p>
               <div className="flex gap-4">
                 <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">99.9% Yield</span>
                 <span className="px-4 py-2 bg-amber-500 text-emerald-950 rounded-md text-[11px] font-bold tracking-widest uppercase">Zero False Ejects</span>
               </div>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl h-[400px]">
               <img src={IMAGES.manufacturing} onError={handleImageError} className="w-full h-full object-cover" alt="Optical Sorting Mechanism" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SparklingWaterContent({ currentPage, setPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-color z-0"></div>
        <img src={IMAGES.water} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Bottling Line" />
        <div className="px-[3%] w-full relative z-10">
          <div className="max-w-6xl w-full reveal-on-scroll">
            <p className="text-[14px] font-bold tracking-widest text-blue-400 uppercase mb-4">BEVERAGE QA</p>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
              SPARKLING <br /><span className="font-light text-blue-200">WATER</span>
            </h1>
            <div className="border-l-2 border-blue-400 pl-6 ml-2">
              <p className="text-blue-50 font-light text-[17px] leading-relaxed max-w-2xl">
                Combating refraction and bubbles to deliver perfect fill-level sensing, cap skew detection, and PET bottle integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-slate-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Fill Level & Carbonation", icon: Thermometer, desc: "Infrared sensors cut through condensation to verify liquid volume." },
                  { title: "Cap Skew & Seal", icon: Cog, desc: "360-degree cameras ensure tamper rings are intact and caps are torqued." },
                  { title: "Label Alignment", icon: ScanLine, desc: "OCR and pattern matching to detect torn, skewed, or missing branding." },
                  { title: "Foreign Particles", icon: Eye, desc: "AI models trained to ignore carbonation bubbles while catching glass/plastic shards." }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl border-2 border-slate-300 shadow-lg text-center hover:-translate-y-2 hover:shadow-xl transition-all">
                     <feature.icon size={32} className="text-blue-500 mx-auto mb-4" />
                     <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                     <p className="text-[13px] text-slate-600 font-light">{feature.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* High Speed Bottling Article */}
        <section className="px-[3%] w-full py-[10vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6 text-slate-900">Overcoming <span className="font-bold text-blue-600">Refraction</span></h2>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-6">
                 Inspecting clear liquids inside clear PET or glass bottles is notoriously difficult for traditional machine vision systems due to uncontrolled refraction, surface condensation, and carbonation bubbles.
               </p>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-8">
                 We overcome these physics challenges by combining short-wave infrared (SWIR) imaging with specialized polarized backlighting. This allows our sensors to "see through" external water droplets on chilled bottles to accurately measure the internal meniscus level, ensuring absolute compliance with legal metrology standards while running at speeds exceeding 70,000 bottles per hour.
               </p>
               <div className="flex gap-4">
                 <span className="px-4 py-2 bg-blue-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">70,000 BPH</span>
                 <span className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md text-[11px] font-bold tracking-widest uppercase">SWIR Imaging</span>
               </div>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl h-[400px]">
               <img src={IMAGES.inspectionLabs} onError={handleImageError} className="w-full h-full object-cover grayscale" alt="Bottling Inspection Node" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OliveOilContent({ currentPage, setPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.oliveOil} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity sepia-[0.2]" alt="Olive Oil Grading" />
        <div className="px-[3%] w-full relative z-10">
          <div className="max-w-6xl w-full reveal-on-scroll">
            <p className="text-[14px] font-bold tracking-widest text-emerald-500 uppercase mb-4">PREMIUM F&B</p>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
              OLIVE OIL <br /><span className="font-light text-emerald-300">GRADING</span>
            </h1>
            <div className="border-l-2 border-emerald-500 pl-6 ml-2">
              <p className="text-emerald-50 font-light text-[17px] leading-relaxed max-w-2xl">
                Advanced optical clarity analysis and premium packaging inspection for extra virgin olive oil producers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                LIQUID <span className="font-bold text-emerald-800">GOLD</span>
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-6">
                Premium oils require premium quality assurance. Our specialized backlighting arrays analyze the refractive index and colorimetry of olive oil in real-time, detecting sediment and ensuring grade consistency.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-emerald-900 font-medium"><Sun className="text-amber-500" size={20} /> Color & Turbidity Analysis</li>
                <li className="flex items-center gap-3 text-emerald-900 font-medium"><Target className="text-amber-500" size={20} /> Glass Bottle Flaw Detection</li>
                <li className="flex items-center gap-3 text-emerald-900 font-medium"><ShieldCheck className="text-amber-500" size={20} /> Tamper-evident Seal Verification</li>
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white rounded-xl p-8 shadow-xl border-2 border-slate-300 relative overflow-hidden hover:shadow-2xl transition-shadow">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-[100px] opacity-20"></div>
               <div className="relative z-10 flex flex-col items-center justify-center text-center py-10">
                  <Aperture size={48} className="text-emerald-700 mb-6" />
                  <h4 className="text-2xl font-bold text-emerald-950 mb-2">Multispectral Imaging</h4>
                  <p className="text-[14px] text-black/60 max-w-sm">Utilizing specific wavelengths of light to 'see' through dark green glass bottles and inspect the oil directly without opening the container.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Fraud Prevention Article */}
        <section className="px-[3%] w-full py-[10vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl h-[400px]">
               <img src={IMAGES.manufacturing} onError={handleImageError} className="w-full h-full object-cover grayscale opacity-90" alt="Seal Inspection Node" />
            </div>
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6 text-emerald-950">Preventing Fraud <span className="font-bold text-amber-600">& Oxidation</span></h2>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-6">
                 Counterfeit "Extra Virgin" olive oil is a massive global issue. Beyond grading the oil itself, securing the supply chain requires absolute perfection in bottling.
               </p>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-8">
                 Our vision systems integrate high-resolution telecentric lenses to inspect the micro-clearances between the pour-spout, the nitrogen-flush seal, and the tamper-evident ring. By ensuring a hermetic seal at a microscopic level, we prevent premature oxidation on the shelf and protect brand integrity against tampering.
               </p>
               <div className="flex gap-4">
                 <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">Hermetic Verification</span>
                 <span className="px-4 py-2 bg-amber-500 text-emerald-950 rounded-md text-[11px] font-bold tracking-widest uppercase">Telecentric Optics</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SilosContent({ currentPage, setPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.silos} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity sepia-[0.5]" alt="Industrial Silos" />
        <div className="px-[3%] w-full relative z-10">
          <div className="max-w-6xl w-full reveal-on-scroll">
            <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">INDUSTRIAL STORAGE</p>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
              SILOS <br /><span className="font-light text-amber-200">AUTOMATION</span>
            </h1>
            <div className="border-l-2 border-amber-500 pl-6 ml-2">
              <p className="text-emerald-50 font-light text-[17px] leading-relaxed max-w-2xl">
                Volumetric 3D profiling, thermal monitoring, and automated discharge control for bulk material storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-neutral-100 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                 BULK MATERIAL <span className="font-bold">INTELLIGENCE</span>
               </h2>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-xl shadow-lg border-2 border-slate-300 border-t-4 border-t-amber-500 hover:shadow-xl transition-shadow">
                   <BarChart3 size={32} className="text-emerald-700 mb-6" />
                   <h3 className="text-xl font-bold text-emerald-950 mb-4">LiDAR Volumetrics</h3>
                   <p className="text-[14px] font-light text-black/60 leading-relaxed">Continuous 3D mapping of the silo interior provides exact inventory levels, identifying rat-holing or bridging in powders and grains.</p>
                </div>
                <div className="bg-white p-10 rounded-xl shadow-lg border-2 border-slate-300 border-t-4 border-t-rose-500 hover:shadow-xl transition-shadow">
                   <Thermometer size={32} className="text-emerald-700 mb-6" />
                   <h3 className="text-xl font-bold text-emerald-950 mb-4">Thermal Imaging</h3>
                   <p className="text-[14px] font-light text-black/60 leading-relaxed">Real-time heat map generation to detect moisture pockets and prevent spontaneous combustion in organic material silos.</p>
                </div>
                <div className="bg-white p-10 rounded-xl shadow-lg border-2 border-slate-300 border-t-4 border-t-blue-500 hover:shadow-xl transition-shadow">
                   <Network size={32} className="text-emerald-700 mb-6" />
                   <h3 className="text-xl font-bold text-emerald-950 mb-4">Discharge Automation</h3>
                   <p className="text-[14px] font-light text-black/60 leading-relaxed">PLC integration for automated vibration, aeration, and valve control to ensure consistent material flow directly linked to vision metrics.</p>
                </div>
             </div>
          </div>
        </section>

        {/* 3D Profiling Article */}
        <section className="px-[3%] w-full py-[10vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl h-[400px]">
               <img src={IMAGES.integration} onError={handleImageError} className="w-full h-full object-cover grayscale opacity-90 sepia-[0.3]" alt="Silo Automation System" />
            </div>
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6 text-emerald-950">Automated <span className="font-bold text-amber-600">Void Detection</span></h2>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-6">
                 In bulk storage, unpredictable material settling can lead to structural disasters or production line starvation. Basic point-level sensors fail to account for irregular topography like rat-holing or side-wall buildup.
               </p>
               <p className="text-[17px] font-light text-black/60 leading-relaxed mb-8">
                 We deploy multi-point 3D acoustic and optical scanners at the top of the silo to generate a continuous mesh of the material surface. When the Pixelr software detects hazardous formations, it automatically triggers localized air cannons or acoustic cleaners to restore flow, completely eliminating the need for dangerous manual entry by personnel.
               </p>
               <div className="flex gap-4">
                 <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">Zero Manual Entry</span>
                 <span className="px-4 py-2 bg-amber-500 text-emerald-950 rounded-md text-[11px] font-bold tracking-widest uppercase">3D Topography</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A-10. SOLUTIONS - AGRO RESEARCH
// ---------------------------------------------------------
function AgroResearchContent({ currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay z-0"></div>
        <img src={IMAGES.agro} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity sepia-[0.3]" alt="Agro Research" />
        <div className="px-[3%] w-full relative z-10">
          <div className="max-w-6xl w-full reveal-on-scroll">
            <p className="text-[14px] font-bold tracking-widest text-amber-500 uppercase mb-4">AGRICULTURAL ANALYSIS</p>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[1] mb-8 text-white">
              AGRO <br /><span className="font-light text-emerald-300">RESEARCH</span>
            </h1>
            <div className="border-l-2 border-amber-500 pl-6 ml-2">
              <p className="text-emerald-50 font-light text-[17px] leading-relaxed max-w-2xl">
                Advanced optical systems for crop protection, disease identification, and biological analysis across vital agricultural sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-neutral-100 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh] lg:py-[15vh]">
        <section className="px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="text-center mb-16">
               <p className="text-[14px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Specialized Domains</p>
               <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                 RESEARCH <span className="font-bold">APPLICATIONS</span>
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Grapes", img: IMAGES.agroGrapes, desc: "Multispectral analysis for bunch architecture, berry size distribution, and early detection of downy mildew." },
                 { title: "Citrus", img: IMAGES.agroCitrus, desc: "High-resolution sorting for external blemishes, color grading, and non-destructive internal quality assessment." },
                 { title: "Sugarcane", img: IMAGES.agroSugarcane, desc: "Automated internode measurement and disease screening for red rot using polarized light microscopy." },
                 { title: "Seed & Crop Inspection", img: IMAGES.agroSeed, desc: "Precision phenotyping of seeds, analyzing germination vigor, physical purity, and morphological traits." },
                 { title: "Crop Protection (Insecticides & Pesticides)", img: IMAGES.agroCrop, desc: "Microscopic evaluation of droplet spread, leaf coverage, and efficacy of agrochemical formulations." },
                 { title: "Cotton Research", img: IMAGES.agroCotton, desc: "Advanced fiber quality analysis including length, strength, fineness, and maturity using polarized microscopy." },
                 { title: "Asbestos Analysis", img: IMAGES.agroAsbestos, desc: "Soil safety and contamination testing using phase contrast and polarized light microscopy for environmental compliance." }
               ].map((app, i) => (
                 <div key={i} className="bg-white rounded-xl border-2 border-slate-300 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all overflow-hidden flex flex-col group">
                   <div className="h-48 overflow-hidden">
                     <img src={app.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={app.title} />
                   </div>
                   <div className="p-8 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-emerald-950 mb-4">{app.title}</h3>
                     <p className="text-[14px] font-light text-black/60 leading-relaxed">{app.desc}</p>
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
