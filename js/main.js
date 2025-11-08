$(function () {

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // 편지 애니메이션 (타임라인1)
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter_section",
      start: "top top",
      end: "bottom 0%",
      scrub: true,
      pin: true,
      markers: true
    }
  });

  tl.fromTo(".envelope-closed", { opacity: 1 }, { opacity: 0, duration: 0.5 })
    .fromTo(".envelope-flap", {  rotationX: 0, transformOrigin: "top center" }, {  rotationX: -180, duration: 2, ease: "power2.inOut", zIndex: 1 })
    .fromTo(".letter", { transformOrigin: "top 90%", opacity: 1}, { y: -210, opacity: 1, duration: 2, ease: "power2.out" });
  // 편지 애니메이션end (타임라인1)


  gsap.registerPlugin(ScrollTrigger);
let revealAnimations = [];

// Scroll
const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// Reveal
document.querySelectorAll('.reveal').forEach(text => {
  // Split text
  let splitText = new SplitType(text, {
    type: 'words'
  })

  // Animation
  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: ".container",
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
      // markers: true,
      pin: true,
    }
  })
})
//reveal text효과 end







  // 새 애니메이션 (타임라인2)
  gsap.registerPlugin(MotionPathPlugin);

gsap.to("#robin", {
  duration: 4,
  motionPath: {
    path: [
      { x: 900, y: 100 },
      { x: 700, y: 100 },
      { x: 500, y: 100 },
      { x: 300, y: 100 },
      { x: 100, y: 180 }
    ],
    curviness: 1.25
  },
  ease: "power1.inOut",
  repeat: -1,
  repeatDelay: 1.5
});
  // 새 애니메이션end (타임라인2)


  

  
  
});