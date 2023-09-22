window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#00bcd4";
  } else {
      navbar.style.backgroundColor = "rgb(31 31 31)";
     
  }
});
