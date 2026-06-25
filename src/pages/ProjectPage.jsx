import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { getProject, projectList } from '../data/content'
import ReadmeViewer from '../components/ReadmeViewer'
import NotFound from './NotFound'
import './ProjectPage.css'

const ease = [0.22, 1, 0.36, 1]

function VideoDemo({ project }) {
  if (project.demoGif) {
    return <img className="demo-gif" src={project.demoGif} alt={`${project.name} gameplay`} />
  }
  if (project.video) {
    return (
      <video className="demo-video" controls playsInline poster={project.screens?.[0]?.src}>
        <source src={project.video} type="video/mp4" />
      </video>
    )
  }
  return (
    <div className="demo-placeholder" role="img" aria-label="Demo video coming soon">
      <span className="demo-play" aria-hidden>▶</span>
      <p className="demo-title">Demo video coming soon</p>
      <p className="demo-note">A recorded walkthrough of {project.name} running will live here.</p>
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const idx = projectList.findIndex((p) => p.slug === slug)
  const next = projectList[(idx + 1) % projectList.length]

  return (
    <main className="project">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Link to="/#projects" className="proj-back">← All projects</Link>

          <header className="proj-hero">
            <div className="proj-hero-meta">
              {project.featured && <span className="proj-flag">★ Featured</span>}
              <span className="proj-hero-mono">{project.year}</span>
              <span className="proj-hero-mono">{project.role}</span>
              <span className="proj-hero-mono">{project.language}</span>
            </div>
            <h1 className="proj-hero-name">{project.name}</h1>
            <p className="proj-hero-tagline">{project.tagline}</p>
            <p className="proj-hero-desc">{project.desc}</p>

            <div className="proj-hero-actions">
              <a className="btn btn-primary" href={project.repoUrl} target="_blank" rel="noreferrer">
                Source on GitHub
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              {project.liveUrl && (
                <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live site
                </a>
              )}
            </div>

            <div className="proj-stack">
              {project.stack.map((s) => (
                <span className="stack-chip" key={s}>{s}</span>
              ))}
            </div>
          </header>
        </motion.div>

        <section className="proj-section">
          <h2 className="proj-h2"><span className="proj-h2-i">01</span> Demo</h2>
          <VideoDemo project={project} />
        </section>

        {project.highlights?.length > 0 && (
          <section className="proj-section">
            <h2 className="proj-h2"><span className="proj-h2-i">02</span> Highlights</h2>
            <ul className="proj-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        {project.screens?.length > 0 && (
          <section className="proj-section">
            <h2 className="proj-h2"><span className="proj-h2-i">03</span> Screens</h2>
            <div className="proj-screens">
              {project.screens.map((s) => (
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
              ))}
            </div>
          </section>
        )}

        {project.supporting?.length > 0 && (
          <section className="proj-section">
            <h2 className="proj-h2"><span className="proj-h2-i">+</span> Supporting Work</h2>
            <div className="proj-supporting">
              {project.supporting.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="proj-section">
          <h2 className="proj-h2"><span className="proj-h2-i">★</span> README</h2>
          <div className="proj-readme-card">
            <div className="proj-readme-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="proj-readme-path">{githubPath(project)}</span>
            </div>
            <div className="proj-readme-inner">
              <ReadmeViewer repo={project.repo} />
            </div>
          </div>
        </section>

        <Link to={`/project/${next.slug}`} className="proj-next">
          <span className="proj-next-label">Next project</span>
          <span className="proj-next-name">{next.name} →</span>
        </Link>
      </div>
    </main>
  )
}

function githubPath(project) {
  return `srenault93/${project.repo}/README.md`
}
