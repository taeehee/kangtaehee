$(function () {

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // 편지 애니메이션 (타임라인1)
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter_section_open",
      start: "top 200px", /* 헤더높이부터 편지위치 고정 */
      /* end: "bottom 0%", 초기값*/
      end: () => `+=${window.innerHeight * 4}px`,
      /* 뷰포트 높이의 4배만큼 스크롤했을 때 */
      scrub: true,
      pin: true,
      markers: true
    }
  });
  tl.fromTo(".envelope-closed", { opacity: 1 }, { opacity: 0, duration: 0.5 })
    .fromTo(".envelope-body", { opacity: 1 }, { zIndex: 4 })
    .fromTo(".envelope-flap", { rotationX: 0, transformOrigin: "top center", zIndex: 4 }, { rotationX: -180, duration: 1, ease: "power2.inOut", zIndex: 0 }, 0.2)/* 0.2초 후 시작 */
    .fromTo(".letter", { transformOrigin: "top end", opacity: 1, zIndex: -1 }, { y: -210, opacity: 1, duration: 2, /* ease: "power2.inOut",  */zIndex: 3 });
  // 편지 애니메이션end (타임라인1)



  // text 애니메이션
  gsap.registerPlugin(ScrollTrigger);
  let revealAnimations = [];

  // Scroll
  const lenis = new Lenis({
    lerp: 0.07
  });

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  // reveal
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
        end: () => `+=${window.innerHeight * 4}px`,
        /* 초기값: 뷰포트 높이의 4배만큼 스크롤했을 때 */
        scrub: true,
        pin: true,
        markers: true
      }
    })
  })
  //reveal text효과 end


  // 새 애니메이션 (타임라인2)
 /*  gsap.registerPlugin(MotionPathPlugin);

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
  }); */
  // 새 애니메이션end (타임라인2)


  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // 마지막 편지 애니메이션 (타임라인2)
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter_section_close", /* h:100vh */
      start: "top top", /* 스크롤 고정 */
      /* end: "bottom 0%", 초기값*/
      end: () => `+=${window.innerHeight * 2}px`,
      /* 뷰포트 높이의 2배만큼 스크롤했을 때 */
      scrub: true,
      pin: true,
      markers: true
    }
  });

  tl2
    .fromTo(".body", { opacity: 1 }, { zIndex: 3 })
    .fromTo(".flap", { rotationX: -180, duration: 2, ease: "power2.inOut", zIndex: 0 }, { rotationX: 0, transformOrigin: "top center", zIndex: 4 })
    .fromTo(".closed", { opacity: 0 }, { opacity: 1, /* zIndex: 4 */ }, "1") /* 1초 후 시작 */
    .fromTo(".letter02", { y: -210, opacity: 1, duration: 0.3, /* ease: "power2.inOut",  */ }, { y: 19, opacity: 1, zIndex: 2 },0.2); 

  // 마지막 편지 애니메이션end (타임라인2)
  //깃업로드용 메시지 입력



});