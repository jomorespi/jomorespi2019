'use strict'

// Navegació pestanyes

const tablink = document.querySelectorAll('.link');

tablink.forEach((item) => {
    item.addEventListener('click', function(){
        let link = this.getAttribute("data-link");
        let title = this.textContent;
        let section = document.querySelector("section");

        document.querySelector('section.active').classList.remove('active');
        document.querySelector('.link.active').classList.remove('active');
        this.classList.add("active");
        document.querySelector('#' + link).classList.add("active");
        document.querySelector("h1 span").textContent = title;
    });
});


// Comportament barra superior

const closeBtn = document.querySelector('#app-header > div > div:first-child');
const minBtn = document.querySelector('#app-header > div > div:nth-child(2)');
const maxBtn = document.querySelector('#app-header > div > div:last-child');
const tabsContainer = document.getElementById("tabs-container");
const desktopIcon = document.getElementById("desktop-icon");
const dock = document.getElementById("dock");
const dockImg = document.querySelector("#dock img");

closeBtn.addEventListener("click", function(){
    tabsContainer.style.display = "none";
    desktopIcon.classList.add("show");
});

minBtn.addEventListener("click", function(){
    tabsContainer.classList.add("minimized");
    dock.classList.add("show");
});

maxBtn.addEventListener("click", function(){
    tabsContainer.classList.toggle("maximized");
});

dockImg.addEventListener("click", function(){
    tabsContainer.classList.remove("minimized");
    dock.classList.remove("show");
});

desktopIcon.addEventListener("click", function(){
    this.classList.add("focus");
});

desktopIcon.addEventListener("dblclick", function(){
    this.classList.remove("show", "focus");
    tabsContainer.style.display = "block";
});

window.addEventListener('click', function(e){   
    if (!desktopIcon.contains(e.target) && desktopIcon.classList.contains("focus")){
        desktopIcon.classList.remove("focus");
    } 
});
