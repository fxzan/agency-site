const burgerButton = document.getElementById('burger-button')
const closeBurgerButton = document.getElementById('close-burger-button')
const burgerNavLinks = document.getElementById('burger-nav-links')
const overlay = document.getElementById('overlay')

function openBurgerMenu() {
  burgerNavLinks.classList.add('max-sm:-translate-x-45')
  burgerButton.classList.add('opacity-0')
  overlay.classList.remove('pointer-events-none', 'opacity-0', 'invisible')
  document.body.classList.add('overflow-hidden')
}

function closeBurgerMenu() {
  burgerNavLinks.classList.remove('max-sm:-translate-x-45')
  burgerButton.classList.remove('opacity-0')
  overlay.classList.add('pointer-events-none', 'opacity-0', 'invisible')
  document.body.classList.remove('overflow-hidden')
}

burgerButton.addEventListener('click', openBurgerMenu)

closeBurgerButton.addEventListener('click', closeBurgerMenu)

overlay.addEventListener('click', closeBurgerMenu)

burgerNavLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeBurgerMenu)
})