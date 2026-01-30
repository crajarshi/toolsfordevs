import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for ToolsForDevs.dev - Learn how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-zinc-400">
          <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Overview</h2>
        <p className="text-zinc-400">
          ToolsForDevs.dev (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Data Processing</h2>
        <p className="text-zinc-400">
          <strong className="text-zinc-200">All tools on this website process data entirely in your browser.</strong> When you use our JSON 
          formatter, Base64 encoder, or any other tool, your data never leaves your device. We do not 
          transmit, store, or have access to any data you input into our tools.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
        <p className="text-zinc-400">We may collect the following types of information:</p>
        <ul className="text-zinc-400 list-disc list-inside space-y-2">
          <li>
            <strong className="text-zinc-200">Analytics Data:</strong> We use Google Analytics to understand how visitors use our site. 
            This includes anonymous information such as pages visited, time spent on site, browser type, 
            and approximate geographic location.
          </li>
          <li>
            <strong className="text-zinc-200">Advertising Data:</strong> We display advertisements through Google AdSense. Google may use 
            cookies to serve ads based on your prior visits to our website or other websites. You can opt 
            out of personalized advertising by visiting Google&apos;s Ads Settings.
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold text-white mt-8">Cookies</h2>
        <p className="text-zinc-400">
          We use cookies for analytics and advertising purposes. You can control cookie preferences through 
          your browser settings. Note that disabling cookies may affect your experience on our site.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Third-Party Services</h2>
        <p className="text-zinc-400">We use the following third-party services:</p>
        <ul className="text-zinc-400 list-disc list-inside space-y-2">
          <li><strong className="text-zinc-200">Google Analytics:</strong> For website analytics</li>
          <li><strong className="text-zinc-200">Google AdSense:</strong> For displaying advertisements</li>
        </ul>
        <p className="text-zinc-400">
          These services have their own privacy policies. We encourage you to review them.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Data Security</h2>
        <p className="text-zinc-400">
          We implement appropriate security measures to protect against unauthorized access or alteration 
          of information. Our website uses HTTPS encryption for all communications.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Children&apos;s Privacy</h2>
        <p className="text-zinc-400">
          Our website is not directed to children under 13. We do not knowingly collect personal information 
          from children under 13.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Changes to This Policy</h2>
        <p className="text-zinc-400">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
          the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Contact Us</h2>
        <p className="text-zinc-400">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:contact@toolsfordevs.dev" className="text-brand-400 hover:text-brand-300">
            contact@toolsfordevs.dev
          </a>
        </p>
      </div>
    </div>
  )
}
