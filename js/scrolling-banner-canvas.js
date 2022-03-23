const html = document.documentElement;

const canvasParent= document.querySelector('.banner-scroll');
const canvas = document.getElementById("banner-scroll-canvas");
const context = canvas.getContext("2d");
const skipButton= document.querySelector('#skip-btn');
const feedbackSection = document.querySelector('.feedback-section');
var currentFrame;

skipButton.addEventListener('click', ()=> {
  feedbackSection.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'nearest'})
});

const frameCount = 164;

//Update 21/02/2022

let imageUrlDesktop;
let imgaeUrlMobile;

//check language
const language = localStorage.getItem('apollo-locale');

if(!language){
  imageUrlDesktop = '../images/banner-scrolling-image/';
  imgaeUrlMobile = '../images/banner-scrolling-image-mobile/';
}
else if(language === 'en'){
  imageUrlDesktop = '../images/banner-scrolling-image-eng/';
  imgaeUrlMobile = '../images/banner-scrolling-image-mobile-eng/';
}
else{
  imageUrlDesktop = '../images/banner-scrolling-image/';
  imgaeUrlMobile = '../images/banner-scrolling-image-mobile/';
}

if(document.body.clientWidth > 767){
  currentFrame = (index) =>
  `${imageUrlDesktop}Frame1${index
    .toString()
    .padStart(3, "0")}.webp`;
    canvas.width = 1920;
    canvas.height = 1920;
}
else{
  currentFrame = (index) =>
  `${imgaeUrlMobile}Frame1${index
    .toString()
    .padStart(3, "0")}.webp`;
    canvas.width = 1000;
    canvas.height = 1000;
}

// end update 21/02/2022

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  console.log('index :>> ', index);
  if(index <= 19){
    $('.icon-scroll').addClass('active');
  }
  else{
    $('.icon-scroll.active').removeClass('active');
  }

  if(index > (frameCount - 6) || index <= 19){
    skipButton.classList.remove('active');
  }
  else{
    skipButton.classList.add('active');
  }


  if(index >= frameCount){
    canvas.classList.remove('active');
    return
  }
  else{
    canvas.classList.add('active');
  }
  context.imageSmoothingEnabled = true;
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

const drawCanvas= () => {
  let scrollTop = html.scrollTop;
  let maxScrollTop = canvasParent.clientHeight;
  let scrollFraction = (scrollTop / maxScrollTop * 1.03);
  let frameIndex = Math.min(
    frameCount,
    Math.ceil(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex));
}
drawCanvas();

window.addEventListener("scroll", () => {
  drawCanvas();
});

preloadImages();
