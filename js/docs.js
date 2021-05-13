const dropDown = document.querySelector(".side-nav__drop-down > .link");
const dropDownList = document.querySelector(".side-nav__drop-down ul");

dropDown.addEventListener("click", () => {
    dropDownList.classList.toggle("show");
    dropDown.querySelector(".fa-caret-down")
        .classList.toggle("rotate");
    dropDownList.classList.add("active")
})

const sideNavItem = document.querySelectorAll(".side-nav__item .link");

sideNavItem.forEach(item => item.addEventListener("click", (event) => {
    sideNavItem.forEach(item => item.classList.remove("active"));
    event.target.classList.add("active");
}));