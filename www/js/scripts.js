var secondaryButton = document.getElementById("secondary-nav-opener");
var primaryButton = document.getElementById("primary-nav-opener");
var secondaryNav = document.getElementById("secondary-nav");
var primaryNav = document.getElementById("primary-nav");

secondaryButton.addEventListener("click", clicker);
primaryButton.addEventListener("click", clicker1);

function clicker(){
    if (secondaryNav.style.display === "block"){
        secondaryNav.style.display = "none";
    }
    else {
        secondaryNav.style.display = "block";
    }
}
function clicker1(){
    if (primaryNav.style.display === "block"){
        primaryNav.style.display = "none";
    }
    else {
        primaryNav.style.display = "block";
    }
}