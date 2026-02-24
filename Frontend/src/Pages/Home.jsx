import "../styles/home.scss";

const Home = () => {
  return (
    <main>
      <section id="hero-section">
        <video src="hero-section.mp4" autoPlay muted loop></video>
      </section>

      <section id="about">
        <h1>About FoodieHub</h1>
        <p>FoodieHub is built for passionate home cooks who want premium-quality recipes with a beautiful experience.</p>
      </section>
    </main>
  )
}

export default Home
