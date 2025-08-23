# 🎨 How to Add Your Images

## Quick Start Guide

### Step 1: Create Your Images Folder
Your images should go in: `client/public/images/`

### Step 2: Add Your Images
Add these files with exactly these names:

**For Diary Entries:**
- `diary1.jpg` - First day photo
- `diary2.jpg` - Second day photo  
- `diary3.jpg` - Third day photo
- `diary4.jpg` - Fourth day photo

**For Memories:**
- `memory1.jpg` - First memory photo
- `memory2.jpg` - Second memory photo
- `memory3.jpg` - Third memory photo

### Step 3: Customize Your Content
Edit `client/src/data/demoData.ts` to change:
- ✏️ **Personal names and details**
- 📝 **Diary entry texts** 
- 💕 **Memory descriptions**
- 💌 **Proposal message**
- ❤️ **Love reasons**

## Image Tips

🖼️ **Best image sizes**: 800x600 pixels or larger  
📁 **Keep files under**: 2MB each  
🎯 **Good formats**: JPG, PNG  
💡 **Fallback**: App shows romantic stock photos if your images aren't found  

## Example Structure:
```
client/
├── public/
│   └── images/
│       ├── diary1.jpg
│       ├── diary2.jpg
│       ├── diary3.jpg
│       ├── diary4.jpg
│       ├── memory1.jpg
│       ├── memory2.jpg
│       └── memory3.jpg
└── src/
    └── data/
        └── demoData.ts  ← Edit your text here!
```

## Next Steps for Converting to Next.js

When you're ready to host this on Vercel:

1. **Create a new Next.js project**:
   ```bash
   npx create-next-app@latest my-proposal-app
   ```

2. **Copy your files**:
   - Copy `client/src/` content to `src/` 
   - Copy `client/public/images/` to `public/images/`
   - Copy the CSS and components

3. **Install dependencies**:
   ```bash
   npm install framer-motion lucide-react date-fns
   ```

4. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

Your app will work exactly the same way! 🚀