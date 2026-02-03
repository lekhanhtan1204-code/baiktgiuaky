const carousel = document.getElementById("carousel");

// Hover vào thì dừng
carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

// Rê chuột ra thì quay tiếp
carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});
const exitBtn = document.getElementById("exitBtn");

exitBtn.addEventListener("click", () => {
    window.location.href = "/index.html";
});
