let preload = document.getElementById("preload");
let afterload = document.getElementById("onload");
let i = 0; let j = 0; let k = 0; let h = 0;
let projects = document.querySelector(".projects .counter");
let customers = document.querySelector(".customers .counter");
let hours = document.querySelector(".hours .counter");
let codes = document.querySelector(".codes .counter");

function myFunction(){
    preload.style.display = "none";
    afterload.style.display = "block";
}

function displayPage(){
    setTimeout(myFunction, 2000);

}

function loopProjects(){
    if(i <= 300){
        projects.innerHTML = i;
        ++i;
        setTimeout(loopProjects, 0);
    }
}

function loopCustomers(){
    if(j <= 500){
        customers.innerHTML = j;
        ++j;
        setTimeout(loopCustomers, 0);
    }
}

function loopHours(){
    if(k <= 1200){
        hours.innerHTML = k;
        ++k;
        setTimeout(loopHours, 0);
    }
}

function loopCodes(){
    if(h <= 2100){
        codes.innerHTML = h;
        ++h;
        setTimeout(loopCodes, 0);
    }
}

window.onscroll = function(){
    if(window.scrollY >= 330){
        loopProjects();
        loopCustomers()
        loopHours()
        loopCodes()
    }
}