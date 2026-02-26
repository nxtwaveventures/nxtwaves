"use client";

import { useState } from "react";

export default function Home() {
  const [seed, setSeed] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUnfold = async () => {
    if (!seed.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/metamorphosis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seed_logic: seed }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data.data);
    } catch (err) {
      setError(err.message || "Failed to unfold logic.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#A855F7] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Butterfly Face <span className="inline-block animate-bounce">🦋</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
            The World's Premier AI Data Refinery. Drop your raw seed below and let the Metamorphosis Engine synthesize the future of your AI agents.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <textarea
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              placeholder="Drop your raw seed here..."
              className="relative w-full h-32 md:h-40 bg-black/20 text-white placeholder-blue-200/50 border border-white/10 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none shadow-inner"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleUnfold}
              disabled={loading || !seed.trim()}
              className="relative overflow-hidden group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Metamorphosing...
                  </>
                ) : (
                  "Unfold Logic 🦋"
                )}
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20 z-0"></div>
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-8 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-100 text-center animate-pulse">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-10 animate-fade-in-up">
            <div className="flex items-center justify-between mb-2 px-2">
              <h3 className="text-white/90 font-semibold text-lg">Synthetic Logic Formed</h3>
              <button
                onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))}
                className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Copy JSON
              </button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 transition duration-500"></div>
              <pre className="relative p-6 bg-[#0f172a]/80 backdrop-blur-md rounded-2xl overflow-x-auto border border-white/10 shadow-2xl custom-scrollbar text-sm sm:text-base text-blue-100">
                <code>{JSON.stringify(result, null, 2)}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </main>
  );
}
