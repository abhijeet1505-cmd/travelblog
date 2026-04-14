const Home = () => {
  const travelWebsite = "https://www.tripadvisor.in/";

  const places = [
    {
      name: "Taj Mahal",
      img: "/Taj.jpg",
      desc: "The Taj Mahal is a white marble monument in Agra and a symbol of love."
    },
    {
      name: "Gateway of India",
      img: "/gateway1.jpg",
      desc: "The Gateway of India is a famous historic arch monument in Mumbai."
    },
    {
      name: "Hawa Mahal",
      img: "/hawa_mahal.jpg",
      desc: "Hawa Mahal is Jaipur's iconic palace built with pink sandstone."
    },
    {
      name: "Kedarnath",
      img: "/kedarnath.jpg",
      desc: "Kedarnath is a sacred pilgrimage destination in Uttarakhand."
    },
    {
      name: "Golden Temple",
      img: "/Golden.jpg",
      desc: "The Golden Temple is a revered Sikh pilgrimage site in Amritsar."
    },
    {
      name: "Somnath",
      img: "/Somnath.jpg",
      desc: "Somnath Temple is one of the twelve sacred Jyotirlingas."
    }
  ];

  return (
    <>
      <div className="hero-section">
        <video autoPlay muted loop playsInline>
          <source src="/vdo2.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="content">
          <h1>Welcome to My Travel Blog</h1>
          <p>Explore the world with me!</p>
          <p className="tagline">
            Discover hidden gems, cultures, and adventures across the world.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "15px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <button
              className="btn"
              onClick={() => window.open(travelWebsite, "_blank")}
            >
              🌍 Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="places">
        {places.map((place, index) => (
          <div className="abt" key={index}>
            <img className="plc" src={place.img} alt={place.name} />
            <h1 className="name">{place.name}</h1>
            <p className="desc">{place.desc}</p>
            <button
              className="Know"
              onClick={() => window.open(travelWebsite, "_blank")}
            >
              Know-More
            </button>
          </div>
        ))}
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-content">
              <p className="footer-name">Made with ❤️ by Kanhaiya</p>
            </div>
            <h2>About Me</h2>
            <p>
              I'm a travel enthusiast sharing hidden gems, adventures, and
              experiences from around the world.
            </p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Explore</li>
            </ul>
          </div>

          <div className="footer-social">
            <h2>Follow Me</h2>
            <div className="social-icons">
              <span>🌐</span>
              <span>📸</span>
              <span>🐦</span>
              <span>🎥</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Travel Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;