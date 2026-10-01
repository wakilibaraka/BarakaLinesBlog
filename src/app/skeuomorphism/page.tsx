import { mockPost } from '../../data/mockPost';

export default function SkeuomorphismPage() {
  return (
    <div className="min-h-screen p-4 sm:p-12 md:p-20 font-serif" style={{ backgroundColor: '#2b1c11', backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }}>
      
      {/* Leather Notebook Container */}
      <div 
        className="max-w-4xl mx-auto rounded-lg shadow-2xl relative"
        style={{ 
          backgroundColor: '#4a2f1d', 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 20px 40px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)',
          border: '2px solid #2b1c11',
          padding: '2rem'
        }}
      >
        {/* Stitching */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            border: '2px dashed #8c603b',
            margin: '12px',
            opacity: 0.7,
            boxShadow: '0 0 2px rgba(0,0,0,0.5)'
          }}
        ></div>

        {/* Paper Pages */}
        <div 
          className="relative rounded-sm overflow-hidden mt-2"
          style={{ 
            backgroundColor: '#f4ecd8', 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
            boxShadow: 'inset 20px 0 30px rgba(0,0,0,0.1), inset -5px 0 10px rgba(0,0,0,0.05), -5px 0 10px rgba(0,0,0,0.5)',
            minHeight: '80vh',
            padding: '4rem 2rem 4rem 4rem'
          }}
        >
          {/* Notebook binding/crease shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>

          <header className="mb-12 border-b-2 border-[#d9cbb2] pb-8 relative z-10">
            <p className="text-[#8c7457] font-bold text-sm tracking-wider uppercase mb-2" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.5)' }}>
              {mockPost.date} — {mockPost.author}
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#3d2919] leading-tight" style={{ textShadow: '-1px -1px 0px rgba(255,255,255,0.7), 1px 1px 2px rgba(0,0,0,0.3)' }}>
              {mockPost.title}
            </h1>
            <p className="text-xl italic mt-6 text-[#5c4a3d] leading-relaxed">
              {mockPost.excerpt}
            </p>
          </header>

          <article className="space-y-8 text-[#3d2919] relative z-10 leading-loose text-lg">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index} style={{ textShadow: '0.5px 0.5px 0px rgba(255,255,255,0.3)' }}>{block.text}</p>;
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-16 mb-6" style={{ textShadow: '-1px -1px 0px rgba(255,255,255,0.7), 1px 1px 2px rgba(0,0,0,0.3)' }}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-12 p-4 bg-white rounded-sm shadow-md" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 0 2px rgba(0,0,0,0.1)' }}>
                    <div className="border border-gray-200 p-1 bg-[#f9f9f9]">
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto"
                        style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center mt-4 text-sm font-bold text-[#6b5a4b]" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.8)' }}>
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-12 p-8 bg-[#e8deca] rounded-sm relative" style={{ boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.1), 1px 1px 0px rgba(255,255,255,0.5)' }}>
                    <div className="absolute top-4 left-4 text-6xl text-[#bdae97] font-serif leading-none">&quot;</div>
                    <p className="text-2xl italic pl-8 relative z-10" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.4)' }}>
                      {block.text}
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </article>
          
          {/* Return link as a metallic badge */}
          <div className="mt-24 text-center pb-8">
            <a 
              href="/" 
              className="inline-block px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#3d2919]"
              style={{
                background: 'linear-gradient(to bottom, #f4ecd8, #d9cbb2)',
                border: '1px solid #bdae97',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,1)',
                textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
              }}
            >
              Return to Index
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
