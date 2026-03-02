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
  name: 'TUL',
  company: 'ALP Soft',
  fullName: 'TUL PHOMPRASERT (ALP Soft)',
  title: 'Full-Stack Developer & AI Solutions Architect',
  version: '1.0.1',
  email: 'angelpluz04@gmail.com',
  url: 'https://alprasoft-corp.com/',
  ogImage: '/og-image.jpg',
  description: 'Enterprise-grade web systems, automation tools, and AI integration solutions. Architecting scalable digital infrastructure for forward-thinking organizations.',
}

export const PROJECTS: Project[] = [
  {
    id: 'toyota-thonburi',
    name: 'Toyota Thonburi Digital Platform',
    description: 'Designed and developed a full-stack digital platform to support customer engagement, internal workflows, and data integration for an automotive dealership environment. The system improved operational efficiency by modernizing legacy processes, optimizing database interactions, and introducing scalable architecture for future expansion.',
    longDescription: 'A full-stack web system designed to enhance customer interaction, streamline internal operations, and integrate multiple business processes into a unified modern platform. The project focused on improving performance, scalability, and maintainability compared to legacy workflows.',
    tags: ['Next.js', 'Node.js', 'SQL', 'API Integration'],
    link: '/projects/toyota',
    featured: true,
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processing Platform',
    description: 'Enterprise automation platform leveraging LLM APIs for intelligent document processing, data extraction, and automated decision support workflows.',
    longDescription: 'An enterprise automation platform processing thousands of documents daily. Integrated OpenAI and custom ML models for intelligent data extraction and automated decision routing.',
    tags: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Docker'],
    link: '/projects/ai-document-processor',
    featured: true,
  },
  {
    id: 'microservices-migration',
    name: 'Monolith to Microservices Migration',
    description: 'Complete migration of monolithic architecture to microservices with zero downtime. Improved scalability and deployment flexibility.',
    longDescription: 'Transformation of a monolithic application into a modern microservices architecture. Achieved high availability during migration with seamless data synchronization.',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'Docker', 'AWS'],
    link: '/projects/microservices-migration',
    featured: true,
  },
  {
    id: 'ai-concierge',
    name: 'AI Concierge & Knowledge Retrieval System',
    description: 'Built an AI assistant that answers customer and operational questions by combining LLMs with structured data retrieval and automation workflows. Designed for fast, consistent responses and easier future expansion.',
    longDescription: 'An AI assistant that answers customer and operational questions by combining LLMs with structured data retrieval and automation workflows. Designed for fast, consistent responses and easier future expansion.',
    tags: ['LLM', 'RAG', 'Node.js', 'Automation'],
    link: '/projects/ai-concierge',
  },
  {
    id: 'modernization',
    name: 'Legacy System Modernization (ASP → Modern Web)',
    description: 'Modernized a legacy Classic ASP workflow into a modular architecture with improved maintainability, cleaner data flow, and scalable front-end delivery—while preserving critical business rules.',
    longDescription: 'Modernized a legacy Classic ASP workflow into a modular architecture with improved maintainability, cleaner data flow, and scalable front-end delivery—while preserving critical business rules.',
    tags: ['Classic ASP', 'Next.js', 'SQL', 'Refactor'],
    link: '/projects/modernization',
  },
  {
    id: 'automation',
    name: 'Automation & Data Integration Toolkit',
    description: 'Developed automation tools for data processing, reporting, and system-to-system integration. Reduced manual steps by standardizing pipelines and improving data reliability across workflows.',
    longDescription: 'Automation tools for data processing, reporting, and system-to-system integration. Reduced manual steps by standardizing pipelines and improving data reliability across workflows.',
    tags: ['Python', 'ETL', 'SQL', 'API'],
    link: '/projects/automation',
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
