// Echoes of Humanity - i18n v1.0

async function loadLanguage(lang) {
    const response = await fetch(`languages/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    loadLanguage(savedLanguage);
    });
// ==========================
// Shrink Header on Scroll
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

    
