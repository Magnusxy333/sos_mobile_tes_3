const primaryHeader = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const nacObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
}, {rootMargin: "150px 0px 0px 0px"});

nacObserver.observe(scrollWatcher)

//////////////////////////////////////////
/* CÓDIGO DA TATA*/

/*

// CARROSEL SLIDES BANNER
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/
//////////////////////////////////////////////

function login(){
  var A = document.getElementById("input").value
  var B = document.getElementById("input2").value
 
 if (B === "12345", A === "felipe"){
  alert("logado!")
    } else if ( B === "123456", A === "fernando" ) {
      alert("logado!");
    } else
    {
  alert("Senha errada!")
  }
 
}

