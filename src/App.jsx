import React from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      category: "Makeup",
      price: "Rs. 499",
      oldPrice: "Rs. 699",
      rating: "4.9",
      badge: "Bestseller",
      img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Hydra Glow Face Serum",
      category: "Skincare",
      price: "Rs. 899",
      oldPrice: "Rs. 1,199",
      rating: "4.8",
      badge: "New",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Silk Finish Foundation",
      category: "Complexion",
      price: "Rs. 699",
      oldPrice: "Rs. 899",
      rating: "4.7",
      badge: "20% off",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Bloom Eye Shadow Palette",
      category: "Eyes",
      price: "Rs. 999",
      oldPrice: "Rs. 1,299",
      rating: "4.9",
      badge: "Trending",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const categories = [
    { name: "Makeup", count: "126 items", accent: "#ef476f" },
    { name: "Skincare", count: "84 items", accent: "#06a77d" },
    { name: "Haircare", count: "57 items", accent: "#118ab2" },
  ];

  return (
    <div style={styles.appShell}>
      <header style={styles.navbar}>
        <a href="#" style={styles.logoWrap}>
          <span style={styles.logoMark}>G</span>
          <span style={styles.logoText}>GlowBeauty</span>
        </a>

        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#shop" style={styles.navLink}>Shop</a>
          <a href="#categories" style={styles.navLink}>Categories</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>

        <button style={styles.cartBtn}>Cart 0</button>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>Fresh arrivals are live</p>
            <h1 style={styles.heroTitle}>Beauty that feels soft, fresh, and effortless.</h1>
            <p style={styles.heroText}>
              Find glow-ready makeup, skincare, and everyday essentials chosen for real routines.
            </p>

            <div style={styles.heroActions}>
              <button style={styles.primaryBtn}>Shop collection</button>
              <button style={styles.ghostBtn}>Explore skincare</button>
            </div>

            <div style={styles.benefitRow}>
              <span style={styles.benefitPill}>Free delivery above Rs. 999</span>
              <span style={styles.benefitPill}>Cruelty-free picks</span>
              <span style={styles.benefitPill}>Easy 7-day returns</span>
            </div>
          </div>

          <div style={styles.heroImagePanel}>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
              alt="Assorted beauty products arranged on a soft background"
              style={styles.heroImage}
            />
            <div style={styles.heroDeal}>
              <span style={styles.dealLabel}>Today</span>
              <strong>Up to 30% off</strong>
              <span style={styles.dealSub}>On curated glow kits</span>
            </div>
          </div>
        </section>

        <section id="categories" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.eyebrow}>Shop by mood</p>
              <h2 style={styles.sectionTitle}>Pick your routine</h2>
            </div>
          </div>

          <div style={styles.categories}>
            {categories.map((category) => (
              <button key={category.name} style={styles.categoryCard}>
                <span style={{ ...styles.categoryAccent, backgroundColor: category.accent }} />
                <span style={styles.categoryName}>{category.name}</span>
                <span style={styles.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="shop" style={{ ...styles.section, ...styles.productSection }}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.eyebrow}>Loved this week</p>
              <h2 style={styles.sectionTitle}>Featured products</h2>
            </div>
          </div>

          <div style={styles.products}>
            {products.map((item) => (
              <article key={item.id} style={styles.productCard}>
                <div style={styles.imageWrap}>
                  <img src={item.img} alt={item.name} style={styles.image} />
                  <span style={styles.badge}>{item.badge}</span>
                </div>

                <div style={styles.productBody}>
                  <div>
                    <p style={styles.productCategory}>{item.category}</p>
                    <h3 style={styles.productName}>{item.name}</h3>
                  </div>

                  <div style={styles.productMeta}>
                    <span style={styles.rating}>Rating {item.rating}</span>
                    <span style={styles.priceWrap}>
                      <strong style={styles.price}>{item.price}</strong>
                      <span style={styles.oldPrice}>{item.oldPrice}</span>
                    </span>
                  </div>

                  <button style={styles.secondaryBtn}>Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" style={styles.footer}>
        <div>
          <strong style={styles.footerBrand}>GlowBeauty</strong>
          <p style={styles.footerText}>Clean favorites for brighter everyday rituals.</p>
        </div>
        <span style={styles.footerText}>2026 GlowBeauty. All rights reserved.</span>
      </footer>
    </div>
  );
}

const styles = {
  appShell: {
    width: "100vw",
    minHeight: "100vh",
    marginLeft: "calc(50% - 50vw)",
    color: "#171316",
    background: "linear-gradient(180deg, #fff8f6 0%, #ffffff 38%, #f6fbfa 100%)",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    textAlign: "left",
  },
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    padding: "18px clamp(18px, 5vw, 72px)",
    backgroundColor: "rgba(255, 248, 246, 0.92)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(23, 19, 22, 0.08)",
  },
  logoWrap: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "#171316",
    textDecoration: "none",
    fontWeight: 800,
  },
  logoMark: {
    display: "grid",
    placeItems: "center",
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    backgroundColor: "#171316",
    color: "#ffffff",
    fontWeight: 900,
  },
  logoText: {
    fontSize: "20px",
    letterSpacing: 0,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "8px",
  },
  navLink: {
    color: "#5f545a",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 700,
    padding: "9px 12px",
    borderRadius: "8px",
  },
  cartBtn: {
    border: "1px solid rgba(23, 19, 22, 0.12)",
    backgroundColor: "#ffffff",
    color: "#171316",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(47, 34, 35, 0.08)",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    alignItems: "center",
    gap: "clamp(28px, 5vw, 72px)",
    padding: "clamp(44px, 7vw, 92px) clamp(18px, 5vw, 72px) 36px",
  },
  heroContent: {
    maxWidth: "690px",
  },
  eyebrow: {
    margin: 0,
    color: "#c83258",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  heroTitle: {
    margin: "14px 0 18px",
    maxWidth: "680px",
    color: "#171316",
    fontSize: "clamp(42px, 6.5vw, 82px)",
    lineHeight: 0.95,
    letterSpacing: 0,
    fontWeight: 900,
  },
  heroText: {
    margin: 0,
    maxWidth: "560px",
    color: "#665e62",
    fontSize: "18px",
    lineHeight: 1.7,
  },
  heroActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "28px",
  },
  primaryBtn: {
    border: "none",
    backgroundColor: "#171316",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 18px 36px rgba(23, 19, 22, 0.22)",
  },
  ghostBtn: {
    border: "1px solid rgba(23, 19, 22, 0.14)",
    backgroundColor: "rgba(255, 255, 255, 0.68)",
    color: "#171316",
    padding: "14px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 900,
    cursor: "pointer",
  },
  benefitRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "28px",
  },
  benefitPill: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: "36px",
    padding: "0 13px",
    border: "1px solid rgba(23, 19, 22, 0.1)",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    color: "#40383d",
    fontSize: "13px",
    fontWeight: 800,
  },
  heroImagePanel: {
    position: "relative",
    minHeight: "520px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#f3dad3",
    boxShadow: "0 26px 70px rgba(95, 58, 64, 0.22)",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    minHeight: "520px",
    objectFit: "cover",
    display: "block",
  },
  heroDeal: {
    position: "absolute",
    left: "20px",
    right: "20px",
    bottom: "20px",
    display: "grid",
    gap: "4px",
    padding: "18px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    backdropFilter: "blur(14px)",
    color: "#171316",
    boxShadow: "0 18px 34px rgba(23, 19, 22, 0.16)",
  },
  dealLabel: {
    color: "#c83258",
    fontSize: "12px",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  dealSub: {
    color: "#6c6267",
    fontSize: "14px",
    fontWeight: 700,
  },
  section: {
    padding: "44px clamp(18px, 5vw, 72px)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    gap: "18px",
    marginBottom: "22px",
  },
  sectionTitle: {
    margin: "6px 0 0",
    color: "#171316",
    fontSize: "clamp(28px, 4vw, 44px)",
    lineHeight: 1,
    letterSpacing: 0,
    fontWeight: 900,
  },
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },
  categoryCard: {
    display: "grid",
    gridTemplateColumns: "12px 1fr",
    alignItems: "center",
    columnGap: "14px",
    rowGap: "3px",
    minHeight: "112px",
    padding: "22px",
    border: "1px solid rgba(23, 19, 22, 0.09)",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#171316",
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "0 14px 40px rgba(47, 34, 35, 0.08)",
  },
  categoryAccent: {
    gridRow: "1 / span 2",
    width: "12px",
    height: "54px",
    borderRadius: "8px",
  },
  categoryName: {
    fontSize: "20px",
    fontWeight: 900,
  },
  categoryCount: {
    color: "#776e72",
    fontSize: "14px",
    fontWeight: 700,
  },
  productSection: {
    paddingBottom: "70px",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px",
  },
  productCard: {
    overflow: "hidden",
    border: "1px solid rgba(23, 19, 22, 0.09)",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 18px 45px rgba(47, 34, 35, 0.09)",
  },
  imageWrap: {
    position: "relative",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    backgroundColor: "#f5e3df",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  badge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    padding: "7px 10px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    color: "#171316",
    fontSize: "12px",
    fontWeight: 900,
    backdropFilter: "blur(10px)",
  },
  productBody: {
    display: "grid",
    gap: "15px",
    padding: "16px",
  },
  productCategory: {
    margin: 0,
    color: "#c83258",
    fontSize: "12px",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  productName: {
    margin: "6px 0 0",
    minHeight: "52px",
    color: "#171316",
    fontSize: "19px",
    lineHeight: 1.35,
    letterSpacing: 0,
    fontWeight: 900,
  },
  productMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },
  rating: {
    color: "#665e62",
    fontSize: "13px",
    fontWeight: 800,
  },
  priceWrap: {
    display: "grid",
    gap: "1px",
    textAlign: "right",
  },
  price: {
    color: "#171316",
    fontSize: "17px",
  },
  oldPrice: {
    color: "#91888d",
    fontSize: "12px",
    fontWeight: 700,
    textDecoration: "line-through",
  },
  secondaryBtn: {
    width: "100%",
    border: "none",
    backgroundColor: "#ef476f",
    color: "#ffffff",
    padding: "12px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 900,
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    padding: "26px clamp(18px, 5vw, 72px)",
    borderTop: "1px solid rgba(23, 19, 22, 0.08)",
    backgroundColor: "#171316",
    color: "#ffffff",
  },
  footerBrand: {
    display: "block",
    marginBottom: "4px",
    fontSize: "18px",
  },
  footerText: {
    margin: 0,
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: "14px",
  },
};

export default App;

