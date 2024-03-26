
document.querySelector(".list").addEventListener("click", function() {

    if (document.querySelector("nav ul").style.visibility === "visible") {
      document.querySelector("nav ul").style.visibility = "hidden";
    } else {
      document.querySelector("nav ul").style.visibility = "visible";
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

