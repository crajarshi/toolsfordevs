'use client'

import { useState, useCallback } from 'react'
import AdUnit from '@/components/AdUnit'

export default function JsonFormatterPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [indentSize, setIndentSize] = useState(2)
  const [copied, setCopied] = useState(false)

  const formatJson = useCallback(() => {
    setError('')
    setOutput('')
    
    if (!input.trim()) {
      setError('Please enter some JSON to format')
      return
    }
    
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, indentSize)
      setOutput(formatted)
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError(`Invalid JSON: ${e.message}`)
      } else {
        setError('An error occurred while parsing JSON')
      }
    }
  }, [input, indentSize])

  const minifyJson = useCallback(() => {
    setError('')
    setOutput('')
    
    if (!input.trim()) {
      setError('Please enter some JSON to minify')
      return
    }
    
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError(`Invalid JSON: ${e.message}`)
      } else {
        setError('An error occurred while parsing JSON')
      }
    }
  }, [input])

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

  const loadSample = useCallback(() => {
    const sample = {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "country": "USA"
      },
      "hobbies": ["reading", "gaming", "coding"],
      "active": true
    }
    setInput(JSON.stringify(sample))
    setOutput('')
    setError('')
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">JSON Formatter</h1>
        <p className="text-zinc-400">
          Format, validate, and beautify your JSON data instantly. All processing happens in your browser.
        </p>
      </div>
      
      {/* Ad Banner - Top */}
      <AdUnit slot="json-top" className="mb-6 h-[90px]" />
      
      {/* Tool Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Input Panel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-300">Input JSON</label>
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
            placeholder='Paste your JSON here...\n\n{"example": "value"}'
            className="w-full h-80 bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-sm text-zinc-100 placeholder-zinc-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none resize-none"
            spellCheck={false}
          />
        </div>
        
        {/* Output Panel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-300">Output</label>
            {output && (
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
            )}
          </div>
          <div className="w-full h-80 bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-auto">
            {error ? (
              <div className="text-red-400 text-sm font-mono">{error}</div>
            ) : output ? (
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-zinc-600 text-sm">Formatted JSON will appear here...</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button onClick={formatJson} className="btn-primary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Format JSON
        </button>
        
        <button onClick={minifyJson} className="btn-secondary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Minify
        </button>
        
        <div className="flex items-center gap-2 ml-auto">
          <label className="text-sm text-zinc-400">Indent:</label>
          <select
            value={indentSize}
            onChange={(e) => setIndentSize(Number(e.target.value))}
            className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-white focus:border-brand-500 outline-none"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={8}>8 spaces</option>
          </select>
        </div>
      </div>
      
      {/* Ad Banner - Middle */}
      <AdUnit slot="json-middle" className="my-8 h-[250px]" />
      
      {/* How to Use Section - Important for SEO and AdSense approval */}
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">How to Use the JSON Formatter</h2>
        <p className="text-zinc-400 mb-4">
          Our JSON formatter helps you quickly format, validate, and beautify JSON data. Simply paste your JSON 
          into the input field and click &quot;Format JSON&quot; to get perfectly indented, readable output.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Features</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li><strong className="text-zinc-200">Format & Beautify:</strong> Transform minified JSON into readable, indented format</li>
          <li><strong className="text-zinc-200">Validate:</strong> Instantly detect and highlight JSON syntax errors</li>
          <li><strong className="text-zinc-200">Minify:</strong> Compress JSON by removing whitespace</li>
          <li><strong className="text-zinc-200">Customizable Indentation:</strong> Choose 2, 4, or 8 spaces</li>
          <li><strong className="text-zinc-200">Copy to Clipboard:</strong> One-click copy of formatted output</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Common Use Cases</h3>
        <ul className="text-zinc-400 space-y-2 list-disc list-inside mb-6">
          <li>Debugging API responses</li>
          <li>Formatting configuration files</li>
          <li>Preparing JSON for documentation</li>
          <li>Validating JSON data structures</li>
          <li>Converting between minified and formatted JSON</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">What is JSON?</h3>
        <p className="text-zinc-400 mb-4">
          JSON (JavaScript Object Notation) is a lightweight data interchange format that&apos;s easy for humans 
          to read and write, and easy for machines to parse and generate. It&apos;s widely used in web APIs, 
          configuration files, and data storage.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Privacy</h3>
        <p className="text-zinc-400">
          Your JSON data never leaves your browser. All formatting and validation happens locally using 
          JavaScript, ensuring complete privacy and security for your data.
        </p>
      </div>
      
      {/* Ad Banner - Bottom */}
      <AdUnit slot="json-bottom" className="mt-8 h-[90px]" />
    </div>
  )
}
