import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visuals */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
             {/* Placeholder for Product Video/Image */}
             <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
                 <span className="text-gray-600 font-mono text-sm">Product Demo Video Placeholder</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-6">
                <Link href="/#builds" className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center mb-6">
                   <span className="mr-2">←</span> Back to Innovations
                </Link>
                <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    {product.category}
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {product.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
                {product.description}
            </p>

            <div className="prose prose-invert prose-lg text-gray-400 mb-10">
                <p>{product.details}</p>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    Launch Project
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                    View Case Study
                </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
