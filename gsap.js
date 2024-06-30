

gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top top",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".search, .navbar i", {
  y: 300,
  stagger: 0.4,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top top",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".navbar a", {
  y: 300,
  opacity: 0,
  stagger: 0.4,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top top",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".hero i, .heroanchor", {
  y: -300,
  x: -300,
  opacity: 0,
  stagger: 0.4,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".nand", {
  y: -500,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".nand",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".nand-msg", {
  y: 500,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nand-msg",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".nandsection", {
  x: 500,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nandsection",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".item1, .item2, .item3, .item4", {
  y: 500,
  x: 500,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".nandsection",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".myclass", {
  y: 500,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".myclass",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".myclass p", {
  x: 500,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".myclass p",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".myclass-img1", {
  y: 500,
  x: 500,
  opacity: 0,
  stagger: 0.4,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".myclass",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".foot-panel1, .foot-panel2, .foot-panel3, .foot-panel4, .foot-panel5", {
  y: 200,
  opacity: 0,
  stagger: 0.2,
  duration: 0.4,
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
});

gsap.from(".foot-panel2 ul, .foot-panel5 ul", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.3,
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none"
  }
})
