import type { Metadata } from 'next'
import { SERVICES, SITE_CONFIG } from '../data'
import { Layers, Brain, RefreshCw, Workflow, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: `Enterprise web systems, AI integration, and legacy modernization services by ${SITE_CONFIG.fullName}. Architecting scalable solutions for business growth.`,
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Brain,
  RefreshCw,
  Workflow,
}

export default function ServicesPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Core Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            End-to-end solutions designed to scale with your business. 
            From architecture to deployment, every component is built for performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-blue-500/30 hover:bg-zinc-900/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                
                <h2 className="mb-3 text-2xl font-bold text-white">
                  {service.title}
                </h2>
                
                <p className="mb-6 text-zinc-400">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute -bottom-2 -right-2 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10" />
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Engagement Process</h2>
            <p className="mt-4 text-lg text-zinc-400">
              A structured approach to delivering enterprise-grade solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your requirements, constraints, and business objectives.',
              },
              {
                step: '02',
                title: 'Architecture',
                description: 'Design scalable, maintainable systems aligned with your goals.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Iterative implementation with continuous integration and feedback.',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Production-ready delivery with monitoring and documentation.',
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <span className="mb-4 block text-4xl font-bold text-zinc-800">
                  {phase.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{phase.title}</h3>
                <p className="text-sm text-zinc-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white">Ready to transform your operations?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Schedule a consultation to discuss how these services can be tailored to your specific needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
