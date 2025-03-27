function About() {
  return (
    <section className="about">
      <h2 className="section-title">À propos de Rénov Route</h2>
      
      <div className="about-content">
        <div className="about-section safety">
          <h3>La sécurité routière : un enjeu majeur</h3>
          <p>La sécurité routière est un véritable enjeu pour les gouvernements successifs depuis plus de 10 ans. La mortalité routière a chuté de moitié, mais reste supérieure à 3000 morts par an.</p>
          <p>La signalétique et l'état des routes sont mis en cause dans 47% des accidents. <span className="source">(source : 40 millions d'automobilistes)</span></p>
          <p>Les communes et les entreprises ont la responsabilité de l'entretien de leur réseau/parkings, mais les budgets tendent à se resserrer.</p>
        </div>

        <div className="about-section history">
          <h3>Notre Histoire</h3>
          <p>La société Rénov Route a vu le jour en mars 2016 par la rencontre d'hommes passionnés par les métiers de la route et la fabrication d'un asphalte de réparation unique en son genre : le RR 0/4.</p>
        </div>

        <div className="about-section solutions">
          <h3>Nos Solutions</h3>
          <p>La société Rénov Route est le partenaire de vos problématiques de la route à travers son métier de négoce en produits pour la chaussée :</p>
          <div className="solutions-grid">
            <div className="solutions-column">
              <ul>
                <li>Marquage routier blanc et couleur</li>
                <li>Résines</li>
                <li>Panneaux routiers</li>
                <li>Thermocollée préfabriquée</li>
                <li>Ralentisseurs</li>
                <li>Signalétique</li>
                <li>Mise aux normes PMR pour les personnes handicapées</li>
                <li>Produit spécifique de réparation de la route avec de l'asphalte coulé</li>
                <li>Agrégats</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section parking">
          <h3>La Peinture Routière sur Parking</h3>
          <p>Nous proposons des solutions complètes pour le marquage et l'entretien de vos parkings :</p>
          <ul>
            <li>Marquage des places de stationnement</li>
            <li>Signalisation au sol</li>
            <li>Places PMR aux normes</li>
            <li>Numérotation des places</li>
            <li>Passages piétons</li>
            <li>Flèches directionnelles</li>
            <li>Zones de livraison</li>
          </ul>
          <p className="highlight">Des solutions durables et professionnelles pour optimiser vos espaces de stationnement.</p>
        </div>

        <div className="about-section rr04">
          <h3>Le RR 0/4 : Notre Innovation</h3>
          <p>Le RR 0/4 est un asphalte unique capable de réparer de manière durable ces trous et nids de poule qui dérangent :</p>
          <ul>
            <li>Vos administrés</li>
            <li>Vos clients</li>
          </ul>
          <p>Le RR 0/4 est le produit adapté à vos problématiques de :</p>
          <ul>
            <li>Nids de poule</li>
            <li>Trous sur la chaussée</li>
            <li>Épaufrures</li>
            <li>Réparations de trottoirs</li>
            <li>Réparations de caniveaux</li>
            <li>Finitions autour de regards ou de piquets</li>
          </ul>
          <p className="highlight">Une solution durable et économique pour tous vos besoins de réparation routière.</p>
        </div>

        <div className="about-section engagement">
          <h3>Notre Engagement</h3>
          <p>La société Rénov Route s'engage dans l'établissement d'un devis rapide.</p>
          <p>Nous livrons rapidement à travers la France grâce à notre partenaire HEXATRANS situé à Mions (69).</p>
        </div>
      </div>
    </section>
  )
}

export default About