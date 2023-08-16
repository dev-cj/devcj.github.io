// Sending request to Your Day to start server

// ;(() => {
//   fetch('http://bit.ly/fullstackYourDay/')
//   setTimeout(() => {
//     console.clear()
//   }, 1000)
// })()

// uniping screenshot carousel
let unipingCloseBtn = document.querySelector('.close-carousel-button')
let unipingViewImage = document.querySelector('.uniping-view')
let unipingCarouselWrapper = document.querySelector('.flickity-carousel')
let unipingState = 0

function toggleCarousel() {
  if (unipingState == 0) {
    // close
    unipingCarouselWrapper.style.opacity = '100'
    unipingCarouselWrapper.style.zIndex = '99999'
    unipingState = 1
  } else {
    unipingCarouselWrapper.style.opacity = '0'
    unipingCarouselWrapper.style.zIndex = '-1'
    unipingState = 0
  }
}

unipingViewImage.addEventListener('click', toggleCarousel)
unipingCloseBtn.addEventListener('click', toggleCarousel)
