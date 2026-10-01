import { mockPost } from '../../data/mockPost';

export default function ScrapbookPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-gray-900 p-4 sm:p-8 md:p-16 overflow-hidden relative selection:bg-pink-300">
      {/* Notebook grid background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{ backgroundImage: 'linear-gradient(#4da8da 1px, transparent 1px), linear-gradient(90deg, #4da8da 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <a href="/" className="inline-block bg-yellow-300 font-mono text-xs p-2 rotate-[-3deg] hover:rotate-0 transition-transform shadow-sm mb-12 border border-yellow-400 border-dashed">
          &lt;- Back to reality
        </a>

        <header className="mb-20 relative">
          <div className="absolute -top-10 -left-10 w-32 h-12 bg-pink-200/60 rotate-[-15deg] backdrop-blur-sm -z-10"></div>
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 w-32 h-6 bg-white/50 backdrop-blur-md rotate-[-2deg] shadow-sm transform -translate-x-1/2"></div>
          
          <div className="bg-white p-8 sm:p-12 shadow-xl rotate-[1deg] relative">
            <p className="font-mono text-red-500 mb-4">{mockPost.date} {'//'} {mockPost.author}</p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none mb-6 uppercase">
              {mockPost.title}
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-gray-700 bg-yellow-100 inline-block p-1">
              {mockPost.excerpt}
            </p>
          </div>
        </header>

        <article className="space-y-16">
          {mockPost.content.map((block, index) => {
            if (block.type === 'paragraph') {
              const rotate = (index % 3 === 0) ? '-rotate-1' : (index % 2 === 0) ? 'rotate-1' : 'rotate-0';
              return (
                <div key={index} className={`bg-white p-6 shadow-md ${rotate} inline-block w-full max-w-2xl relative`}>
                  {/* Tape */}
                  {(index % 2 === 0) && <div className="absolute -top-3 right-10 w-16 h-6 bg-blue-200/60 backdrop-blur-sm rotate-[12deg] shadow-sm"></div>}
                  <p className="font-serif text-lg leading-relaxed">{block.text}</p>
                </div>
              );
            }
            if (block.type === 'heading') {
              return (
                <div key={index} className="relative inline-block mt-12 mb-8">
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                  <h2 className="text-3xl font-bold bg-[#ff90e8] text-black p-4 relative z-10 border-2 border-black rotate-[-2deg]">
                    {block.text}
                  </h2>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <figure key={index} className="my-16 relative rotate-[3deg] mx-auto max-w-3xl">
                  {/* Tape */}
                  <div className="absolute -top-4 -left-4 w-24 h-8 bg-gray-200/80 backdrop-blur-sm rotate-[-45deg] shadow-sm z-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-8 bg-gray-200/80 backdrop-blur-sm rotate-[-45deg] shadow-sm z-20"></div>
                  
                  <div className="bg-white p-4 pb-16 shadow-2xl relative z-10 border border-gray-200">
                    <img 
                      src={block.url} 
                      alt={block.alt} 
                      className="w-full h-auto filter sepia-[0.3]"
                    />
                    {block.alt && <figcaption className="absolute bottom-4 left-4 font-mono text-sm text-gray-500 rotate-[-1deg]">{block.alt}</figcaption>}
                  </div>
                </figure>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="my-16 font-serif text-3xl italic font-bold p-8 relative">
                  <div className="absolute top-0 left-0 text-8xl text-red-200 -z-10 -translate-x-4 -translate-y-4 font-sans">&quot;</div>
                  <span className="bg-white/80 px-2 leading-loose box-decoration-clone">
                    {block.text}
                  </span>
                </blockquote>
              );
            }
            return null;
          })}
        </article>
      </div>
    </div>
  );
}
