import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'auto'
      });
    }, 100);
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/1.avif")' }}></div>
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/2.avif")' }}></div>
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/3.webp")' }}></div>
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/4.webp")' }}></div>
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/5.webp")' }}></div>
        <div className="hero-background-image" style={{ backgroundImage: 'url("/assets/photo_landing_page/6.webp")' }}></div>
      </div>
      <div className="hero-content">
        <h2>Expert en marquage routier</h2>
        <p>Solutions professionnelles pour vos besoins en marquage routier, réparation de nids-de-poule et signalisation</p>
        <button onClick={handleContactClick} className="cta-button">Contactez-nous</button>
      </div>
    </section>
  )
}

export default Hero