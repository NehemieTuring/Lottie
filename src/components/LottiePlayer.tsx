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

  return <Lottie animationData={animationData} loop={true} />;
}
