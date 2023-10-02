const scroll = new LocomotiveScroll({
  el: document.getElementById("main"),
  smooth: true,
});

const main = document.getElementById("main");
let minicircle = document.querySelector(".minicircle");

const circleMouseFollow = (xscale, yscale) => {
  window.addEventListener("mousemove", (dets) => {
    minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    minicircle.style.transition = '.1s'
    // gsap.to(minicircle, {
    //   x: dets.clientX,
    //   y: dets.clientY,
    //   scale: xscale, yscale,
    //   duration: 1,
    // });
  });
}
circleMouseFollow()

window.addEventListener("mouseleave", (dets) => {
  gsap.to(minicircle, {
    x: 0,
    y: 0,
    duration: 0.5,
  });
});

// const animateTxt = document.querySelectorAll(".boundingelem");
// const animateHeadTxt = () => {
//   window.addEventListener("load", () => {
//     animateTxt.forEach((elem) => {
//       elem.style.transform = `translateY(0%)`;
//       elem.style.transition = "1.5s";
//     });
//   });
// };
// animateHeadTxt();

// const animateTxt2 = document.querySelectorAll(".bounding1elem");
// const animateHeadTxt2 = () => {
//     window.addEventListener("load", () => {
//         animateTxt2.forEach((elem) => {
//             elem.style.transform = `translateY(0%)`;
            
//         });
//         animateTxt2[0].style.transition = "3.5s";
//         animateTxt2[1].style.transition = "4s";
//         animateTxt2[2].style.transition = "4s";
//       });
// }
// animateHeadTxt2()

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .to(".bounding1elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}


let timeout;
function circleSkew(){

  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove', (event) => {

    clearTimeout(timeout)
    let xdiff = event.clientX - xprev ;
    let ydiff = event.clientY - yprev;

    xscale = gsap.utils.clamp(.8, 1.2, xdiff)
    yscale = gsap.utils.clamp(.8, 1.2, ydiff)

    xprev = event.clientX
    yprev = event.clientY
   
    circleMouseFollow(xscale, yscale)
    timeout = setTimeout(() => {
      minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1,1)`
    },100)
  }
  )
  
}

firstPageAnim()
circleSkew()





