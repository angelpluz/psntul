import type { Metadata } from 'next'
import Image from 'next/image'
import { EXPERIENCE, SKILLS, SITE_CONFIG } from '../data'
import { MapPin, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${SITE_CONFIG.fullName}'s expertise in full-stack development and AI solutions architecture. Over a decade of delivering enterprise-grade solutions.`,
}

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="absolute inset-6 rounded-full bg-blue-500/10 blur-3xl" />
                  <Image
                    src="/pic/logotop-t.png"
                    alt="ALPRASOFT CORP"
                    width={768}
                    height={768}
                    priority
                    className="relative h-auto w-full"
                  />
                </div>
                <h1 className="text-2xl font-bold text-white">{SITE_CONFIG.name}</h1>
                <p className="text-blue-400">{SITE_CONFIG.title}</p>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="h-4 w-4" />
                    <span>Available Worldwide (Remote)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="h-4 w-4" />
                    <span>10+ Years Experience</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-blue-500"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-zinc-500">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-zinc-500">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-sm text-zinc-500">Avg. Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bio */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-white">About</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  I am a Full-Stack Developer and AI Solutions Architect with over a decade of experience 
                  architecting enterprise-grade digital solutions. My work focuses on transforming complex 
                  business requirements into scalable, maintainable systems that drive measurable outcomes.
                </p>
                <p>
                  Throughout my career, I have led the development of mission-critical applications serving 
                  hundreds of thousands of users, orchestrated seamless legacy system migrations with zero 
                  downtime, and integrated cutting-edge AI capabilities into existing business workflows.
                </p>
                <p>
                  My approach combines deep technical expertise with strategic business understanding. 
                  Whether it is architecting microservices infrastructure, implementing intelligent automation, 
                  or modernizing legacy systems, I prioritize solutions that deliver long-term value and 
                  operational excellence.
                </p>
              </div>
            </section>

            {/* Philosophy */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-white">Work Philosophy</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Scalability First',
                    description: 'Every solution is designed to grow with your business, handling increased load without compromising performance.',
                  },
                  {
                    title: 'Maintainable Code',
                    description: 'Clean, documented, and testable code that your team can understand, extend, and maintain.',
                  },
                  {
                    title: 'Business Alignment',
                    description: 'Technical decisions are always grounded in business objectives and measurable outcomes.',
                  },
                  {
                    title: 'Continuous Integration',
                    description: 'Iterative development with regular checkpoints to ensure alignment and quick feedback loops.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">Experience</h2>
              <div className="space-y-6">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative border-l-2 border-zinc-800 pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-zinc-950 bg-blue-500" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <span className="text-sm text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="mb-2 text-blue-400">{exp.company}</p>
                    <p className="text-sm text-zinc-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Technical Expertise</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {SKILLS.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
                  >
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
