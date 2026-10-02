import {useState, useEffect, useRef} from 'react'
import './App.css'

/* ─── Config ──────────────────────────────────────────────── */
const LEETCODE_USERNAME = 'abhinav_sharma_07'
const HACKERRANK_USERNAME = '_abhinav__07'

const NAV_LINKS = ['About', 'Skills', 'Coding', 'Projects', 'Education', 'Contact']

const SKILLS = {
    Languages: ['C', 'Python', 'Java', 'HTML5', 'CSS3'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'GitHub Pages', 'Vite', 'React','Maven & Gradle'],
    'Soft Skills': ['Leadership','Team Collaboration', 'Problem Solving', 'Analytical Thinking'],
}

const PROJECTS = [
    {
        title: 'Bookit (Java Language)',
        description:
            'A console base taxi management system allow user to book , cancle , complete ride through console.',
        tags: ['JAVA', 'OOPS', 'Logic'],
        link: 'https://github.com/abhinavsharma07-eng/Bookit',
    },
    {
        title: 'Tic-Tac-Toe (C Language)',
        description:
            'A logic-based game demonstrating pointer usage, memory management, and game-loop design in C.',
        tags: ['C', 'Pointers', 'Logic'],
        link: 'https://github.com/abhinavsharma07-eng/Tic-Tac-toe',
    },
    {
        title: 'Interactive Game (Python & Web)',
        description:
            'A web-integrated Tic-Tac-Toe built with Python and HTML, bridging backend logic with a browser UI.',
        tags: ['Python', 'HTML5', 'CSS3'],
        link: 'https://github.com/abhinavsharma07-eng/',
    },
    {
        title: 'Portfolio Website',
        description:
            'My personal developer portfolio built from scratch with React + Vite — showcasing projects, live coding stats, and skills.',
        tags: ['React', 'Vite', 'CSS3', 'GitHub Pages'],
        link: 'https://abhinavsharma07-eng.github.io/',
    },
]

/* ─── SVG Icons ───────────────────────────────────────────── */
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
)
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
)
const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"
         aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-10 7L2 7"/>
    </svg>
)
const LeetcodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
)
const HackerrankIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path
            d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.645-1.115-.645-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .258-.115.258-.258V6.61a.263.263 0 0 0-.258-.258H7.482a.258.258 0 0 0-.258.258v.039c0 .143.117.258.258.258h.701v9.804h-.701a.258.258 0 0 0-.258.258v.039c0 .143.117.258.258.258h3.182a.258.258 0 0 0 .258-.258v-.039a.263.263 0 0 0-.258-.258h-.701v-4.418h4.074v4.418h-.701a.258.258 0 0 0-.258.258v.039c0 .143.117.258.258.258h3.182a.258.258 0 0 0 .258-.258v-.039a.263.263 0 0 0-.258-.258h-.701V6.908h.701c.141 0 .258-.115.258-.258V6.61a.263.263 0 0 0-.258-.258h-.165z"/>
    </svg>
)

/* ─── Intersection-observer reveal hook ───────────────────── */
function useReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    obs.disconnect()
                }
            },
            {threshold: 0.12}
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return ref
}

/* ─── Navbar ──────────────────────────────────────────────── */
function Navbar({active, onNav}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            {/* Brand with interactive professional hover effect */}
            <a className="navbar-brand" href="#about" onClick={() => {
                onNav('about');
                setMenuOpen(false)
            }}>
                <div className="brand-badge-wrap">
                    <span className="brand-badge">AS</span>
                    <span className="brand-badge-glow"/>
                </div>
                <div className="brand-details">
          <span className="brand-text">
            <span className="brand-first">Abhinav</span>
            <span className="brand-last">Sharma</span>
          </span>
                    <span className="brand-tagline">Software &bull; CSE</span>
                </div>
            </a>

            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(o => !o)}
            >
                <span/><span/><span/>
            </button>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {NAV_LINKS.map(s => (
                    <a
                        key={s}
                        href={`#${s.toLowerCase()}`}
                        className={active === s.toLowerCase() ? 'active' : ''}
                        onClick={() => {
                            onNav(s.toLowerCase());
                            setMenuOpen(false)
                        }}
                    >
                        {s}
                    </a>
                ))}
                <a className="nav-cta" href="mailto:abhinav.query07@gmail.com" onClick={() => setMenuOpen(false)}>
                    Hire Me
                </a>
            </nav>
        </header>
    )
}

/* ─── Hero ────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
    {href: 'https://github.com/abhinavsharma07-eng', label: 'GitHub', Icon: GithubIcon, color: '#24292e'},
    {href: 'https://www.linkedin.com/in/abhinavsharma07-eng/', label: 'LinkedIn', Icon: LinkedinIcon, color: '#0a66c2'},
    {href: `https://leetcode.com/u/${LEETCODE_USERNAME}`, label: 'LeetCode', Icon: LeetcodeIcon, color: '#ffa116'},
    {
        href: `https://www.hackerrank.com/profile/${HACKERRANK_USERNAME}`,
        label: 'HackerRank',
        Icon: HackerrankIcon,
        color: '#00ea64'
    },
    {href: 'mailto:abhinav.query07@gmail.com', label: 'Email', Icon: EmailIcon, color: '#ea4335'},
]

function Hero() {
    const ref = useReveal()
    return (
        <section id="about" className="hero-section reveal-target" ref={ref}>
            <div className="hero-text">
                <h1 className="hero-name">
                    Hi, I'm <span className="name-accent">Abhinav Sharma</span>
                </h1>
                <h2 className="hero-role">Computer Science Engineer</h2>
                <p className="hero-bio">
                    B.Tech CSE student at <strong>KCC ITM (2025–2029)</strong> — passionate about building clean,
                    efficient software. I explore <strong>C</strong>, <strong>Python</strong>, <strong>Java</strong>,
                    Data Structures, and Web Development, with a love for open-source and competitive coding.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="/resume.pdf" download="Abhinav_Sharma_Resume.pdf" className="btn btn-resume">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="17"
                             height="17" aria-hidden="true">
                            <path d="M12 16V4m0 12-4-4m4 4 4-4"/>
                            <path d="M4 20h16"/>
                        </svg>
                        Download Resume
                    </a>
                    <a href="mailto:abhinav.query07@gmail.com" className="btn btn-outline">Get in Touch</a>
                </div>

                <div className="hero-socials">
                    {SOCIAL_LINKS.map(({href, label, Icon, color}) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            aria-label={label}
                            className="social-pill"
                            style={{'--pill-color': color}}
                        >
                            <Icon/>
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
                <div className="avatar-glow"/>
                <div className="avatar-ring">
                    <div className="avatar-inner">
                        <img
                            src="https://avatars.githubusercontent.com/abhinavsharma07-eng"
                            alt="Abhinav Sharma"
                            className="avatar-img"
                        />
                    </div>
                </div>
                <div className="floating-badge fb-1">C</div>
                <div className="floating-badge fb-2">Python</div>
                <div className="floating-badge fb-3">Java</div>
                <div className="floating-badge fb-4">React</div>
                <div className="floating-badge fb-5">DSA</div>
            </div>
        </section>
    )
}

/* ─── Skills ──────────────────────────────────────────────── */
function Skills() {
    const ref = useReveal()
    return (
        <section id="skills" className="section section-alt reveal-target" ref={ref}>
            <SectionHeader label="What I know" title="Technical Skills"/>
            <div className="skills-grid">
                {Object.entries(SKILLS).map(([category, items]) => (
                    <div className="skill-card" key={category}>
                        <h3 className="skill-category">{category}</h3>
                        <div className="skill-tags">
                            {items.map(item => <span className="skill-tag" key={item}>{item}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

/* ─── Coding Profiles (LeetCode + HackerRank) ─────────────── */


function useLeetcodeStats(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [ts, setTs] = useState(Date.now())

    useEffect(() => {
        let active = true
        setLoading(true)
        setError(null)
        setData(null)

        const endpoints = [
            `https://leetcode-stats-api.herokuapp.com/${username}`,
            `https://alfa-leetcode-api.onrender.com/${username}`,
            `https://leetcode-api-faisalshohag.vercel.app/${username}`
        ]

        async function fetchStats() {
            for (const url of endpoints) {
                try {
                    const res = await fetch(url)
                    if (!res.ok) continue
                    const d = await res.json()
                    if (d && (d.totalSolved !== undefined || d.status === 'success')) {
                        if (active) {
                            setData({
                                totalSolved: d.totalSolved ?? (d.easySolved + d.mediumSolved + d.hardSolved) ?? 0,
                                totalQuestions: d.totalQuestions ?? 0,
                                easySolved: d.easySolved ?? 0,
                                totalEasy: d.totalEasy ?? 0,
                                mediumSolved: d.mediumSolved ?? 0,
                                totalMedium: d.totalMedium ?? 0,
                                hardSolved: d.hardSolved ?? 0,
                                totalHard: d.totalHard ?? 0,
                                acceptanceRate: d.acceptanceRate ? String(d.acceptanceRate) : '0',
                                ranking: d.ranking ?? 0,
                            })
                            setLoading(false)
                            return
                        }
                    }
                } catch {
                    // try next endpoint
                }
            }
            if (active) {
                setError(true)
                setLoading(false)
            }
        }

        fetchStats()
        return () => {
            active = false
        }
    }, [username, ts])

    return {data, loading, error, refresh: () => setTs(Date.now())}
}

function LeetCodeCard() {
    const {data, loading, error, refresh} = useLeetcodeStats(LEETCODE_USERNAME)

    const difficulties = [
        {label: 'Easy', solved: data?.easySolved, total: data?.totalEasy, color: '#00b8a3'},
        {label: 'Medium', solved: data?.mediumSolved, total: data?.totalMedium, color: '#ffc01e'},
        {label: 'Hard', solved: data?.hardSolved, total: data?.totalHard, color: '#ff375f'},
    ]

    return (
        <div className="coding-card">
            <div className="coding-card-header">
                <div className="coding-card-brand lc-brand">
                    <LeetcodeIcon/>
                    <span>LeetCode</span>
                </div>
                <div className="coding-card-actions">
                    <button className="refresh-btn" onClick={refresh} title="Refresh stats"
                            aria-label="Refresh LeetCode stats">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="15"
                             height="15">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                            <path d="M3 3v5h5"/>
                        </svg>
                    </button>
                    <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}`} target="_blank" rel="noreferrer"
                       className="coding-ext-link" aria-label="Open LeetCode profile">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15"
                             height="15">
                            <path
                                d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </a>
                </div>
            </div>

            {loading && (
                <div className="coding-loading">
                    <div className="spinner"/>
                    <span>Fetching live stats…</span>
                </div>
            )}

            {error && (
                <div className="coding-error">
                    <p>Could not load stats.</p>
                    <button className="btn btn-sm btn-outline" onClick={refresh}>Retry</button>
                </div>
            )}

            {data && !loading && (
                <>
                    <div className="lc-total">
                        <div className="lc-donut"
                             style={{'--pct': `${Math.round((data.totalSolved / (data.totalQuestions || 1)) * 100)}`}}>
                            <span className="lc-donut-num">{data.totalSolved}</span>
                            <span className="lc-donut-label">Solved</span>
                        </div>
                        <div className="lc-meta">
                            <div className="lc-meta-item">
                                <span className="lc-meta-key">Total Questions</span>
                                <span className="lc-meta-val">{data.totalQuestions}</span>
                            </div>
                            <div className="lc-meta-item">
                                <span className="lc-meta-key">Acceptance</span>
                                <span
                                    className="lc-meta-val">{data.acceptanceRate ? `${parseFloat(data.acceptanceRate).toFixed(1)}%` : '—'}</span>
                            </div>
                            <div className="lc-meta-item">
                                <span className="lc-meta-key">Global Ranking</span>
                                <span className="lc-meta-val">#{data.ranking?.toLocaleString() || '—'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="lc-difficulties">
                        {difficulties.map(({label, solved, total, color}) => (
                            <div className="lc-diff-row" key={label}>
                                <span className="lc-diff-label" style={{color}}>{label}</span>
                                <div className="lc-bar-wrap">
                                    <div
                                        className="lc-bar-fill"
                                        style={{
                                            width: `${total ? Math.round((solved / total) * 100) : 0}%`,
                                            background: color
                                        }}
                                    />
                                </div>
                                <span className="lc-diff-count">{solved ?? 0}/{total ?? 0}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

function HackerRankCard() {
    return (
        <div className="coding-card">
            <div className="coding-card-header">
                <div className="coding-card-brand hr-brand">
                    <HackerrankIcon/>
                    <span>HackerRank</span>
                </div>
                <a href={`https://www.hackerrank.com/profile/${HACKERRANK_USERNAME}`} target="_blank" rel="noreferrer"
                   className="coding-ext-link" aria-label="Open HackerRank profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                        <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>

            <div className="hr-badges" style={{textAlign: 'center', color: 'var(--text-dim)', padding: '1rem 0'}}>
                <p>HackerRank does not provide a public API for live stats.</p>
                <p style={{marginTop: '0.5rem'}}>Please view my full profile to see my active progress, badges, and
                    competitive programming details.</p>
            </div>

            <a
                href={`https://www.hackerrank.com/profile/${HACKERRANK_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline hr-profile-btn"
            >
                View Full Profile →
            </a>
        </div>
    )
}

function GitHubCard() {
    return (
        <div className="coding-card github-chart-card">
            <div className="coding-card-header">
                <div className="coding-card-brand gh-brand">
                    <GithubIcon/>
                    <span>GitHub Contributions</span>
                </div>
                <a href="https://github.com/abhinavsharma07-eng" target="_blank" rel="noreferrer"
                   className="coding-ext-link" aria-label="Open GitHub profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                        <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
            <div className="gh-chart-wrap">
                <img
                    src="https://ghchart.rshah.org/abhinavsharma07-eng"
                    alt="GitHub Contributions Chart"
                    className="gh-chart-img"
                />
            </div>
        </div>
    )
}

function CodingProfiles() {
    const ref = useReveal()
    return (
        <section id="coding" className="section reveal-target" ref={ref}>
            <SectionHeader label="Competitive Coding" title="Coding Profiles"/>
            <div className="coding-grid">
                <LeetCodeCard/>
                <HackerRankCard/>
                <GitHubCard/>
            </div>
        </section>
    )
}

/* ─── Projects ────────────────────────────────────────────── */
function Projects() {
    const ref = useReveal()
    return (
        <section id="projects" className="section section-alt reveal-target" ref={ref}>
            <SectionHeader label="What I've built" title="Featured Projects"/>
            <div className="projects-grid">
                {PROJECTS.map(p => (
                    <div className="project-card" key={p.title}>
                        <div className="project-top">
                            <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" width="34" height="34">
                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                            </svg>
                            <a href={p.link} target="_blank" rel="noreferrer" className="project-link"
                               aria-label={`View ${p.title}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19"
                                     height="19">
                                    <path
                                        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.description}</p>
                        <div className="project-tags">
                            {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="projects-footer">
                <a href="https://github.com/abhinavsharma07-eng" target="_blank" rel="noreferrer"
                   className="btn btn-outline">
                    <GithubIcon/> View All on GitHub
                </a>
            </div>
        </section>
    )
}

/* ─── Education ───────────────────────────────────────────── */
function Education() {
    const ref = useReveal()
    return (
        <section id="education" className="section reveal-target" ref={ref}>
            <SectionHeader label="My Background" title="Education"/>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"/>
                    <div className="timeline-card">
                        <div className="edu-header">
                            <div>
                                <h3 className="edu-degree">B.Tech in Computer Science</h3>
                                <p className="edu-institution">KCC ITM</p>
                            </div>
                            <span className="edu-badge">2025 – 2029</span>
                        </div>
                        <ul className="edu-highlights">
                            <li>Pursuing Computing Science and Engineering. Graduate in 2029.</li>
                            <li>Core focus on C, Python, Java, and Data Structures &amp; Algorithms</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"/>
                    <div className="timeline-card">
                        <div className="edu-header">
                            <div>
                                <h3 className="edu-degree">High School (Science)</h3>
                                <p className="edu-institution">Sarvodaya Bal Vidayalay</p>
                            </div>
                            <span className="edu-badge">2023 – 2025</span>
                        </div>
                        <ul className="edu-highlights">
                            <li>Major in Physics, Chemistry, and Mathematics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ─── Contact ─────────────────────────────────────────────── */
function Contact() {
    const ref = useReveal()
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
    const handleSubmit = e => {
        e.preventDefault()
        const sub = encodeURIComponent(`Portfolio Contact from ${form.name}`)
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
        window.location.href = `mailto:abhinav.query07@gmail.com?subject=${sub}&body=${body}`
        setSent(true);
        setTimeout(() => setSent(false), 4000)
    }

    const CONTACT_ITEMS = [
        {href: 'mailto:abhinav.query07@gmail.com', label: 'Email', value: 'abhinav.query07@gmail.com', Icon: EmailIcon},
        {
            href: 'https://www.linkedin.com/in/abhinavsharma07-eng/',
            label: 'LinkedIn',
            value: 'abhinavsharma07-eng',
            Icon: LinkedinIcon
        },
    ]

    return (
        <section id="contact" className="section section-alt reveal-target" ref={ref}>
            <SectionHeader
                label="Let's talk"
                title="Get in Touch"
                sub="I'm always open to new opportunities, collaborations, or a quick chat about tech!"
            />
            <div className="contact-wrapper">
                <div className="contact-info">
                    {CONTACT_ITEMS.map(({href, label, value, Icon}) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            className="contact-item"
                        >
                            <div className="contact-icon"><Icon/></div>
                            <div>
                                <p className="contact-label">{label}</p>
                                <p className="contact-value">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="c-name">Name</label>
                            <input id="c-name" name="name" type="text" placeholder="Your name" required
                                   value={form.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="c-email">Email</label>
                            <input id="c-email" name="email" type="email" placeholder="your@email.com" required
                                   value={form.email} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="c-msg">Message</label>
                        <textarea id="c-msg" name="message" rows="5" placeholder="Write your message…" required
                                  value={form.message} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        {sent ? '✓ Opening mail client…' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

/* ─── Footer ──────────────────────────────────────────────── */
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                {SOCIAL_LINKS.map(({href, label, Icon}) => (
                    <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'}
                       rel="noreferrer" aria-label={label}>
                        <Icon/>
                    </a>
                ))}
            </div>
            <p>Designed &amp; built by <strong>Abhinav Sharma</strong> · <a
                href="mailto:abhinav.query07@gmail.com">abhinav.query07@gmail.com</a></p>
            <p className="footer-copy">© {new Date().getFullYear()} · All rights reserved</p>
        </footer>
    )
}

/* ─── Shared SectionHeader ────────────────────────────────── */
function SectionHeader({label, title, sub}) {
    return (
        <div className="section-header">
            <span className="section-label">{label}</span>
            <h2 className="section-title">{title}</h2>
            {sub && <p className="section-sub">{sub}</p>}
        </div>
    )
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) setActiveSection(e.target.id)
            }),
            {rootMargin: '-40% 0px -55% 0px'}
        )
        document.querySelectorAll('section[id]').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <>
            <Navbar active={activeSection} onNav={setActiveSection}/>
            <main>
                <Hero/>
                <Skills/>
                <CodingProfiles/>
                <Projects/>
                <Education/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}
