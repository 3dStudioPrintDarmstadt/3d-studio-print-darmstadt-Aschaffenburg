const heroVideos = [
    "assets/video/hero/hero.mp4",
    "assets/video/hero/hero1.mp4",
    "assets/video/hero/hero2.mp4"
];

let heroIndex = 0;
const heroVideo = document.getElementById("heroVideo");

document.getElementById("heroNext").onclick = () => {
    heroIndex = (heroIndex + 1) % heroVideos.length;
    heroVideo.src = heroVideos[heroIndex];
    heroVideo.play();
};

document.getElementById("heroPrev").onclick = () => {
    heroIndex = (heroIndex - 1 + heroVideos.length) % heroVideos.length;
    heroVideo.src = heroVideos[heroIndex];
    heroVideo.play();
};
