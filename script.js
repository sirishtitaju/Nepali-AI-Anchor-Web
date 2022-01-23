var nav = document.getElementById("nav");
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll>200){
     nav.style.backgroundColor = "#ffffff"
     nav.style.position = "sticky";
     nav.style.top = "0";
     nav.style.paddingBottom = "1rem";
     nav.style.paddingTop = "1rem";
     nav.style.fontSize = "1rem";
     nav.style.zIndex = "99999";
     nav.style.transition = "all .3s"
    }
    else{
     nav.style.position = "relative";
     nav.style.paddingBottom = "0";
     nav.style.paddingTop = "2rem";
     nav.style.backgroundColor = "transparent"
    }
});