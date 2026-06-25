import amplidiaIcon from "../assets/amplidia-icon.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";

export default function renderFooter() {
  return `
    <footer class="bg-page-bg border-t border-[#2A3F63]">
      <div class="dark main-container relative flex max-sm:flex-col justify-between max-sm:gap-10 py-8">
        <!----------------------------------------------- Brand links ---------------------------------------------------->
        <div class="flex flex-col gap-2 max-w-60">
          <!----------------------------------------------- Amplidia link ------------------------------------------------>
          <a href="/" class="font-display text-body-lg-style text-text-1 font-bold"><img
              src="${amplidiaIcon}" class="w-5 h-5 inline -translate-0.5" />mplidia</a>
          <div class="text-body-sm text-[#94A3C0]">
            Strategic influencer marketing for brands that care about results.
          </div>

          <!----------------------------------------------- Social links ------------------------------------------------->
          <div class="flex items-center gap-8 mt-4">
            <a href="https://github.com/fxzan" target="_blank"><img src="${facebookIcon}" class="w-6 h-6" alt="FB Icon" /></a>
            <a href="https://github.com/fxzan" target="_blank"><img src="${instagramIcon}" class="w-6 h-6" alt="Instagram Icon" /></a>
            <a href="https://github.com/fxzan" target="_blank"><img src="${youtubeIcon}" class="w-6 h-6" alt="YT Icon" /></a>
          </div>
        </div>

        <!----------------------------------------------- Site links ----------------------------------------------------->
        <div class="flex max-sm:flex-col items-start gap-5 sm:gap-20">
          <div class="flex flex-col gap-2">
            <p class="text-overline-style text-accent">company</p>
            <div class="flex sm:flex-col gap-8 sm:gap-1">
              <a href="/about" class="nav-link">About us</a>
              <a href="/contact" class="nav-link">Contact us</a>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-overline-style text-accent">explore</p>
            <div class="flex sm:flex-col gap-8 sm:gap-1">
              <a href="/services" class="nav-link">Services</a>
              <a href="/portfolio" class="nav-link">Portfolio</a>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-overline-style text-accent">legal</p>
            <div class="flex sm:flex-col gap-8 sm:gap-1">
              <a href="/privacy" class="nav-link">Privacy policy</a>
            </div>
          </div>
        </div>

        <!----------------------------------------------- Theme toggle -------------------------------------------------->
        <div class="flex gap-2 items-center text-[#94A3C0] absolute bottom-6 right-8 pl-2">
          <p class="text-body-sm-style">Theme Toggle</p>
          <button
            id="theme-toggle-icon"
            aria-label="Toggle dark mode"
            class="p-2 rounded-lg bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!----------------------------------------------- Copyright ------------------------------------------------------->
      <div class="dark text-caption/caption text-text-3 text-center border-t border-border w-full py-4">
        © Amplidia Media ${new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  `;
}
