let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuList = menuSection.querySelector(".menu-list")


menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;

})

menuList.addEventListener("click", () => {

    document.body.style.overflow = "initial"
    menuSection.classList.remove("on")
    show = true;

})


