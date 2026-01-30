import ToolCard from '@/components/ToolCard'
import AdUnit from '@/components/AdUnit'

const tools = [
  {
    title: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data. Instantly spot syntax errors and make your JSON readable.',
    href: '/json-formatter',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Base64 Encoder',
    description: 'Encode and decode Base64 strings instantly. Supports text and handles special characters.',
    href: '/base64-encoder',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  // Add more tools here as you build them:
  // {
  //   title: 'Timestamp Converter',
  //   description: 'Convert Unix timestamps to human-readable dates and vice versa.',
  //   href: '/timestamp-converter',
  //   icon: <ClockIcon />,
  // },
  // {
  //   title: 'UUID Generator',
  //   description: 'Generate random UUIDs (v4) for your applications.',
  //   href: '/uuid-generator',
  //   icon: <KeyIcon />,
  // },
]

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Developer Tools,{' '}
          <span className="text-brand-400">Simplified</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Free online tools for everyday coding tasks. Fast, private, no signup required. 
          Everything runs in your browser.
        </p>
      </div>
      
      {/* Ad Banner - Top */}
      <AdUnit slot="top-banner" className="mb-8 h-[90px]" />
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tools.map((tool) => (
          <ToolCard key={tool.href} {...tool} />
        ))}
      </div>
      
      {/* Ad Banner - Bottom */}
      <AdUnit slot="bottom-banner" className="mt-8 h-[90px]" />
      
      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
          <p className="text-zinc-400 text-sm">All processing happens locally in your browser. No server round-trips.</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-2">100% Private</h3>
          <p className="text-zinc-400 text-sm">Your data never leaves your browser. We don&apos;t store or track anything.</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-2">Always Free</h3>
          <p className="text-zinc-400 text-sm">No signup, no premium tiers, no limits. Just tools that work.</p>
        </div>
      </div>
    </div>
  )
}
