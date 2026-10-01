import { mockPost } from '../../data/mockPost';

export default function MinimalPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50">
        <span className="font-medium tracking-tight text-sm">BarakaLines</span>
        <a href="/" className="text-sm text-gray-500 hover:text-black transition-colors">Index</a>
      </nav>

      <main className="max-w-3xl mx-auto pt-40 pb-32 px-6 sm:px-12">
        <header className="mb-32">
          <div className="flex gap-4 text-xs font-medium text-gray-400 mb-8 uppercase tracking-widest">
            <span>{mockPost.date}</span>
            <span>—</span>
            <span>{mockPost.author}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
            {mockPost.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed max-w-2xl">
            {mockPost.excerpt}
          </p>
        </header>

        <article className="space-y-12 text-lg leading-relaxed text-gray-800">
          {mockPost.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={index} className="text-2xl font-bold text-black mt-24 mb-8 tracking-tight">{block.text}</h2>;
            }
            if (block.type === 'image') {
              return (
                <figure key={index} className="my-20">
                  <img 
                    src={block.url} 
                    alt={block.alt} 
                    className="w-full h-auto"
                  />
                  {block.alt && <figcaption className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-medium">{block.alt}</figcaption>}
                </figure>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="my-20 text-3xl font-medium tracking-tight text-black leading-snug">
                  {block.text}
                </blockquote>
              );
            }
            return null;
          })}
        </article>
      </main>
    </div>
  );
}
