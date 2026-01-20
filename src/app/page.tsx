import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoReveal from "@/components/VideoReveal";
import BuildsGallery from "@/components/BuildsGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <VideoReveal />
      <BuildsGallery />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 NxtWaves. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
