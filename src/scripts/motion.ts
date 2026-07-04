// Motion como mejora progresiva: sin JS todo el contenido es visible y usable.
// Lenis para scroll suave + GSAP para reveals moderados. Este es un sitio de
// LECTURA: la animación sirve al contenido, no compite con él.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefiereQuietud = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefiereQuietud) {
  const lenis = new Lenis({ lerp: 0.12 });

  function raf(tiempo: number) {
    lenis.raf(tiempo);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);

  // Reveal suave de secciones marcadas con .reveal
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
}
