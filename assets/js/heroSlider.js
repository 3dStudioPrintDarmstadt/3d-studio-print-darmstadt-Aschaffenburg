// ================= HERO VIDEO SLIDER =================

// Liste aller Hero-Videos
const heroVideos = [
    "assets/video/hero/hero.mp4",
    "assets/video/hero/hero1.mp4",
    "assets/video/hero/hero2.mp4"
];

let heroIndex = 0;
const heroVideo = document.getElementById("heroVid"); // ID wie im HTML

// Funktion zum Abspielen des aktuellen Videos
function playCurrentVideo() {
    if(!heroVideo) return;
    heroVideo.src = heroVideos[heroIndex];
    heroVideo.play().catch(() => {
        console.warn("Video konnte nicht abgespielt werden:", heroVideos[heroIndex]);
    });
}

// Automatisch zum nächsten Video wechseln, wenn Ende erreicht
heroVideo.addEventListener("ended", () => {
    heroIndex = (heroIndex + 1) % heroVideos.length;
    playCurrentVideo();
});

// Buttonsteuerung (falls vorhanden)
const nextBtn = document.getElementById("heroNext");
const prevBtn = document.getElementById("heroPrev");

if(nextBtn) {
    nextBtn.onclick = () => {
        heroIndex = (heroIndex + 1) % heroVideos.length;
        playCurrentVideo();
    };
}
if(prevBtn) {
    prevBtn.onclick = () => {
        heroIndex = (heroIndex - 1 + heroVideos.length) % heroVideos.length;
        playCurrentVideo();
    };
}

// Starte das erste Video
playCurrentVideo();
