import React from "react";

function App() {
  const products = [
    { id: 1, name: "Matte Lipstick", price: "₹499", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Face Serum", price: "₹899", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Foundation", price: "₹699", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Eye Shadow Kit", price: "₹999", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={styles.container}>
      
      {/* Navbar */}
      <header style={styles.navbar}>
        <h2>GlowBeauty</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Discover Your Glow ✨</h1>
        <p>Premium beauty products at your fingertips</p>
        <button style={styles.primaryBtn}>Shop Now</button>
      </section>

      {/* Categories */}
      <section style={styles.section}>
        <h2>Shop by Category</h2>
        <div style={styles.categories}>
          <div style={styles.categoryCard}>💄 Makeup</div>
          <div style={styles.categoryCard}>🧴 Skincare</div>
          <div style={styles.categoryCard}>🌿 Haircare</div>
        </div>
      </section>

      {/* Products */}
      <section style={styles.section}>
        <h2>Featured Products</h2>
        <div style={styles.products}>
          {products.map((item) => (
            <div key={item.id} style={styles.productCard}>
              <img src={item.img} alt={item.name} style={styles.image} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button style={styles.secondaryBtn}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 GlowBeauty | All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },

  hero: {
    background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
    padding: "80px 20px",
    textAlign: "center",
    color: "#333",
  },

  section: {
    padding: "40px 20px",
    textAlign: "center",
  },

  categories: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },

  categoryCard: {
    backgroundColor: "#ffe4e1",
    padding: "20px",
    borderRadius: "10px",
    width: "120px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  products: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },

  productCard: {
    width: "200px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    borderRadius: "10px",
  },

  primaryBtn: {
    marginTop: "15px",
    padding: "12px 25px",
    border: "none",
    backgroundColor: "#ff6f91",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },

  secondaryBtn: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#61dafb",
    borderRadius: "5px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "30px",
    backgroundColor: "#f5f5f5",
  },
};

export default App;