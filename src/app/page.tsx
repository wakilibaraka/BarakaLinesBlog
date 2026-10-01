import Link from 'next/link';

const STYLES = [
  { id: 'wabisabi', name: 'Wabisabi', status: 'completed' },
  { id: 'minimal', name: 'Minimal', status: 'completed' },
  { id: 'scrapbook', name: 'Scrapbook (Mixed Media)', status: 'completed' },
  { id: 'skeuomorphism', name: 'Skeuomorphism', status: 'placeholder' },
  { id: 'neumorphism', name: 'Neumorphism', status: 'placeholder' },
  { id: 'glassmorphism', name: 'Glassmorphism', status: 'placeholder' },
  { id: 'liquid-glass', name: 'Liquid Glass', status: 'placeholder' },
  { id: 'web-brutalism', name: 'Web Brutalism', status: 'placeholder' },
  { id: 'neobrutalism', name: 'Neobrutalism', status: 'placeholder' },
  { id: 'y2k', name: 'Y2K Digital Aesthetic', status: 'placeholder' },
  { id: 'frutiger-aero', name: 'Frutiger Aero', status: 'placeholder' },
  { id: 'flat-design', name: 'Flat Design', status: 'placeholder' },
  { id: 'minimalism', name: 'Minimalism', status: 'placeholder' },
  { id: 'claymorphism', name: 'Claymorphism', status: 'placeholder' },
  { id: 'vernacular-web', name: 'Vernacular Web', status: 'placeholder' },
  { id: 'aqua', name: 'Aqua', status: 'placeholder' },
  { id: 'windows-aero', name: 'Windows Aero', status: 'placeholder' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto font-sans bg-white text-black">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">BarakaLines Styles</h1>
        <p className="text-xl text-gray-600">
          An exploration of different visual aesthetics and UI styles applied to a single blog post.
        </p>
      </header>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Available Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STYLES.map((style) => (
            <Link 
              href={`/${style.id}`} 
              key={style.id}
              className="block p-6 rounded-lg border border-gray-200 hover:border-black hover:shadow-md transition-all group relative overflow-hidden"
            >
              <h3 className="text-lg font-medium group-hover:underline decoration-2 underline-offset-4">{style.name}</h3>
              <p className="text-sm mt-2 text-gray-500 uppercase tracking-wider font-semibold">
                {style.status === 'completed' ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-orange-500">Upcoming / Placeholder</span>
                )}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
