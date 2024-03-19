// document.body.style.backgroundColor = "blue";

// // innerHTML
// let newLink = document.querySelector("h1");
// newLink.innerHTML = "<h1> Gbolahan </h1>";

// // round
// let btn2 = document.querySelector('.btn-warning')
// function changeNumber() {
//   let headingOneTag = document.querySelector('h1');
//   let randomNumber = Math.floor(Math.random() * 10);
//   headingOneTag.innerHTML = randomNumber
// }
// btn2.addEventListener('click', changeNumber)

// let dec = document.querySelector('.dec');
// let h1 = document.querySelector('h1');
// let inc = document.querySelector('.inc')

// dec.addEventListener('click',function(){
//     h1.innerText = "Steff"
// })

// // line 6
// function bodyChanger(){
//     document.body.style.backgroundColor = "red"
// }

// inc.addEventListener('click',bodyChanger)

// decrease
let dec = document.querySelector(".dec");
let h1 = document.querySelector("h1");
function decremental() {
  h1.innerText--;
  document.body.style.backgroundColor = "red";
}
dec.addEventListener("click", decremental);

// increase
let inc = document.querySelector(".inc");
let h2 = document.querySelector("h1");
function incremental() {
  h2.innerText++;
  document.body.style.backgroundColor = "green";
}
inc.addEventListener("click", incremental);


// to zero
let res = document.querySelector(".res");
let h3 = document.querySelector("h1");
function reset () {
    h3.innerText = 0;
    document.body.style.backgroundColor = "yellow";
  }
  res.addEventListener("click", reset);