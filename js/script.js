// Fade-in effect
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Navbar hide on scroll down / show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    // scroll down → hide
    navbar.style.top = "-80px";
  } else {
    // scroll up → show
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
