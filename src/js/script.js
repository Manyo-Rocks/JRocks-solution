const hamburgerbtn = document.getElementById('menu-btn');
const hamburgermenu = document.getElementById('menu');


hamburgerbtn.addEventListener('click', ()=>{
hamburgerbtn.classList.toggle('open')
hamburgermenu.classList.toggle('flex')
hamburgermenu.classList.toggle('hidden')

})