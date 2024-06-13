////////////////////////////////////////////////////////////
/// My First JS code ever... REUSABLE  ////
////////////////////////////////////////////////////////////
console.log("Hello World!");
const myName = "Eric Kamau";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);
////////////////////////////////////////////////////////////
/// Updating Current year in copyright section ///
////////////////////////////////////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////////
/// Make Mobile Navigation Work /////
////////////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////
/////////// Fixing Smooth Scrolling Animation//////////////
// Add this to head in html to fix scrolling in safari as a script
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
////////////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:Link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    /// Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    /// Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////////////////////
/// Make Stick Navigation Work /////
////////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////

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
