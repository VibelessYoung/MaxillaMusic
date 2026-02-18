const tracks = document.querySelectorAll(".track");
let currentAudio = null;

tracks.forEach((track) => {
  const btn = track.querySelector(".play-btn");
  const audio = new Audio(track.dataset.src);

  btn.addEventListener("click", () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    if (audio.paused) {
      audio.play();
      btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      currentAudio = audio;
    } else {
      audio.pause();
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach((el) => observer.observe(el));
