# TaraVera Bio Website

A modern, minimalist biotech company website built with React and Tailwind CSS. TaraVera Bio is focused on building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.

## 🧬 About

TaraVera Bio is a precision biotech company developing small-molecule medicines for neurodegeneration. This website serves as the company's digital presence, showcasing their science, team, and news.

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Component library
- **Lucide React** - Icon library

### Backend (Template - Not actively used)
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Uvicorn** - ASGI server

### Typography
- **Urbanist** - Display/heading font
- **Manrope** - Body/UI font

## 📁 Project Structure

```
/app
├── backend/
│   ├── .env                    # Backend environment variables
│   ├── requirements.txt        # Python dependencies
│   └── server.py              # FastAPI server (template)
│
├── frontend/
│   ├── public/
│   │   ├── assets/            # Logo and image assets
│   │   ├── videos/            # Video backgrounds
│   │   │   ├── hero-video.mp4
│   │   │   └── science-video.mp4
│   │   └── index.html         # HTML template with font imports
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   ├── BiotechBackground.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx     # Floating pill-shaped navigation
│   │   │   └── ThemeToggle.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx  # Dark/Light mode context
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx       # Single-page with all sections
│   │   │
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Global animations
│   │   └── index.css          # Tailwind & typography styles
│   │
│   ├── package.json           # Node dependencies
│   └── tailwind.config.js     # Tailwind configuration
│
└── README.md                  # This file
```

## 🎨 Design Features

### Logo System
The website uses a dual-logo system for optimal visibility across different backgrounds:

| Context | Logo Version | Description |
|---------|-------------|-------------|
| Dark backgrounds (hero, dark mode) | White text logo | Colorful icon + white "TaraVera Bio" text |
| Light backgrounds (scrolled header) | Black text logo | Colorful icon + black "TaraVera Bio" text |
| Footer | White text logo | Always on dark background |

**Logo sizing:**
- Desktop header: `h-8` (32px)
- Mobile header: `h-7` (28px)
- Footer: `h-14` (56px)

### Floating Pill Navigation
- Glassmorphism effect with backdrop blur
- Semi-transparent background that adapts to scroll position
- Smooth-scroll navigation to page sections
- Active section highlighting

### Single-Page Architecture
All content is consolidated into a single landing page with smooth-scroll navigation:
- **Home** (`#home`) - Hero section with video background
- **Science** (`#science`) - Scientific approach and biomarker strategy
- **About Us** (`#about`) - Vision, values, and management team
- **News** (`#news`) - Company announcements

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Yarn** (recommended) or npm
- **Python 3.9+** (optional, for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install backend dependencies** (optional)
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running Locally

#### Frontend Only (Recommended for development)

```bash
cd frontend
yarn start
```

The app will be available at `http://localhost:3000`

#### Full Stack (Frontend + Backend)

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8001`

### Environment Variables

#### Frontend (`frontend/.env`)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### Backend (`backend/.env`)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=taravera_bio
```

## 📄 Page Sections

### Home Section (`#home`)
- Hero section with video background
- Mission statement
- "Explore Our Science" CTA

### Science Section (`#science`)
- Our Approach - Precision science overview
- Biology explanation - Understanding neurodegeneration
- Biomarker Strategy - Fluid biomarker platform
- Lead Programme - Development pathway diagram

### About Us Section (`#about`)
- Vision and Values
- Management Team profiles:
  - Radha Desai, PhD - Co-Founder and CEO/CSO
  - Sian Lewis - Co-Founder and Head of Drug Discovery
- Contact Us CTA

### News Section (`#news`)
- Company formation announcement (January 2026)
- Company vision and mission

## 🎨 Features

### Dark Mode
Toggle between light and dark themes using the sun/moon icon in the header. Theme preference is persisted in localStorage.

The logo automatically switches between:
- **Light mode (scrolled)**: Black text logo for visibility on white header
- **Dark mode / Hero section**: White text logo for visibility on dark backgrounds

### Responsive Design
Fully responsive across all devices:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)

### Typography System
| Element | Font | Weight | Size (Desktop) |
|---------|------|--------|----------------|
| H1 (Hero) | Urbanist | 700 | 48-96px |
| H2 | Urbanist | 700 | 36px |
| H3 | Urbanist | 600 | 30px |
| H4 | Urbanist | 600 | 24px |
| Body | Manrope | 400 | 16px |
| Body Lead | Manrope | 400-500 | 18px |
| Nav Links | Manrope | 600 | 14px |
| Buttons | Manrope | 600 | 14-16px |

### Video Backgrounds
- Home hero: Abstract neural network animation
- Science section: Protein/amino acid visualization

## 🔧 Customization

### Adding New Sections

1. Add section content in `frontend/src/pages/Home.jsx`
2. Add section `id` attribute for scroll targeting
3. Add navigation link in `frontend/src/components/Header.jsx`:
   ```jsx
   const navLinks = [
     { name: 'Home', href: '#home' },
     { name: 'Science', href: '#science' },
     { name: 'About Us', href: '#about' },
     { name: 'News', href: '#news' },
     { name: 'New Section', href: '#new-section' }, // Add new link
   ];
   ```

### Updating Logos

Logo URLs are defined in:
- `frontend/src/components/Header.jsx` - Header logos (light and dark versions)
- `frontend/src/components/Footer.jsx` - Footer logo

To update logos:
1. Upload new logo images
2. Update the `src` URLs in the respective components
3. The system uses two logo versions:
   - Light mode logo (black text): For light backgrounds
   - Dark mode logo (white text): For dark backgrounds

### Modifying Theme Colors

Edit `frontend/tailwind.config.js` to customize the color palette:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Changing Fonts

1. Update Google Fonts link in `frontend/public/index.html`
2. Update font families in `frontend/tailwind.config.js`
3. Update CSS variables in `frontend/src/index.css`

## 📦 Build for Production

```bash
cd frontend
yarn build
```

The build output will be in `frontend/build/` directory.

## 🧪 Testing

```bash
cd frontend
yarn test
```

## 📝 Content Management

Currently, all content is hardcoded in the React components. To update content:

1. **All page sections**: Edit `frontend/src/pages/Home.jsx`
2. **Navigation**: Edit `frontend/src/components/Header.jsx`
3. **Footer content**: Edit `frontend/src/components/Footer.jsx`

## 🔮 Future Enhancements

- [ ] Backend API for dynamic content management
- [ ] Contact form with email integration
- [ ] CMS integration for content updates
- [ ] Scroll-triggered animations
- [ ] Interactive development pathway graphic
- [ ] Analytics integration

## 📄 License

Proprietary - TaraVera Bio © 2026

## 👥 Team

- **Radha Desai, PhD** - Co-Founder and CEO/CSO
- **Sian Lewis** - Co-Founder and Head of Drug Discovery

## 📧 Contact

- Email: info@taravera.bio
- Website: [TaraVera Bio](https://taravera.bio)

---

Built with ❤️ for advancing neurodegeneration therapeutics.
