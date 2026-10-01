export interface PostBlock {
  type: 'paragraph' | 'heading' | 'image' | 'quote';
  text?: string;
  url?: string;
  alt?: string;
}

export interface Post {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: PostBlock[];
}

export const mockPost: Post = {
  title: "The Art of Digital Spaces",
  date: "October 1, 2026",
  author: "Baraka",
  excerpt: "Exploring how the spaces we inhabit online shape our thoughts and creativity.",
  content: [
    { type: 'paragraph', text: 'When we think about architecture, we usually think of physical buildings. But what about the digital architecture we inhabit every day? The web is a series of rooms, hallways, and open fields, each designed with intent.' },
    { type: 'heading', text: 'Form and Function' },
    { type: 'paragraph', text: 'In the early days of the web, skeuomorphism gave us a sense of familiarity. Buttons looked like real plastic, textures mimicked leather and wood. It was comforting, a bridge between the physical and digital.' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', alt: 'Minimalist interior architecture' },
    { type: 'paragraph', text: 'As we grew more comfortable with screens, minimalism took over. We stripped away the excess, leaving only the essential. But sometimes, in removing the clutter, we also removed the character. Wabi-sabi teaches us to find beauty in the imperfect, the impermanent, and the incomplete.' },
    { type: 'quote', text: 'Design is not just what it looks like and feels like. Design is how it works.' },
    { type: 'paragraph', text: 'By exploring different design styles, we can understand the emotional resonance of our digital environments. Each style offers a different lens through which we interact with information.' }
  ]
};
