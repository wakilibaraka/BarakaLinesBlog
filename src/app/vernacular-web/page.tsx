import { mockPost } from '../../data/mockPost';

export default function VernacularWebPage() {
  return (
    <div 
      className="min-h-screen text-yellow-300 p-4 sm:p-8"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 2px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 20px 20px',
        fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive, sans-serif'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Under Construction Banner */}
        <div className="text-center p-3 mb-6 bg-yellow-400 text-black border-4 border-dashed border-red-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
          <span>🚧 UNDER CONSTRUCTION 🚧</span>
          <span>BEST VIEWED IN NETSCAPE NAVIGATOR 4.0</span>
          <span>🚧</span>
        </div>

        {/* Marquee Header */}
        <div className="p-3 mb-8 bg-blue-900 border-4 border-ridge border-yellow-300 text-center overflow-hidden">
          <div className="animate-pulse text-xl text-cyan-300 font-black tracking-wider">
            ★ WELCOME TO WAKILI BARAKA&apos;S HOMEPAGE ON THE WORLD WIDE WEB ★
          </div>
        </div>

        {/* Nav links */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <div className="flex gap-4">
            <a href="/" className="px-3 py-1 bg-red-600 text-white font-bold border-2 border-white hover:bg-yellow-400 hover:text-black">
              [ ← Home Index ]
            </a>
            <span className="px-3 py-1 bg-green-700 text-white font-bold border-2 border-white">
              [ Sign Guestbook ]
            </span>
          </div>
          <div className="bg-black border-2 border-yellow-400 px-3 py-1 text-xs font-mono text-lime-400">
            VISITOR #: [004982]
          </div>
        </div>

        {/* Rainbow HR */}
        <div className="h-2 mb-8 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500"></div>

        {/* Main Content Area */}
        <main className="bg-black/85 border-4 border-double border-cyan-400 p-6 sm:p-10 mb-12 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
          <header className="text-center mb-10 pb-6 border-b-2 border-yellow-400">
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-cyan-400 uppercase tracking-wide mb-4">
              {mockPost.title}
            </h1>
            <p className="text-sm font-mono text-cyan-300">
              * Posted on: {mockPost.date} by {mockPost.author} *
            </p>
            <div className="mt-4 p-3 bg-purple-950/80 border border-yellow-400 text-yellow-200 text-base italic">
              &quot;{mockPost.excerpt}&quot;
            </div>
          </header>

          <article className="space-y-8 text-lg text-white leading-relaxed font-sans">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-slate-100">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <div key={index} className="pt-6">
                    <h2 className="text-2xl font-black text-yellow-300 uppercase bg-blue-950 p-2 border-l-8 border-pink-500">
                      &gt;&gt;&gt; {block.text}
                    </h2>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-8 text-center bg-slate-900 p-4 border-4 border-yellow-300">
                    <img 
                      src={block.url} 
                      alt={block.alt} 
                      className="mx-auto border-4 border-lime-400 max-h-96"
                    />
                    {block.alt && (
                      <figcaption className="text-center text-xs font-mono text-yellow-300 mt-2">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-8 p-6 bg-red-950 border-4 border-yellow-400 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-yellow-200 italic">
                      &quot;{block.text}&quot;
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </article>
        </main>

        {/* Web Ring Footer */}
        <footer className="text-center p-6 border-4 border-gray-600 bg-gray-900 text-xs font-mono text-gray-300 mb-12">
          <p className="font-bold text-yellow-400 mb-2">
            [ Baraka Web Ring ] — [ Previous ] | [ Random ] | [ Next ]
          </p>
          <p>
            Proudly coded with Notepad • Optimized for 800x600 resolution • © 1999–2026 Baraka Lines
          </p>
        </footer>
      </div>
    </div>
  );
}
