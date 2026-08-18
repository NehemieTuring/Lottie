'use client';
import LottiePlayer from '@/components/LottiePlayer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
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

      {/* Animation 1 */}
      <section className="section-container presentation-section">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="main-text">
            Vos lotties sont bien faits avec
            <span className="cursive-name">Nehemie Turing</span>
          </h2>
        </motion.div>

        <motion.div 
          className="lottie-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LottiePlayer url="/animations/anim1.json" />
        </motion.div>
      </section>

      {/* Animation 2 */}
      <section className="section-container presentation-section">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="main-text">
            Vos lotties sont bien faits avec
            <span className="cursive-name" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nehemie Turing</span>
          </h2>
        </motion.div>

        <motion.div 
          className="lottie-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LottiePlayer url="/animations/anim2.json" />
        </motion.div>
      </section>

      {/* Animation 3 */}
      <section className="section-container presentation-section" style={{ backgroundColor: '#fcfbfc' }}>
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="main-text">
            Vos lotties sont bien faits avec
            <span className="cursive-name" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nehemie Turing</span>
          </h2>
        </motion.div>

        <motion.div 
          className="lottie-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LottiePlayer url="/animations/anim3.json" />
        </motion.div>
      </section>
    </main>
  );
}
