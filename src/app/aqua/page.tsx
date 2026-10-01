import { mockPost } from '../../data/mockPost';

export default function AquaPage() {
  return (
    <div 
      className="min-h-screen p-4 sm:p-12 md:p-16 text-slate-800 font-sans"
      style={{
        backgroundColor: '#d8dee9',
        backgroundImage: 'repeating-linear-gradient(0deg, #f0f3f6, #f0f3f6 2px, #e4e9f0 2px, #e4e9f0 4px)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Mac OS X Aqua Window Frame */}
        <div 
          className="rounded-xl overflow-hidden border border-[#9ea9b8] shadow-[0_22px_45px_rgba(0,0,0,0.35)]"
          style={{
            background: 'linear-gradient(to bottom, #ededed 0%, #d8d8d8 30px, #e8e8e8 31px, #f5f5f5 100%)'
          }}
        >
          {/* Title Bar with Traffic Light Gumdrops */}
          <div className="h-9 px-4 flex items-center justify-between border-b border-[#adadad] select-none bg-gradient-to-b from-[#f2f2f2] to-[#cfcfcf]">
            {/* Gumdrop Window Controls */}
            <div className="flex items-center gap-2">
              {/* Red close */}
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#ff8d85] via-[#ff5f56] to-[#e0443e] border border-[#cf352d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.2)]"></div>
              {/* Yellow minimize */}
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#ffe071] via-[#ffbd2e] to-[#dea123] border border-[#c98e1b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.2)]"></div>
              {/* Green zoom */}
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#8be668] via-[#27c93f] to-[#1aab2f] border border-[#1d8c29] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.2)]"></div>
            </div>

            {/* Window Title */}
            <div className="font-semibold text-xs text-[#444444] tracking-wide" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.8)' }}>
              BarakaLines — Aqua Reader v10.4
            </div>

            {/* Top Right Pill / Action */}
            <a 
              href="/" 
              className="px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wide shadow-sm hover:brightness-105 active:brightness-95 transition-all"
              style={{
                background: 'linear-gradient(to bottom, #7db9e8 0%, #208ee5 48%, #1271c7 52%, #1995e8 100%)',
                border: '1px solid #0f5499',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Index
            </a>
          </div>

          {/* Aqua Pinstriped Content Canvas */}
          <div className="p-8 sm:p-14 bg-white/95">
            <header className="mb-12 pb-8 border-b border-slate-200">
              <div className="flex gap-3 mb-6">
                {/* Candy Gel Badges */}
                <span 
                  className="px-4 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #6cb2e4 0%, #1e7dc6 50%, #1063a5 52%, #1886d3 100%)',
                    border: '1px solid #0d548f',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.15)'
                  }}
                >
                  {mockPost.date}
                </span>
                <span 
                  className="px-4 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #a3d977 0%, #5cb82b 50%, #469a1c 52%, #62c332 100%)',
                    border: '1px solid #3c7d19',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.15)'
                  }}
                >
                  {mockPost.author}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c2833] leading-tight mb-6">
                {mockPost.title}
              </h1>

              <div 
                className="p-5 rounded-lg border border-[#b8c6d4]"
                style={{
                  background: 'linear-gradient(to bottom, #f0f5fa 0%, #e1ebf5 100%)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)'
                }}
              >
                <p className="text-base sm:text-lg text-[#2c3e50] leading-relaxed italic">
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
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5276] border-b-2 border-[#aed6f1] pb-2">
                        {block.text}
                      </h2>
                    </div>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-10 p-3 rounded-lg border border-[#aed6f1] bg-[#f4f9fd] shadow-md">
                      <div className="overflow-hidden rounded border border-[#b0bec5]">
                        <img 
                          src={block.url} 
                          alt={block.alt} 
                          className="w-full h-auto block"
                        />
                      </div>
                      {block.alt && (
                        <figcaption className="text-center text-xs font-semibold text-[#546e7a] mt-3">
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
                      className="my-10 p-6 sm:p-8 rounded-xl border border-[#7fb3d5]"
                      style={{
                        background: 'linear-gradient(to bottom, #ebf5fb 0%, #d4e6f1 100%)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), 0 3px 8px rgba(0,0,0,0.08)'
                      }}
                    >
                      <p className="text-xl sm:text-2xl font-bold italic text-[#1b4f72] text-center leading-relaxed">
                        &quot;{block.text}&quot;
                      </p>
                    </blockquote>
                  );
                }
                return null;
              })}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
