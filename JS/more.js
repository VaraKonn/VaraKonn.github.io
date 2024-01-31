
let sideMen = document.getElementById('sidemenu');
let close = document.getElementById('close').addEventListener("click", closemenu);
let open = document.getElementById('open').addEventListener("click", openmenu);


let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let minusone = document.getElementById('prev').addEventListener("click", function () {
    plusSlides(-1)
});
let plusone = document.getElementById('next').addEventListener("click", function(){
    plusSlides(1)
});
let dot =document.getElementById('prikk').addEventListener("click", function(){
    currentSlide(1)
    currentSlide(2)
    currentSlide(3)
});





function openmenu() {
    sideMen.style.right = "0";
}

function closemenu() {
    sideMen.style.right = "-200px";
}





let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}