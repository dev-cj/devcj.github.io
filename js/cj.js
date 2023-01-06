// Sending request to Your Day to start server

// ;(() => {
//   fetch('http://bit.ly/fullstackYourDay/')
//   setTimeout(() => {
//     console.clear()
//   }, 1000)
// })()

let closeBtn = document.querySelector('.close-carousel-button')
let viewImage = document.querySelector('.uniping-view')
let carouselWrapper = document.querySelector('.flickity-carousel')
let fstate = 0

function toggleCarousel() {
  if (fstate == 0) {
    // close
    carouselWrapper.style.opacity = '100'
    carouselWrapper.style.zIndex = '99999'
    fstate = 1
  } else {
    carouselWrapper.style.opacity = '0'
    carouselWrapper.style.zIndex = '-1'
    fstate = 0
  }
}

viewImage.addEventListener('click', toggleCarousel)
closeBtn.addEventListener('click', toggleCarousel)
