
/*** This Function Hover/Unhover Food List Cards */

const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('mouseover', () => {
    card.classList.remove('unhovered');
    card.classList.toggle('hovered');
  })

  card.addEventListener('mouseout', () => {
    card.classList.remove('hovered');
    card.classList.toggle('unhovered');

  })
}


/************* For Racha-Lechkhum-Kvemo Svaneti Slides *************/

var currentIndex = 1;

function setSlidesRacha(num) {
  displaySlidesRacha(currentIndex += num);
}

function displaySlidesRacha(num) {
  var slides = document.querySelectorAll('.slideshow-container.racha .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Racha-Lechkhum-Kvemo Svaneti Slides *************/


/************* For Imereti Slides *************/

function setSlidesImereti(num) {
  displaySlidesImereti(currentIndex += num);
}

function displaySlidesImereti(num) {
  var slides = document.querySelectorAll('.slideshow-container.imereti .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Imereti Slides *************/

/************* For Samegrelo Slides *************/

function setSlidesSamegrelo(num) {
  displaySlidesSamegrelo(currentIndex += num);
}

function displaySlidesSamegrelo(num) {
  var slides = document.querySelectorAll('.slideshow-container.samegrelo .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Samegrelo Slides *************/

/************* For Zemo Svaneti Slides *************/

function setSlidesKaxeti(num) {
  displaySlidesKaxeti(currentIndex += num);
}

function displaySlidesKaxeti(num) {
  var slides = document.querySelectorAll('.slideshow-container.kaxeti .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Zemo Svaneti Slides *************/

/************* For Achara Slides *************/

function setSlidesAchara(num) {
  displaySlidesAchara(currentIndex += num);
}

function displaySlidesAchara(num) {
  var slides = document.querySelectorAll('.slideshow-container.achara .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Achara Slides *************/

/************* For Samtskhe Javakheti Slides *************/

function setSlidesSamcxeJavaxeti(num) {
  displaySlidesSamcxeJavaxeti(currentIndex += num);
}

function displaySlidesSamcxeJavaxeti(num) {
  var slides = document.querySelectorAll('.slideshow-container.samcxe-javaxeti .mySlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Samtskhe Javakheti Slides *************/





