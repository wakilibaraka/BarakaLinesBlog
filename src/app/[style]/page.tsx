import Link from 'next/link';

export default function PlaceholderStylePage({ params }: { params: { style: string } }) {
  // Simple title casing
  const title = params.style.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-8">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600">
          This style template has not been implemented yet. It&apos;s on the roadmap!
        </p>
        <div className="pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Return to Index
          </Link>
        </div>
      </div>
    </div>
  );
}
