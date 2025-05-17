// Typewriter Effect

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const words = ["Web Developer", "UI Designer", "JavaScript Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typeDiv = document.getElementById("typewriter");

function type() {
  if (i < words.length) {
    currentWord = words[i];
    if (!isDeleting && j <= currentWord.length) {
      typeDiv.innerHTML = currentWord.substring(0, j++);
      setTimeout(type, 150);
    } else if (isDeleting && j >= 0) {
      typeDiv.innerHTML = currentWord.substring(0, j--);
      setTimeout(type, 100);
    } else if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
      setTimeout(type, 200);
    }
  }
}
type();

// Portfolio Filter
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((p) => {
    const cat = p.getAttribute("data-category");
    p.style.display = category === "all" || cat === category ? "block" : "none";
  });
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name && email && message) {
    alert("Message sent successfully!");
    this.reset();
  } else {
    alert("Please fill all fields.");
  }
});
