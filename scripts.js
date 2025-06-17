tsParticles.load("tsparticles", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 2 },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 80 }
    }
  }
});