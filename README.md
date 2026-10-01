# BarakaLines Blog — Multi-Style Design Laboratory

A visual styles exploration and redesign testbed for [barakalines.com](https://barakalines.com), rendering real editorial content and photography across distinct visual design paradigms and architectural aesthetics.

---

## 🚀 Quick Start (Terminal Commands)

Run the following command in your terminal from the project directory:

```bash
# 1. Install dependencies (if first time)
npm install

# 2. Start the local development server
npm run dev
```

Once running, open your browser to **[http://localhost:3000](http://localhost:3000)** to explore the style atlas and test each theme.

---

## 🎨 Styles Atlas & Live Test Links

Click any of the links below to test each design directly in your browser while your dev server (`npm run dev`) is active:

| # | Style | Status | Browser Test Link | Defining Signals & Characteristics | Source Code |
|---|---|---|---|---|---|
| 1 | **Wabi-sabi** | ✅ Completed | [Open `/wabisabi`](http://localhost:3000/wabisabi) | Earthy tones (`#e8e4dc`, `#3e3b32`), organic textures with noise filter, asymmetrical composition, unpolished natural beauty, loose serif typography, desaturated warm photography. | [`src/app/wabisabi`](./src/app/wabisabi/page.tsx) |
| 2 | **Minimal** | ✅ Completed | [Open `/minimal`](http://localhost:3000/minimal) | Strict monochrome palette, heavy negative space, ultra-crisp typography (Geist Sans), zero borders or drop-shadows, disciplined content rhythm. | [`src/app/minimal`](./src/app/minimal/page.tsx) |
| 3 | **Scrapbook / Mixed Media** | ✅ Completed | [Open `/scrapbook`](http://localhost:3000/scrapbook) | Notebook blue grid canvas, translucent washi-tape fasteners, dynamic element rotations (`-2°` to `3°`), mixed font personalities (mono, serif, sans), cut-out polaroid photo styling. | [`src/app/scrapbook`](./src/app/scrapbook/page.tsx) |
| 4 | **Skeuomorphism** | ✅ Completed | [Open `/skeuomorphism`](http://localhost:3000/skeuomorphism) | Real leather notebook cover (`#2b1c11`), stitched margins, cream fibrous paper background, spine depth shadow, debossed & embossed text, metallic badge action. | [`src/app/skeuomorphism`](./src/app/skeuomorphism/page.tsx) |
| 5 | **Neumorphism** | ✅ Completed | [Open `/neumorphism`](http://localhost:3000/neumorphism) | Continuous `#e0e5ec` soft plastic surface, dual soft shadow model (light top-left highlight, dark bottom-right drop), extruded cards, and inset pressed states. | [`src/app/neumorphism`](./src/app/neumorphism/page.tsx) |
| 6 | **Glassmorphism** | ✅ Completed | [Open `/glassmorphism`](http://localhost:3000/glassmorphism) | Dark backdrop with vivid glowing blur orbs, frosted glass translucent cards (`backdrop-blur-2xl`), hair-thin glowing borders, and top-edge specular line highlights. | [`src/app/glassmorphism`](./src/app/glassmorphism/page.tsx) |
| 7 | **Liquid Glass** | ✅ Completed | [Open `/liquid-glass`](http://localhost:3000/liquid-glass) | Modern Apple visionOS/macOS water-drop look, adaptive self-tinting (`mix-blend-color-burn`), thick specular lensing highlights, high-radius bubble cards. | [`src/app/liquid-glass`](./src/app/liquid-glass/page.tsx) |
| 8 | **Web Brutalism** | ✅ Completed | [Open `/web-brutalism`](http://localhost:3000/web-brutalism) | Raw default HTML elements, Times New Roman type, unstyled document flow, default browser link blue (`#0000EE`), exposed structure, zero decorative rendering. | [`src/app/web-brutalism`](./src/app/web-brutalism/page.tsx) |
| 9 | **Neobrutalism** | ✅ Completed | [Open `/neobrutalism`](http://localhost:3000/neobrutalism) | High-saturation yellow/pink/cyan blocks, heavy 8px black borders, hard unblurred 16px offset shadows, bold high-impact typography, tactile click shifts. | [`src/app/neobrutalism`](./src/app/neobrutalism/page.tsx) |
| 10 | **Y2K Digital Aesthetic** | ⏳ Roadmap | [Open `/y2k`](http://localhost:3000/y2k) | Liquid chrome, metallic gradients, gel plastic accents, iridescent blue-silver palette, early 2000s cyber-optimism. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 11 | **Frutiger Aero** | ⏳ Roadmap | [Open `/frutiger-aero`](http://localhost:3000/frutiger-aero) | Nature fused with tech, glossy glass, bright sky-blue and grass-green palettes, water bubbles, dynamic sun flares. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 12 | **Flat Design** | ⏳ Roadmap | [Open `/flat-design`](http://localhost:3000/flat-design) | Solid 2D color fills, zero simulated depth or gradients, clean geometric glyph icons, grid-based simplicity. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 13 | **Minimalism (Pure)** | ⏳ Roadmap | [Open `/minimalism`](http://localhost:3000/minimalism) | Absolute reduction to essentials, extreme typographical hierarchy, silence and emptiness as foundational material. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 14 | **Claymorphism** | ⏳ Roadmap | [Open `/claymorphism`](http://localhost:3000/claymorphism) | Puffy 3D pillowy buttons that resemble play-doh, dual inner shadows + outer soft shadow, large corner radii. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 15 | **Vernacular Web** | ⏳ Roadmap | [Open `/vernacular-web`](http://localhost:3000/vernacular-web) | GeoCities nostalgic aesthetic, tiled background textures, animated GIF ornaments, hit counters, hand-crafted badges. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 16 | **Aqua** | ⏳ Roadmap | [Open `/aqua`](http://localhost:3000/aqua) | Classic early Mac OS X candy-gel buttons, pinstriped window surfaces, pulsating blue drop controls. | [`src/app/[style]`](./src/app/[style]/page.tsx) |
| 17 | **Windows Aero** | ⏳ Roadmap | [Open `/windows-aero`](http://localhost:3000/windows-aero) | Windows 7 translucent frosted glass window headers, specular diagonal light sweeps, glowing hover actions. | [`src/app/[style]`](./src/app/[style]/page.tsx) |

---

## 🗂 Project Architecture

- **`src/data/mockPost.ts`**: Unified content model loaded across all styles, sourced from Wakili Baraka's *Why I Write* essay and authentic photography from `barakalines.com`.
- **`src/app/page.tsx`**: Dynamic hub listing and linking every style with its implementation status.
- **`src/app/[style]/page.tsx`**: Catch-all dynamic route providing an informative "Upcoming" preview for styles still in development.
- **`src/app/<style-name>/page.tsx`**: Scoped, high-fidelity implementations of each individual design aesthetic.
- **`public/author-photo.jpg`**: Author portrait used across all themes.

---

## 🛠 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Scoped CSS Rules
- **Typography**: [Geist](https://vercel.com/font) + contextual serif/mono web font fallbacks
