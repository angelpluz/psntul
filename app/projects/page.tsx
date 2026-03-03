import type { Metadata } from 'next'
import Image from 'next/image'
import { PROJECTS, SITE_CONFIG } from '../data'
import { ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Enterprise-grade solutions delivered by ${SITE_CONFIG.fullName}. View case studies of scalable web systems, AI integration, and legacy modernization projects.`,
}

export default function ProjectsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            A curated collection of enterprise solutions demonstrating scalable architecture, 
            intelligent automation, and seamless integration capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all hover:border-blue-500/30 hover:bg-zinc-900/50"
            >
              {/* Cover */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-6xl font-bold text-zinc-800">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm text-zinc-400">
                  {project.longDescription || project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Have a project in mind?</h2>
          <p className="mx-auto mt-2 max-w-lg text-zinc-400">
            Let&apos;s discuss how I can help architect a solution tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
