var typed = new Typed(".text",{
    strings:["Front-end Developer" , "Student" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
menuToggle.onclick = function(){
    header.classList.toggle('open');
}

const about = document.querySelector(".about1");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove selected from other buttons
        btns.forEach(function(btn){
            btn.classList.remove(".active");
        });
        e.target.classList.add(".active");
        articles.forEach(function(article){
            article.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active")
    }
})