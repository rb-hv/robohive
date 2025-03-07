document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('play').addEventListener('click', function() {
      var audioElement = document.getElementById('audioElement');
      audioElement.style.display = 'block';
      audioElement.play();
  });
});
