/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      number: { value: 50, density: { enable: true, value_area: 300

      } },
    color: { value: "#ff003b" },
    shape: {
      type: "circle",

      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 130, height: 130 }
    },
    opacity: {
      value: .6,
      random: false,
      anim: { enable: false, speed: 2, opacity_min: .1, sync: false }
    },
    size: {
      value: 1.5,
      random: false,
      anim: { enable: false, speed: 2, size_min: 2, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#999999",
      opacity: .3,
      width: 1
    },
    move: {
      enable: true,
      speed: .7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubbles" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 600, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 3, duration: 1, opacity: .9, color: "#ffffff", speed: 2 },
      repulse: { distance: 200, duration: .5},
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true,

  }

);
