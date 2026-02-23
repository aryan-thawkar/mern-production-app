import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const API_URL =
      process.env.NODE_ENV === "production"
        ? "/api/health"
        : "http://localhost:5000/api/health";

    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMessage("CI/CD Working 🚀 + 31"))
      .catch(() => setMessage("API Error"));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;