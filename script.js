function startSurprise() {
  // Kalp yağmuru başlat
  const heartContainer = document.getElementById("heart-container");
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 200);

  // Yazıyı 4 saniye sonra göster
  setTimeout(() => {
    document.getElementById("love-text").classList.remove("hidden");
    clearInterval(interval); // Yağmur dursun istersen
  }, 4000);
}