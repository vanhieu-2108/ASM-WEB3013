window.addEventListener("load", () => {
    const headerBar = document.querySelector(".header__bars");
    const headerOverlay = document.querySelector(".header__overlay");
    const headerMobile = document.querySelector(".header__mobile");
    headerBar.addEventListener("click", (e) => {
        headerOverlay.classList.toggle("active");
        headerMobile.classList.toggle("active");
    });
    document.body.addEventListener("click", (e) => {
        if (e.target.matches(".header__overlay")) {
            headerOverlay.classList.toggle("active");
            headerMobile.classList.toggle("active");
        }
    });
});
