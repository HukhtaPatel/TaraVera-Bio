# TaraVera Bio Website

A modern, minimalist biotech company website built with React and Tailwind CSS. TaraVera Bio is focused on building first-in-class therapeutics that target disease-modifying pathways in neurodegeneration.

![TaraVera Bio](https://customer-assets.emergentagent.com/job_brain-restore/artifacts/jjnhb7md_image.png)

## 🧬 About

TaraVera Bio is a precision biotech company developing small-molecule medicines for neurodegeneration. This website serves as the company's digital presence, showcasing their science, programme, team, and news.

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
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
│   │   └── index.html         # HTML template with font imports
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   ├── BiotechBackground.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── ThemeToggle.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx  # Dark/Light mode context
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Landing page
│   │   │   ├── Science.jsx    # Science page
│   │   │   ├── Programme.jsx  # Programme page
│   │   │   ├── AboutUs.jsx    # About Us page
│   │   │   └── News.jsx       # News page
│   │   │
│   │   ├── App.js             # Main app with routing
│   │   ├── App.css            # Global animations
│   │   └── index.css          # Tailwind & typography styles
│   │
│   ├── package.json           # Node dependencies
│   └── tailwind.config.js     # Tailwind configuration
│
└── README.md                  # This file
```

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

## 📄 Pages Overview

### Home (`/`)
- Hero section with video background
- Mission statement
- Feature cards (Biology, Biomarkers, Programme, About Us)
- Philosophy section with team CTA
- Latest news preview

### Science (`/science`)
- Video hero section
- Biology section - Disease progression
- Biomarker section - Measuring biology
- Patient Benefit section - Why tau clearance matters

### Programme (`/programme`)
- Lead Programme overview
- Outcome callout
- Development pathway diagram (8 steps)
- Funding stages (PreSeed → Seed → Series A)

### About Us (`/about`)
- Company introduction
- Vision and Values section (anchor: `#vision-and-values`)
- Management Team section (anchor: `#management-team`)
  - Radha Desai, PhD - Co-Founder and CEO/CSO
  - Sian Lewis - Co-Founder and Head of Drug Discovery

### News (`/news`)
- Company news and announcements
- TaraVera Bio formation story (January 2026)

## 🎨 Features

### Dark Mode
Toggle between light and dark themes using the sun/moon icon in the header. Theme preference is persisted in localStorage.

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
- Home page: Abstract neural network animation
- Science page: Protein/amino acid visualization

## 🔧 Customization

### Adding New Pages

1. Create a new component in `frontend/src/pages/`
2. Add the route in `frontend/src/App.js`:
   ```jsx
   import NewPage from './pages/NewPage';
   
   // In Routes
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `frontend/src/components/Header.jsx`

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

1. **Home page content**: Edit `frontend/src/pages/Home.jsx`
2. **Science content**: Edit `frontend/src/pages/Science.jsx`
3. **Programme content**: Edit `frontend/src/pages/Programme.jsx`
4. **Team profiles**: Edit `frontend/src/pages/AboutUs.jsx`
5. **News articles**: Edit `frontend/src/pages/News.jsx`

## 🔮 Future Enhancements

- [ ] Backend API for dynamic content management
- [ ] Contact form with email integration
- [ ] CMS integration for content updates
- [ ] Blog/News pagination
- [ ] Search functionality
- [ ] Analytics integration

## 📄 License

Proprietary - TaraVera Bio © 2026

## 👥 Team

- **Radha Desai, PhD** - Co-Founder and CEO/CSO
- **Sian Lewis** - Co-Founder and Head of Drug Discovery

## 📧 Contact

- Email: info@taraverabio.com
- Website: [TaraVera Bio](https://taraverabio.com)

---

Built with ❤️ for advancing neurodegeneration therapeutics.
