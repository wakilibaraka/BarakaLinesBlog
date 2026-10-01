import { mockPost } from '../../data/mockPost';

export default function WabisabiPage() {
  return (
    <div className="min-h-screen bg-[#e8e4dc] text-[#3e3b32] font-serif p-4 sm:p-12 md:p-24 selection:bg-[#8c8672] selection:text-[#e8e4dc]">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative elements representing imperfection */}
        <div className="absolute top-0 right-10 w-32 h-32 bg-[#d1ccbf] rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#b5b0a1] rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none"></div>
        
        <header className="mb-24 mt-12 sm:mt-24 pl-4 sm:pl-12 border-l-2 border-[#b5b0a1]">
          <p className="text-[#8c8672] tracking-widest uppercase text-sm mb-6 font-light">{mockPost.date}</p>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight mb-8 text-[#2a2822]">
            {mockPost.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#6b6554] italic font-light max-w-2xl leading-relaxed">
            {mockPost.excerpt}
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-[#8c8672]">By {mockPost.author}</p>
        </header>

        <article className="space-y-16 text-lg sm:text-xl leading-loose max-w-2xl mx-auto pr-4 sm:pr-0">
          {mockPost.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} className="text-[#4a473d]">{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={index} className="text-3xl sm:text-4xl mt-24 mb-12 font-light text-[#2a2822] border-b border-[#d1ccbf] pb-4 inline-block">{block.text}</h2>;
            }
            if (block.type === 'image') {
              return (
                <figure key={index} className="my-24 -ml-4 sm:-ml-16 mr-4 sm:-mr-8 relative group">
                  <div className="absolute inset-0 bg-[#8c8672] transform translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img 
                    src={block.url} 
                    alt={block.alt} 
                    className="w-full h-auto object-cover grayscale opacity-90 sepia-[.2] contrast-75 brightness-110 relative z-10"
                  />
                  {block.alt && <figcaption className="mt-6 text-sm text-[#8c8672] italic text-right">{block.alt}</figcaption>}
                </figure>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="my-16 pl-8 sm:pl-16 border-l-[1px] border-[#8c8672] text-2xl sm:text-3xl italic text-[#5c5749] py-4">
                  &quot;{block.text}&quot;
                </blockquote>
              );
            }
            return null;
          })}
        </article>
        
        <footer className="mt-40 mb-12 text-center text-sm text-[#8c8672]">
          <a href="/" className="hover:text-[#2a2822] transition-colors border-b border-transparent hover:border-[#2a2822] pb-1">
            Return to Index
          </a>
        </footer>
      </div>
      
      {/* Texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </div>
  );
}
