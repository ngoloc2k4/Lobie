// showing navbar on mobile version when click on menu icon
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".sidebar");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});

// close when click on link
mobileLink.addEventListener("click", function () {
  mobile.classList.remove("is-active");
  if (window.innerWidth < 768 && menubar) {
    mobile.classList.remove("is-active");
    mobileLink.classList.remove("active");
  }
});

// move the menu to left and right when click on arrow(back and next)
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function (e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "-=" + step + "px",
  });
});
$(".next").bind("click", function (e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "+=" + step + "px",
  });
});

// when click back and next on menu filters
$(".back-filter").bind("click", function (e) {
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "-=" + stepFilter + "px",
  });
});
$(".next-filter").bind("click", function (e) {
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "+=" + stepFilter + "px",
  });
});
