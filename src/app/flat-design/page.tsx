import { mockPost } from '../../data/mockPost';

export default function FlatDesignPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f1] text-[#2c3e50] font-sans selection:bg-[#1abc9c] selection:text-white p-4 sm:p-12 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center mb-8 p-4 bg-[#2c3e50] text-white">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#1abc9c]"></span>
            <span className="font-bold text-sm uppercase tracking-wider">BarakaLines // Flat Design</span>
          </div>
          <a 
            href="/" 
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#e74c3c] text-white hover:bg-[#c0392b] transition-colors"
          >
            Return to Index
          </a>
        </nav>

        {/* Header Tile Block */}
        <header className="mb-8 p-8 sm:p-12 bg-[#34495e] text-white">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#1abc9c] text-white">
              {mockPost.date}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#f39c12] text-white">
              {mockPost.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-6">
            {mockPost.title}
          </h1>

          <div className="p-4 bg-[#2c3e50] border-l-4 border-[#e74c3c]">
            <p className="text-lg text-[#bdc3c7] font-normal leading-relaxed">
              {mockPost.excerpt}
            </p>
          </div>
        </header>

        {/* Content Section */}
        <main className="bg-white p-8 sm:p-12 border-t-8 border-[#1abc9c]">
          <article className="space-y-8 text-lg leading-relaxed text-[#34495e]">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-[#2c3e50]">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <div key={index} className="pt-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#2c3e50] pb-2 border-b-2 border-[#bdc3c7]">
                      {block.text}
                    </h2>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-8 bg-[#ecf0f1] p-4">
                    <img 
                      src={block.url} 
                      alt={block.alt} 
                      className="w-full h-auto block"
                    />
                    {block.alt && (
                      <figcaption className="text-xs uppercase font-bold text-[#7f8c8d] tracking-wider mt-3">
                        Figure: {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-8 p-6 bg-[#3498db] text-white border-l-8 border-[#2980b9]">
                    <p className="text-xl sm:text-2xl font-bold leading-relaxed">
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
