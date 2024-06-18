//*************** Audio *****************/
const audio = $("#myAudio")[0];
const playPauseButton = $("#playPauseButton");

playPauseButton.on("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.addClass("active");
  } else {
    audio.pause();
    playPauseButton.removeClass("active");
  }
});

$(audio).on("ended", function () {
  audio.play();
});

//*************** Parallax Effect *****************/
const parallax = $(".parallax");
const title = $("#title");

$(window).on("scroll", function () {
  let scroll = $(this).scrollTop();
  let newWidth = 300 + scroll * 0.3;
  if (newWidth > 600) {
    newWidth = 600;
  }
  title.css("--width", `${newWidth}px`);

  parallax.css("top", scroll * 0.18 + "px");
});


