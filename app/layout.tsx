import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Tools for Devs - Free Online Developer Tools',
    template: '%s | Tools for Devs',
  },
  description: 'Free online developer tools: JSON formatter, Base64 encoder/decoder, timestamp converter, UUID generator, and more. Fast, private, no signup required.',
  keywords: ['developer tools', 'json formatter', 'base64 encoder', 'online tools', 'free tools', 'web developer', 'coding tools'],
  authors: [{ name: 'Tools for Devs' }],
  creator: 'Tools for Devs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolsfordevs.dev',
    siteName: 'Tools for Devs',
    title: 'Tools for Devs - Free Online Developer Tools',
    description: 'Free online developer tools: JSON formatter, Base64 encoder/decoder, timestamp converter, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools for Devs - Free Online Developer Tools',
    description: 'Free online developer tools for everyday coding tasks.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
        
        {/* Google AdSense - Add your AdSense code here after approval */}
        {/* 
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
        ></script>
        */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
