const topLink = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topLink.classList.add("active");
    } else {
        topLink.classList.remove("active");
    }
});