const btn = document.querySelector("#darkLigthModeBtn");


btn.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    nav.classList.toggle("dark-mode-nav");
    main.classList.toggle("dark-mode-main");
    footer.classList.toggle("dark-mode-footer");
})

darkLightMode();