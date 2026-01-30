# ToolsForDevs

A collection of free, fast, and privacy-focused online developer tools.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Open this folder in VS Code**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
toolsfordevs/
├── app/
│   ├── layout.tsx          # Root layout with header, footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── json-formatter/     # JSON Formatter tool
│   ├── base64-encoder/     # Base64 Encoder tool
│   ├── privacy/            # Privacy Policy page
│   └── about/              # About page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ToolCard.tsx
│   └── AdUnit.tsx          # AdSense component (placeholder)
└── public/
```

## 🚢 Deploying to Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Connecting Your Domain

After deploying:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add `toolsfordevs.dev`
4. If you bought the domain through Vercel, it's automatic!

## 💰 Setting Up AdSense

### Step 1: Get Traffic First
- Deploy your site
- Wait 2-4 weeks to build some organic traffic
- Google typically wants to see ~10-15 pages of content

### Step 2: Apply for AdSense
1. Go to [adsense.google.com](https://adsense.google.com)
2. Sign up with your Google account
3. Add your site URL: `toolsfordevs.dev`
4. Copy the verification code snippet

### Step 3: Add Verification Code
In `app/layout.tsx`, uncomment and update the AdSense script:
```tsx
<script 
  async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
></script>
```

### Step 4: Wait for Approval
- Google will review your site (1-2 weeks typically)
- Make sure you have Privacy Policy and About pages (already included!)

### Step 5: Create Ad Units
After approval:
1. In AdSense, go to Ads > By ad unit
2. Create ad units for different placements
3. Update `components/AdUnit.tsx` with your ad unit codes
4. Set `isAdSenseEnabled = true` in AdUnit.tsx

## 📊 Setting Up Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property for `toolsfordevs.dev`
3. Get your Measurement ID (starts with `G-`)
4. In `app/layout.tsx`, uncomment and update:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## 🛠️ Adding More Tools

To add a new tool:

1. Create a new folder: `app/your-tool-name/`
2. Create `page.tsx` (the tool UI) and `layout.tsx` (metadata)
3. Add the tool to the `tools` array in `app/page.tsx`
4. Add navigation links in `Header.tsx` and `Footer.tsx`

### Suggested Next Tools
- Timestamp Converter (Unix ↔ Human readable)
- UUID Generator
- SQL Formatter
- URL Encoder/Decoder
- Hash Generator (MD5, SHA-1, SHA-256)

## 📝 License

MIT

## 🤝 Support

Questions? Contact: contact@toolsfordevs.dev
