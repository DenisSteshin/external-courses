const image = document.querySelector('.image');
const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');

const arrayImage = [
  '../ex11_js_dom/assets/1.jpg',
  '../ex11_js_dom/assets/2.jpg',
  '../ex11_js_dom/assets/3.jpg',
  '../ex11_js_dom/assets/4.jpg',
  '../ex11_js_dom/assets/5.jpg',
];
let el = 0;

const imageStyled = () => {
  image.style.background = `url("${arrayImage[el]}")`;
  image.style.backgroundPosition = 'center center';
  image.style.backgroundRepeat = 'no-repeat';
  image.style.backgroundSize = 'cover';
  image.style.transition = '0.5s';
};

const nextImage = () => {
  if (el === arrayImage.length - 1) {
    el = 0;
    imageStyled();
  } else {
    el += el < arrayImage.length - 1;
    imageStyled();
  }
};

const previousImage = () => {
  if (el === 0) {
    el = arrayImage.length - 1;
    imageStyled();
  } else {
    el -= el > 0;
    imageStyled();
  }
};

nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);
