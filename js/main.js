function toggleMenu() {
  const links = document.getElementById("navLinks");
  const icon = document.querySelector(".nav-toggle i");
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const links = document.getElementById("navLinks");
    const icon = document.querySelector(".nav-toggle i");
    if (links.classList.contains("active")) {
      links.classList.remove("active");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
});