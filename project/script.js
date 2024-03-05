/*banner*/
const sliderImages = document.querySelectorAll('.slider img');
const sliderNavButtons = document.querySelectorAll('.slider-nav button');

let activeIndex = 0;

function setActiveImage() {
  sliderImages.forEach(image => {
    image.classList.remove('active');
  });
  sliderImages[activeIndex].classList.add('active');
}

function setActiveButton() {
  sliderNavButtons.forEach(button => {
    button.classList.remove('active');
  });
  sliderNavButtons[activeIndex].classList.add('active');
}

function nextImage() {
  activeIndex++;
  if (activeIndex >= sliderImages.length) {
    activeIndex = 0;
  }
  setActiveImage();
  setActiveButton();
}

setInterval(nextImage, 3000);

sliderNavButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activeIndex = index;
    setActiveImage();
    setActiveButton();
  });
});
/*section 3*/

const slider = document.querySelector('.product-slider');
const slideWidth = slider.getBoundingClientRect().width;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  slider.scroll({
    left: currentSlide * slideWidth,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  currentSlide = Math.min(currentSlide + 1, slider.children.length - 1);
  slider.scroll({
    left: currentSlide * slideWidth,
    behavior: 'smooth'
  });
});

slider.addEventListener('touchstart', (e) => {
  const startX = e.touches[0].pageX;
  let deltaX = 0;

  const moveHandler = (e) => {
    deltaX = startX - e.touches[0].pageX;
    e.preventDefault();
  };

  const endHandler = () => {
    if (deltaX > 50 && currentSlide < slider.children.length - 1) {
      currentSlide++;
    } else if (deltaX < -50 && currentSlide > 0) {
      currentSlide--;
    }

    slider.scroll({
      left: currentSlide * slideWidth,
      behavior: 'smooth'
    });

    slider.removeEventListener('touchmove', moveHandler);
    slider.removeEventListener('touchend', endHandler);
  };

  slider.addEventListener('touchmove', moveHandler);
  slider.addEventListener('touchend', endHandler);
});
/*section 4*/
// Set up a variable to store the products
const products = [
  {
    name: "Product 1",
    description: "Description of product 1.",
    price: "$99.99",
    image: "product-1.jpg"
  },
  {
    name: "Product 2",
    description: "Description of product 2.",
    price: "$49.99",
    image: "product-2.jpg"
  },
  {
    name: "Product 3",
    description: "Description of product 3.",
    price: "$79.99",
    image: "product-3.jpg"
  }
];

