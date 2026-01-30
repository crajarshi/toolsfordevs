import Link from 'next/link'

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link href={href} className="tool-card block group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-brand-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
