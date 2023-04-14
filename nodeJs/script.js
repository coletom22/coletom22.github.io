const links = document.querySelectorAll("nav a");

for (const link of links) {
  const pageName = window.location.pathname.split("/").pop();
  if (link.href.endsWith(pageName)) {
    link.classList.add("active");
    break;
  }
}

const text = "Please fill out this form and I will get back to you as soon as possible.";
let index = 0;

function type() {
  const typingText = document.getElementById("type-in");
  typingText.innerHTML = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100);
  }
}

type();