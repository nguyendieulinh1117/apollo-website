const bannerImage = document.querySelector('.banner-scroll');
const video = bannerImage.querySelector('video');

const controller= new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 17200,
  triggerElement: bannerImage,
  triggerHook: 0
})
.setPin(bannerImage)
.addTo(controller)

let accelamount= 0.1
let scrollpos= 0;
let delay=0;

scene.on('update', e=>{
  scrollpos= e.scrollPos / 1000;
  let frame = Math.round(scrollpos * 100);
  if(frame>1744){
    bannerImage.querySelector('img').src=`../images/banner-scrolling-image/frame-11744.webp`;
    return
  }
  bannerImage.querySelector('img').src=`../images/banner-scrolling-image/frame-1${frame.toString().padStart(4, '0')}.webp`;
})

