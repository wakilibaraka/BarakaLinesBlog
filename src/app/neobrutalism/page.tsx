import { mockPost } from '../../data/mockPost';

export default function NeobrutalismPage() {
  return (
    <div className="min-h-screen bg-[#ffeb3b] text-black font-sans selection:bg-black selection:text-white p-4 sm:p-12 md:p-20 relative overflow-hidden">
      
      {/* Decorative large shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#ff4081] rounded-full border-8 border-black shadow-[16px_16px_0_0_#000] z-0"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#00e5ff] rotate-12 border-8 border-black shadow-[16px_16px_0_0_#000] z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <nav className="flex justify-between items-center mb-16">
          <div className="w-16 h-16 bg-[#ff4081] border-4 border-black flex items-center justify-center font-black text-2xl shadow-[8px_8px_0_0_#000]">
            BL
          </div>
          <a href="/" className="px-8 py-3 bg-white border-4 border-black font-bold uppercase text-lg shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all">
            Index
          </a>
        </nav>

        <main className="bg-white border-8 border-black shadow-[24px_24px_0_0_#000] p-8 sm:p-16 mb-20">
          
          <header className="mb-16 border-b-8 border-black pb-12">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-[#00e5ff] border-4 border-black font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#000]">
                {mockPost.date}
              </span>
              <span className="px-4 py-2 bg-[#ff4081] text-white border-4 border-black font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#000]">
                {mockPost.author}
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase leading-[1] mb-8 tracking-tighter">
              {mockPost.title}
            </h1>
            
            <p className="text-2xl font-bold bg-[#ffeb3b] border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
              {mockPost.excerpt}
            </p>
          </header>

          <article className="space-y-12 text-xl font-medium leading-relaxed">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index} className="border-l-8 border-black pl-6">{block.text}</p>;
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-4xl font-black uppercase bg-black text-white p-4 inline-block -rotate-1 mt-16 mb-8">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-16">
                    <div className="bg-[#ff4081] border-8 border-black shadow-[16px_16px_0_0_#000] p-4 rotate-1 relative z-10 hover:rotate-0 transition-transform">
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto border-4 border-black grayscale contrast-[1.5]"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="mt-8 font-bold uppercase bg-white border-4 border-black p-3 inline-block shadow-[4px_4px_0_0_#000] rotate-[-2deg]">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-16 p-12 bg-[#00e5ff] border-8 border-black shadow-[16px_16px_0_0_#000] relative">
                    <div className="absolute -top-6 -left-6 bg-[#ffeb3b] border-4 border-black w-16 h-16 flex items-center justify-center text-5xl font-black shadow-[4px_4px_0_0_#000]">
                      &quot;
                    </div>
                    <p className="text-3xl font-black uppercase leading-tight">
                      {block.text}
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
