// dark and ligh mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const diableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : diableDarkmode() 
})


// sidebar 
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('insert','')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded','true')
}
function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded','false')
  navbar.removeAttribute('inert','')
}
const navlinks = document.querySelectorAll('nav a')
navlinks.forEach(link => {
  link.addEventListener('click', () =>{
    closeSidebar()
  })
})
openSidebar(media)


searchToggle = document.querySelector(".searchToggle")
//js code to toggle search box
      searchToggle.addEventListener("click" , () =>{
      searchToggle.classList.toggle("active");
     });