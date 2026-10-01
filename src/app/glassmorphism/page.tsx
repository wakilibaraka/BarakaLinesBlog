import { mockPost } from '../../data/mockPost';

export default function GlassmorphismPage() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-pink-500/50 relative overflow-hidden">
      {/* Vivid Backdrop */}
      <div className="fixed inset-0 z-0 bg-gray-900">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/60 blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/60 blur-[150px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] rounded-full bg-pink-600/60 blur-[130px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 p-4 sm:p-12 md:p-20 max-w-5xl mx-auto">
        <nav className="flex justify-between items-center mb-12">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-bold text-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            BL
          </div>
          <a href="/" className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            Index
          </a>
        </nav>

        {/* Main Glass Panel */}
        <main className="rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden">
          {/* subtle top highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          
          <div className="p-8 sm:p-16">
            <header className="mb-16">
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-medium tracking-wide border border-white/10">
                  {mockPost.date}
                </span>
                <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-medium tracking-wide border border-white/10">
                  {mockPost.author}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                {mockPost.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
                {mockPost.excerpt}
              </p>
            </header>

            <article className="space-y-12 text-lg leading-loose text-white/70">
              {mockPost.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index}>{block.text}</p>;
                }
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-3xl font-semibold text-white mt-20 mb-8 tracking-tight">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-16 rounded-2xl bg-white/5 p-2 border border-white/10 backdrop-blur-md shadow-2xl">
                      <div className="overflow-hidden rounded-xl relative">
                         <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl z-10 pointer-events-none"></div>
                        <img 
                          src={block.url} 
                          alt={block.alt} 
                          className="w-full h-auto rounded-xl filter contrast-125 saturate-150"
                        />
                      </div>
                      {block.alt && (
                        <figcaption className="text-center mt-4 text-sm text-white/50 tracking-wide">
                          {block.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={index} className="my-16 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-lg relative overflow-hidden">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                      <p className="text-2xl sm:text-3xl font-light italic text-white leading-relaxed relative z-10">
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
