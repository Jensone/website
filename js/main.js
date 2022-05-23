// Variables
const menu_icon = document.querySelector('.menu_icon')
const menu_icon_close = document.querySelector('.menu_icon_close')
const menu = document.querySelector('.menu')
const menu_items = document.querySelector('.menu_items')
const md2html = document.querySelector('section')
const footer = document.querySelector('footer')


// Menu active
menu_icon.addEventListener('click', () => {
    menu.classList.add('active')
})
menu_icon_close.addEventListener('click', () => {
    menu.classList.remove('active')
})

// Title page setting
document.querySelector('h1').innerHTML = document.title

// Dynamic parts
menu_items.innerHTML = `
<li class="nav_links"><a href="./index.html">Accueil</a></li>
<li class="nav_links"><a href="./algorithme.html">Algorithme</a></li>
<li class="nav_links"><a href="./linux-admin.html">Linux Administration</a></li>
<li class="nav_links"><a href="./shell-script.html">Shell Scripting</a></li>
`

footer.innerHTML = `
<p>Dernière maj : <span class="last_edit"></span></p>
<ul class="rs flex flex-justify-end flex-align-center">
    <li>
        <a href="https://github.com/jensone" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa" width="32.69" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1504"><path fill="currentColor" d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z"></path></svg></a>
    </li>
    <li>
        <a href="https://twitter.com/JensoneJc" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa" width="40" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1600 1280"><path fill="currentColor" d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z"></path></svg></a>
    </li>
</ul>
`

// Last update
document.querySelector('.last_edit').innerHTML = document.lastModified