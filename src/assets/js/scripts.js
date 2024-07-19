// src/assets/js/scripts.js

// Function to handle video playlist
function setupVideoPlaylist() {
    const videoLinks = document.querySelectorAll('.playlist ul li a');
    const mainVideo = document.querySelector('video');
  
    videoLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const videoSrc = this.getAttribute('data-video');
        if (mainVideo) {
          mainVideo.src = videoSrc;
          mainVideo.play();
        }
      });
    });
  }
  
  // Wait for the DOM to be fully loaded before executing script
  document.addEventListener('DOMContentLoaded', function() {
    setupVideoPlaylist();
  });
  