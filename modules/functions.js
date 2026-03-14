const btn = document.querySelector("#darkLigthModeBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector("#navMenu");


btn.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    nav.classList.toggle("dark-mode-nav");
    main.classList.toggle("dark-mode-main");
    footer.classList.toggle("dark-mode-footer");
});

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

darkLightMode();



