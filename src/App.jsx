import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My React App</h1>
        <p>Your journey starts here 🚀</p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>About</h2>
          <p>This is a simple homepage built using React.</p>
        </section>

        <section style={styles.card}>
          <h2>Features</h2>
          <ul>
            <li>⚡ Fast and responsive</li>
            <li>🎨 Easy to customize</li>
            <li>📦 Component-based structure</li>
          </ul>
        </section>

        <section style={styles.card}>
          <h2>Get Started</h2>
          <button style={styles.button}>Click Me</button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 My React App</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "40px 20px",
    borderRadius: "10px",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "40px",
    color: "#777",
  },
};

export default App;