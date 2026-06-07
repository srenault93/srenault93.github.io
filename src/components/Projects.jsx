import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { projectList } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <div className="section-head">
          <span className="section-index">02 / Index</span>
          <h2 className="section-title">All Projects</h2>
          <span className="section-rule" />
        </div>

        <p className="proj-lead">
          Select a project to open its case study — demo, highlights, and live README.
        </p>

        <div className="proj-grid">
          {projectList.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link className="proj-card" to={`/project/${p.slug}`}>
                <div className="proj-top">
                  <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                  {p.featured && <span className="proj-flag">★ Featured</span>}
                  <span className="proj-go" aria-hidden>→</span>
                </div>
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-tagline">{p.tagline}</p>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-chips">
                  {p.stack.slice(0, 4).map((c) => (
                    <span className="proj-chip" key={c}>{c}</span>
                  ))}
                </div>
                <span className="proj-link">View project →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
