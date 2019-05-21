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

console.log(navItems)