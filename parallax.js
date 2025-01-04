document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#experience-section, #contacts-section, #navigation-section");
    sections.forEach(section => {
        section.style.transform = "translateZ(0)";
        section.offsetHeight;
        section.style.transform = "";
    });
});
