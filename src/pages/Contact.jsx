function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contactez-nous</h2>
      
      <div className="contact-description">
        <p>
          Directeur de magasin pendant près de 10 ans (Leroy Merlin, Conforama, la Plateforme du Bâtiment (Point P)), c'est une rencontre qui m'a amenée sur la voie de la création de Rénov Route en 2016.
        </p>
        <p>
          Rénov Route est donc le spécialiste dans l'entretien de votre parking ou de votre copropriété dans :
        </p>
        <ul>
          <li>le traçage ou le retraçage au sol pour redonner de l'éclat et de l'attrait dans le respect et l'application de la législation en terme de place handicapée, porte automatique...</li>
          <li>la fourniture et la pose de panneaux de signalisation.</li>
          <li>la réparation des nids de poule</li>
          <li>et tout autre travaux manuel aussi divers que le remplacement ou la réparation d'un regard ou d'une bouche d'égout, la création d'une allée piétonne, la pose de ralentisseurs...</li>
        </ul>
        <p>
          Porté par notre goût affirmé de la satisfaction de la clientèle, nous respectons avant tout vos contraintes d'exploitation pour garantir votre business ! Nos maîtres mots sont donc : communication (devis rapide), respect des délais et des horaires.
        </p>
        <p className="contact-cta">Contactez-nous :</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Informations de contact</h3>
          <p className="company-name">Rénov Route sarl</p>
          <p className="address">
            <i className="fas fa-map-marker-alt"></i>
            <a href="https://www.google.com/maps/search/?api=1&query=Rénov+Route+6+allée+du+ruisseau+de+Ribbes+69160+Tassin+la+demi-lune" target="_blank" rel="noopener noreferrer">
              <span>6, allée du ruisseau de Ribbes, 69160 Tassin la demi-lune</span>
            </a>
          </p>
          <p className="contact-details">
            <strong>Port :</strong> <a href="tel:+33786819692">07 86 81 96 92</a><br />
            <strong>Fax :</strong> 09 55 16 37 38<br />
            <strong>Email :</strong> <a href="mailto:contact@renov-route.com">contact@renov-route.com</a>
          </p>
          <p className="siret">
            <strong>SIRET :</strong> 818 745 515 00010
          </p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-left">
              <div className="form-group">
                <div className="label-container">
                  <label htmlFor="name">Nom *</label>
                </div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Votre nom complet"
                />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label htmlFor="email">Email *</label>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="votre@email.com"
                />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label htmlFor="telephone">Téléphone</label>
                </div>
                <input 
                  type="tel" 
                  id="telephone" 
                  name="telephone" 
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label htmlFor="ville">Ville</label>
                </div>
                <input 
                  type="text" 
                  id="ville" 
                  name="ville" 
                  placeholder="Votre ville"
                />
              </div>
            </div>
            <div className="form-right">
              <div className="form-group">
                <div className="label-container">
                  <label htmlFor="message">Message *</label>
                </div>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact