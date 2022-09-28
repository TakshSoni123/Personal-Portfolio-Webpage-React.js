
/* Your JS here. */
window.onscroll = function () { scrollFunction(), navbarPos() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").innerHTML = "Taksh Soni";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "60px 10px";
    document.getElementById("logo").innerHTML = "My Website";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function navbarPos() {
  const about = document.getElementById("about");
  let aboutPos = about.getBoundingClientRect();

  const proj = document.getElementById("projects");
  let projPos = proj.getBoundingClientRect();

  const exp = document.getElementById("exp");
  let expPos = exp.getBoundingClientRect();

  const skl = document.getElementById("resume");
  let sklPos = skl.getBoundingClientRect();

  const nav = document.getElementById("navbar");
  let navPos = nav.getBoundingClientRect();

  let activeElem = "about";

  if (aboutPos.top <= navPos.bottom + 50) {
    activeElem = "ab";
  }
  if (expPos.top <= navPos.bottom + 50) {
    activeElem = "ex";
  }
  if (sklPos.top <= navPos.bottom + 50) {
    activeElem = "sk";
  }
  if (projPos.top <= navPos.bottom + 50) {
    activeElem = "proj";
  }
  


  var current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace(" active", "");
  document.getElementsByClassName(activeElem)[0].className += " active";
}


// Carousel sliding js
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("slide changes to " + n);
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Carousel sliding js end


//modal js

function openModal(n) {
  var modal = document.getElementsByClassName("modal");
  if(n==0){
    

    modal[0].innerHTML = "<div class=\"modal-content\"\><span class=\"close\" onClick=\"closeModal()\"\>×</span\><p><b>Skin Type Detector and Product Recommender - Published Research paper at 2021 12th International Conference on Computing Communication and Network Technologies (ICCCNT)</b></p><p>- With Python as the base language, Detected human face from an image using MTCNN accurately, and eliminating the background noise by 90%, as part of the Face Detection module</p><p>- Enabled skin type detection of the face based on the noise-less facial image using a self-made CNN (Convolutional Neural Networks) model trained over a self-prepared training dataset, resulting in model accuracy of about 85%. Based on the skin type detected, skincare products were recommended\<\/p\><\/div>";
    console.log(modal[0].innerHTML);
    modal[0].style.display = "block";
  }

  if(n==1) {
    modal[0].innerHTML = "<div class=\"modal-content\"\><span class=\"close\" onClick=\"closeModal()\"\>×</span\><p><b>Book Review System</b></p><p>- Created a web application where users can post book titles and cover page images they want to read and other users can add reviews for the same book resulting in a social media website for book enthusiasts.</p><p>- Leveraged MongoDB cloud as real-time database for the webapp using NodeJS + Express to build RESTFul APIs, ensuing a seamless and efficient back-end system.</p><p>- Created a user friendly website using React and incorporated the APIs built before, to result in a full-fledged and working book review webapp</p>\<\/p\><\/div>";
    console.log(modal[0].innerHTML);
    modal[0].style.display = "block";
  }

  if(n==2) {
    modal[0].innerHTML = "<div class=\"modal-content\"\><span class=\"close\" onClick=\"closeModal()\"\>×</span\><p><b>Cyber Bully Detection System</b></p><p>- Constructed a project to detect cyberbullying if present on Twitter using Django framework (Python) for website GUI, resulting in a complete system for data extraction, processing, and classification.</p><p>- Accomplished real-time data discovery and classification, displaying the usage of the project in the real world, by using Twitter API to fetch data based on the specified keywords. </p><p>- Classified tweets into bully/not bully accurately, with an accuracy of about 95%, using LSTM Artificial Neural Network.\<\/p\><\/div>";
    console.log(modal[0].innerHTML);
    modal[0].style.display = "block";
  }
}

function closeModal() {
  console.log("skdfjak");
  var modal = document.getElementsByClassName("modal");
  console.log("modal" + modal);
  modal[0].style.display = "none";
}

// When the user clicks on <span> (x), close the modal
// var span = document.getElementsByClassName("close");
// // console.log(span);
// span.onclick = function() {
//   console.log(span);
//   modal[0].style.display = "none";
// }
// console.log(span);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementsByClassName("modal");
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}
//modal js end