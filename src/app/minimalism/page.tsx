import { mockPost } from '../../data/mockPost';

export default function MinimalismPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
      {/* Top minimal header */}
      <header className="fixed top-0 inset-x-0 bg-[#fafafa]/90 backdrop-blur-sm z-30 px-6 sm:px-16 py-8 flex justify-between items-baseline border-b border-[#eeeeee]">
        <div className="text-xs tracking-[0.25em] uppercase font-mono">
          BarakaLines
        </div>
        <div className="flex gap-8 text-xs tracking-widest uppercase font-mono">
          <span className="text-[#888888]">{mockPost.date}</span>
          <a href="/" className="hover:text-black transition-colors underline underline-offset-4">
            Index
          </a>
        </div>
      </header>

      {/* Main Column */}
      <main className="max-w-2xl mx-auto pt-44 pb-36 px-6 sm:px-8">
        <div className="mb-28">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#999999] mb-8">
            Essay / {mockPost.author}
          </p>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.15] mb-12">
            {mockPost.title}
          </h1>
          <p className="text-lg font-light text-[#555555] leading-relaxed border-l border-[#111111] pl-6 py-1">
            {mockPost.excerpt}
          </p>
        </div>

        <article className="space-y-16 text-base sm:text-lg font-light leading-[2.1] text-[#222222]">
          {mockPost.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="text-[#222222]">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <div key={index} className="pt-12 pb-4">
                  <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[#000000]">
                    {block.text}
                  </h2>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <figure key={index} className="my-20 -mx-4 sm:-mx-12">
                  <img 
                    src={block.url} 
                    alt={block.alt} 
                    className="w-full h-auto grayscale contrast-125 block"
                  />
                  {block.alt && (
                    <figcaption className="text-center font-mono text-[11px] text-[#888888] tracking-widest uppercase mt-4">
                      {block.alt}
                    </figcaption>
                  )}
                </figure>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="my-20 py-8 px-4 text-center">
                  <p className="text-xl sm:text-2xl font-light italic leading-relaxed text-[#111111]">
                    &quot;{block.text}&quot;
                  </p>
                </blockquote>
              );
            }
            return null;
          })}
        </article>

        <footer className="mt-32 pt-12 border-t border-[#eeeeee] flex justify-between items-center text-xs font-mono text-[#888888] uppercase tracking-widest">
          <span>End of Reading</span>
          <a href="/" className="hover:text-black underline underline-offset-4">
            ← Return to Atlas
          </a>
        </footer>
      </main>
    </div>
  );
}
