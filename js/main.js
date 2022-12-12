"use strict";

function highlight(el){

  // el.style.backgroundColor='blue'

  if(el.style.background == ''){
    el.style.background = 'yellow'
    console.log('yellow')
  }else {
    el.style.backgroundColor=''
    console.log('empty')
  }
}

let highlightActor = (actor) => {
  console.log('inhighlight actor function')

  let spans = document.querySelectorAll('#play span')

  for(const mySpan of spans){

    if(actor == mySpan.dataset.actor ){
      mySpan.style.background = 'yellow'
      console.log('yellow')
    }else {
      mySpan.style.backgroundColor=''
      console.log('empty')
    } 
  }

}


let spans = document.querySelectorAll('#play span')
 
// console.log(spans)

for(const mySpan of spans){

  // mySpan.addEventListener('click', myAlert);
  // alert(mySpan.dataset.actor)

  mySpan.addEventListener('click', function(ev){
    highlightActor(mySpan.dataset.actor)

  });
  

}

//https://tinyurl.com/dynamic-html-checker
document
  .getElementById("html-checker")
  .setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document
  .getElementById("css-checker")
  .setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );

//set current year in span with id of this-year
let d = new Date();
let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
