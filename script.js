let preload = document.getElementById("preload");
let afterload = document.getElementById("onload");

function myFunction(){
    preload.style.display = "none";
    afterload.style.display = "block";
}

function displayPage(){
    setTimeout(myFunction, 2000);

}
