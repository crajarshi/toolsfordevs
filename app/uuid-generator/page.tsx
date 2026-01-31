'use client'

import { useState, useCallback } from 'react'
import AdUnit from '@/components/AdUnit'

// Helper function to generate UUID v1 (timestamp-based)
function generateUUIDv1(): string {
  const now = Date.now()
  const clockSeq = Math.floor(Math.random() * 0x4000)

  // Convert timestamp to UUID time (100-nanosecond intervals since 1582-10-15)
  const uuidTime = (now + 12219292800000) * 10000

  const timeLow = (uuidTime & 0xffffffff).toString(16).padStart(8, '0')
  const timeMid = ((uuidTime / 0x100000000) & 0xffff).toString(16).padStart(4, '0')
  const timeHi = (((uuidTime / 0x1000000000000) & 0x0fff) | 0x1000).toString(16).padStart(4, '0')
  const clockSeqHi = ((clockSeq >> 8) | 0x80).toString(16).padStart(2, '0')
  const clockSeqLow = (clockSeq & 0xff).toString(16).padStart(2, '0')

  // Generate random node (simulating MAC address)
  const node = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  ).join('')

  return `${timeLow}-${timeMid}-${timeHi}-${clockSeqHi}${clockSeqLow}-${node}`
}

export default function UUIDGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([])
  const [version, setVersion] = useState<'v4' | 'v1'>('v4')
  const [count, setCount] = useState(1)
  const [uppercase, setUppercase] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const generateUUIDs = useCallback(() => {
    const newUuids: string[] = []

    for (let i = 0; i < count; i++) {
      let uuid: string
      if (version === 'v4') {
        uuid = crypto.randomUUID()
      } else {
        uuid = generateUUIDv1()
      }

      newUuids.push(uppercase ? uuid.toUpperCase() : uuid.toLowerCase())
    }

    setUuids(newUuids)
    setCopiedIndex(null)
    setCopiedAll(false)
  }, [version, count, uppercase])

  const copyToClipboard = useCallback(async (uuid: string, index: number) => {
    await navigator.clipboard.writeText(uuid)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }, [])

  const copyAllToClipboard = useCallback(async () => {
    if (uuids.length > 0) {
      await navigator.clipboard.writeText(uuids.join('\n'))
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2000)
    }
  }, [uuids])

  const formatCase = useCallback((uuid: string) => {
    return uppercase ? uuid.toUpperCase() : uuid.toLowerCase()
  }, [uppercase])

  // Update existing UUIDs when case changes
  const toggleCase = useCallback(() => {
    setUppercase(!uppercase)
    if (uuids.length > 0) {
      setUuids(uuids.map(uuid => !uppercase ? uuid.toUpperCase() : uuid.toLowerCase()))
    }
  }, [uppercase, uuids])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">UUID Generator</h1>
        <p className="text-zinc-400">
          Generate random UUIDs (v4) or timestamp-based UUIDs (v1) instantly. All processing happens in your browser.
        </p>
      </div>

      {/* Ad Banner - Top */}
      <AdUnit slot="uuid-top" className="mb-6 h-[90px]" />

      {/* Control Panel */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Version Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 block">UUID Version</label>
            <div className="flex gap-2">
              <button
                onClick={() => setVersion('v4')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  version === 'v4'
                    ? 'bg-brand-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                v4 (Random)
              </button>
              <button
                onClick={() => setVersion('v1')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  version === 'v1'
                    ? 'bg-brand-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                v1 (Timestamp)
              </button>
            </div>
          </div>

          {/* Count Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 block">Quantity</label>
            <select
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:border-brand-500 outline-none"
            >
              <option value={1}>1 UUID</option>
              <option value={5}>5 UUIDs</option>
              <option value={10}>10 UUIDs</option>
              <option value={25}>25 UUIDs</option>
              <option value={50}>50 UUIDs</option>
            </select>
          </div>

          {/* Case Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 block">Case</label>
            <button
              onClick={toggleCase}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white hover:border-brand-500 transition-colors flex items-center justify-between"
            >
              <span>{uppercase ? 'Uppercase' : 'Lowercase'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button onClick={generateUUIDs} className="btn-primary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Generate {version.toUpperCase()}
        </button>

        {uuids.length > 1 && (
          <button
            onClick={copyAllToClipboard}
            className="btn-secondary flex items-center gap-2"
          >
            {copiedAll ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied All!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy All
              </>
            )}
          </button>
        )}

        {uuids.length > 0 && (
          <span className="text-sm text-zinc-500">
            {uuids.length} UUID{uuids.length > 1 ? 's' : ''} generated
          </span>
        )}
      </div>

      {/* UUID Output */}
      {uuids.length > 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-8">
          <div className="space-y-2">
            {uuids.map((uuid, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded border border-zinc-700 hover:border-zinc-600 transition-colors group"
              >
                <span className="text-xs text-zinc-500 font-mono w-6">{index + 1}</span>
                <code className="flex-1 text-sm text-green-400 font-mono select-all">
                  {uuid}
                </code>
                <button
                  onClick={() => copyToClipboard(uuid, index)}
                  className="text-zinc-400 hover:text-brand-400 transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy UUID"
                >
                  {copiedIndex === index ? (
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 mb-8 text-center">
          <svg className="w-12 h-12 text-zinc-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <p className="text-zinc-600 text-sm">
            Click &quot;Generate {version.toUpperCase()}&quot; to create UUIDs
          </p>
        </div>
      )}

      {/* Ad Banner - Middle */}
      <AdUnit slot="uuid-middle" className="my-8 h-[250px]" />

      {/* How to Use Section - Important for SEO */}
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">How to Use the UUID Generator</h2>
        <p className="text-zinc-400 mb-4">
          Our UUID generator helps you quickly create universally unique identifiers for your applications.
          Choose between random UUID v4 or timestamp-based UUID v1, select the quantity you need, and
          generate instantly.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Features</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li><strong className="text-zinc-200">UUID v4 (Random):</strong> Generate cryptographically strong random UUIDs</li>
          <li><strong className="text-zinc-200">UUID v1 (Timestamp):</strong> Generate time-based UUIDs with timestamp information</li>
          <li><strong className="text-zinc-200">Bulk Generation:</strong> Create up to 50 UUIDs at once</li>
          <li><strong className="text-zinc-200">Case Toggle:</strong> Switch between uppercase and lowercase formats</li>
          <li><strong className="text-zinc-200">Copy Individual or All:</strong> Copy single UUIDs or all at once</li>
          <li><strong className="text-zinc-200">Instant Generation:</strong> No server requests, everything runs locally</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">What is a UUID?</h3>
        <p className="text-zinc-400 mb-4">
          A UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify information
          in computer systems. Also known as GUIDs (Globally Unique Identifiers), UUIDs are designed to be
          unique across space and time without requiring a central registration authority.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">UUID Versions</h3>
        <div className="text-zinc-400 space-y-3 mb-6">
          <div>
            <strong className="text-zinc-200">UUID v4 (Random):</strong> The most commonly used version.
            Generated using random or pseudo-random numbers. Format: <code className="text-green-400 text-sm">xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx</code>
          </div>
          <div>
            <strong className="text-zinc-200">UUID v1 (Timestamp-based):</strong> Generated using a timestamp
            and MAC address. Useful when you need time-ordered UUIDs. Format includes timestamp information
            that can be extracted if needed.
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Common Use Cases</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li>Database primary keys and record identifiers</li>
          <li>Session IDs and authentication tokens</li>
          <li>File names and temporary file creation</li>
          <li>Distributed systems and microservices</li>
          <li>API request tracking and correlation IDs</li>
          <li>Message queue and event identifiers</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">UUID Format</h3>
        <p className="text-zinc-400 mb-4">
          UUIDs are typically represented as 32 hexadecimal digits, displayed in five groups separated by
          hyphens: 8-4-4-4-12 (total of 36 characters including hyphens). Example:
          <code className="text-green-400 text-sm ml-2">550e8400-e29b-41d4-a716-446655440000</code>
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Privacy & Security</h3>
        <p className="text-zinc-400">
          All UUID generation happens locally in your browser using the Web Crypto API for v4 UUIDs,
          ensuring cryptographically strong randomness. No UUIDs are sent to any server, and no data
          is stored or tracked. Your generated UUIDs are completely private.
        </p>
      </div>

      {/* Ad Banner - Bottom */}
      <AdUnit slot="uuid-bottom" className="mt-8 h-[90px]" />
    </div>
  )
}
