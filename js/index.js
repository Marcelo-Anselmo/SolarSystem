// let $doc = $('html, body');
// $('scrollSuave').click(function() {
//     $doc.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

let burgButton = document.getElementById("burg-button");
let burgMenu = document.getElementById("burg-menu");

burgButton.addEventListener("click", function() {
    if(burgMenu.style.display === "block") {
        burgMenu.style.display = "none";
    } else {
        burgMenu.style.display = "block";
    }
});