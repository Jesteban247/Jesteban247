'use strict';

// -------------------------------
// Utility Functions
// -------------------------------

const toggleElement = (elem) => elem.classList.toggle("active");

// -------------------------------
// Sidebar Functionality
// -------------------------------

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  toggleElement(sidebar);
});

// -------------------------------
// Page Navigation Functionality
// -------------------------------

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.toLowerCase();

    pages.forEach((page) => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        navigationLinks.forEach(navLink => navLink.classList.remove("active"));
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });
  });
});

// -------------------------------
// Project Data and Modal Functionality
// -------------------------------

const projects = {
  'project-1': {
    title: 'COVID-19 CT Scan Classification',
    videoSrc: 'assets/Videos/Covid.mp4',
    description: 'This project involves classifying COVID-19 CT scans using a CNN built on VGG16. The goal is to accurately distinguish between infected and non-infected cases based on the CT scan images.',
    githubLink: 'https://github.com/Jesteban247/COVID-19-_CT_Scan_Classification'
  },
  'project-2': {
    title: 'Tennis Video Analysis',
    videoSrc: 'assets/Videos/Tenis.mov',
    description: 'This project focuses on analyzing tennis match videos to extract key player movements and statistics. It utilizes computer vision techniques to track players and shots.',
    githubLink: 'https://github.com/Jesteban247/Tennis-Video-Analysis'
  },
  'project-3': {
    title: 'NEAT-based Car Simulation',
    videoSrc: 'assets/Videos/Neat.mp4',
    description: 'This project involves using the NeuroEvolution of Augmenting Topologies (NEAT) algorithm to simulate car behavior and optimize driving strategies in a virtual environment.',
    githubLink: 'https://github.com/Jesteban247/NEAT-based-Car-Simulation'
  },
  'project-4': {
    title: 'Fine-Tuning LLaMA-Factory with Math Dataset',
    videoSrc: 'assets/Videos/LLaMA.mp4',
    description: 'Guide on setting up and fine-tuning the Gemma-2-2B-Chat model using the Math Word Problems 200k dataset. Includes performance comparison before and after fine-tuning! 🌟',
    githubLink: 'https://github.com/Jesteban247/Fine-Tuning-LLaMA-Factory-with-Math-Dataset'
  },
  'project-5': {
    title: 'AI-Driven Gym and Nutrition Workflow',
    videoSrc: 'assets/Videos/GymNutrition.mp4',
    description: 'Leverages advanced AI technologies to optimize gym routines and dietary plans using CrewAI and IBM Watson’s language models.',
    githubLink: 'https://github.com/Jesteban247/AI-Driven-Gym-and-Nutrition-Workflow-with-CrewAI-and-IBM-Watson'
  },
  'project-6': {
    title: 'AI-Powered PDF & Image Processor',
    videoSrc: 'assets/Videos/PDFImage.mp4',
    description: 'Uses Google Gemini\'s Generative AI to answer questions from PDFs and generate content based on uploaded images. Features an easy-to-use Streamlit interface.',
    githubLink: 'https://github.com/Jesteban247/AI-Powered-PDF-Image-Processor-GeminiAPI'
  },
  'project-7': {
    title: 'RAG Project: Harry Potter Edition',
    videoSrc: 'assets/Videos/HarryPotter.mp4',
    description: 'Builds a Retrieval-Augmented Generation (RAG) pipeline using Harry Potter: The Complete Collection 🧹📜. Allows users to ask questions about the book and get responses based on the text.',
    githubLink: 'https://github.com/Jesteban247/RAG-Project-Harry-Potter-Edition'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  const closeModalBtn = modal.querySelector('.close');
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const projectId = link.getAttribute('data-project');
      const { title, videoSrc, description, githubLink } = projects[projectId];

      const modalTitle = modal.querySelector('.modal-title');
      const modalVideo = modal.querySelector('.modal-video');
      const modalDescription = modal.querySelector('.modal-description');
      const modalGithubLink = modal.querySelector('.modal-github-link');
      
      modalTitle.textContent = title;
      modalVideo.querySelector('source').setAttribute('src', videoSrc);
      modalDescription.textContent = description;
      modalGithubLink.setAttribute('href', githubLink);
      modalGithubLink.textContent = 'View on GitHub'; // Update link text

      // Reload the video to ensure it plays from the start
      modalVideo.load();
      modal.style.display = 'block';
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
