window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    $('#navbar').addClass("bg-alv");
    $('#nav-item').removeClass("bg-dark");
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    $('#navbar').removeClass("bg-alv");
    $('#nav-item').addClass("bg-dark");

  }
}

ScrollReveal().reveal('#home', {
  duration: 1000,
  origin: 'top',
  distance: '20px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

