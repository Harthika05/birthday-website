/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(pageNumber) {

  // Hide every page
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active-page");
  });

  // Show selected page
  const next = document.getElementById("page" + pageNumber);

  if (next) {
    next.classList.add("active-page");
  }

  // Start some celebration
  createConfetti();
}


/* =========================
   BLOW CANDLE
========================= */

function blowCandle() {

  const flame = document.getElementById("flame");

  const blowArea = document.getElementById("blowArea");

  const cutArea = document.getElementById("cutArea");

  // Turn off flame
  flame.style.display = "none";

  // Hide blow message
  blowArea.classList.add("hidden");

  // Show cut message
  cutArea.classList.remove("hidden");

  // Small celebration
  createConfetti();
}


/* =========================
   CUT CAKE
========================= */

function cutCake() {

  createConfetti();

  // Move to next page after small delay
  setTimeout(function() {

    nextPage(5);

  }, 700);
}


/* =========================
   SAVE LETTER
========================= */

function saveLetter() {

  const letter = document.getElementById("letter");

  const savedMessage =
    document.getElementById("savedMessage");

  const nextButton =
    document.getElementById("letterNextBtn");

  if (letter.value.trim() === "") {

    savedMessage.textContent =
      "💗 Please write something first!";

    return;
  }

  savedMessage.textContent =
    "💌 Your beautiful message is ready! 💗";

  nextButton.classList.remove("hidden");

  createConfetti();
}


/* =========================
   PHOTO UPLOAD
========================= */

const photoUpload =
  document.getElementById("photoUpload");

const photoGallery =
  document.getElementById("photoGallery");


photoUpload.addEventListener("change", function(event) {

  const files = event.target.files;

  photoGallery.innerHTML = "";

  for (let i = 0; i < files.length; i++) {

    const file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

      const img = document.createElement("img");

      img.src = e.target.result;

      img.addEventListener("click", function() {
        openLightbox(e.target.result);
      });

      photoGallery.appendChild(img);

    };

    reader.readAsDataURL(file);
  }

});


/* =========================
   LIGHTBOX
========================= */

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const closeLightbox =
  document.getElementById("closeLightbox");


function openLightbox(imageSource) {

  lightboxImage.src = imageSource;

  lightbox.classList.add("show");
}


closeLightbox.addEventListener("click", function() {

  lightbox.classList.remove("show");

});


lightbox.addEventListener("click", function(event) {

  if (event.target === lightbox) {

    lightbox.classList.remove("show");

  }

});


/* =========================
   SONG UPLOAD
========================= */

const songUpload =
  document.getElementById("songUpload");

const songName =
  document.getElementById("songName");

const audioPlayer =
  document.getElementById("audioPlayer");


songUpload.addEventListener("change", function(event) {

  const file = event.target.files[0];

  if (!file) {
    return;
  }

  songName.textContent =
    "🎵 " + file.name;

  const audioURL =
    URL.createObjectURL(file);

  audioPlayer.src = audioURL;

});


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

  const hearts =
    document.querySelector(".hearts");

  const heart =
    document.createElement("div");

  heart.className = "heart";

  const heartTypes = [
    "💗",
    "💕",
    "💖",
    "💓",
    "💞"
  ];

  heart.textContent =
    heartTypes[
      Math.floor(
        Math.random() * heartTypes.length
      )
    ];

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    (15 + Math.random() * 20) + "px";

  heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";

  hearts.appendChild(heart);

  setTimeout(function() {

    heart.remove();

  }, 8000);

}


setInterval(createFloatingHeart, 800);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

  const symbols = [
    "🎉",
    "✨",
    "💗",
    "🎈",
    "💕",
    "⭐"
  ];

  for (let i = 0; i < 20; i++) {

    const confetti =
      document.createElement("div");

    confetti.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    confetti.style.position = "fixed";

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.top = "-30px";

    confetti.style.fontSize =
      (18 + Math.random() * 18) + "px";

    confetti.style.zIndex = "999";

    confetti.style.pointerEvents = "none";

    confetti.style.transition =
      "transform 2s linear, opacity 2s";

    document.body.appendChild(confetti);

    setTimeout(function() {

      confetti.style.transform =
        "translateY(110vh) rotate(720deg)";

      confetti.style.opacity = "0";

    }, 50);

    setTimeout(function() {

      confetti.remove();

    }, 2200);

  }

}