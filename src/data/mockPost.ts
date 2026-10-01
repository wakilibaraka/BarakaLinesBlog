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
  title: "Why I Write: A Journey of Self-Discovery",
  date: "October 2, 2026",
  author: "Wakili Baraka",
  excerpt: "My urge to write is the urge to give shape and meaning to my life. I write mostly for myself, for my self-regarding pleasure...",
  content: [
    { type: 'paragraph', text: 'My literary ambitions are mixed up with feelings of being isolated and undervalued. I know I have a facility for words and a power of facing unpleasant facts and situations, and I feel that I’ve created some sort of private life in literature in which I can get my own back for my failures.' },
    { type: 'heading', text: 'The Urge for Meaning' },
    { type: 'paragraph', text: 'My urge to write is the urge to give shape and meaning to my life. I write mostly for myself, for my self-regarding pleasure, trying to excel and always falling short of the excellence I desire. I write not only to find a way into the world but also to hold it away from me so that sheer, senseless events would not devour me.' },
    { type: 'image', url: '/author-photo.jpg', alt: 'Wakili Baraka standing in front of a plaque' },
    { type: 'paragraph', text: 'From political commentary on the socio-political landscape of Kenya to reflections on love, sustainable development, and environmental justice, my essays are a lens through which I try to make sense of everything around me. I invite you to join me on this journey. Please, understand me!' },
    { type: 'quote', text: 'Love is about bottomless empathy, born out of the heart’s revelation that another person is every bit as real as you are.' },
    { type: 'paragraph', text: 'Through these lines, I hope to continue exploring the complexities of human nature, advocating for what is right, and sharing a piece of my soul with the world.' }
  ]
};
