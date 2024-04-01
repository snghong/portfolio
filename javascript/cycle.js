/* Cycle Titles */
var titles = [
"Code Monkey",
"Book Worm",
"Fullmetal (wok) Alchemist",
    ];
var timeout = 1600;

var index = 0;
var quoteTimer = function(){
    index = (index + 1) % titles.length;
    $('.container').find('.hero-title').find('.title').fadeIn().text(titles[index]);
}


$(document).ready(function(){
    setInterval(quoteTimer, timeout);
});