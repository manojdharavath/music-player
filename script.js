const moodSongs = {
  happy: "happy.mp3",
  sad: "sad.mp3",
  relax: "relax.mp3",
  energetic: "energetic.mp3"
};

function playMoodMusic() {
  const mood = document.getElementById("moodSelector").value;
  const audio = document.getElementById("audioPlayer");
  const nowPlaying = document.getElementById("nowPlaying");

  audio.src = moodSongs[mood];
  nowPlaying.textContent = "Now Playing: " + moodSongs[mood];
  document.getElementById("playerSection").style.display = "block";
  audio.play();
}
