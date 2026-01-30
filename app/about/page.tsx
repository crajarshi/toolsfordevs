import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About ToolsForDevs.dev - Free online developer tools.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">About ToolsForDevs</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-zinc-400 text-lg">
          ToolsForDevs is a collection of free, fast, and privacy-focused online tools built for developers.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Our Mission</h2>
        <p className="text-zinc-400">
          We believe that everyday developer tools should be free, fast, and respect your privacy. 
          That&apos;s why we built ToolsForDevs - a collection of essential utilities that work entirely 
          in your browser with no signup, no tracking of your data, and no limits.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Privacy First</h2>
        <p className="text-zinc-400">
          Every tool on ToolsForDevs processes data locally in your browser using JavaScript. Your 
          JSON, your code, your data - it never leaves your device. We can&apos;t see it, we don&apos;t store 
          it, and we don&apos;t want to.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Available Tools</h2>
        <ul className="text-zinc-400 list-disc list-inside space-y-2">
          <li><strong className="text-zinc-200">JSON Formatter:</strong> Format, validate, and beautify JSON data</li>
          <li><strong className="text-zinc-200">Base64 Encoder/Decoder:</strong> Encode and decode Base64 strings</li>
          <li><em className="text-zinc-500">More tools coming soon...</em></li>
        </ul>
        
        <h2 className="text-xl font-semibold text-white mt-8">Open Source</h2>
        <p className="text-zinc-400">
          We believe in transparency. Our tools are built with modern web technologies including 
          Next.js, React, and Tailwind CSS. We&apos;re committed to keeping our tools fast, accessible, 
          and easy to use.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p className="text-zinc-400">
          Have suggestions for new tools? Found a bug? We&apos;d love to hear from you. Reach out at{' '}
          <a href="mailto:contact@toolsfordevs.dev" className="text-brand-400 hover:text-brand-300">
            contact@toolsfordevs.dev
          </a>
        </p>
      </div>
    </div>
  )
}
