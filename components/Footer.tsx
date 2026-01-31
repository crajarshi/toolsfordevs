import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-brand-500 rounded flex items-center justify-center text-white font-bold text-xs">
                {'</>'}
              </div>
              <span className="font-semibold text-white">
                Tools<span className="text-brand-400">ForDevs</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm">
              Free online tools for developers. Fast, private, no signup required.
            </p>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/json-formatter" className="text-zinc-400 hover:text-brand-400 transition-colors">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/base64-encoder" className="text-zinc-400 hover:text-brand-400 transition-colors">
                  Base64 Encoder
                </Link>
              </li>
              <li>
                <Link href="/uuid-generator" className="text-zinc-400 hover:text-brand-400 transition-colors">
                  UUID Generator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-brand-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contact@toolsfordevs.dev" 
                  className="text-zinc-400 hover:text-brand-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} ToolsForDevs. All tools run entirely in your browser.
        </div>
      </div>
    </footer>
  )
}
