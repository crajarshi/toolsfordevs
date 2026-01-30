import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64 Encoder & Decoder - Free Online Tool',
  description: 'Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 strings instantly. Supports UTF-8 characters. No signup required.',
  keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode base64', 'decode base64', 'base64 online', 'text to base64'],
  openGraph: {
    title: 'Base64 Encoder & Decoder - Free Online Tool',
    description: 'Encode and decode Base64 strings instantly. Free, fast, and private.',
    url: 'https://toolsfordevs.dev/base64-encoder',
  },
}

export default function Base64EncoderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
