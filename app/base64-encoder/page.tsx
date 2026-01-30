'use client'

import { useState, useCallback } from 'react'
import AdUnit from '@/components/AdUnit'

export default function Base64EncoderPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)

  const processText = useCallback(() => {
    setError('')
    setOutput('')
    
    if (!input.trim()) {
      setError(`Please enter text to ${mode}`)
      return
    }
    
    try {
      if (mode === 'encode') {
        // Encode to Base64
        const encoded = btoa(unescape(encodeURIComponent(input)))
        setOutput(encoded)
      } else {
        // Decode from Base64
        const decoded = decodeURIComponent(escape(atob(input)))
        setOutput(decoded)
      }
    } catch (e) {
      if (mode === 'decode') {
        setError('Invalid Base64 string. Please check your input.')
      } else {
        setError('An error occurred during encoding.')
      }
    }
  }, [input, mode])

  const copyToClipboard = useCallback(async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [output])

  const clearAll = useCallback(() => {
    setInput('')
    setOutput('')
    setError('')
  }, [])

  const swapInputOutput = useCallback(() => {
    if (output) {
      setInput(output)
      setOutput('')
      setError('')
      setMode(mode === 'encode' ? 'decode' : 'encode')
    }
  }, [output, mode])

  const loadSample = useCallback(() => {
    if (mode === 'encode') {
      setInput('Hello, World! This is a sample text for Base64 encoding.')
    } else {
      setInput('SGVsbG8sIFdvcmxkISBUaGlzIGlzIGEgc2FtcGxlIHRleHQgZm9yIEJhc2U2NCBlbmNvZGluZy4=')
    }
    setOutput('')
    setError('')
  }, [mode])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Base64 Encoder & Decoder</h1>
        <p className="text-zinc-400">
          Encode text to Base64 or decode Base64 strings instantly. Supports UTF-8 characters.
        </p>
      </div>
      
      {/* Ad Banner - Top */}
      <AdUnit slot="base64-top" className="mb-6 h-[90px]" />
      
      {/* Mode Toggle */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => { setMode('encode'); setOutput(''); setError(''); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'encode'
              ? 'bg-brand-500 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => { setMode('decode'); setOutput(''); setError(''); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'decode'
              ? 'bg-brand-500 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          Decode
        </button>
      </div>
      
      {/* Tool Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Input Panel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-300">
              {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
            </label>
            <div className="flex gap-2">
              <button onClick={loadSample} className="text-xs text-zinc-400 hover:text-brand-400 transition-colors">
                Load Sample
              </button>
              <button onClick={clearAll} className="text-xs text-zinc-400 hover:text-red-400 transition-colors">
                Clear
              </button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string to decode...'}
            className="w-full h-64 bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-sm text-zinc-100 placeholder-zinc-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none resize-none"
            spellCheck={false}
          />
        </div>
        
        {/* Output Panel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-300">
              {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
            </label>
            {output && (
              <div className="flex gap-2">
                <button 
                  onClick={swapInputOutput} 
                  className="text-xs text-zinc-400 hover:text-brand-400 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  Swap
                </button>
                <button 
                  onClick={copyToClipboard} 
                  className="text-xs text-zinc-400 hover:text-brand-400 transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
          <div className="w-full h-64 bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-auto">
            {error ? (
              <div className="text-red-400 text-sm font-mono">{error}</div>
            ) : output ? (
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-all">{output}</pre>
            ) : (
              <span className="text-zinc-600 text-sm">
                {mode === 'encode' ? 'Encoded Base64 will appear here...' : 'Decoded text will appear here...'}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button onClick={processText} className="btn-primary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {mode === 'encode' ? 'Encode to Base64' : 'Decode Base64'}
        </button>
        
        {output && (
          <span className="text-sm text-zinc-500">
            {mode === 'encode' 
              ? `Output: ${output.length} characters`
              : `Output: ${output.length} characters`
            }
          </span>
        )}
      </div>
      
      {/* Ad Banner - Middle */}
      <AdUnit slot="base64-middle" className="my-8 h-[250px]" />
      
      {/* How to Use Section */}
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">How to Use the Base64 Encoder/Decoder</h2>
        <p className="text-zinc-400 mb-4">
          Our Base64 tool allows you to quickly encode text to Base64 or decode Base64 strings back to 
          readable text. Simply paste your content, choose encode or decode mode, and get instant results.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Features</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li><strong className="text-zinc-200">Encode:</strong> Convert plain text to Base64 format</li>
          <li><strong className="text-zinc-200">Decode:</strong> Convert Base64 back to readable text</li>
          <li><strong className="text-zinc-200">UTF-8 Support:</strong> Handles special characters and emojis</li>
          <li><strong className="text-zinc-200">Swap Function:</strong> Quickly swap input/output for reverse operations</li>
          <li><strong className="text-zinc-200">Copy to Clipboard:</strong> One-click copy of results</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">What is Base64?</h3>
        <p className="text-zinc-400 mb-4">
          Base64 is a binary-to-text encoding scheme that represents binary data using 64 printable ASCII 
          characters. It&apos;s commonly used to encode data that needs to be stored or transferred over media 
          designed to handle text, such as embedding images in HTML or encoding email attachments.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Common Use Cases</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li>Encoding data for URLs and query strings</li>
          <li>Embedding images in CSS or HTML</li>
          <li>Encoding credentials for HTTP Basic Authentication</li>
          <li>Storing binary data in JSON or XML</li>
          <li>Encoding email attachments (MIME)</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Privacy</h3>
        <p className="text-zinc-400">
          All encoding and decoding happens locally in your browser using JavaScript. Your data never 
          leaves your device, ensuring complete privacy and security.
        </p>
      </div>
      
      {/* Ad Banner - Bottom */}
      <AdUnit slot="base64-bottom" className="mt-8 h-[90px]" />
    </div>
  )
}
