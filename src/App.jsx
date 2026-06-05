import { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [documentType, setDocumentType] = useState("Project Proposal");
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [titles, setTitles] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTitles = async () => {
    if (!domain || !keywords || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
  "http://localhost:8000/generate",
  {
    documentType,
    domain,
    keywords,
    description,
  }
);

      setTitles(response.data.titles);
    } catch (error) {
      alert("Error generating documentation");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyTitles = () => {
    navigator.clipboard.writeText(titles);
    alert("Documentation copied successfully!");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(titles, 180);

    doc.text(lines, 10, 10);

    doc.save("Project_Documentation.pdf");
  };

  const clearAll = () => {
    setDomain("");
    setKeywords("");
    setDescription("");
    setTitles("");
  };

  return (
    <div className="container">
      <div className="card">
      <div className="badge">
  ✨ Proposal • SRS • BRD • UAT • PPT
</div>
        <h1 className="title">
  Generate Professional
  <br />
  <span className="gradient-text">
    Project Documentation
  </span>
</h1>

        <p className="subtitle">
  Create proposals, Software Requirement Specifications,
  Business Requirement Documents, User Acceptance Testing
  documents and presentation content using AI in seconds.
</p>

<div className="stats">
  <div>📄 5 Document Types</div>
  <div>⚡ AI Powered</div>
  <div>📥 PDF Export</div>
</div>

        <label className="input-label">
  Document Type
</label>

<select
  className="dropdown"
  value={documentType}
  onChange={(e) => setDocumentType(e.target.value)}
>
  <option>Project Proposal</option>
  <option>SRS</option>
  <option>BRD</option>
  <option>UAT</option>
  <option>PPT Content</option>
</select>

        <label className="input-label">
          Project Domain
        </label>

        <input
          placeholder="Healthcare, Agriculture, Finance..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />

        <label className="input-label">
          Keywords
        </label>

        <input
          placeholder="AI, Machine Learning, Analytics"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />

        <label className="input-label">
          Project Description
        </label>

        <textarea
          rows="6"
          placeholder="Describe your project idea in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="generate-btn"
          onClick={generateTitles}
          disabled={loading}
        >
          {loading
            ? "⏳ Generating..."
            : "✨ Generate Project Documentation"}
        </button>

        {loading && (
          <div className="loader">
            Generating AI-powered documentation...
          </div>
        )}

        {titles && (
          <>
            <div className="action-buttons">

              <button
                className="copy-btn"
                onClick={copyTitles}
              >
                📋 Copy
              </button>

              <button
                className="pdf-btn"
                onClick={downloadPDF}
              >
                📄 PDF
              </button>

              <button
                className="clear-btn"
                onClick={clearAll}
              >
                🗑 Clear
              </button>

            </div>

            <div className="results">
              <ReactMarkdown>
                {titles}
              </ReactMarkdown>
            </div>
          </>
        )}

        <p className="footer">
          🚀 Powered by AI | Built with React + FastAPI
        </p>

      </div>
    </div>
  );
}

export default App;