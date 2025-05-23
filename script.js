document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('play').addEventListener('click', function() {
      var audioElement = document.getElementById('audioElement');
      audioElement.style.display = 'block';
      audioElement.play();
      alert("imagine getting rick rolled :( hahahahaha")
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('Donations');
  button.addEventListener('click', function() {
    window.location.href = 'https://www.vancoevents.com/us/donate/heritagerobotics'; 
  });
});
