import Reveal from './Reveal'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell">
        <div className="section-head">
          <span className="section-index">03 / Path</span>
          <h2 className="section-title">Experience</h2>
          <span className="section-rule" />
        </div>

        <div className="exp-list">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <article className="exp-item">
                <div className="exp-meta">
                  <span className="exp-date">{e.date}</span>
                </div>
                <div className="exp-main">
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                  <ul className="exp-bullets">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
