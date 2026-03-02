import type { Metadata } from 'next'
import { SITE_CONFIG } from '../data'
import { Mail, MapPin, Clock, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${SITE_CONFIG.fullName} to discuss your project requirements. Available for enterprise web development and AI integration consulting.`,
}

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Start a Project
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Have a project in mind? Let's discuss how we can architect a solution 
            that drives real business outcomes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="mb-6 text-xl font-semibold text-white">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-sm text-zinc-400">
                      Available Worldwide (Remote)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Response Time</h3>
                    <p className="text-sm text-zinc-400">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">What to Expect</h2>
              <ul className="space-y-3">
                {[
                  'Initial discovery call to understand your requirements',
                  'Technical architecture proposal within 48 hours',
                  'Detailed timeline and milestone breakdown',
                  'Transparent pricing with no hidden costs',
                  'Ongoing support and maintenance options',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="type" className="mb-2 block text-sm font-medium text-white">
                    Project Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web-system">Enterprise Web System</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="modernization">Legacy Modernization</option>
                    <option value="automation">Process Automation</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-white">
                    Expected Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Your information will be kept confidential and used only to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
