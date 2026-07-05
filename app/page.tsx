"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  Wrench,
  Users,
  Languages,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Eye,
  Download,
  Server,
  Cpu,
  Smartphone,
} from "lucide-react"
import Chatbot from "@/components/chatbot"

/* ──────────────────── DATA ──────────────────── */

const projects = [
  {
    title: "Rise Motive Platform",
    description:
      "Full-stack service-provider marketplace platform for Rwanda, connecting clients with taskers, product vendors, and information services across three portals (Admin, Tasker, and Client).",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL"],
    liveUrl: "https://www.risemotive.rw/",
    githubUrl: null,
    image: "/images/risemotive.png",
    featured: true,
  },
  {
    title: "InzoziSchool Platform",
    description:
      "Full-stack platform that helps students easily find and connect with their desired schools. Supports student transfers and school-parent communication.",
    tech: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://inzozischool.vercel.app/",
    githubUrl: null,
    image: "/images/inzozischool.png",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform supporting smooth product browsing and secure online transactions with a modern shopping experience.",
    tech: ["Node.js", "React.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://commerce-xi-seven-61.vercel.app/",
    githubUrl: null,
    image: "/images/ecommerce.png",
    featured: false,
  },
  {
    title: "Road Traffic Law App",
    description:
      "Currently developing and maintaining a live platform that provides road traffic law information. Accessible online for public use.",
    tech: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://amategeko-app.vercel.app/",
    githubUrl: "https://github.com/Philemon-ndayishimiye/AMATEGEKO-APP.git",
    image: "/images/amategeko.png",
    featured: false,
  },
]

const experiences = [
  {
    role: "Software Developer / Software Engineer",
    company: "Rise Motive",
    location: "Kigali, Rwanda",
    period: "March 2025 - March 2026",
    type: "Remote",
    description:
      "Designed and developed Rise Motive, a full-stack service-provider marketplace platform, building both backend (Node.js, Express, TypeScript, Prisma, PostgreSQL) and frontend (React, TypeScript, Tailwind CSS). Implemented payment processing, role-based access control, task delegation workflows, and automated notifications.",
  },
  {
    role: "Frontend Intern",
    company: "Solvit Africa",
    location: "Kigali, Rwanda",
    period: "June 2025 - October 2025",
    type: "Internship",
    description:
      "Developed scalable, interactive applications using React, TypeScript, and Tailwind CSS. Integrated AI features through prompt engineering training. Enhanced communication and presentation skills through Soft Skills program.",
  },
  {
    role: "Network and SOD",
    company: "DynaSoft",
    location: "Kigali, Rwanda",
    period: "April 2025 - June 2025",
    type: "Internship",
    description:
      "Developed reliable backend systems using Node.js, Express, and MongoDB. Created a fully functional e-commerce backend supporting all functions and full administrative control.",
  },
  {
    role: "Java Intern",
    company: "Ishyiga",
    location: "Kigali, Rwanda",
    period: "June 2025",
    type: "Internship",
    description:
      "Rebuilt and enhanced key modules of a neighborhood-focused e-commerce platform using Java and Spring Boot, improving system stability, delivery tracking, and overall user experience.",
  },
]

const certifications = [
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    icon: Globe,
    color: "#2563EB",
    image: "/images/cert-cisco-networking.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: Shield,
    color: "#10B981",
    image: "/images/cert-cisco-cybersecurity.png",
  },
  {
    title: "Frontend Development",
    issuer: "Solvit Africa",
    icon: Code,
    color: "#8B5CF6",
    image: "/images/cert-frontend-solvit.png",
  },
  {
    title: "Software Development Certificate",
    issuer: "MUYEX Academy",
    icon: Award,
    color: "#F59E0B",
    image: "/images/cert-software-dev.png",
  },
  {
    title: "AI, ML & Big Data Analysis",
    issuer: "Professional Certificate",
    icon: Brain,
    color: "#06B6D4",
    image: "/images/cert-ai-ml-bigdata.png",
  },
]

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "#2563EB",
    skills: ["Python", "Java", "C", "C++", "Dart", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Cpu,
    color: "#8B5CF6",
    skills: ["React.js", "Node.js", "Flutter", "Express", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#10B981",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Supabase"],
  },
  {
    title: "Security",
    icon: Shield,
    color: "#EF4444",
    skills: ["JWT", "Helmet"],
  },
  {
    title: "Deployment & DevOps",
    icon: Cloud,
    color: "#F59E0B",
    skills: ["Vercel", "Render", "Railway", "Contabo VPS", "CI/CD"],
  },
  {
    title: "AI Tools",
    icon: Brain,
    color: "#06B6D4",
    skills: [
      "GitHub Copilot",
      "Cursor",
      "Windsurf",
      "Cline",
      "Continue",
      "Codeium",
      "Tabnine",
      "Aider",
      "Amazon Q",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Microsoft Copilot",
      "Perplexity AI",
      "Grok",
    ],
  },
  {
    title: "Data & Machine Learning",
    icon: BarChart3,
    color: "#8B5CF6",
    skills: ["Statistical Analysis", "Data Visualization", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "#1D4ED8",
    skills: ["Git & GitHub", "Jupyter Notebook", "VS Code", "PyCharm"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "#10B981",
    skills: ["Teamwork", "Critical Thinking", "Communication"],
  },
  {
    title: "Languages",
    icon: Languages,
    color: "#F59E0B",
    skills: ["Kinyarwanda (Fluent)", "English (Fluent)", "Kiswahili (Intermediate)", "French (Beginner)"],
  },
]

/* ──────────── SCROLL REVEAL HOOK ──────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

/* ──────────── SECTION COMPONENT ──────────── */

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, isVisible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ──────────── PROJECT IMAGE WITH FALLBACK ──────────── */

function ProjectImage({ src, alt, featured }: { src: string; alt: string; featured?: boolean }) {
  const [hasError, setHasError] = useState(false)
  const gradients = [
    "linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #1E40AF 100%)",
    "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
    "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)",
    "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)",
    "linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)",
  ]
  const hash = alt.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
  const gradient = gradients[hash % gradients.length]

  if (hasError) {
    return (
      <div
        className={`${featured ? "aspect-video" : "aspect-[4/3]"} rounded-xl flex items-center justify-center`}
        style={{ background: gradient }}
      >
        <div className="text-white text-center p-6">
          <Globe className="h-12 w-12 mx-auto mb-3 opacity-80" />
          <p className="font-semibold text-lg">{alt}</p>
          <p className="text-sm opacity-70 mt-1">Screenshot coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${featured ? "aspect-video" : "aspect-[4/3]"} rounded-xl overflow-hidden bg-muted`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

/* ══════════════════════════════════════════════ */
/*                MAIN COMPONENT                 */
/* ══════════════════════════════════════════════ */

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [certModal, setCertModal] = useState<{ title: string; image: string } | null>(null)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  /* Track active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            return
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Close modal on Escape */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertModal(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ─────────── NAVBAR ─────────── */}
      <header className="sticky top-0 z-50 w-full bg-[#0F172A] shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            Philemon<span className="text-[#2563EB]">.</span>dev
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#2563EB] bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-t border-white/10 mobile-menu-enter">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ─────────── HERO SECTION ─────────── */}
      <section className="relative overflow-hidden hero-pattern">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in-left">
              <div className="relative">
                <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[#2563EB]/20 ring-offset-4 ring-offset-[#F8FAFC] shadow-2xl">
                  <img
                    src="/images/philemon-profile.png"
                    alt="Philemon KOMVUGA NDAYISHIMIYE"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#10B981] rounded-full border-[3px] border-[#F8FAFC]" />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center md:text-left animate-fade-in-right">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-[#1F2937] mb-2 leading-tight">
                Philemon
                <br />
                <span className="gradient-text">NDAYISHIMIYE</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-[#6B7280] mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-[#6B7280] max-w-xl mb-8 leading-relaxed">
                Motivated and detail-oriented Information Systems graduate with a strong foundation in
                software engineering, web development, and system design. Passionate about building scalable,
                user-centered software solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/30"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#E5E7EB] text-[#1F2937] hover:bg-[#F1F5F9]"
                  asChild
                >
                  <a href="https://github.com/Philemon-ndayishimiye" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#E5E7EB] text-[#1F2937] hover:bg-[#F1F5F9]"
                  asChild
                >
                  <a
                    href="https://rw.linkedin.com/in/philemon-komvuga-ndayishimiye-a00bb2384"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="flex gap-8 mt-8 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2563EB]">4+</div>
                  <div className="text-xs text-[#6B7280] font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2563EB]">4+</div>
                  <div className="text-xs text-[#6B7280] font-medium">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2563EB]">5</div>
                  <div className="text-xs text-[#6B7280] font-medium">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <a href="#about" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── ABOUT SECTION ─────────── */}
      <section id="about" className="py-20 px-6 bg-white">
        <RevealSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">Get To Know</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  I&apos;m a Full-Stack Developer with experience in building responsive, high-performance web
                  applications. I&apos;ve held impactful roles at <strong className="text-[#1F2937]">Rise Motive</strong>,{" "}
                  <strong className="text-[#1F2937]">Solvit Africa</strong>,{" "}
                  <strong className="text-[#1F2937]">DynaSoft</strong>, and{" "}
                  <strong className="text-[#1F2937]">Ishyiga</strong>, where I honed my expertise in modern
                  technologies and delivering exceptional user experiences.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  I specialize in React, Node.js, TypeScript and PostgreSQL, with a passion for creating seamless
                  user experiences and implementing best practices in full-stack architecture. I thrive in
                  collaborative environments and enjoy tackling complex technical challenges.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-2 bg-[#F1F5F9] px-3 py-2 rounded-full">
                    <MapPin className="h-4 w-4 text-[#2563EB]" />
                    Kigali, Rwanda
                  </div>
                  <div className="flex items-center gap-2 bg-[#F1F5F9] px-3 py-2 rounded-full">
                    <Phone className="h-4 w-4 text-[#2563EB]" />
                    +250 785 436 374
                  </div>
                  <div className="flex items-center gap-2 bg-[#F1F5F9] px-3 py-2 rounded-full">
                    <Mail className="h-4 w-4 text-[#2563EB]" />
                    philemonndayi@gmail.com
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* Education Card */}
                <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-[#2563EB]" />
                      </div>
                      <CardTitle className="text-lg text-[#1F2937]">Education</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-[#1F2937]">
                      Bachelor of Science in Information Systems
                    </div>
                    <div className="text-sm text-[#6B7280] mt-1">
                      University of Rwanda College of Science and Technology
                    </div>
                    <div className="text-sm text-[#6B7280]">School of ICT • Department of Information Systems</div>
                  </CardContent>
                </Card>

                {/* Profile summary card */}
                <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#10B981]/10 rounded-lg">
                        <Briefcase className="h-5 w-5 text-[#10B981]" />
                      </div>
                      <CardTitle className="text-lg text-[#1F2937]">Quick Stats</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#F1F5F9] rounded-lg text-center">
                        <div className="text-xl font-bold text-[#2563EB]">4</div>
                        <div className="text-xs text-[#6B7280]">Work Roles</div>
                      </div>
                      <div className="p-3 bg-[#F1F5F9] rounded-lg text-center">
                        <div className="text-xl font-bold text-[#10B981]">4</div>
                        <div className="text-xs text-[#6B7280]">Projects Built</div>
                      </div>
                      <div className="p-3 bg-[#F1F5F9] rounded-lg text-center">
                        <div className="text-xl font-bold text-[#8B5CF6]">5</div>
                        <div className="text-xs text-[#6B7280]">Certifications</div>
                      </div>
                      <div className="p-3 bg-[#F1F5F9] rounded-lg text-center">
                        <div className="text-xl font-bold text-[#F59E0B]">4</div>
                        <div className="text-xs text-[#6B7280]">Languages</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── EXPERIENCE SECTION ─────────── */}
      <section id="experience" className="py-20 px-6 bg-[#F8FAFC]">
        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">My Journey</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">Work Experience</h2>
            </div>

            <div className="timeline-line space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="timeline-dot" style={{ top: "1.5rem" }} />
                  <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white ml-2">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg text-[#1F2937]">{exp.role}</CardTitle>
                          <CardDescription className="text-[#2563EB] font-medium">
                            {exp.company} {exp.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-[#F1F5F9] text-[#6B7280] hover:bg-[#F1F5F9] border-none text-xs">
                            {exp.period}
                          </Badge>
                          <Badge className="bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/10 border-none text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── PROJECTS SECTION ─────────── */}
      <section id="projects" className="py-20 px-6 bg-white">
        <RevealSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">My Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">Featured Projects</h2>
              <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">
                Here are some of the key projects I&apos;ve built, showcasing my full-stack development capabilities.
              </p>
            </div>

            {/* Featured project (Rise Motive) */}
            <div className="mb-10">
              {projects
                .filter((p) => p.featured)
                .map((project, i) => (
                  <Card
                    key={i}
                    className="group border-[#E5E7EB] shadow-md card-hover bg-white overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-2">
                        <ProjectImage src={project.image} alt={project.title} featured />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-4 bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/10 border-none">
                          ⭐ Featured Project
                        </Badge>
                        <h3 className="text-2xl font-bold text-[#1F2937] mb-3">{project.title}</h3>
                        <p className="text-[#6B7280] leading-relaxed mb-5">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="border-[#E5E7EB] text-[#6B7280] bg-[#F8FAFC]"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <Button
                              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" className="border-[#E5E7EB]" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            {/* Other projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <Card
                    key={i}
                    className="group border-[#E5E7EB] shadow-sm card-hover bg-white overflow-hidden"
                  >
                    <div className="p-2">
                      <ProjectImage src={project.image} alt={project.title} />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-[#1F2937]">{project.title}</CardTitle>
                      <CardDescription className="text-[#6B7280] text-sm line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="border-[#E5E7EB] text-[#6B7280] bg-[#F8FAFC] text-xs"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#E5E7EB] text-xs"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1.5 h-3.5 w-3.5" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── SKILLS SECTION ─────────── */}
      <section id="skills" className="py-20 px-6 bg-[#F8FAFC]">
        <RevealSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">
                What I Know
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">Skills & Expertise</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {skillCategories.map((category, i) => {
                const IconComponent = category.icon
                return (
                  <Card
                    key={i}
                    className="border-[#E5E7EB] shadow-sm card-hover bg-white group overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${category.color}15` }}
                        >
                          <IconComponent className="h-5 w-5" style={{ color: category.color }} />
                        </div>
                        <CardTitle className="text-base text-[#1F2937]">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="text-xs font-medium border-none transition-colors duration-200"
                            style={{
                              backgroundColor: `${category.color}10`,
                              color: category.color,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── CERTIFICATIONS SECTION ─────────── */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <RevealSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">
                My Achievements
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => {
                const IconComponent = cert.icon
                return (
                  <div key={i} className="cert-card card-hover">
                    <Card className="border-0 shadow-md bg-white h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        {/* Icon with colored background */}
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110"
                          style={{ backgroundColor: `${cert.color}15` }}
                        >
                          <IconComponent className="h-8 w-8" style={{ color: cert.color }} />
                        </div>

                        <h3 className="font-bold text-[#1F2937] text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-[#6B7280] mb-5">{cert.issuer}</p>

                        <div className="mt-auto">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#E5E7EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-300"
                            onClick={() => setCertModal({ title: cert.title, image: cert.image })}
                          >
                            <Eye className="mr-1.5 h-3.5 w-3.5" />
                            View Certificate
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── CONTACT SECTION ─────────── */}
      <section id="contact" className="py-20 px-6 bg-[#F8FAFC]">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-[#6B7280] mb-12 max-w-xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can
              bring your ideas to life.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-12">
              <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-[#2563EB]/10 rounded-xl w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <div className="font-semibold text-[#1F2937] mb-1">Email</div>
                  <a
                    href="mailto:philemonndayi@gmail.com"
                    className="text-sm text-[#2563EB] hover:underline"
                  >
                    philemonndayi@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-[#10B981]/10 rounded-xl w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <div className="font-semibold text-[#1F2937] mb-1">Phone</div>
                  <a href="tel:+250785436374" className="text-sm text-[#6B7280]">
                    +250 785 436 374
                  </a>
                </CardContent>
              </Card>
              <Card className="border-[#E5E7EB] shadow-sm card-hover bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-[#8B5CF6]/10 rounded-xl w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <div className="font-semibold text-[#1F2937] mb-1">Location</div>
                  <div className="text-sm text-[#6B7280]">Kigali, Rwanda</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-[#2563EB]/25"
                asChild
              >
                <a href="mailto:philemonndayi@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-[#E5E7EB] text-[#1F2937]" asChild>
                <a
                  href="https://github.com/Philemon-ndayishimiye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-[#E5E7EB] text-[#1F2937]" asChild>
                <a
                  href="https://rw.linkedin.com/in/philemon-komvuga-ndayishimiye-a00bb2384"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-[#0F172A] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Philemon KOMVUGA NDAYISHIMIYE. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Philemon-ndayishimiye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://rw.linkedin.com/in/philemon-komvuga-ndayishimiye-a00bb2384"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:philemonndayi@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* ─────────── CERTIFICATE MODAL ─────────── */}
      {certModal && (
        <div className="modal-overlay" onClick={() => setCertModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1F2937]">{certModal.title}</h3>
              <button
                onClick={() => setCertModal(null)}
                className="p-1 hover:bg-[#F1F5F9] rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-[#6B7280]" />
              </button>
            </div>
            <CertificateImage src={certModal.image} alt={certModal.title} />
          </div>
        </div>
      )}

      {/* ─────────── CHATBOT ─────────── */}
      <Chatbot />
    </div>
  )
}

/* ──────────── CERTIFICATE IMAGE WITH FALLBACK ──────────── */

function CertificateImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full max-w-lg aspect-[4/3] rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/10 border-2 border-dashed border-[#E5E7EB]">
        <Award className="h-16 w-16 text-[#2563EB]/40 mb-4" />
        <p className="text-[#6B7280] font-medium text-center px-6">{alt}</p>
        <p className="text-sm text-[#6B7280]/60 mt-2 text-center px-6">
          Certificate image will be added soon.
          <br />
          Place your image at: <code className="text-xs bg-[#F1F5F9] px-2 py-1 rounded">{src}</code>
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-[75vh] rounded-xl shadow-lg"
      onError={() => setHasError(true)}
    />
  )
}
