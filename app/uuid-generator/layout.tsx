import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UUID Generator - Generate Random UUIDs Online | ToolsForDevs',
  description: 'Free online UUID generator. Create random UUID v4 or timestamp-based UUID v1. Generate single or bulk UUIDs instantly. No signup required.',
  keywords: ['uuid generator', 'guid generator', 'random uuid', 'uuid v4', 'uuid v1', 'online uuid', 'generate uuid', 'uuid creator', 'bulk uuid generator'],
  openGraph: {
    title: 'UUID Generator - Generate Random UUIDs Online | ToolsForDevs',
    description: 'Free online UUID generator. Create random UUID v4 or timestamp-based UUID v1. Generate single or bulk UUIDs instantly.',
    url: 'https://toolsfordevs.dev/uuid-generator',
  },
}

export default function UUIDGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
