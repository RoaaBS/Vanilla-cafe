const result = document.querySelector(".navbar");
const Menu=document.querySelector(".Menu");
window.onscroll = function() {
    if (window.scrollY > Menu.offsetTop) {
        result.style.backgroundColor = "white";
    } else {
        result.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
};

console.log("hello");
