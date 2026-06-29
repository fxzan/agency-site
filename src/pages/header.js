import amplidiaIcon from "../assets/amplidia-icon.svg";

export function initHeader() {
  const burgerButton = document.getElementById("burger-button");
  const closeBurgerButton = document.getElementById("close-burger-button");
  const burgerNavLinks = document.getElementById("burger-nav-links");
  const overlay = document.getElementById("overlay");

  // Open navbar menu
  function openBurgerMenu() {
    burgerNavLinks.classList.add("max-sm:-translate-x-45");
    burgerButton.classList.add("opacity-0");
    overlay.classList.remove("pointer-events-none", "opacity-0", "invisible");
    document.body.classList.add("overflow-hidden");
  }

  // Close navbar menu
  function closeBurgerMenu() {
    burgerNavLinks.classList.remove("max-sm:-translate-x-45");
    burgerButton.classList.remove("opacity-0");
    overlay.classList.add("pointer-events-none", "opacity-0");
    setTimeout(() => {
      overlay.classList.add('invisible');
    }, 300);
    document.body.classList.remove("overflow-hidden");
  }

  // Event listeners
  burgerButton.addEventListener("click", openBurgerMenu);
  closeBurgerButton.addEventListener("click", closeBurgerMenu);
  overlay.addEventListener("click", closeBurgerMenu);
  burgerNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeBurgerMenu);
  });
}

export default function renderHeader() {
  return `
    <header class="fixed top-0 left-0 flex items-center bg-page-bg/90 backdrop-blur-md border-b border-[#d0d8e430] w-full h-15 z-100">
      <div class="dark main-container">
        <nav class="flex gap-8 justify-between items-center">
          <!----------------------------------------------- Amplidia link -------------------------------------------------->
          <a href="/" data-page="home" class="font-display text-body-lg-style text-text-1 font-bold"><img
              src="${amplidiaIcon}" class="w-5 h-5 inline -translate-0.5" alt="A" />mplidia</a>

          <!----------------------------------------------- Site links ----------------------------------------------------->
          <ul id="burger-nav-links"
            class="flex gap-8 items-center max-sm:flex-col max-sm:items-end max-sm:absolute max-sm:top-0 max-sm:-right-45 max-sm:w-45 max-sm:h-screen max-sm:px-8 max-sm:pt-19 max-sm:bg-page-bg/90 max-sm:z-200 max-sm:transition-all max-sm:ease-in max-sm:duration-300">

            <!--------------------------------------------- Menu close button - hidden on large screens -------------------->
            <li><button aria-label="Close Menu" id="close-burger-button"
              class="flex flex-col gap-1.5 cursor-pointer absolute top-6 right-8 sm:hidden">
              <span class="w-6 h-0.5 bg-accent translate-y-1 rotate-45"></span>
              <span class="w-6 h-0.5 bg-accent -translate-y-1 -rotate-45"></span>
            </button></li>

            <li><a href="/" data-page="home" class="nav-link">Home</a></li>
            <li>
              <a href="/about" data-page="about" class="nav-link">About</a>
            </li>
            <li>
              <a href="/services" data-page="services" class="nav-link">Services</a>
            </li>
            <li>
              <a href="/portfolio" data-page="portfolio" class="nav-link">Portfolio</a>
            </li>
            <!--------------------------------------------- Hidden on large screens ---------------------------------------->
            <li><a href="/contact" data-page="contact"
              class="btn btn-primary text-caption py-[0.45rem] text-center px-[1.1rem] sm:hidden">Contact us</a></li>
          </ul>

          <!----------------------------------------------- Burger button -------------------------------------------------->
          <button aria-label="Open Menu" id="burger-button"
            class="flex flex-col gap-1.5 cursor-pointer transition-all ease-in-out duration-300 sm:hidden">
            <span class="w-6 h-0.5 bg-accent"></span>
            <span class="w-6 h-0.5 bg-accent"></span>
            <span class="w-6 h-0.5 bg-accent"></span>
          </button>

          <!----------------------------------------------- Contact button - hidden on small screens ----------------------->
          <a href="/contact" class="max-sm:hidden btn btn-primary text-caption py-[0.45rem] px-[1.1rem]">Contact us</a>
        </nav>
      </div>
    </header>  
  `;
}
