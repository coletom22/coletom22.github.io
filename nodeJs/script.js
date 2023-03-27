const links = document.querySelectorAll("nav a");

for (const link of links) {
  const pageName = window.location.pathname.split("/").pop();
  if (link.href.endsWith(pageName)) {
    link.classList.add("active");
    break;
  }
}