
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <header>
        <h2>JobTrack</h2>

        <nav>
          <a href="#home">Job Tracker</a>
          <a href="#resources">Resources</a>
          <a href="#features">Features</a>
        </nav>

        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>
            Track, manage and achieve your
            career goals with JobTrack.
          </h1>

          <p>
            A simple and organised way to track your
            job applications, interviews and
            recruitment progress.
            </p>

            <div className="hero-buttons">
               <button type="button">Get Started</button>
               <button type="button">Learn More</button>
            </div>
          </div>
          
         
<div className="hero-video">
  <div className="preview-header">
    <h2>JobTrack Dashboard</h2>
    <span className="preview-badge">Demo</span>
  </div>

  <div className="preview-stats">
    <div className="preview-stat">
      <p>Applications</p>
      <strong>24</strong>
    </div>

    <div className="preview-stat">
      <p>Interviews</p>
      <strong>6</strong>
    </div>

    <div className="preview-stat">
      <p>Offers</p>
      <strong>2</strong>
    </div>
  </div>

  <div className="preview-applications">
    <h3>Recent Applications</h3>

    <div className="preview-application">
      <span>Software Developer</span>
      <span className="preview-status interview">Interview</span>
    </div>

    <div className="preview-application">
      <span>IT Support Analyst</span>
      <span className="preview-status applied">Applied</span>
    </div>

    <div className="preview-application">
      <span>Graduate Engineer</span>
      <span className="preview-status assessment">Assessment</span>
    </div>
  </div>
</div>


        </section>

       
<section id="features" className="features-section">
  <div className="features-heading">
    <h2>Everything you need for your job search</h2>
    <p>
      Discover how JobTrack can help you organise
      applications and manage your recruitment journey.
    </p>
  </div>

  <div className="features-grid">
    <article className="feature-card">
      <div className="feature-icon">📋</div>
      <h3>Application Tracking</h3>
      <p>
        Keep your job applications organised
        and monitor their progress in one place.
      </p>
    </article>

    <article className="feature-card">
      <div className="feature-icon">🎯</div>
      <h3>Recruitment Stages</h3>
      <p>
        Track each stage of recruitment, from
        initial applications to final decisions.
      </p>
    </article>

    <article className="feature-card">
      <div className="feature-icon">📅</div>
      <h3>Interview Management</h3>
      <p>
        Stay on top of upcoming interviews,
        assessments and important deadlines.
      </p>
    </article>

    <article className="feature-card">
      <div className="feature-icon">📊</div>
      <h3>Job Search Analytics</h3>
      <p>
        Understand your application activity
        and identify trends in your job search.
      </p>
    </article>
  </div>
</section>

      </main>

    
<footer className="homepage-footer">
  <div className="footer-content">
    <div className="footer-column">
      <h2>JobTrack</h2>
      <p>
        Helping job seekers stay organised
        throughout their career journey.
      </p>
    </div>

    <div className="footer-column">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#resources">Resources</a>
    </div>

    <div className="footer-column">
      <h3>Get Started</h3>
      <p>Job Tracker</p>
      <p>Sign up</p>
      <p>Log in</p>
    </div>

    <div className="footer-column">
      <h3>Connect</h3>
      <p>Social links coming soon.</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 JobTrack. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
