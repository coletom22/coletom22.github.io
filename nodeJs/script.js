const links = document.querySelectorAll("nav a");

for (const link of links) {
  const pageName = window.location.pathname.split("/").pop();
  if (link.href.endsWith(pageName)) {
    link.classList.add("active");
    break;
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusDivs(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  console.log("showSlides function called with n =", n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
