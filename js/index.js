// Your code goes here

const dkMode = document.querySelector('body')
dkMode.style.background = "#36393d"

const header = document.querySelector('header')
header.style.background = "#36393d"

const logo = document.querySelector('h1')
logo.addEventListener('click', (e) => {
    e.target.style.display = 'none'
})

const funBus = document.querySelector('header img')
funBus.addEventListener('dblclick', () => {
    logo.style.display = 'block'
})

const navItems = document.querySelectorAll('.nav-link')
navItems.forEach(item => item.addEventListener('mouseover', (e) => {
    e.target.style.color = '#ffff99'
}))

navItems.forEach(item => item.addEventListener('mouseout', (e) => {
    e.target.style.color = '#212529'
}))


// let mouseOver = document.querySelectorAll(".nav-link");
// console.log(mouseOver)

// mouseOver.forEach(item => item.addEventListener(
//   "mouseover",
//   function(event) {
//     event.target.style.color = "red";
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 250);
//   }
// ));


const body = document.querySelector('body')
body.addEventListener('mousemove', e => {
    body.style.color = 'rgb('+e.offsetX+','+e.offsetY+', 40)';
});

const contentPick = document.querySelectorAll('.destination');
console.log(contentPick);

contentPick.forEach( item => item.addEventListener('click', event => {
   console.log(`Work button fired a click event!`)
//    event.stopPropagation();
}));

const content = document.querySelector('.content-pick')
console.log(content)
content.addEventListener('click', () => {
    console.log('propagation')
})

const btn = document.querySelector('.btn')
btn.onclick = function(event) {
    event.target.style.color = 'red'
    btn.style.background = 'green'
    setTimeout(function() {
        event.target.style.color = ''
    }, 5000)
}
// console.log(btn)