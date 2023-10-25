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

btnTop.addEventListener("scroll", function(){
    let element = document.getElementById("header");
    let y = element.offsetTop;
    let x = element.offsetLeft;
    console.log("Element Y: " + y);
    console.log("Element X: " + x);

    if(window.scrollY(y) > 200 && btnTop.style.display === "none") {
        btnTop.style.display = "flex"
    } else {
        // btnTop.style.display = "none"
    }
})

burgButton.addEventListener("click", function() {
    if(burgMenu.style.display === "block") {
        burgMenu.style.display = "none";
    } else {
        burgMenu.style.display = "block";
    }
});