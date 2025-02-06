// console.log("hello world!");
// const myname = "Anash Mirza";


////////////////////////////////////
//To set current year in the footer
////////////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;



////////////////////////////////////
//To make mobile navigation work
////////////////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle("nav-open");
});


////////////////////////////////////
//Smooth scrolling animation
////////////////////////////////////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute("href");

    // Only prevent default for internal links
    if (href.startsWith('#')) {
      e.preventDefault();

      //SCROLL BACK TO TOP
      if (href == "#") window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      //SCROLL TO OTHER LINKS
      if (href !== "#" && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      //close mobile navigation
      if (link.classList.contains('main-nav-link')) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});




//////////////////////////////////
//Sticky Navigation
//////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");



const obs = new IntersectionObserver(function (entries) {

  const ent = entries[0];
  console.log(ent);
  if (ent.isIntersecting == false) {
    document.body.classList.add("sticky");
  }
  //to make it disappear again on hero section
  if (ent.isIntersecting == true) {
    document.body.classList.remove("sticky");
  }
},



  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  });

obs.observe(sectionHeroEl);






///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions


function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

