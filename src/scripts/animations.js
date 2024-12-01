window.revelar = ScrollReveal({ reset: true });

/* EFEITOS COM DELAY DO HEADER */

/* efeito slide saindo pela esquerda */
revelar.reveal(".slide-left", {
  duration: 2000,
  distance: "100%",
  origin: "left",
});

/* efeito slide saindo pela esquerda */
revelar.reveal(".slide-right", {
  duration: 2000,
  distance: "100%",
  origin: "right",
});

/* efeito de estica */
revelar.reveal(".stretch", {
  duration: 2000,
  rotate: { x: 0, y: 80, z: 0 },
});

/* efeito slide saindo de baixo */
revelar.reveal(".slide-bottom", {
  duration: 1000,
  distance: "100%",
  delay: 100,
});

/* efeito slide saindo de cima */
revelar.reveal(".slide-top", {
  duration: 1000,
  distance: "50%",
  delay: 100,
  origin: "top",
});
