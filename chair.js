/*------------
----------navBar & shoppingBar & loginBar & search---------
-------------*/
document.querySelector(".closer").onclick = () => {
    document.querySelector(".navbar").classList.remove("active");
    document.querySelector(".shopping-cart").classList.remove("active");
    document.querySelector(".closer").style.display = "none";
}
// menu
document.querySelector("#menu-btn").addEventListener("click", ()=>{
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".closer").style.display = "block";
})
// shopping
document.querySelector("#cart-btn").addEventListener("click", ()=>{
    document.querySelector(".shopping-cart").classList.toggle("active");
    document.querySelector(".closer").style.display = "block";
})
// login
document.querySelector("#login-btn").addEventListener("click", ()=>{
    document.querySelector(".login-form").classList.toggle("active");
})
document.querySelector(".close-login-form").onclick = () => {
    document.querySelector(".login-form").classList.remove("active");
}
// search
document.querySelector("#search-btn").addEventListener("click", ()=>{
    document.querySelector(".search-form").classList.toggle("active");
})
window.onscroll = () => {
    document.querySelector(".search-form").classList.remove("active");
}



/*------------
----------slider---------
-------------*/
let slides = document.querySelectorAll(".home .slide");
let index = 0;
function next(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev(){
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

