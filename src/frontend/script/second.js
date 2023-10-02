const elem = document.querySelectorAll(".elem");


// const secondCompo = () => {
  elem.forEach((item) => {
    

    let rotate = 0;
    let diffrot = 0;

    item.addEventListener("mouseleave", (dets) => {
        minicircle.style.width = '10px'
        minicircle.style.height = '10px'
        minicircle.innerHTML = ''
      gsap.to(item.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });

    item.addEventListener("mousemove", function (dets) {
      //   let one = item.querySelector("img");
      //   let mouseY = dets.clientX
      //   one.style.transform = `translateX(${mouseY}px)`;
      //   one.style.opacity = 1
        minicircle.style.width = '60px'
        minicircle.style.height = '60px'
        minicircle.innerHTML = 'View'

      diffrot = dets.clientX - rotate;
      rotate = dets.clientX

      let rotat = gsap.utils.clamp(-10, 10, diffrot)

      let diff = dets.clientY - item.getBoundingClientRect().top;
      gsap.to(item.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: rotat
      });
    });
  });
// };

// secondCompo();
