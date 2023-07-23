let currentMusic = 0;

const music = document.querySelector('#audio');
const musicName = document.querySelector('.music');
const artistName = document.querySelector('.artist');
const disk = document.querySelector('.disk');
const playBtn = document.querySelector('.playbtn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

const setMusic = (i) => {
    let song = songs[i];
    music.src = song.path;
    musicName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
}

setMusic(0);

forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})