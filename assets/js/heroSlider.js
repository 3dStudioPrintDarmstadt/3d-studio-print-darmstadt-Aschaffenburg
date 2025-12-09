const heroVideos = [
    "assets/video/hero/hero.mp4",
    "assets/video/hero/hero1.mp4",
    "assets/video/hero/hero2.mp4"
];

let heroIndex = 0;
const heroVideo = document.querySelector(".hero-video");

function playCurrentVideo() {
    if (!heroVideo) return;
    heroVideo.src = heroVideos[heroIndex];
    heroVideo.load();
    heroVideo.play().catch(err => console.warn("Video konnte nicht abgespielt werden:", err));
}

heroVideo?.addEventListener("ended", () => {
    heroIndex = (heroIndex + 1) % heroVideos.length;
    playCurrentVideo();
});

// Buttons per data-attribute
document.querySelectorAll(".hero-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const dir = btn.getAttribute("data-direction");
        if (dir === "next") heroIndex = (heroIndex + 1) % heroVideos.length;
        if (dir === "prev") heroIndex = (heroIndex - 1 + heroVideos.length) % heroVideos.length;
        playCurrentVideo();
    });
});

// Erstes Video starten
playCurrentVideo();
