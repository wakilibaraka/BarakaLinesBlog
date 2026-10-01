import { mockPost } from '../../data/mockPost';

export default function ClaymorphismPage() {
  return (
    <div className="min-h-screen text-[#4a4063] font-sans selection:bg-[#ffb5c5] selection:text-white p-4 sm:p-12 md:p-16 bg-[#f4effa] relative overflow-hidden">
      {/* Floating puffy clay background shapes */}
      <div 
        className="fixed top-10 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-70"
        style={{
          background: '#ffb5c5',
          boxShadow: 'inset 8px 8px 16px rgba(255,255,255,0.7), inset -8px -8px 16px rgba(180,60,90,0.25), 12px 20px 30px rgba(160,110,140,0.2)'
        }}
      ></div>
      <div 
        className="fixed bottom-12 -right-10 w-56 h-56 rounded-full pointer-events-none opacity-60"
        style={{
          background: '#bae1ff',
          boxShadow: 'inset 10px 10px 20px rgba(255,255,255,0.8), inset -10px -10px 20px rgba(70,120,190,0.25), 15px 25px 35px rgba(120,140,180,0.2)'
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Clay Navigation Bar */}
        <nav 
          className="flex justify-between items-center mb-12 px-6 py-4 rounded-full"
          style={{
            background: '#ffffff',
            boxShadow: 'inset 4px 4px 10px rgba(255,255,255,1), inset -4px -4px 10px rgba(170,150,190,0.2), 10px 16px 24px rgba(160,140,180,0.18)'
          }}
        >
          <div className="flex items-center gap-3">
            <span 
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white"
              style={{
                background: '#b39ddb',
                boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(80,50,120,0.3), 4px 6px 10px rgba(140,110,170,0.25)'
              }}
            >
              BL
            </span>
            <span className="font-bold text-sm tracking-wide text-[#594d75]">Claymorphism Lab</span>
          </div>
          <a 
            href="/" 
            className="px-6 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wider transition-transform active:scale-95"
            style={{
              background: '#ff80ab',
              boxShadow: 'inset 3px 3px 8px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(170,40,80,0.3), 6px 10px 18px rgba(255,128,171,0.35)'
            }}
          >
            ← Index
          </a>
        </nav>

        {/* Main Puffy Clay Card */}
        <main 
          className="rounded-[3rem] p-8 sm:p-14 mb-16"
          style={{
            background: '#ffffff',
            boxShadow: 'inset 10px 10px 24px rgba(255,255,255,1), inset -10px -10px 24px rgba(180,165,200,0.25), 18px 28px 45px rgba(160,140,190,0.2)'
          }}
        >
          <header className="mb-12 pb-10 border-b border-[#ebdff5]">
            <div className="flex flex-wrap gap-3 mb-6">
              <span 
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#6a1b9a]"
                style={{
                  background: '#e1bee7',
                  boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.8), inset -3px -3px 6px rgba(120,60,150,0.25), 4px 6px 12px rgba(180,140,200,0.2)'
                }}
              >
                {mockPost.date}
              </span>
              <span 
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#00695c]"
                style={{
                  background: '#b2dfdb',
                  boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.8), inset -3px -3px 6px rgba(30,120,100,0.25), 4px 6px 12px rgba(120,180,170,0.2)'
                }}
              >
                {mockPost.author}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#372b52] leading-tight mb-6">
              {mockPost.title}
            </h1>

            <div 
              className="p-6 rounded-[2rem]"
              style={{
                background: '#fff9c4',
                boxShadow: 'inset 6px 6px 12px rgba(255,255,255,0.9), inset -6px -6px 12px rgba(200,180,60,0.25), 6px 10px 20px rgba(220,200,100,0.2)'
              }}
            >
              <p className="text-lg sm:text-xl text-[#795548] font-medium leading-relaxed italic">
                {mockPost.excerpt}
              </p>
            </div>
          </header>

          <article className="space-y-12 text-lg leading-loose text-[#52456e]">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-[#52456e] font-normal">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <div key={index} className="pt-6">
                    <h2 
                      className="text-2xl sm:text-3xl font-black text-[#372b52] inline-block px-8 py-3 rounded-full"
                      style={{
                        background: '#d1c4e9',
                        boxShadow: 'inset 4px 4px 8px rgba(255,255,255,0.8), inset -4px -4px 8px rgba(100,70,140,0.25), 8px 12px 20px rgba(160,130,200,0.25)'
                      }}
                    >
                      {block.text}
                    </h2>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure 
                    key={index} 
                    className="my-12 p-4 rounded-[2.5rem]"
                    style={{
                      background: '#ffe0b2',
                      boxShadow: 'inset 8px 8px 16px rgba(255,255,255,0.9), inset -8px -8px 16px rgba(200,110,40,0.25), 14px 20px 35px rgba(210,140,80,0.25)'
                    }}
                  >
                    <div className="overflow-hidden rounded-[2rem] shadow-sm">
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto filter contrast-105"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center font-bold text-sm text-[#8d6e63] mt-3">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote 
                    key={index} 
                    className="my-12 p-8 sm:p-10 rounded-[2.5rem] relative"
                    style={{
                      background: '#c8e6c9',
                      boxShadow: 'inset 8px 8px 16px rgba(255,255,255,0.9), inset -8px -8px 16px rgba(50,130,60,0.25), 12px 18px 30px rgba(120,180,130,0.25)'
                    }}
                  >
                    <p className="text-2xl font-bold italic text-[#2e7d32] leading-relaxed text-center">
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
