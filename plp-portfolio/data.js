// Portfolio Data Object
const portfolioData = {
  personalInfo: {
    name: "John Doe",
    title: "Web Developer | UI/UX Designer | Creative Thinker",
    profileImage: "./images/one.jpg",
    about: {
      title: "I'm a Passionate Web Developer",
      description1: "Lorem ipsum dolor sit amet...",
      description2: "Duis aute irure dolor in reprehenderit...",
      skills: [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 80 },
        { name: "UI/UX Design", percentage: 75 },
      ],
    },
    contact: {
      description: "Feel free to reach out...",
      details: [
        { icon: "fas fa-envelope", text: "john.doe@example.com" },
        { icon: "fas fa-phone", text: "+1 (123) 456-7890" },
        { icon: "fas fa-map-marker-alt", text: "San Francisco, CA" },
      ],
    },
    socialLinks: [
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
    ],
    navigation: [
      { text: "Home", target: "#home" },
      { text: "About", target: "#about" },
      { text: "Contact", target: "#contact" },
    ],
    copyright: `&copy; ${new Date().getFullYear()} John Doe. All Rights Reserved.`,
  },
  projects: [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform...",
      image: "./images/one.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application...",
      image: "./images/two.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform...",
      image: "./images/three.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application...",
      image: "./images/four.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
  ],
};
