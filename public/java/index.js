let bar = $("#bar");
let nav = $("#navbar");
let close = $("#close");

// navbar responsive design
if (bar) {
  bar.on("click", function () {
    nav.addClass("active");
    // nav.addClass("bag");
  });
}
if (close) {
  close.on("click", function () {
    nav.removeClass("active");
  });
}

var mainImage = document.getElementById("mainimage");
var smallImages = document.getElementsByClassName("changeImg");
for (let i = 0; i <= 3; i++) {
  smallImages[i].onclick = function () {
    mainImage.src = smallImages[i].src;
  };
}