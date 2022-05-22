// Variables
const menu_icon = document.querySelector('.menu_icon')
const menu_icon_close = document.querySelector('.menu_icon_close')
const menu = document.querySelector('.menu')
const md2html = document.querySelector('section')

// Menu active
menu_icon.addEventListener('click', () => {
    menu.classList.add('active')
})
menu_icon_close.addEventListener('click', () => {
    menu.classList.remove('active')
})

// Title page setting
document.querySelector('h1').innerHTML = document.title

// Last update
document.querySelector('.last_edit').innerHTML = document.lastModified


