# Overview

This is "Forever Yours" - a stunning romantic proposal web application created for Pritam to propose to Paramita. The app captures their love story through interactive diary entries, precious memories gallery, and a beautiful proposal section with animations and romantic effects.

# User Preferences

Preferred communication style: Simple, everyday language.
App has been converted to pure client-side React for easy deployment to Vercel.

# Current Architecture (Pure React App)

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing  
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with enhanced romantic color palette and beautiful gradients
- **Animations**: Framer Motion for romantic transitions, floating hearts, and celebration effects
- **State Management**: Local React state with useState hooks (no external state management)
- **Form Handling**: React Hook Form with Zod validation
- **Data Storage**: Constant arrays in `/src/data/demoData.ts` for easy customization

## Key Features
- **Personalized Home Page**: Love story hero section with animated proposal
- **Interactive Diary**: Timeline of daily entries from June 27th, 2025 onwards
- **Memories Gallery**: Beautiful photo/video gallery with romantic glass effects
- **Proposal Section**: Interactive proposal with celebration animations
- **Mobile Responsive**: Works perfectly on all devices
- **Easy Customization**: All content editable via data constants

## Enhanced Romantic Theme
- **Color Palette**: Rose gold, romantic pink, sunset gradients, lavender effects
- **Typography**: Playfair Display, Dancing Script, Great Vibes fonts
- **Animations**: Floating hearts, romantic glow effects, magical animations
- **Glass Effects**: Beautiful backdrop blur with romantic gradients
- **Love Cards**: Enhanced hover effects with shimmer animations

## File Structure
```
client/
├── public/images/          # User's personal photos go here
├── src/
│   ├── components/         # Reusable romantic components
│   ├── data/demoData.ts   # All customizable content HERE
│   ├── pages/             # Home, Diary, Memories pages
│   └── index.css          # Enhanced romantic styling
```

## Easy Customization Guide
1. **Add Personal Images**: Place photos in `client/public/images/`
2. **Edit Content**: Modify `client/src/data/demoData.ts` with your story
3. **Customize Text**: Update names, dates, messages, and love reasons
4. **Deploy**: Ready for easy conversion to Next.js + Vercel hosting

## Next.js Conversion Ready
The app structure is designed for seamless conversion to Next.js for free Vercel hosting. All components use standard React patterns and the file structure matches Next.js conventions.

# Recent Changes (August 2025)
- ✅ Removed all server-side code and database dependencies
- ✅ Converted to pure client-side React with local state
- ✅ Enhanced romantic theme with better colors and animations  
- ✅ Created easy customization system via data constants
- ✅ Added comprehensive image setup instructions
- ✅ Prepared structure for easy Next.js conversion