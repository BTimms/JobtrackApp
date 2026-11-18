
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

        <section id="features">
          <h2>Features</h2>
          <p>
            Everything you need to stay organised
            throughout your job search.
          </p>
        </section>
      </main>

      <footer>
        <p>Follow JobTrack</p>
        <p>Ready to take control of your job search?</p>
      </footer>
    </div>
  );
}

export default App;
