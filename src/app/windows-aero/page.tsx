import { mockPost } from '../../data/mockPost';

export default function WindowsAeroPage() {
  return (
    <div 
      className="min-h-screen p-4 sm:p-10 md:p-14 font-sans text-slate-800"
      style={{
        backgroundColor: '#0d2035',
        backgroundImage: 'radial-gradient(circle at 50% 30%, #1e528e 0%, #0d274c 50%, #06101f 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Windows Aero Window Frame */}
        <div 
          className="rounded-t-lg rounded-b-md overflow-hidden p-2 sm:p-2.5 backdrop-blur-xl border border-cyan-200/50 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          style={{
            background: 'linear-gradient(to bottom, rgba(140, 205, 255, 0.45) 0%, rgba(90, 160, 230, 0.3) 32px, rgba(70, 140, 210, 0.25) 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {/* Windows 7 Aero Title Bar */}
          <div className="h-8 px-3 flex items-center justify-between select-none mb-1.5">
            {/* Title Bar Left Info */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-cyan-400 to-sky-200 border border-white/60 shadow-sm flex items-center justify-center text-[10px] font-bold text-sky-950">
                W
              </div>
              <span 
                className="font-medium text-xs text-white tracking-wide"
                style={{ textShadow: '0 0 10px rgba(0, 200, 255, 0.9), 0 1px 2px rgba(0,0,0,0.8)' }}
              >
                BarakaLines — Windows Aero Document Viewer
              </span>
            </div>

            {/* Windows 7 Min / Max / Close Window Buttons */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="px-3 h-5 flex items-center justify-center text-[10px] text-white/90 border border-white/30 rounded-l hover:bg-white/30 hover:border-white/60 transition-colors"
                title="Index"
              >
                Index
              </a>
              <div className="w-8 h-5 flex items-center justify-center text-[10px] text-white border-y border-r border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                —
              </div>
              <div className="w-8 h-5 flex items-center justify-center text-[10px] text-white border-y border-r border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                □
              </div>
              <a 
                href="/" 
                className="w-10 h-5 flex items-center justify-center text-xs text-white border-y border-r border-white/30 rounded-r bg-red-600/70 hover:bg-red-600 hover:border-red-400 transition-colors"
                title="Close and Return to Index"
              >
                ✕
              </a>
            </div>
          </div>

          {/* Document Content Canvas */}
          <div className="bg-white rounded-sm p-6 sm:p-12 border border-[#b2c8d9] shadow-inner">
            <header className="mb-10 pb-8 border-b border-slate-200">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold text-[#1a5276] bg-[#eaf2f8] border border-[#aed6f1] rounded">
                  {mockPost.date}
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-[#1a5276] bg-[#eaf2f8] border border-[#aed6f1] rounded">
                  {mockPost.author}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c2833] leading-tight mb-6">
                {mockPost.title}
              </h1>

              <div 
                className="p-5 rounded border border-[#ccd1d9]"
                style={{
                  background: 'linear-gradient(to bottom, #fcfdfe 0%, #f4f7f9 100%)'
                }}
              >
                <p className="text-base sm:text-lg text-[#34495e] leading-relaxed italic">
                  {mockPost.excerpt}
                </p>
              </div>
            </header>

            <article className="space-y-10 text-lg leading-relaxed text-[#2c3e50]">
              {mockPost.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="text-[#333333]">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'heading') {
                  return (
                    <div key={index} className="pt-6">
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4f72] border-b-2 border-[#85c1e9] pb-2">
                        {block.text}
                      </h2>
                    </div>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-10 p-2.5 rounded border border-[#b2c8d9] bg-[#f8fafc] shadow-sm">
                      <div className="overflow-hidden rounded-sm border border-[#ccd1d9]">
                        <img 
                          src={block.url} 
                          alt={block.alt} 
                          className="w-full h-auto block"
                        />
                      </div>
                      {block.alt && (
                        <figcaption className="text-center text-xs font-medium text-[#566573] mt-2.5">
                          {block.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote 
                      key={index} 
                      className="my-10 p-6 sm:p-8 rounded border border-[#85c1e9]"
                      style={{
                        background: 'linear-gradient(to bottom, #ebf5fb 0%, #d4e6f1 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 6px rgba(0,0,0,0.06)'
                      }}
                    >
                      <p className="text-xl sm:text-2xl font-bold italic text-[#1a5276] text-center leading-relaxed">
                        &quot;{block.text}&quot;
                      </p>
                    </blockquote>
                  );
                }
                return null;
              })}
            </article>

            {/* Aero Status Bar */}
            <div className="mt-14 pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
              <span>Ready • 100% Zoom</span>
              <a href="/" className="text-sky-700 hover:underline">
                Return to Atlas Index
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
