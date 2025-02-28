document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('play').addEventListener('click', function() {
      var audioElement = document.getElementById('audioElement');
      audioElement.style.display = 'block';
      audioElement.play();
  });

  setTimeout(function() {
      alert("You have reached Saline RoboHive's public website! Click on different pages to learn more.");
  }, 5000);
});
