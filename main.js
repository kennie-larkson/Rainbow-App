//JavaScript DOM Manipulation
//creating a variable called 'btn' to hook up to the button element in the html through
//it's id 'button'
const btn = document.querySelector('button');

//create an array of 7 different different colors named rainbow
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

//create a function called 'change' as the action to be performed when the 
//button is clicked
function change (){ 
    document.body.style.background = rainbow[(Math.floor(7*Math.random()))];}
btn.addEventListener('click', change);