let button = document.querySelector('#toggle-menu-button');
let menu = document.querySelector('#toggle-menu');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

button.addEventListener('click', (e)=>{
  menu.classList.toggle('hidden');
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
});