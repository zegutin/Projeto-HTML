let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let closeBtnNavbar = document.querySelector('#close-btn i');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}

closeBtnNavbar.onclick = () => {
    navbar.classList.remove('active');
}

// Account Form
let accountBtn = document.querySelector('#account-btn');
let accountForm = document.querySelector('.account-form')
let loginBtn = document.querySelector(".account-form .buttons .login-btn");
let registerBtn = document.querySelector(".account-form .buttons .register-btn");
let registerForm = document.querySelector(".account-form .register-form");
let loginForm = document.querySelector(".account-form .login-form");
let closeAccoutForm = document.querySelector('.account-form #close-account-form');

accountBtn.onclick = () => {
    accountForm.classList.add('active');
}
closeAccoutForm.onclick = () => {
    accountForm.classList.remove('active');
}
registerBtn.onclick = () => {
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}
loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
}
const handlerLoginHere = () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}

// Load-More
const handlerLoadMore = () => {
    document.querySelectorAll(".courses .box-container .hide").forEach(show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
};

// FAQ Accordion 
let accordionArray = document.querySelectorAll('.faq .accordion-container .accordion');

accordionArray.forEach(item => {
  item.onclick = () => {
    accordionArray.forEach(accorItem => {
      accorItem.classList.remove('active');
    });
    item.classList.toggle('active');
  };
})

// Loading Page
let loadingPage = document.querySelector('#loading-page');

function loading() {
  loadingPage.classList.add('active');
}
function FadeOut() {
  setInterval(loading, 3000);
}

window.onload = FadeOut();


// SwiperJS
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".courses-slider", {
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
});

var swiper = new Swiper(".teachers .teachers-slider", {
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
          },
        1200: {
          slidesPerView: 4,
        },
      },
});

var swiper = new Swiper(".review .review-slider", {
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
          },
        1200: {
          slidesPerView: 4,
        },
      },
});

var swiper = new Swiper(".logo-container .logo-slider", {
  loop: true,
  grabCursor:true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  spaceBetween: 20,
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
        },
      1200: {
        slidesPerView: 5,
      },
    },
});