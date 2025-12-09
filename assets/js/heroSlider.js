// ================= HERO VIDEO SLIDER =================
const heroVideos = [
    "assets/video/hero/hero.mp4",
    "assets/video/hero/hero1.mp4",
    "assets/video/hero/hero2.mp4"
];

let heroIndex = 0;
const heroVideo = document.getElementById("heroVid"); // <- hier ID korrigiert

// Funktion zum Abspielen des aktuellen Videos
function playCurrentVideo() {
    heroVideo.src = heroVideos[heroIndex];
    heroVideo.play().catch(() => {
        console.warn("Video konnte nicht abgespielt werden:", heroVideos[heroIndex]);
    });
}

// Video automatisch wechseln, wenn es zu Ende ist
heroVideo.addEventListener("ended", () => {
    heroIndex = (heroIndex + 1) % heroVideos.length;
    playCurrentVideo();
});

// Optional: Buttonsteuerung, falls vorhanden
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
