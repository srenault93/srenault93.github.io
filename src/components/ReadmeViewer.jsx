import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { githubUser } from '../data/content'
import './ReadmeViewer.css'

const STATES = { LOADING: 'loading', READY: 'ready', EMPTY: 'empty', ERROR: 'error' }

export default function ReadmeViewer({ repo, branch = 'main' }) {
  const [state, setState] = useState(STATES.LOADING)
  const [md, setMd] = useState('')

  useEffect(() => {
    let alive = true
    const cacheKey = `readme:${githubUser}/${repo}`
    const cached = sessionStorage.getItem(cacheKey)
    if (cached !== null) {
      setMd(cached)
      setState(cached ? STATES.READY : STATES.EMPTY)
      return
    }

    setState(STATES.LOADING)
    fetch(`https://api.github.com/repos/${githubUser}/${repo}/readme`, {
      headers: { Accept: 'application/vnd.github.raw' },
    })
      .then((res) => {
        if (res.status === 404) return ''
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.text()
      })
      .then((text) => {
        if (!alive) return
        sessionStorage.setItem(cacheKey, text)
        setMd(text)
        setState(text ? STATES.READY : STATES.EMPTY)
      })
      .catch(() => alive && setState(STATES.ERROR))

    return () => { alive = false }
  }, [repo, branch])

  // Rewrite relative links/images so they resolve against the repo on GitHub.
  const urlTransform = (url) => {
    if (/^(https?:|mailto:|#|data:)/.test(url)) return url
    const clean = url.replace(/^\.?\//, '')
    return `https://raw.githubusercontent.com/${githubUser}/${repo}/${branch}/${clean}`
  }

  if (state === STATES.LOADING) {
    return <div className="readme-status">Loading README…</div>
  }
  if (state === STATES.EMPTY) {
    return (
      <div className="readme-status">
        No README in this repo yet — it’ll appear here automatically once one is pushed.
      </div>
    )
  }
  if (state === STATES.ERROR) {
    return (
      <div className="readme-status">
        Couldn’t load the README right now.{' '}
        <a href={`https://github.com/${githubUser}/${repo}`} target="_blank" rel="noreferrer">
          View it on GitHub →
        </a>
      </div>
    )
  }

  return (
    <div className="readme-body">
      <Markdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
        {md}
      </Markdown>
    </div>
  )
}
