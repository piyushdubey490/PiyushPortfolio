# Professional Portfolio Application

## Overview

This is a modern, full-stack professional portfolio application built for Piyush Dubey, an AI & DevOps Engineer. The application serves as a personal portfolio website showcasing services, projects, skills, and providing a contact mechanism for potential clients. The architecture follows a full-stack approach with a React frontend and Express.js backend, designed for professional presentation and client engagement.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, modern design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Custom CSS variables with dark/light theme support
- **Component Structure**: Modular component architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with JSON responses
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints

### Database & Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless) - **ACTIVE**
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Implementation**: DatabaseStorage class with full CRUD operations
- **Tables**: Users and ContactMessages with proper relations and indexing

## Key Components

### Portfolio Sections
1. **Hero Section**: Professional introduction with call-to-action buttons
2. **Services**: Detailed service offerings (AI/ML, DevOps, Web Development, API Integration)
3. **About**: Skills, certifications, and professional background
4. **Projects**: Portfolio of completed work with technology stacks
5. **Contact**: Professional contact form with multiple communication channels

### Contact System
- **Frontend Form**: React Hook Form with Zod validation
- **Backend API**: Express endpoints for form submission and message retrieval
- **Email Integration**: EmailJS for client-side email sending
- **Data Validation**: Shared schema validation between frontend and backend

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark/Light Theme**: Context-based theme switching with localStorage persistence
- **Smooth Animations**: CSS transitions and animations for professional feel
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend validates data using Zod schemas
3. Data sent to backend API endpoint `/api/contact`
4. Backend validates and stores message
5. EmailJS sends notification email
6. Success/error feedback displayed to user

### Content Rendering
1. Static data loaded from `/lib/data.ts`
2. Components render sections dynamically
3. Theme context provides styling preferences
4. Responsive design adapts to screen sizes

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Query
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form, Hookform Resolvers
- **Validation**: Zod for schema validation
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Development**: tsx for TypeScript execution, esbuild for building

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full-stack type checking
- **Development Experience**: Replit integration, runtime error overlay

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations via `db:push` script

### Environment Configuration
- **Development**: Hot module replacement via Vite dev server
- **Production**: Express serves static files and API routes
- **Database**: Environment variable `DATABASE_URL` for connection

### Hosting Considerations
- **Static Assets**: Served via Express static middleware in production
- **API Routes**: Express handles `/api/*` endpoints
- **Database**: Neon PostgreSQL serverless for scalability

## Changelog
```
Changelog:
- July 02, 2025. Initial setup
- July 03, 2025. Fixed social media icons in footer (replaced Font Awesome with React Icons)
- July 03, 2025. Updated contact information: email to piyushdubey490@icloud.com, phone to +91 78918 13326
- July 03, 2025. Fixed contact form to work without EmailJS errors, messages now stored in database
- July 03, 2025. Updated web development service to remove database design, added WordPress and Wix services
- July 03, 2025. Modified consulting service to focus on beginner-friendly business ideas and features
- July 03, 2025. Added new "Startup Ideas & MVP Planning" service for entrepreneurs and co-founders
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```