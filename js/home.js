/************* For Home Slides *************/

var currentIndex = 1;
displaySlides(currentIndex);

function plusSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
  var slides = document.querySelectorAll('.slideshow-container.home .mySlides');
  if (num > slides.length) {currentIndex = 1}
  if (num < 1) {currentIndex = slides.length}
  for( x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';
}

/************* For Home Slides *************/