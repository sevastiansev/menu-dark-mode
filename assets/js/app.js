const btnMenu = document.getElementById("btn-menu");
let headerMenu = document.querySelector(".box-menu");
let btnTheme = document.querySelector(".btn-theme");
let links = document.querySelectorAll(".link-item");


function toggleMenu(){
    let linetop = document.querySelector(".line-1"),
    linecenter = document.querySelector(".line-2"),
    lineBtn = document.querySelector(".line-3");

    headerMenu.classList.toggle("active");
    linetop.classList.toggle("active");
    linecenter.classList.toggle("active");
    lineBtn.classList.toggle("active");
}

function changeTheme(){
    let body = document.querySelector("body");
    btnTheme.classList.toggle("active")

    body.classList.toggle("theme-dark");
}

btnMenu.addEventListener("click",toggleMenu)
btnTheme.addEventListener("click",changeTheme)

links.forEach((link)=>{
    link.addEventListener("click",toggleMenu)
});