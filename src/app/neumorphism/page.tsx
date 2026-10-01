import { mockPost } from '../../data/mockPost';

export default function NeumorphismPage() {
  const bg = '#e0e5ec';
  const shadowLight = '#ffffff';
  const shadowDark = '#a3b1c6';
  
  const neumorphicOuter = {
    background: bg,
    boxShadow: `9px 9px 16px ${shadowDark}, -9px -9px 16px ${shadowLight}`,
    borderRadius: '24px'
  };

  const neumorphicInner = {
    background: bg,
    boxShadow: `inset 6px 6px 10px 0 ${shadowDark}, inset -6px -6px 10px 0 ${shadowLight}`,
    borderRadius: '16px'
  };

  return (
    <div className="min-h-screen text-[#4d5e75] font-sans selection:bg-[#4d5e75] selection:text-[#e0e5ec] p-4 sm:p-12 md:p-20" style={{ backgroundColor: bg }}>
      
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-16 px-4">
          <div className="p-4" style={{ ...neumorphicOuter, borderRadius: '50%' }}>
            <span className="font-bold tracking-tight">BL</span>
          </div>
          <a href="/" className="px-6 py-3 font-medium transition-transform active:scale-95 text-sm" style={{ ...neumorphicOuter, borderRadius: '12px' }}>
            Index
          </a>
        </nav>

        <main className="p-8 sm:p-16" style={neumorphicOuter}>
          <header className="mb-16 pb-12 border-b-2 border-white/40">
            <div className="flex gap-4 mb-8">
              <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={neumorphicInner}>
                {mockPost.date}
              </span>
              <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={neumorphicInner}>
                {mockPost.author}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#313d4f] leading-tight mb-8">
              {mockPost.title}
            </h1>
            
            <p className="text-xl text-[#758499] leading-relaxed p-6" style={neumorphicInner}>
              {mockPost.excerpt}
            </p>
          </header>

          <article className="space-y-12 text-lg leading-loose text-[#5b6b82]">
            {mockPost.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index}>{block.text}</p>;
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold text-[#313d4f] mt-20 mb-8 inline-block px-8 py-4" style={{ ...neumorphicOuter, borderRadius: '16px' }}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-16 p-4" style={neumorphicOuter}>
                    <div className="overflow-hidden rounded-xl" style={neumorphicInner}>
                      <img 
                        src={block.url} 
                        alt={block.alt} 
                        className="w-full h-auto rounded-xl opacity-90 mix-blend-multiply"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center mt-6 text-sm font-semibold tracking-wide text-[#758499]">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-16 p-8 sm:p-12 text-2xl font-medium italic text-[#4d5e75] leading-relaxed relative" style={neumorphicInner}>
                    <div className="absolute top-6 left-6 text-6xl text-[#a3b1c6] opacity-50">&quot;</div>
                    <span className="relative z-10 pl-6 block">{block.text}</span>
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
