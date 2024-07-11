var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.img');
  
    gsap.to(image, {
      scale: 1.05, 
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut"
    });
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.img-2');
  
    gsap.to(image, {
      scale: 1.05, 
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut"
    });
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.project');
  
    containers.forEach(container => {
      container.addEventListener('mouseenter', () => {
        gsap.to(container, { scale: 1.05, duration: 0.5 });
      });
  
      container.addEventListener('mouseleave', () => {
        gsap.to(container, { scale: 1, duration: 0.5 });
      });
    });
  });
  
// document.addEventListener('DOMContentLoaded', function() {
//     const image = document.querySelector('.img');
    
//     image.addEventListener('mouseenter', () => {
//       gsap.to(image, { scale: 1.1, duration: 0.5 });
//     });
  
//     image.addEventListener('mouseleave', () => {
//       gsap.to(image, { scale: 1, duration: 0.5 });
//     });
//   });
  