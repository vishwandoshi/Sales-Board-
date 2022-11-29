
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("close-btn");

menuBtn.addEventListner('click', ()=> {
  sideMenu.style.display = "block";
})

closeBtn.addEventListner('click', ()=> {
  sideMenu.style.display = "none";
})

themeToggler.addEventListner('click', ()=> {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span');
  
})
