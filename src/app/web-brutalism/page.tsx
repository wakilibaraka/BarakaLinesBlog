import { mockPost } from '../../data/mockPost';

export default function WebBrutalismPage() {
  return (
    <div className="min-h-screen bg-white text-black p-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>&lt;&lt; Return to Index</a>
      
      <hr style={{ margin: '20px 0' }} />

      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{mockPost.title}</h1>
      <p>
        <strong>Author:</strong> {mockPost.author}<br />
        <strong>Date:</strong> {mockPost.date}
      </p>

      <blockquote style={{ borderLeft: '3px solid #ccc', margin: '1em 40px', padding: '0 1em' }}>
        <em>{mockPost.excerpt}</em>
      </blockquote>

      <hr style={{ margin: '20px 0' }} />

      <div>
        {mockPost.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index} style={{ marginBottom: '1em', lineHeight: '1.2' }}>
                {block.text}
              </p>
            );
          }
          if (block.type === 'heading') {
            return (
              <h2 key={index} style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1em', marginBottom: '0.5em' }}>
                {block.text}
              </h2>
            );
          }
          if (block.type === 'image') {
            return (
              <div key={index} style={{ margin: '1em 0' }}>
                <img 
                  src={block.url} 
                  alt={block.alt} 
                  style={{ border: '2px solid black', maxWidth: '100%', height: 'auto' }}
                />
                {block.alt && (
                  <div style={{ fontSize: '0.9em', marginTop: '0.5em' }}>
                    <em>Figure: {block.alt}</em>
                  </div>
                )}
              </div>
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={index} style={{ margin: '1em 40px', padding: '1em', backgroundColor: '#eee' }}>
                &quot;{block.text}&quot;
              </blockquote>
            );
          }
          return null;
        })}
      </div>

      <hr style={{ margin: '20px 0' }} />
      <p style={{ fontSize: '0.8em' }}>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Back</a> | 
        Powered by raw HTML
      </p>
    </div>
  );
}
