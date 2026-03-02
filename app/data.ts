export type Project = {
  id: string
  name: string
  description: string
  longDescription?: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  featured?: boolean
}

export type Service = {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export type Experience = {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export type Skill = {
  category: string
  items: string[]
}

export const SITE_CONFIG = {
  name: 'Toon',
  company: 'ALP Soft',
  fullName: 'Toon (ALP Soft)',
  title: 'Full-Stack Developer & AI Solutions Architect',
  version: '1.0.1',
  email: 'contact@alpsoft.dev',
  url: 'https://alpsoft.dev',
  ogImage: '/og-image.jpg',
  description: 'Enterprise-grade web systems, automation tools, and AI integration solutions. Architecting scalable digital infrastructure for forward-thinking organizations.',
}

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-erp',
    name: 'Enterprise ERP Integration',
    description: 'Scalable enterprise resource planning system with automated workflow orchestration.',
    longDescription: 'Architected and deployed a comprehensive ERP solution integrating inventory, HR, and financial modules. Reduced operational overhead by 40% through intelligent automation and real-time analytics dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    link: '#',
    featured: true,
  },
  {
    id: 'ai-automation-platform',
    name: 'AI Process Automation Platform',
    description: 'Intelligent automation platform leveraging LLM APIs for document processing and decision support.',
    longDescription: 'Built an enterprise automation platform processing 10,000+ documents daily. Integrated OpenAI and custom ML models for intelligent data extraction and automated decision routing.',
    tags: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Kubernetes'],
    link: '#',
    featured: true,
  },
  {
    id: 'legacy-modernization',
    name: 'Legacy System Modernization',
    description: 'Complete migration of monolithic architecture to microservices with zero downtime.',
    longDescription: 'Led the transformation of a 15-year-old monolithic application into a modern microservices architecture. Achieved 99.99% uptime during migration with seamless data synchronization.',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'Kafka', 'Terraform'],
    link: '#',
  },
  {
    id: 'real-time-analytics',
    name: 'Real-time Analytics Dashboard',
    description: 'High-performance data visualization platform processing millions of events per second.',
    longDescription: 'Engineered a sub-second latency analytics platform for IoT device monitoring. Handles 5M+ events/sec with automatic scaling and predictive alerting capabilities.',
    tags: ['React', 'ClickHouse', 'WebSocket', 'Grafana', 'GCP'],
    link: '#',
  },
  {
    id: 'secure-api-gateway',
    name: 'Enterprise API Gateway',
    description: 'Centralized API management with advanced security, rate limiting, and observability.',
    longDescription: 'Designed and implemented a multi-tenant API gateway handling 50M+ requests daily. Features include OAuth 2.0, JWT validation, request transformation, and comprehensive audit logging.',
    tags: ['Go', 'Envoy', 'PostgreSQL', 'Prometheus', 'Vault'],
    link: '#',
  },
  {
    id: 'e-commerce-platform',
    name: 'Headless E-commerce Platform',
    description: 'High-conversion commerce solution with omnichannel integration and AI-powered recommendations.',
    longDescription: 'Delivered a headless commerce platform achieving 35% increase in conversion rates. Integrated AI recommendation engine and seamless payment orchestration across 12+ channels.',
    tags: ['Next.js', 'Stripe', 'Algolia', 'Sanity', 'Vercel'],
    link: '#',
  },
]

export const SERVICES: Service[] = [
  {
    id: 'web-systems',
    title: 'Enterprise Web Systems',
    description: 'Architecting robust, scalable web applications designed for high performance and long-term maintainability.',
    features: [
      'Scalable microservices architecture',
      'Cloud-native infrastructure design',
      'Performance optimization & caching strategies',
      'Database design & optimization',
      'CI/CD pipeline implementation',
    ],
    icon: 'Layers',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Automation',
    description: 'Seamlessly integrating AI capabilities and intelligent automation into existing business workflows.',
    features: [
      'LLM API integration (OpenAI, Anthropic, Gemini)',
      'Intelligent document processing',
      'Workflow automation & orchestration',
      'Custom ML model deployment',
      'AI-powered decision support systems',
    ],
    icon: 'Brain',
  },
  {
    id: 'modernization',
    title: 'Legacy Modernization',
    description: 'Transforming legacy systems into modern, maintainable architectures without disrupting operations.',
    features: [
      'Monolith to microservices migration',
      'Database migration & synchronization',
      'API strategy & gateway implementation',
      'Zero-downtime deployment strategies',
      'Technical debt assessment & remediation',
    ],
    icon: 'RefreshCw',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Streamlining operations through intelligent automation and custom tool development.',
    features: [
      'Business process automation',
      'Data pipeline engineering',
      'Custom internal tool development',
      'Integration with third-party services',
      'Automated testing & quality assurance',
    ],
    icon: 'Workflow',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Founder & Solutions Architect',
    company: 'ALP Soft',
    period: '2020 — Present',
    description: 'Leading enterprise digital transformation initiatives. Architecting scalable systems and AI integration solutions for mid to large-scale organizations.',
  },
  {
    id: 'exp2',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Enterprise Solutions',
    period: '2017 — 2020',
    description: 'Spearheaded development of mission-critical applications serving 500K+ users. Led migration from legacy systems to modern cloud infrastructure.',
  },
  {
    id: 'exp3',
    role: 'Software Engineer',
    company: 'Digital Innovation Labs',
    period: '2014 — 2017',
    description: 'Developed and maintained enterprise-grade web applications. Specialized in performance optimization and database architecture.',
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'Domain-Driven Design', 'CQRS', 'Event Sourcing'],
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Performance'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    category: 'AI & ML',
    items: ['OpenAI API', 'LangChain', 'Vector Databases', 'Embeddings', 'RAG Systems'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'CI/CD'],
  },
  {
    category: 'Integration',
    items: ['REST APIs', 'gRPC', 'Message Queues', 'WebSocket', 'ETL Pipelines'],
  },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
