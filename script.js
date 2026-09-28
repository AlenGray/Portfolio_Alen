document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".section, .sidebar-section");
    blocks.forEach((block) => block.classList.add("visible"));
});
