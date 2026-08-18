'use client';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottiePlayer({ url }: { url: string }) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Failed to load lottie", err));
  }, [url]);

  if (!animationData) {
    return (
      <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
        Chargement de l'animation...
      </div>
    );
  }

  // Check if it's a valid lottie file
  if (!animationData.layers && !animationData.v) {
    return (
      <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ef4444', backgroundColor: '#fee2e2', borderRadius: '1rem', padding: '1rem', textAlign: 'center' }}>
        <strong>Erreur</strong>
        <small style={{ color: '#991b1b', marginTop: '0.5rem' }}>Ce fichier JSON ne semble pas être une animation Lottie valide.</small>
      </div>
    );
  }

  return <Lottie animationData={animationData} loop={true} />;
}
