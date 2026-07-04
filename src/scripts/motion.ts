// Motion como mejora progresiva: sin JS todo el contenido es visible y usable.
// Lenis para scroll suave + IntersectionObserver para reveals moderados.
// Este es un sitio de LECTURA: la animación sirve al contenido.
//
// Regla de robustez: el estado oculto solo lo aplica el propio JS (clase
// .reveal-pendiente) y un fallback fuerza visibilidad a los 3s — el contenido
// nunca puede quedar invisible, ni siquiera si el observer falla.
import Lenis from 'lenis';

const prefiereQuietud = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefiereQuietud) {
  const lenis = new Lenis({ lerp: 0.12 });

  function raf(tiempo: number) {
    lenis.raf(tiempo);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const reveals = document.querySelectorAll<HTMLElement>('.reveal');

  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('reveal-visible');
            observer.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    for (const el of reveals) {
      // Solo ocultar lo que está fuera del viewport inicial
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('reveal-pendiente');
        observer.observe(el);
      }
    }

    // Fallback: pase lo que pase, nada queda oculto
    setTimeout(() => {
      for (const el of reveals) el.classList.add('reveal-visible');
    }, 3000);
  }
}
