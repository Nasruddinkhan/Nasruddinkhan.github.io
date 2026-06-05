(function() {
  "use strict";

  const storageKey = "portfolio-theme";
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      toggle.setAttribute("title", isDark ? "Light theme" : "Dark theme");
      toggle.innerHTML = `<i class="bi ${isDark ? "bi-sun" : "bi-moon-stars"}"></i><span>${isDark ? "Light" : "Dark"}</span>`;
    }
  };

  setTheme(savedTheme || systemTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "theme-toggle";

    const navList = document.querySelector("#navbar ul");
    if (navList) {
      const item = document.createElement("li");
      item.className = "theme-toggle-item";
      item.appendChild(toggle);
      navList.appendChild(item);
    } else {
      document.body.appendChild(toggle);
      toggle.classList.add("theme-toggle-floating");
    }

    toggle.addEventListener("click", () => {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    });

    setTheme(root.getAttribute("data-theme"));
  });
})();
