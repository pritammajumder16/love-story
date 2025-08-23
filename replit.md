# Overview

This is a romantic web application called "Forever Yours" - a personal love story platform that allows couples to document their relationship journey through diary entries, memories with media uploads, and interactive proposal responses. The application combines a romantic theme with modern web technologies to create an intimate digital space for sharing and preserving special moments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom romantic color palette and CSS variables
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

The frontend follows a component-based architecture with:
- Page components for main routes (Home, Diary, Memories)
- Reusable UI components in the `/components/ui` directory
- Custom romantic-themed components like FloatingHearts and RomanticButton
- Responsive design with mobile-first approach

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **File Uploads**: Multer middleware for handling image and video uploads
- **Storage Strategy**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful API endpoints for diary entries, memories, and proposal responses

The backend uses a storage interface pattern allowing for easy switching between in-memory storage (development) and database storage (production).

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle with Neon Database serverless connection
- **File Storage**: Local file system for media uploads with configurable upload directory
- **Schema Management**: Drizzle migrations with PostgreSQL dialect
- **Data Validation**: Zod schemas shared between frontend and backend

## Authentication and Authorization
- Currently uses session-based authentication setup (connect-pg-simple for session store)
- User authentication schema defined but not fully implemented in current codebase
- Prepared for future authentication implementation with user management endpoints

## External Service Integrations
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Development Tools**: Replit-specific plugins and configurations for cloud development environment
- **Font Services**: Google Fonts integration for romantic typography (Playfair Display, Inter)
- **Build Tools**: ESBuild for production bundling, TypeScript compiler for type checking

The application architecture emphasizes type safety, romantic user experience, and scalable data management with a clear separation between client and server concerns.