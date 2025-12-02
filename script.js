// script.js

// Run after the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Make each section (h2) collapsible ---

  const headings = document.querySelectorAll("h2");

  headings.forEach(function (heading) {
    heading.style.cursor = "pointer"; // show it's clickable
    heading.title = "Click to show/hide this section";

    heading.addEventListener("click", function () {
      // The content is assumed to be the next element after the <h2>
      const content = heading.nextElementSibling;

      if (!content) return; // safety check

      if (content.style.display === "none") {
        content.style.display = "";
      } else {
        content.style.display = "none";
      }
    });
  });

  // --- 2. Add a "Print / Save as PDF" button dynamically ---

  const printButton = document.createElement("button");
  printButton.textContent = "Print / Save as PDF";

  // Basic styling for the button (you can adjust in CSS if you want)
  printButton.style.position = "fixed";
  printButton.style.right = "20px";
  printButton.style.bottom = "20px";
  printButton.style.padding = "10px 16px";
  printButton.style.border = "none";
  printButton.style.borderRadius = "6px";
  printButton.style.fontSize = "14px";
  printButton.style.cursor = "pointer";
  printButton.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  printButton.style.backgroundColor = "#333";
  printButton.style.color = "#fff";
  printButton.style.zIndex = "999";

  printButton.addEventListener("click", function () {
    // Opens browser print dialog – user can choose "Save as PDF"
    window.print();
  });

  document.body.appendChild(printButton);

  // --- 3. Simple console log (optional, for testing) ---
  console.log("Resume page loaded. JS is working.");
});
