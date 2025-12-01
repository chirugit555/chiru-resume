function toggleSection(id) {
    const section = document.getElementById(id);

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = "none");

    // Show clicked section
    section.style.display = "block";
}