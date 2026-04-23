'use client';

import { useEffect, useRef } from 'react';

export default function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    const lift = () => {
      curtain.classList.add('curtain-lift');
    };

    if (document.readyState === 'complete') {
      requestAnimationFrame(lift);
    } else {
      window.addEventListener('load', lift);
      return () => window.removeEventListener('load', lift);
    }
  }, []);

  return (
    <div
      ref={curtainRef}
      id="curtain"
      aria-hidden="true"
    />
  );
}
