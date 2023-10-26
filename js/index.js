// let $doc = $('html, body');
// $('scrollSuave').click(function() {
//     $doc.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

let burgButton = document.getElementById("burg-button");
let burgMenu = document.getElementById("burg-menu");
let btnTop = document.getElementById("btn-Top");

btnScrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.onscroll = function(){
    if(window.scrollY > 200) {
        btnTop.style.display = "flex"
    } else if(window.scrollY <= 5){
        btnTop.style.display = "none"
    }
}

burgButton.addEventListener("click", function() {
    if(burgMenu.style.display === "block") {
        burgMenu.style.display = "none";
    } else {
        burgMenu.style.display = "block";
    }
});