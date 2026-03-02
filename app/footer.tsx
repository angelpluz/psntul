import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from './data'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="min-w-0 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white">
                A
              </div>
              <span className="break-words text-lg font-semibold text-white">{SITE_CONFIG.company}</span>
            </Link>
            <p className="text-sm text-zinc-400">
              Architecting scalable digital solutions for enterprise growth.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-blue-400"
                    aria-label={link.label}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  Enterprise Web Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex min-w-0 items-start gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="min-w-0 break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            {currentYear} {SITE_CONFIG.company}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Crafted with precision for scalable performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
