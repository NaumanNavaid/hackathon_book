import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Uses global 'heroBanner' class which now respects Light/Dark mode
    <header className={clsx('hero', 'heroBanner')}>
      <div className="container">
        <h1 className="hero__title animate-on-load">
          The <span className="text-gradient">AI Native</span> Revolution
        </h1>
        <p className="hero__subtitle animate-on-load delay-1">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'animate-on-load delay-2')}>
          <Link className="cta-button" to="/docs/intro">
            Start Reading Now ⚡
          </Link>
        </div>
        
        <div className="tech-stack margin-top--lg animate-on-load delay-3" style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', padding:'2rem 0', position:'relative', zIndex:2}}>
          <span className="tech-badge">Python 🐍</span>
          <span className="tech-badge">TypeScript 📘</span>
          <span className="tech-badge">ROS 2 🤖</span>
          <span className="tech-badge">Docker 🐳</span>
          <span className="tech-badge">LLMs 🧠</span>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({title, icon, description, difficulty}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="glass-card project-card">
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <div className="margin-bottom--md">
          <span className="badge badge--secondary">{difficulty}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function MaturityLevel({level, title, subtitle, description}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="glass-card">
        <div className="card__header">
          <h3 className="text-gradient">Level {level}: {title}</h3>
          <small style={{display:'block', marginBottom:'1rem', opacity: 0.8}}>{subtitle}</small>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function CoreConcept({icon, title, description, delay}) {
    return (
      <div className={clsx('col col--4 animate-on-load', delay)}>
        <div className="text--center padding--md">
          <span style={{fontSize: '3.5rem', display:'block', marginBottom:'1rem', animation: 'float 6s ease-in-out infinite'}}>{icon}</span>
          <Heading as="h3">{title}</Heading>
          <p style={{opacity: 0.8}}>{description}</p>
        </div>
      </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="AI Native Software Development Guide">
      <HomepageHeader />
      
      <main>
        {/* SECTION 1: CORE CONCEPTS */}
        <section className="padding-vert--xl section-dynamic">
          <div className="container">
            <div className="row">
                <CoreConcept icon="🛠️" title="AI Assisted" delay="delay-1"
                  description="AI acts as a helper. Code completion, debugging, and docs generation." />
                <CoreConcept icon="🚀" title="AI Driven" delay="delay-2"
                  description="AI acts as a co-creator. Generating significant code from specifications." />
                <CoreConcept icon="🧠" title="AI Native" delay="delay-3"
                  description="AI IS the software. Applications architected around LLMs and agents." />
            </div>
          </div>
        </section>

        {/* SECTION 2: PROJECTS */}
        <section className="padding-vert--xl section-dynamic">
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--xl text-gradient">
              Hands-on Projects 🛠️
            </Heading>
            <div className="row">
              <ProjectCard 
                title="RAG Knowledge Bot" icon="📚" difficulty="Beginner"
                description="Build a chatbot that can read your PDFs and answer questions using Vector Databases."
              />
              <ProjectCard 
                title="Autonomous Agent" icon="🤖" difficulty="Intermediate"
                description="Create an agent that can browse the web, plan tasks, and execute code autonomously."
              />
              <ProjectCard 
                title="Digital Twin" icon="🏭" difficulty="Advanced"
                description="Simulate a physical robot in Unity/Omniverse and control it using ROS 2 and AI."
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: MATURITY LEVELS */}
        <section className="padding-vert--xl section-dynamic">
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--xl">
              Organizational AI Maturity Levels
            </Heading>
            <div className="row">
               <MaturityLevel level="1" title="Awareness" subtitle="Experimenting"
                 description="Individual developers experimenting with AI tools." />
               <MaturityLevel level="2" title="Adoption" subtitle="Standardizing"
                 description="Organization-wide adoption with governance." />
               <MaturityLevel level="3" title="Integration" subtitle="Transforming"
                 description="AI-Driven practices. Specs become living documentation." />
               <MaturityLevel level="4" title="AI-Native" subtitle="Building"
                 description="Products where AI/LLMs are core components." />
               <MaturityLevel level="5" title="AI-First" subtitle="Future"
                 description="Entire organization is AI-native. Self-improving systems." />
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA */}
        <section className="padding-vert--xl text--center heroBanner">
          <div className="container" style={{position:'relative', zIndex: 1}}>
            <Heading as="h2" className="text-gradient margin-bottom--lg" style={{fontSize: '2.5rem'}}>
              Ready to Architect the Future?
            </Heading>
            <p className="margin-bottom--xl" style={{fontSize: '1.3rem', opacity: 0.8}}>
              Join thousands of developers mastering the AI-First approach.
            </p>
            <Link className="cta-button" to="/docs/intro">
              Start Your Journey 🚀
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}