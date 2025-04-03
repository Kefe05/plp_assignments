// Portfolio Data Object
// const portfolioData = {
//   personalInfo: {
//     name: "John Doe",
//     title: "Web Developer | UI/UX Designer | Creative Thinker",
//     profileImage: "https://via.placeholder.com/400x400",
//     about: {
//       title: "I'm a Passionate Web Developer",
//       description1:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       description2:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       skills: [
//         { name: "HTML/CSS", percentage: 95 },
//         { name: "JavaScript", percentage: 85 },
//         { name: "React", percentage: 80 },
//         { name: "UI/UX Design", percentage: 75 },
//       ],
//     },
//     contact: {
//       description:
//         "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
//       details: [
//         { icon: "fas fa-envelope", text: "john.doe@example.com" },
//         { icon: "fas fa-phone", text: "+1 (123) 456-7890" },
//         { icon: "fas fa-map-marker-alt", text: "San Francisco, CA" },
//       ],
//     },
//     socialLinks: [
//       { icon: "fab fa-github", url: "#" },
//       { icon: "fab fa-linkedin", url: "#" },
//       { icon: "fab fa-twitter", url: "#" },
//       { icon: "fab fa-instagram", url: "#" },
//     ],
//     navigation: [
//       { text: "Home", target: "#home" },
//       { text: "About", target: "#about" },
//       // Projects link removed from default navigation
//       { text: "Contact", target: "#contact" },
//     ],
//     copyright: `&copy; ${new Date().getFullYear()} John Doe. All Rights Reserved.`,
//   },
//   // projects: [], // Empty array to demonstrate conditional rendering

//   // Example with projects:
//   projects: [
//     {
//       title: "E-commerce Website",
//       description:
//         "A fully responsive e-commerce platform with product listings, cart functionality, and secure checkout.",
//       image: "https://via.placeholder.com/600x400",
//       demoUrl: "#",
//       codeUrl: "#",
//     },
//     {
//       title: "Task Management App",
//       description:
//         "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
//       image: "https://via.placeholder.com/600x400",
//       demoUrl: "#",
//       codeUrl: "#",
//     },
//   ],
// };

// Function to populate the template with data
function populateTemplate() {
  // Personal Info
  document.getElementById("logo").textContent = portfolioData.personalInfo.name;
  document.getElementById("heroName").textContent =
    portfolioData.personalInfo.name;
  document.getElementById("heroTitle").textContent =
    portfolioData.personalInfo.title;
  document.getElementById("profileImage").src =
    portfolioData.personalInfo.profileImage;
  document.getElementById("aboutTitle").textContent =
    portfolioData.personalInfo.about.title;
  document.getElementById("aboutDescription1").textContent =
    portfolioData.personalInfo.about.description1;
  document.getElementById("aboutDescription2").textContent =
    portfolioData.personalInfo.about.description2;
  document.getElementById("contactDescription").textContent =
    portfolioData.personalInfo.contact.description;
  document.getElementById("copyright").innerHTML =
    portfolioData.personalInfo.copyright;

  // Conditionally add Projects link to navigation if projects exist
  const navigationLinks = [...portfolioData.personalInfo.navigation];
  if (portfolioData.projects && portfolioData.projects.length > 0) {
    navigationLinks.splice(2, 0, { text: "Projects", target: "#projects" });
  }

  // Navigation
  const navLinksContainer = document.getElementById("navLinks");
  navigationLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.target;
    a.textContent = link.text;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });

  // Footer Links
  const footerLinksContainer = document.getElementById("footerLinks");
  navigationLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.target;
    a.textContent = link.text;
    footerLinksContainer.appendChild(a);
  });

  // Conditionally render "View My Work" button
  // const viewWorkBtn = document.getElementById("viewWorkBtn");
  // if (portfolioData.projects && portfolioData.projects.length > 0) {
  //   viewWorkBtn.style.display = "inline-block";
  // } else {
  //   viewWorkBtn.style.display = "none";
  // }

  // Skills
  const skillsContainer = document.getElementById("skillsContainer");
  portfolioData.personalInfo.about.skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";

    const skillName = document.createElement("div");
    skillName.className = "skill-name";

    const skillNameSpan = document.createElement("span");
    skillNameSpan.textContent = skill.name;

    const skillPercentage = document.createElement("span");
    skillPercentage.textContent = `${skill.percentage}%`;

    skillName.appendChild(skillNameSpan);
    skillName.appendChild(skillPercentage);

    const skillBar = document.createElement("div");
    skillBar.className = "skill-bar";

    const skillProgress = document.createElement("div");
    skillProgress.className = "skill-progress";
    skillProgress.style.width = `${skill.percentage}%`;

    skillBar.appendChild(skillProgress);

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillBar);
    console.log(skillItem);

    skillsContainer.appendChild(skillItem);
  });

  // Contact Details
  const contactDetailsContainer = document.getElementById("contactDetails");
  portfolioData.personalInfo.contact.details.forEach((detail) => {
    const contactItem = document.createElement("div");
    contactItem.className = "contact-item";

    const icon = document.createElement("i");
    icon.className = detail.icon;

    const text = document.createElement("span");
    text.textContent = detail.text;

    contactItem.appendChild(icon);
    contactItem.appendChild(text);

    contactDetailsContainer.appendChild(contactItem);
  });

  // Social Icons (Hero)
  const heroSocialContainer = document.getElementById("heroSocial");
  portfolioData.personalInfo.socialLinks.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.url;

    const icon = document.createElement("i");
    icon.className = social.icon;

    a.appendChild(icon);
    heroSocialContainer.appendChild(a);
  });

  // Social Icons (Contact & Footer)
  const contactSocialContainer = document.getElementById("contactSocial");
  const footerSocialContainer = document.getElementById("footerSocial");
  portfolioData.personalInfo.socialLinks.forEach((social) => {
    // Contact section
    const contactA = document.createElement("a");
    contactA.href = social.url;

    const contactIcon = document.createElement("i");
    contactIcon.className = social.icon;

    contactA.appendChild(contactIcon);
    contactSocialContainer.appendChild(contactA);

    // Footer section
    const footerA = contactA.cloneNode(true);
    footerSocialContainer.appendChild(footerA);
  });

  // Conditionally render Projects section
  const projectsSectionContainer = document.getElementById(
    "projectsSectionContainer"
  );
  if (portfolioData.projects && portfolioData.projects.length > 0) {
    // Create projects section
    const projectsSection = document.createElement("section");
    projectsSection.id = "projects";
    projectsSection.className = "projects";

    const container = document.createElement("div");
    container.className = "container";

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";

    const title = document.createElement("h2");
    title.textContent = "My Projects";

    sectionTitle.appendChild(title);

    const projectsGrid = document.createElement("div");
    projectsGrid.className = "projects-grid";
    projectsGrid.id = "projectsGrid";

    // Add projects to grid
    portfolioData.projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";

      const projectImg = document.createElement("div");
      projectImg.className = "project-img";

      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;

      projectImg.appendChild(img);

      const projectInfo = document.createElement("div");
      projectInfo.className = "project-info";

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;

      const description = document.createElement("p");
      description.textContent = project.description;

      const projectLinks = document.createElement("div");
      projectLinks.className = "project-links";

      const demoLink = document.createElement("a");
      demoLink.href = project.demoUrl;
      demoLink.textContent = "Live Demo";

      const codeLink = document.createElement("a");
      codeLink.href = project.codeUrl;
      codeLink.textContent = "View Code";

      projectLinks.appendChild(demoLink);
      projectLinks.appendChild(codeLink);

      projectInfo.appendChild(projectTitle);
      projectInfo.appendChild(description);
      projectInfo.appendChild(projectLinks);

      projectCard.appendChild(projectImg);
      projectCard.appendChild(projectInfo);

      projectsGrid.appendChild(projectCard);
    });

    container.appendChild(sectionTitle);
    container.appendChild(projectsGrid);
    projectsSection.appendChild(container);

    // Insert projects section before contact section
    const contactSection = document.querySelector(".contact");
    contactSection.parentNode.insertBefore(projectsSection, contactSection);
  }
}

// Initialize the template when the page loads
function initializePortfolio() {
  populateTemplate();

  // Form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send this data to a server
      // For demonstration, we'll just show the success message
      console.log("Form submitted:", { name, email, subject, message });

      // Show success modal
      document.getElementById("successModal").style.display = "block";

      // Reset form
      this.reset();
    });

  // Close modal
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("successModal").style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("successModal")) {
      document.getElementById("successModal").style.display = "none";
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".project-card, .about-img, .about-text, .contact-info, .contact-form"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize animations
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);
}

// Start the portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePortfolio);
