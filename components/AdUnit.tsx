'use client'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  className?: string
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  // This component is a placeholder until you get AdSense approved
  // Once approved, uncomment the AdSense code below
  
  const isAdSenseEnabled = false // Set to true after AdSense approval
  
  if (!isAdSenseEnabled) {
    // Show placeholder during development
    return (
      <div className={`ad-slot ${className}`}>
        <span>Ad Space • {slot}</span>
      </div>
    )
  }
  
  // Uncomment this after AdSense approval:
  /*
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="YOUR_ADSENSE_CLIENT_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  )
  */
  
  return null
}
