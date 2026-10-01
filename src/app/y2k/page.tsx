import { mockPost } from '../../data/mockPost';

export default function Y2KPage() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-fuchsia-500 selection:text-white p-4 sm:p-12 md:p-16 relative overflow-hidden bg-[#0d1117]">
      {/* Cyber Y2K background matrix grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #ff007f 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      {/* Iridescent chrome ambient glow */}
      <div className="fixed -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-600 blur-[130px] opacity-40 pointer-events-none"></div>
      <div className="fixed -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 blur-[140px] opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center mb-12 p-3 rounded-full border border-cyan-300/40 bg-gradient-to-r from-slate-900/80 via-slate-800/90 to-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.25)]">
          <div className="flex items-center gap-2 pl-4">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-bold">CYBER.BARAKA.2000</span>
          </div>
          <a 
            href="/" 
            className="px-6 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold text-slate-900 bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 hover:brightness-110 shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all"
          >
            &lt;&lt; Index
          </a>
        </nav>

        {/* Main Interface Window */}
        <main className="rounded-3xl border-2 border-cyan-400/50 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.2)] p-6 sm:p-12 relative overflow-hidden">
          {/* Top chrome metallic trim */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-cyan-400 via-pink-400 via-white to-cyan-400"></div>

          <header className="mb-12 border-b border-cyan-500/20 pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                LOG: {mockPost.date}
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-500/40 shadow-[0_0_8px_rgba(255,0,127,0.3)]">
                OPERATOR: {mockPost.author}
              </span>
              <span className="ml-auto font-mono text-[10px] text-cyan-400/60 uppercase tracking-widest hidden sm:inline">
                VER: 2.0.0_Y2K
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-pink-400 drop-shadow-[0_2px_10px_rgba(0,240,255,0.4)]">
              {mockPost.title}
            </h1>

            <div className="p-4 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/40 to-fuchsia-950/40 shadow-inner">
              <p className="font-mono text-sm sm:text-base text-cyan-100 leading-relaxed">
                &gt; {mockPost.excerpt}
              </p>
            </div>
          </header>

          <article className="space-y-10 text-slate-200 text-lg leading-relaxed">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-slate-300 font-normal">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <div key={index} className="pt-6">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-cyan-300 flex items-center gap-3">
                      <span className="text-pink-400 font-mono text-xl">✦</span>
                      <span>{block.text}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
                    </h2>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-10 p-2 rounded-2xl border-2 border-cyan-400/60 bg-gradient-to-b from-cyan-500/20 to-fuchsia-500/20 shadow-[0_0_30px_rgba(0,240,255,0.25)] relative">
                    <div className="overflow-hidden rounded-xl border border-cyan-300/40 relative">
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black/80 text-cyan-300 border border-cyan-400/50 z-10">
                        IMG_CAPTURE.RAW
                      </div>
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto filter contrast-125 brightness-105"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center font-mono text-xs text-cyan-300 uppercase tracking-widest mt-3 py-1">
                        [ {block.alt} ]
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-10 p-6 sm:p-8 rounded-2xl border border-fuchsia-400/50 bg-gradient-to-r from-fuchsia-950/60 via-purple-950/60 to-slate-900/60 shadow-[0_0_25px_rgba(255,0,127,0.2)] relative">
                    <div className="text-4xl text-fuchsia-400 font-mono leading-none mb-2">&quot;</div>
                    <p className="text-xl sm:text-2xl font-bold italic text-fuchsia-100 leading-snug">
                      {block.text}
                    </p>
                    <div className="text-4xl text-fuchsia-400 font-mono leading-none text-right mt-2">&quot;</div>
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
