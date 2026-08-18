'use client';
import LottiePlayer from '@/components/LottiePlayer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const animationsData = [
  {
    id: 'anim1',
    url: '/animations/anim1.json',
    title: 'Mouvement & Fluidité',
    description: "Une animation polyvalente, parfaite pour attirer l'œil sur une section importante de votre page ou pour souligner une fonctionnalité clé de votre produit.",
  },
  {
    id: 'anim2',
    url: '/animations/anim2.json',
    title: 'Interaction Engageante',
    description: "Idéale pour accompagner un appel à l'action (Call-to-Action). Elle encourage l'utilisateur à cliquer et à interagir avec votre interface.",
  },
  {
    id: 'anim3',
    url: '/animations/anim3.json',
    title: 'Illustration Créative',
    description: "Utilisez cette animation pour illustrer un concept de manière visuelle. Excellente pour aérer vos textes et rendre la lecture plus agréable.",
    bgColor: '#fcfbfc',
  },
  {
    id: 'login',
    url: '/animations/login.json',
    title: 'Connexion & Sécurité',
    description: "Idéale pour vos pages de connexion ou d'inscription. Elle ajoute une touche dynamique et accueillante pour inviter vos utilisateurs à s'identifier en toute confiance.",
  },
  {
    id: 'error-401',
    url: '/animations/401-error.json',
    title: 'Erreur 401 – Accès Refusé',
    description: "Parfaite pour illustrer les pages d'erreur ou les accès non autorisés. Transformez la frustration d'un blocage en une expérience visuelle douce et compréhensible.",
  },
  {
    id: 'success',
    url: '/animations/Success.json',
    title: 'Validation & Succès',
    description: "À utiliser pour confirmer une action réussie : soumission d'un formulaire, paiement validé ou création de compte. Félicitez vos utilisateurs avec élégance !",
  },
  {
    id: 'loading',
    url: '/animations/loading.json',
    title: 'Chargement en Cours',
    description: "L'animation indispensable pour faire patienter vos visiteurs. Parfaite pour masquer les temps de chargement d'API ou de pages complexes sans perdre leur attention.",
  },
  {
    id: 'welcome',
    url: '/animations/welcome.json',
    title: 'Accueil & Bienvenue',
    description: "Créez une première impression mémorable ! Cette animation est idéale pour les écrans d'accueil, les pages de bienvenue ou les onboardings utilisateur.",
  },
  {
    id: 'notifications',
    url: '/animations/notifications.json',
    title: 'Notifications Push',
    description: "Encouragez vos utilisateurs à activer les notifications. Parfaite pour les modales de permission ou les sections expliquant les avantages des alertes en temps réel.",
  }
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Image src="/logo.png" alt="NT Logo" width={45} height={45} className="navbar-logo" />
          <span className="navbar-name">Nehemie Turing</span>
        </div>
      </nav>

      <main>
        {/* Accueil / Intro */}
        <section className="section-container intro-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="intro-title">Découvrez mes Créations</h1>
            <p className="intro-subtitle">
              Une collection d'animations uniques conçues pour donner vie à vos interfaces. 
              Défilez vers le bas pour explorer.
            </p>
          </motion.div>
          
          <div className="scroll-indicator">
            ↓
          </div>
        </section>

        {/* Liste des Animations */}
        {animationsData.map((anim, index) => (
          <section 
            key={anim.id} 
            className="section-container presentation-section"
            style={anim.bgColor ? { backgroundColor: anim.bgColor } : {}}
          >
            <motion.div 
              className="text-content"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="main-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {anim.title}
              </h2>
              <p className="intro-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                {anim.description}
              </p>
            </motion.div>

            <motion.div 
              className="lottie-wrapper"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LottiePlayer url={anim.url} />
            </motion.div>
          </section>
        ))}
      </main>
    </>
  );
}
