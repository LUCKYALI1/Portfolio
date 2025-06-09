// Fade out black screen on initial load
useEffect(() => {
  const overlay = document.querySelector('.page-transition');
  gsap.to(overlay, {
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: 'power2.out',
    onComplete: () => {
      overlay.classList.add('pointer-events-none');
    },
  });
}, []);

const handleNavClick = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  const overlay = document.querySelector('.page-transition');
  overlay.classList.remove('pointer-events-none');

  const tl = gsap.timeline();

  tl.to(overlay, {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    onStart: () => setIsOpen(false),
    onComplete: () => section.scrollIntoView({ behavior: 'smooth' }),
  });

  tl.to(overlay, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out',
    onComplete: () => overlay.classList.add('pointer-events-none'),
  });
};
