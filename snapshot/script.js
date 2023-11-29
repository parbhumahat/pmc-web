
gsap.from('body', {
  opacity: 0,
  duration: 2,
  delay: 1,
  ease: Power3.EaseInOut
})
let tl = gsap.timeline()
tl.to('.circle i', {
  rotate: 360,
  repeat: -1,
  delay: 2.5,
  duration: 4,
  ease: CustomEase.create("custom", "M0,0 C0,0 0.115,0.503 0.398,0.786 0.468,0.856 0.671,0.961 0.744,0.972 0.883,0.992 1,1 1,1 ")// yoyo: true
})

const photos = document.querySelectorAll('.photos img');
let cloose = document.querySelector('.close');
let overlay = document.querySelector('.overlayzoom');
let main_photos = document.querySelector('.main_over_photos');
let dl = document.querySelector('.dl');
photos.forEach(function(imgs) {
  imgs.addEventListener('click', () => {
    overlay.style.opacity = `100%`;
    overlay.style.pointerEvents = `unset`;
    main_photos.innerHTML = '';
    main_photos.appendChild(imgs.cloneNode(true));
    console.log(imgs.src);
    dl.innerHTML = `<a id="download-link" href="${imgs.src}" download="SNAPSHOT.jpg">
    <i class="ri-download-line"></i></a>`;
  });
});


cloose.addEventListener('click', () => {
  console.log('clicking');
  overlay.style.opacity = `0%`
  overlay.style.pointerEvents = `none`
})

document.querySelector('#gola').addEventListener('click', () => {
  gsap.to('.social', {
    boxShadow: `0px 0px 10px #002834, 0px 0px 20px #CA6E23, 0 0 25px #CA6E23`,
    delay: 1,
    duration: 1,
  })
})

document.querySelectorAll('.social a').forEach((aas) => {
  aas.addEventListener('click', () => {
    gsap.to('.social', {
      boxShadow: `0px 0px 0px`,
      duration: 1
    })
  })
})
