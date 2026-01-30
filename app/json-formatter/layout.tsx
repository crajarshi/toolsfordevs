import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON Formatter & Validator - Free Online Tool',
  description: 'Free online JSON formatter and validator. Format, beautify, minify, and validate JSON data instantly. No signup required, all processing happens in your browser.',
  keywords: ['json formatter', 'json validator', 'json beautifier', 'json minifier', 'format json online', 'json parser', 'json pretty print'],
  openGraph: {
    title: 'JSON Formatter & Validator - Free Online Tool',
    description: 'Format, beautify, and validate JSON data instantly. Free, fast, and private.',
    url: 'https://toolsfordevs.dev/json-formatter',
  },
}

export default function JsonFormatterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
