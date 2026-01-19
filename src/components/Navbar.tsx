import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#050505]/50 backdrop-blur-lg border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        nxtwaves.in
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
         <Link href="#home" className="hover:text-white transition-colors">Home</Link>
         <Link href="#builds" className="hover:text-white transition-colors">Builds</Link>
         <Link href="#features" className="hover:text-white transition-colors">Features</Link>
         <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
