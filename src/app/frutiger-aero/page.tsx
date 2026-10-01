import { mockPost } from '../../data/mockPost';

export default function FrutigerAeroPage() {
  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-emerald-400 selection:text-white relative overflow-hidden bg-gradient-to-b from-[#29b6f6] via-[#81d4fa] to-[#a5d6a7]">
      {/* Aurora glow & atmosphere */}
      <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-400/50 via-teal-300/30 to-transparent pointer-events-none"></div>
      
      {/* Floating glossy water bubbles */}
      <div className="fixed top-12 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-white/80 via-white/20 to-transparent border border-white/60 shadow-[inset_0_4px_12px_rgba(255,255,255,0.8),0_8px_24px_rgba(0,140,255,0.25)] backdrop-blur-sm pointer-events-none animate-pulse"></div>
      <div className="fixed top-64 right-12 w-40 h-40 rounded-full bg-gradient-to-br from-white/70 via-white/10 to-transparent border border-white/50 shadow-[inset_0_6px_16px_rgba(255,255,255,0.9),0_12px_32px_rgba(0,180,120,0.2)] backdrop-blur-sm pointer-events-none"></div>
      <div className="fixed bottom-20 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-white/80 via-white/10 to-transparent border border-white/40 shadow-[inset_0_4px_10px_rgba(255,255,255,0.8),0_6px_18px_rgba(0,140,255,0.2)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto p-4 sm:p-12 md:p-16 relative z-10">
        {/* Glossy Header Bar */}
        <nav className="flex justify-between items-center mb-10 px-6 py-3 rounded-2xl bg-gradient-to-b from-white/90 via-white/70 to-white/50 border border-white/80 shadow-[0_10px_25px_rgba(0,100,180,0.15),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 shadow-[0_0_8px_#38bdf8]"></span>
            <span className="font-semibold tracking-wide text-sky-900 text-sm">Frutiger Aero — BarakaLines</span>
          </div>
          <a 
            href="/" 
            className="px-5 py-1.5 rounded-full text-xs font-bold text-sky-950 bg-gradient-to-b from-white via-sky-100 to-sky-200 border border-sky-300 shadow-[0_4px_10px_rgba(14,165,233,0.2),inset_0_1px_0_white] hover:brightness-105 transition-all"
          >
            ← Return to Index
          </a>
        </nav>

        {/* Main Aqua Glass Card */}
        <main className="rounded-[2.5rem] bg-gradient-to-b from-white/90 via-white/80 to-white/65 border-2 border-white/90 shadow-[0_20px_50px_rgba(0,80,160,0.2),inset_0_2px_4px_rgba(255,255,255,1)] backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden">
          {/* Top glossy sweep reflection */}
          <div className="absolute top-0 inset-x-8 h-20 bg-gradient-to-b from-white/80 to-transparent rounded-t-[2.5rem] pointer-events-none"></div>

          <header className="mb-12 border-b border-sky-200/60 pb-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-sky-800 bg-sky-100/90 border border-sky-300/60 shadow-[0_2px_6px_rgba(14,165,233,0.15)]">
                🌿 {mockPost.date}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100/90 border border-emerald-300/60 shadow-[0_2px_6px_rgba(16,185,129,0.15)]">
                💧 {mockPost.author}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-sky-950 leading-tight mb-6 drop-shadow-sm">
              {mockPost.title}
            </h1>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50/80 to-emerald-50/80 border border-sky-200/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]">
              <p className="text-lg sm:text-xl text-sky-900 font-medium leading-relaxed italic">
                {mockPost.excerpt}
              </p>
            </div>
          </header>

          <article className="space-y-10 text-slate-700 text-lg leading-loose">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-slate-700">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <div key={index} className="pt-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                      <span>{block.text}</span>
                    </h2>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-10 p-3 rounded-3xl bg-gradient-to-b from-white/90 to-sky-100/80 border-2 border-white shadow-[0_12px_30px_rgba(14,165,233,0.25)]">
                    <div className="overflow-hidden rounded-2xl shadow-inner relative">
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto filter saturate-125 brightness-105"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center font-medium text-sm text-sky-800 mt-3">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-10 p-8 rounded-3xl bg-gradient-to-r from-emerald-100/80 via-sky-100/80 to-blue-100/80 border border-emerald-300/80 shadow-[0_6px_20px_rgba(16,185,129,0.15)] relative">
                    <p className="text-xl sm:text-2xl font-semibold italic text-emerald-950 leading-relaxed text-center">
                      &quot;{block.text}&quot;
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </article>
        </main>
      </div>
    </div>
  );
}
