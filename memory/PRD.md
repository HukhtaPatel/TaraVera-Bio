# TaraVera Bio Website - Product Requirements Document

## Original Problem Statement
Build a professional, modern, and minimalist landing page for a biotech company called "TaraVera Bio". The website should be investor-focused and showcase the company's science, technology, and team.

**Latest Update (December 2025):** Complete content overwrite and restructure from single-page landing page to multi-page website with new content from user-provided PDF.

## Core Requirements

### Navigation Structure
- **Top Navigation:** Home | Science | Programme | About Us | News
- No separate "Lead" page, "Vision and Values" page, or "Management Team" page in top nav
- Lead content merged into Programme page
- Vision/Values and Management Team are anchored sections within About Us page

### Page Structure

#### HOME
- Hero headline: "Precision where biology diverges."
- Hero subheadline: "Small-molecule medicines for neurodegeneration."
- Body copy: 4 paragraphs about TaraVera Bio's mission and approach
- Visual: Brain cells and aged human faces imagery

#### SCIENCE
- Section 1: Biology — What drives disease progression
- Section 2: Biomarker — How we measure and translate biology
- Section 3: Patient Benefit — Why tau clearance matters

#### PROGRAMME
- Lead Programme section (merged from separate Lead page)
- Headline: "Restoring Tau Homeostasis Through Enzymatic Control"
- Outcome callout: "a first-in-class, disease-modifying programme with a clear line of sight to clinical impact"
- Development pathway diagram: 8 steps from Target validation to Proof of concept
- Funding stages: Pre-seed → Seed → Series A

#### ABOUT US
- Intro copy about TaraVera Bio
- Sub-navigation: Vision and Values | Management Team
- **Vision section** (#vision-and-values): "Innovating with integrity to improve the lives of people affected by neurodegenerative disease."
- **Values section**: 4 cards - Patients First, Integrity-Driven Science, Collaborative by Design, Access-Minded Innovation
- **Management Team section** (#management-team): Placeholder layout for 6 future profiles

#### NEWS
- News item: "TaraVera Bio formation (January 2026)"
- Full story content about company founding

## Technical Implementation

### Tech Stack
- **Frontend:** React, Tailwind CSS, React Router, Shadcn UI components
- **State Management:** React Context API (ThemeContext for dark mode)
- **Icons:** lucide-react
- **Backend:** FastAPI (template available, not used)
- **Database:** MongoDB (template available, not used)

### Key Files
```
/app/frontend/src/
├── App.js                    # Main router setup
├── pages/
│   ├── Home.jsx              # Home page
│   ├── Science.jsx           # Science page (3 sections)
│   ├── Programme.jsx         # Programme page (Lead merged)
│   ├── AboutUs.jsx           # About Us with anchored sections
│   └── News.jsx              # News page
├── components/
│   ├── Header.jsx            # Navigation (5 links)
│   ├── Footer.jsx            # Footer with links
│   ├── BiotechBackground.jsx # Animated background
│   └── ThemeToggle.jsx       # Dark mode toggle
└── contexts/
    └── ThemeContext.jsx      # Dark/light mode state
```

## What's Been Implemented

### December 2025 - Complete Restructure
- ✅ Converted from single-page to multi-page React Router structure
- ✅ Created 5 new page components (Home, Science, Programme, AboutUs, News)
- ✅ Updated navigation to: Home | Science | Programme | About Us | News
- ✅ Merged Lead content into Programme page opening section
- ✅ Added sub-navigation for Vision/Values and Management Team in About Us
- ✅ Implemented development pathway diagram on Programme page
- ✅ Created placeholder Management Team cards
- ✅ Updated all content with new PDF-provided copy
- ✅ Removed old components (Hero, ScientificApproach, Technology, Team, Investment, CTA)
- ✅ Updated index.html meta description
- ✅ Maintained dark mode functionality across all pages
- ✅ Mobile responsive design with hamburger menu

### Previous Session
- ✅ Dark mode toggle
- ✅ Custom animated biotech background
- ✅ Responsive design

## Remaining/Future Tasks

### P0 - None (MVP Complete)

### P1 - Backend Integration (Future)
- Create MongoDB models for content sections
- Build FastAPI endpoints to serve content dynamically
- Refactor frontend to fetch from API instead of hardcoded values

### P2 - Contact Form (Future)
- Implement functional contact form
- Backend endpoint for form submission
- Email integration or database storage

### P3 - Team Profiles (Future)
- Replace placeholder Management Team cards with real profiles
- Add photos, bios, and contact links

## Testing Status
- **Frontend Testing:** 100% pass rate (14/14 tests)
- **Backend Testing:** N/A (no backend APIs used)
- **Test Report:** /app/test_reports/iteration_1.json

## Notes
- All content is currently hardcoded in frontend components
- Dark mode fully functional
- Mobile responsive with hamburger menu
- No third-party integrations required
