
var navMenu = document.querySelector("nav ul");
var navIcon = document.querySelector(".list");

function hideMenu() {
    navMenu.style.display = "none";
}

navIcon.addEventListener("click", function() {
    if (navMenu.style.display === "block") {
        hideMenu(); 
    } else {
        navMenu.style.display = "block"; 
    }
});

document.addEventListener("click", function(event) {
    var isClickInsideNav = navIcon.contains(event.target) || navMenu.contains(event.target);
    if (!isClickInsideNav) {
        hideMenu();
    }
});



if(window.innerWidth > 768){
    document.getElementById("portfolioLink").href="#portfolio"
}
else{
    document.getElementById("portfolioLink").href="portfolio.html"
}

if(window.innerWidth > 768){
    document.getElementById("portfolioL").href="#portfolio"
}
else{
    document.getElementById("portfolioL").href="portfolio.html"
}

