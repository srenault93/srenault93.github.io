import Reveal from './Reveal'
import { education } from '../data/content'
import './Education.css'

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="shell">
        <div className="section-head">
          <span className="section-index">04 / Foundation</span>
          <h2 className="section-title">Education</h2>
          <span className="section-rule" />
        </div>

        <Reveal className="edu-card">
          <div className="edu-degree-wrap">
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school">{education.school}</p>
            <p className="edu-detail">{education.detail}</p>
          </div>
          <span className="edu-badge">B.S.</span>
        </Reveal>

        <Reveal className="edu-sub" delay={0.05}>
          <h4 className="cap-label">Relevant Coursework</h4>
        </Reveal>
        <div className="course-grid">
          {education.courses.map((c, i) => (
            <Reveal key={c.code} delay={0.02 * i}>
              <div className="course-pill">
                <strong>{c.code}</strong>
                {c.name}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="edu-sub" delay={0.05}>
          <h4 className="cap-label">Technical Skills</h4>
        </Reveal>
        <Reveal className="skills-row" delay={0.05}>
          {education.skills.map((s) => (
            <span className="skill-badge" key={s}>{s}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
