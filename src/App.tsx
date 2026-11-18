
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
        <section id="home">
          <h1>
            Track, manage and achieve your
            career goals with JobTrack.
          </h1>

          <p>
            A simple and organised way to track your
            job applications, interviews and
            recruitment progress.
          </p>

          <button>Get Started</button>
          <button>Learn More</button>

          <div>
            <h2>Interactive Video</h2>
            <p>Dashboard demonstration coming soon.</p>
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
