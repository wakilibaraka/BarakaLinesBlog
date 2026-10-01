import { mockPost } from '../../data/mockPost';

export default function LiquidGlassPage() {
  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      {/* Background: macOS Monterey inspired mesh gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#ff7e5f] via-[#feb47b] to-[#86a8e7]">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_30%,_#91eae4_0%,_transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_80%,_#7f00ff_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 p-4 sm:p-12 md:p-20 max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-12">
          {/* Liquid Glass Button */}
          <div className="w-12 h-12 flex items-center justify-center font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-[1.25rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/40"></div>
            {/* Inner highlight (lensing) */}
            <div className="absolute inset-x-1 top-1 h-1/2 bg-gradient-to-b from-white/70 to-transparent rounded-t-[1rem]"></div>
            <span className="relative z-10 text-sm">BL</span>
          </div>
          <a href="/" className="px-6 py-2 rounded-full font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative overflow-hidden group transition-transform active:scale-95">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/40"></div>
            {/* Inner highlight (lensing) */}
            <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-full"></div>
            <span className="relative z-10">Index</span>
          </a>
        </nav>

        {/* Main Content Pane */}
        <main className="rounded-[2.5rem] relative shadow-[0_24px_48px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Base liquid layer */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl backdrop-saturate-[1.2] border border-white/60"></div>
          {/* Extreme specular highlight on top edge */}
          <div className="absolute inset-x-4 top-2 h-1/3 bg-gradient-to-b from-white/60 to-transparent rounded-t-[2rem] pointer-events-none"></div>
          
          <div className="relative z-10 p-8 sm:p-16">
            <header className="mb-12 border-b border-white/30 pb-12">
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-md border border-white/50"></div>
                  <div className="absolute inset-x-1 top-0.5 h-1/2 bg-gradient-to-b from-white/80 to-transparent rounded-t-full"></div>
                  <span className="relative z-10">{mockPost.date}</span>
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-md border border-white/50"></div>
                  <div className="absolute inset-x-1 top-0.5 h-1/2 bg-gradient-to-b from-white/80 to-transparent rounded-t-full"></div>
                  <span className="relative z-10">{mockPost.author}</span>
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
                {mockPost.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl mix-blend-color-burn">
                {mockPost.excerpt}
              </p>
            </header>

            <article className="space-y-10 text-lg leading-loose text-gray-800">
              {mockPost.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index} className="mix-blend-color-burn font-medium">{block.text}</p>;
                }
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mt-16 mb-6 tracking-tight" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-12 rounded-[2rem] p-2 relative shadow-[0_12px_24px_rgba(0,0,0,0.1)]">
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl border border-white/50 rounded-[2rem]"></div>
                      <div className="absolute inset-x-4 top-1 h-1/3 bg-gradient-to-b from-white/60 to-transparent rounded-t-[1.5rem] pointer-events-none z-20"></div>
                      <div className="overflow-hidden rounded-[1.5rem] relative z-10">
                        <img 
                          src={block.url} 
                          alt={block.alt} 
                          className="w-full h-auto filter contrast-[1.1] saturate-[1.2]"
                        />
                      </div>
                      {block.alt && (
                        <figcaption className="text-center mt-4 mb-2 text-sm font-semibold text-gray-700 relative z-10">
                          {block.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={index} className="my-16 p-8 rounded-[2rem] relative shadow-[0_8px_16px_rgba(0,0,0,0.05)] overflow-hidden">
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-xl border border-white/60"></div>
                      <div className="absolute inset-x-4 top-2 h-1/3 bg-gradient-to-b from-white/70 to-transparent rounded-t-[1.5rem] pointer-events-none z-0"></div>
                      <p className="text-2xl font-semibold italic text-gray-800 leading-relaxed relative z-10 mix-blend-color-burn text-center">
                        &quot;{block.text}&quot;
                      </p>
                    </blockquote>
                  );
                }
                return null;
              })}
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
