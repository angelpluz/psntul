import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { SITE_CONFIG } from './data'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.company}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Full-Stack Developer',
    'AI Solutions Architect',
    'Enterprise Web Systems',
    'Automation',
    'Integration',
    'Modernization',
    'Scalable Architecture',
    'Next.js',
    'TypeScript',
    'Cloud Infrastructure',
  ],
  authors: [{ name: SITE_CONFIG.fullName }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.company,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.company,
    title: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@alpsoft',
  },
  icons: {
    icon: [
      {
        url: '/pic/logotop.png?v=20260303',
        type: 'image/png',
      },
    ],
    shortcut: '/pic/logotop.png?v=20260303',
    apple: '/pic/logotop.png?v=20260303',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} min-h-screen bg-zinc-950 font-sans antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
            <Header />
            <main className="relative flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
