'use strict';

// -------------------------------
// Element Toggle Function
// -------------------------------

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// -------------------------------
// Sidebar Variables and Functionality
// -------------------------------

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// -------------------------------
// Page Navigation Variables and Functionality
// -------------------------------

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    pages.forEach((page, index) => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        navigationLinks.forEach((navLink) => navLink.classList.remove("active"));
        this.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });
  });
});

// -------------------------------
// Project Modal Variables and Functionality
// -------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const closeModalBtn = modal.querySelector('.close');
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const projectId = this.getAttribute('data-project');
      const modalTitle = modal.querySelector('.modal-title');
      const modalVideo = modal.querySelector('.modal-video');
      const modalDescription = modal.querySelector('.modal-description');
      const modalGithubLink = modal.querySelector('.modal-github-link');
      
      switch (projectId) {
        case 'project-1':
          modalTitle.textContent = 'COVID-19 CT Scan Classification';
          modalVideo.querySelector('source').setAttribute('src', 'assets/Videos/Covid.mp4');
          modalDescription.textContent = 'This project involves classifying COVID-19 CT scans using a CNN built on VGG16. The goal is to accurately distinguish between infected and non-infected cases based on the CT scan images.';
          modalGithubLink.setAttribute('href', 'https://github.com/Jesteban247/COVID-19-_CT_Scan_Classification');
          modalGithubLink.textContent = 'View on GitHub'; // Update link text
          break;
        case 'project-2':
          modalTitle.textContent = 'Tennis Video Analysis';
          modalVideo.querySelector('source').setAttribute('src', 'assets/Videos/Tenis.mov');
          modalDescription.textContent = 'This project focuses on analyzing tennis match videos to extract key player movements and statistics. It utilizes computer vision techniques to track players and shots.';
          modalGithubLink.setAttribute('href', 'https://github.com/Jesteban247/Tennis-Video-Analysis');
          modalGithubLink.textContent = 'View on GitHub'; // Update link text
          break;
        case 'project-3':
          modalTitle.textContent = 'NEAT-based Car Simulation';
          modalVideo.querySelector('source').setAttribute('src', 'assets/Videos/Neat.mp4');
          modalDescription.textContent = 'This project involves using the NeuroEvolution of Augmenting Topologies (NEAT) algorithm to simulate car behavior and optimize driving strategies in a virtual environment.';
          modalGithubLink.setAttribute('href', 'https://github.com/Jesteban247/NEAT-based-Car-Simulation');
          modalGithubLink.textContent = 'View on GitHub'; // Update link text
          break;
      }

      // Reload the video to ensure it plays from the start
      modalVideo.load();
      
      modal.style.display = 'block';
    });
  });

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
