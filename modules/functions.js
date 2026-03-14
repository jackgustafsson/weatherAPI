const btn = document.querySelector("#darkLigthModeBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector("#navMenu");
const aboutBtn = document.querySelector('#myBtn');

if (btn) {
    btn.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        const main = document.querySelector("main");
        const footer = document.querySelector("footer");

        nav.classList.toggle("dark-mode-nav");
        main.classList.toggle("dark-mode-main");
        footer.classList.toggle("dark-mode-footer");
    });

}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        aboutBtn.style.display = "block";
    }

    else {
        aboutBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



