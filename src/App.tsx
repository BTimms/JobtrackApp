
import { useState } from "react";
import "./App.css";

type Application = {
  id: number;
  company: string;
  role: string;
  status: string;
};

function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function addApplication(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!company.trim() || !role.trim()) return;

    setApplications((previous) => [
      ...previous,
      {
        id: Date.now(),
        company: company.trim(),
        role: role.trim(),
        status: "Applied",
      },
    ]);

    setCompany("");
    setRole("");
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>JobTrack</h2>
        <nav>
          <p>Dashboard</p>
          <p>Applications</p>
          <p>Analytics</p>
        </nav>
      </aside>

      <main className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your job search dashboard.</p>

        <section className="stats">
          <div className="stat-card">
            <h3>Total Applications</h3>
            <strong>{applications.length}</strong>
          </div>
          <div className="stat-card">
            <h3>Active Applications</h3>
            <strong>{applications.length}</strong>
          </div>
        </section>

        <section className="panel">
          <h2>Add Application</h2>
          <form onSubmit={addApplication}>
            <input
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              placeholder="Job title"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <button type="submit">Add Application</button>
          </form>
        </section>

        <section className="panel">
          <h2>My Applications</h2>
          {applications.length === 0 ? (
            <p>No applications added yet.</p>
          ) : (
            <ul>
              {applications.map((application) => (
                <li key={application.id}>
                  <strong>{application.role}</strong> —{" "}
                  {application.company} ({application.status})
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
