tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 80 },
    color: { value: "cyan" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 100 }
    }
  }
});
