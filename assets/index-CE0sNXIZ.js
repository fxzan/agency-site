(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){let n=e.querySelectorAll(`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`),r=n[0],i=n[n.length-1];r?.focus(),e.addEventListener(`keydown`,e=>{e.key===`Tab`&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),i?.focus()):document.activeElement===i&&(e.preventDefault(),r?.focus()))},{signal:t})}var t=`/agency-site/`.replace(/\/$/,``);function n(){let e=localStorage.getItem(`theme`),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches;(e===`system`||!e?t?`dark`:`light`:e)===`dark`&&document.documentElement.classList.add(`dark`),e||localStorage.setItem(`theme`,`system`);function n(e){let t=document.getElementById(`theme-toggle-icon`);t&&(e?(t.classList.add(`text-on-accent`,`bg-accent`),t.classList.remove(`bg-white/10`)):(t.classList.remove(`text-on-accent`,`bg-accent`),t.classList.add(`bg-white/10`)))}function r(){let e=document.documentElement.classList.toggle(`dark`);localStorage.setItem(`theme`,e?`dark`:`light`),n(e)}document.getElementById(`theme-toggle-icon`).addEventListener(`click`,r),n(document.documentElement.classList.contains(`dark`))}var r=`/agency-site/assets/amplidia-icon-CZAfZn02.svg`;function i(){let e=document.getElementById(`burger-button`),t=document.getElementById(`close-burger-button`),n=document.getElementById(`burger-nav-links`),r=document.getElementById(`overlay`);function i(){n.classList.add(`max-sm:-translate-x-45`),e.classList.add(`opacity-0`),r.classList.remove(`pointer-events-none`,`opacity-0`,`invisible`),document.body.classList.add(`overflow-hidden`)}function a(){n.classList.remove(`max-sm:-translate-x-45`),e.classList.remove(`opacity-0`),r.classList.add(`pointer-events-none`,`opacity-0`,`invisible`),document.body.classList.remove(`overflow-hidden`)}e.addEventListener(`click`,i),t.addEventListener(`click`,a),r.addEventListener(`click`,a),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,a)})}function a(){return`
    <header class="fixed top-0 left-0 flex items-center bg-page-bg border-b border-[#d0d8e430] w-full h-15 z-100">
      <div class="dark main-container">
        <nav class="flex gap-8 justify-between items-center">
          <!----------------------------------------------- Amplidia link -------------------------------------------------->
          <a href="/" data-page="home" class="font-display text-body-lg-style text-text-1 font-bold"><img
              src="${r}" class="w-5 h-5 inline -translate-0.5" alt="A" />mplidia</a>

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
  `}var o=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='%234DA6FF'%3e%3cpath%20d='M22.5%200c.83%200%201.5.67%201.5%201.5v21c0%20.83-.67%201.5-1.5%201.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25%202.25-2.25h1.5V3.75h-3c-2.76%200-4.5%202.16-4.5%205.25v2.25h-3V15h3v9H1.5A1.5%201.5%200%200%201%200%2022.5v-21C0%20.67.67%200%201.5%200h21z'/%3e%3c/svg%3e`,s=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='%234DA6FF'%3e%3cpath%20d='M16.98%200a6.9%206.9%200%200%201%205.08%201.98A6.94%206.94%200%200%201%2024%207.02v9.96c0%202.08-.68%203.87-1.98%205.13A7.14%207.14%200%200%201%2016.94%2024H7.06a7.06%207.06%200%200%201-5.03-1.89A6.96%206.96%200%200%201%200%2016.94V7.02C0%202.8%202.8%200%207.02%200h9.96zm.05%202.23H7.06c-1.45%200-2.7.43-3.53%201.25a4.82%204.82%200%200%200-1.3%203.54v9.92c0%201.5.43%202.7%201.3%203.58a5%205%200%200%200%203.53%201.25h9.88a5%205%200%200%200%203.53-1.25%204.73%204.73%200%200%200%201.4-3.54V7.02a5%205%200%200%200-1.3-3.49%204.82%204.82%200%200%200-3.54-1.3zM12%205.76c3.39%200%206.2%202.8%206.2%206.2a6.2%206.2%200%200%201-12.4%200%206.2%206.2%200%200%201%206.2-6.2zm0%202.22a3.99%203.99%200%200%200-3.97%203.97A3.99%203.99%200%200%200%2012%2015.92a3.99%203.99%200%200%200%203.97-3.97A3.99%203.99%200%200%200%2012%207.98zm6.44-3.77a1.4%201.4%200%201%201%200%202.8%201.4%201.4%200%200%201%200-2.8z'/%3e%3c/svg%3e`,c=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='%234DA6FF'%3e%3cpath%20d='M20%200a4%204%200%200%201%204%204v16a4%204%200%200%201-4%204H4a4%204%200%200%201-4-4V4a4%204%200%200%201%204-4h16zm-7.7%207h-.6l-1.1.01c-1.48.03-3.7.1-4.46.29-.65.16-1.15.65-1.33%201.26-.18.64-.25%201.7-.29%202.46l-.02.82v.75c.03.76.1%202.09.31%202.85.18.61.68%201.1%201.33%201.26.74.19%202.87.26%204.34.29l1.41.01h1.16c1.45-.03%204-.09%204.81-.3a1.84%201.84%200%200%200%201.33-1.26c.2-.75.28-2.05.3-2.82v-.93c0-.67-.06-2.26-.3-3.13a1.84%201.84%200%200%200-1.33-1.26%2025.9%2025.9%200%200%200-3.88-.28L12.3%207zM10.46%209.9L14.39%2012l-3.92%202.11V9.89z'/%3e%3c/svg%3e`;function l(){return`
    <footer class="bg-page-bg border-t border-[#2A3F63]">
      <div class="dark main-container relative flex max-sm:flex-col justify-between max-sm:gap-10 py-8">
        <!----------------------------------------------- Brand links ---------------------------------------------------->
        <div class="flex flex-col gap-2 max-w-60">
          <!----------------------------------------------- Amplidia link ------------------------------------------------>
          <a href="/" class="font-display text-body-lg-style text-text-1 font-bold"><img
              src="${r}" class="w-5 h-5 inline -translate-0.5" />mplidia</a>
          <div class="text-body-sm text-[#94A3C0]">
            Strategic influencer marketing for brands that care about results.
          </div>

          <!----------------------------------------------- Social links ------------------------------------------------->
          <div class="flex items-center gap-8 mt-4">
            <a href="https://github.com/fxzan" target="_blank"><img src="${o}" class="w-6 h-6" alt="FB Icon" /></a>
            <a href="https://github.com/fxzan" target="_blank"><img src="${s}" class="w-6 h-6" alt="Instagram Icon" /></a>
            <a href="https://github.com/fxzan" target="_blank"><img src="${c}" class="w-6 h-6" alt="YT Icon" /></a>
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
  `}var u=`/agency-site/assets/img-home-hero-BXG0klip.avif`,d=`/agency-site/assets/img-home-1-Dea0ClNE.avif`,f=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='4'%20width='18'%20height='18'%20rx='2'%20ry='2'%3e%3c/rect%3e%3cline%20x1='16'%20y1='2'%20x2='16'%20y2='6'%3e%3c/line%3e%3cline%20x1='8'%20y1='2'%20x2='8'%20y2='6'%3e%3c/line%3e%3cline%20x1='3'%20y1='10'%20x2='21'%20y2='10'%3e%3c/line%3e%3c/svg%3e`,p=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%203v18h18'/%3e%3cpath%20d='M18.7%208l-5.1%205.2-2.8-2.7L7%2014.3'/%3e%3c/svg%3e`;function m(){return`
  <div class="bg-surface animate-fade-in">
    <!-------------------------------------------------- Hero area -------------------------------------------------------->
    <section id="hero-section" class="bg-page-bg border-b border-border">
      <div id="hero-inner" class="dark main-container flex justify-between items-center gap-16 pt-28 pb-24">
        <!-------------------------------------------------- Content ------------------------------------------------------>
        <div class="flex-1 flex flex-col gap-5">
          <p class="text-overline-style text-accent">
            amplify your influence
          </p>
          <h1 class="text-text-1 -ml-2">
            <img src="${r}" class="w-14 h-14 inline -translate-y-1.5" alt="A" />mplidia
          </h1>
          <p class="text-body-lg-style text-text-2">
            We connect brands with creators that can reach the perfect
            audience. <br />
            Strategic matching, seamless execution, measurable results.
          </p>
          <div class="flex max-md:flex-col items-start gap-4 mt-5">
            <a href="/portfolio" class="btn btn-primary text-center w-42">See our work</a>
            <a href="/services" class="btn btn-secondary text-center w-42">What we offer</a>
          </div>
          <a href="/about" class="btn btn-ghost">More about us →</a>
        </div>

        <!-------------------------------------------------- Image -------------------------------------------------------->
        <div class="flex-1 max-sm:hidden">
          <img src="${u}" alt="Hero Section Visual"
            class="w-full aspect-3/4 md:aspect-4/3 rounded-2xl bg-page-bg object-cover object-center" />
        </div>
      </div>
    </section>

    <!-------------------------------------------------- About us teaser -------------------------------------------------->
    <section id="about-us-teaser">
      <div
        class="main-container flex max-sm:flex-col-reverse justify-between items-center gap-16 py-24 border-b border-border">
        <!-------------------------------------------------- Image -------------------------------------------------------->
        <div class="flex-1 flex items-center">
          <img src="${d}" alt="About Us Section Visual"
            class="max-w-full w-100 aspect-4/3 sm:aspect-3/4 md:aspect-4/3 bg-page-bg rounded-2xl object-cover object-center" />
        </div>

        <!-------------------------------------------------- Content ------------------------------------------------------>
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">who we are</p>
          <h2 class="text-text-1">Influence that converts</h2>
          <p class="text-body-style text-text-2">
            Founded to bridge the gap between influencers and brands, to
            create collaborations that truly work.<br />
            Authentic, relationship-driven, strategic; we focus on genuine
            alignment between creator audiences and brand values.
          </p>
          <a href="/about" class="btn btn-ghost">Our story →</a>
        </div>
      </div>
    </section>

    <!-------------------------------------------------- Services teaser -------------------------------------------------->
    <section id="services-teaser">
      <div class="main-container flex max-md:flex-col justify-between gap-10 py-24 border-b border-border">
        <!-------------------------------------------------- Content ------------------------------------------------------>
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">what we do</p>
          <h2 class="text-text-1">Every layer of your campaign</h2>
          <p class="text-body-style text-text-2">
            Driving measurable growth for both brands and creators.<br />
            Co-ordination, strategy, analytics; we'll take care of it.
          </p>
        </div>

        <!-------------------------------------------------- Grid cards --------------------------------------------------->
        <div class="flex-1 grid grid-cols-1 gap-4">
          <div class="feature-card flex gap-7 items-center">
            <img src="${f}" class="w-8 h-8" alt="Calendar Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Campaign Strategy & Management</h4>
              <p class="text-body-sm-style text-text-2">
                Aligning goals and directions; delivering on-time and on-brand
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${p}" class="w-8 h-8" alt="Line Chart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Analytics & Insights</h4>
              <p class="text-body-sm-style text-text-2">
                Audience and performance data; measurable results
              </p>
            </div>
          </div>
          <a href="/services" class="btn btn-ghost">See more →</a>
        </div>
      </div>
    </section>

    <!-------------------------------------------------- Why us section -------------------------------------------------->
    <section id="why-amplidia">
      <div class="main-container flex flex-col gap-5 py-24">
        <p class="text-overline-style text-accent">why amplidia</p>
        <h2 class="text-text-1">Why choose Amplidia</h2>
        <p class="text-body-style text-text-2">
          We believe the best campaigns come from genuine alignment. We
          prioritize creator authenticity and brand values over quick wins -
          building partnerships that resonate with audiences and deliver
          lasting impact.
        </p>
        <p class="text-body-style text-text-2">
          Our focus is driving measurable growth for both brands and creators
          through strategic execution. We handle the strategy, coordination,
          and analytics so you can focus on your brand or content. It's that
          simple.
        </p>

        <!-------------------------------------------------- Stats ------------------------------------------------------->
        <div class="flex justify-between bg-card border border-border rounded-xl p-5 mt-5">
          <div class="flex flex-col items-center">
            <p class="font-display text-heading-1/heading-1 font-bold text-accent">
              120+
            </p>
            <p class="text-body-sm-style text-text-2 mt-1">Campaigns</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-display text-heading-1/heading-1 font-bold text-accent">
              40+
            </p>
            <p class="text-body-sm-style text-text-2 mt-1">Creators</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-display text-heading-1/heading-1 font-bold text-accent">
              98%
            </p>
            <p class="text-body-sm-style text-text-2 mt-1">Retention</p>
          </div>
        </div>
        <a href="/portfolio" class="btn btn-ghost">See our portfolio →</a>
      </div>
    </section>

    <!-------------------------------------------------- CTA ------------------------------------------------------------->
    <section id="cta-section" class="bg-page-bg border-t border-border">
      <div class="dark main-container flex flex-col items-center gap-5 py-16">
        <h2 class="text-text-1">Ready to amplify your influence?</h2>
        <p class="text-body-style text-text-2">
          Tell us what you're working on - we'll respond within 48 hours.
        </p>
        <a href="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  </div>
  `}var h=`/agency-site/assets/img-about-BVfH1H8d.avif`,g=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M20.84%204.61a5.5%205.5%200%200%200-7.78%200L12%205.67l-1.06-1.06a5.5%205.5%200%200%200-7.78%207.78l1.06%201.06L12%2021.23l7.78-7.78%201.06-1.06a5.5%205.5%200%200%200%200-7.78z'%3e%3c/path%3e%3c/svg%3e`,_=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='4'%20stroke-linecap='square'%20stroke-linejoin='bevel'%3e%3cline%20x1='18'%20y1='20'%20x2='18'%20y2='10'%3e%3c/line%3e%3cline%20x1='12'%20y1='20'%20x2='12'%20y2='4'%3e%3c/line%3e%3cline%20x1='6'%20y1='20'%20x2='6'%20y2='14'%3e%3c/line%3e%3c/svg%3e`,v=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M17%2021v-2a4%204%200%200%200-4-4H5a4%204%200%200%200-4%204v2'%3e%3c/path%3e%3ccircle%20cx='9'%20cy='7'%20r='4'%3e%3c/circle%3e%3cpath%20d='M23%2021v-2a4%204%200%200%200-3-3.87'%3e%3c/path%3e%3cpath%20d='M16%203.13a4%204%200%200%201%200%207.75'%3e%3c/path%3e%3c/svg%3e`,y=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M1%2012s4-8%2011-8%2011%208%2011%208-4%208-11%208-11-8-11-8z'%3e%3c/path%3e%3ccircle%20cx='12'%20cy='12'%20r='3'%3e%3c/circle%3e%3c/svg%3e`;function ee(){return`
  <div class="bg-surface animate-fade-in">
    <!----------------------------------------------- Hero area ------------------------------------------------------->
    <section id="head-section" class="bg-page-bg border-b border-border">
      <div id="head-inner" class="dark main-container flex flex-col gap-5 pt-28 pb-24">
        <p class="text-overline-style text-accent">our story</p>
        <h1 class="text-text-1">Built on authentic partnerships</h1>
        <p class="text-body-lg-style text-text-2">
          We founded Amplidia with one belief — the best campaigns come from
          genuine alignment.
        </p>
        <p class="text-body-lg-style text-text-2">
          We help brands and influencers connect seamlessly with the perfect
          match - to create collaborations that truly work, for both sides
        </p>
      </div>
    </section>

    <!----------------------------------------------- About us mission ----------------------------------------------->
    <section id="about-us-mission">
      <div
        class="main-container flex max-sm:flex-col-reverse justify-between items-center gap-16 py-24 border-b border-border">
        <!----------------------------------------------- Image ------------------------------------------------------>
        <div class="flex-1 flex items-center">
          <img src="${h}" alt="About Us Section Visual"
            class="max-w-full w-100 aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl bg-page-bg object-cover object-center" />
        </div>

        <!----------------------------------------------- Content ---------------------------------------------------->
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">who we are</p>
          <h2 class="text-text-1">Bridging brands and creators</h2>
          <p class="text-body-style text-text-2">
            Every partnership starts the same way - understanding what a brand
            actually needs, and what a creator can authentically deliver.
          </p>
          <p class="text-body-style text-text-2">
            For brands, we unlock access to engaged communities through voices
            people trust. For influencers, we bring opportunities that align
            with their expertise and audience - partnerships that feel
            natural, not forced.
          </p>
        </div>
      </div>
    </section>

    <!----------------------------------------------- About us values ------------------------------------------------>
    <section id="about-us-values">
      <div class="main-container flex flex-col gap-10 py-24">
        <div class="flex flex-col gap-5">
          <p class="text-overline-style text-accent ml-1">what we believe</p>
          <h2 class="text-text-1">Our values</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <!----------------------------------------------- Card grid ------------------------------------------------>
          <div class="feature-card flex gap-7 items-center">
            <img src="${g}" class="w-8 h-8" alt="Heart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Authenticity first</h4>
              <p class="text-body-sm-style text-text-2">
                Only genuine creator-brand fit, never forced partnerships.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${_}" class="w-8 h-8" alt="Bar Chart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Results that matter</h4>
              <p class="text-body-sm-style text-text-2">
                Every decision is backed by data, measured against real goals.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${v}" class="w-8 h-8" alt="Users Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Relationships over transactions</h4>
              <p class="text-body-sm-style text-text-2">
                Long-term partnerships, not one-off deals.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${y}" class="w-8 h-8" alt="Eye Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Transparency throughout</h4>
              <p class="text-body-sm-style text-text-2">
                Clear reporting, honest timelines, no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!----------------------------------------------- CTA ------------------------------------------------------------>
    <section id="cta-section" class="bg-page-bg border-t border-border">
      <div class="dark main-container flex flex-col items-center gap-5 py-16">
        <h2 class="text-text-1">Want to work with us?</h2>
        <p class="text-body-style text-text-2">
          Tell us what you're working on - we'll respond within 48 hours.
        </p>
        <a href="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  </div>
  `}var te=`/agency-site/assets/img-services-BMxHTjW3.avif`,ne=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpolyline%20points='9%2011%2012%2014%2022%204'%3e%3c/polyline%3e%3cpath%20d='M21%2012v7a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h11'%3e%3c/path%3e%3c/svg%3e`,re=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M20%2014.66V20a2%202%200%200%201-2%202H4a2%202%200%200%201-2-2V6a2%202%200%200%201%202-2h5.34'%3e%3c/path%3e%3cpolygon%20points='18%202%2022%206%2012%2016%208%2016%208%2012%2018%202'%3e%3c/polygon%3e%3c/svg%3e`,ie=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='3'%20width='7'%20height='7'%3e%3c/rect%3e%3crect%20x='14'%20y='3'%20width='7'%20height='7'%3e%3c/rect%3e%3crect%20x='14'%20y='14'%20width='7'%20height='7'%3e%3c/rect%3e%3crect%20x='3'%20y='14'%20width='7'%20height='7'%3e%3c/rect%3e%3c/svg%3e`;function b(){return`
  <div class="bg-surface animate-fade-in">
    <!-------------------------------------------------- Hero area -------------------------------------------------------->
    <section id="head-section" class="bg-page-bg border-b border-border">
      <div id="head-inner" class="dark main-container flex flex-col gap-5 pt-28 pb-24">
        <p class="text-overline-style text-accent">what we offer</p>
        <h1 class="text-text-1">Every layer of your campaign, covered</h1>
        <p class="text-body-lg-style text-text-2">
          From first brief to final report — we handle the parts that take
          longest to get right.
        </p>
      </div>
    </section>

    <!-------------------------------------------------- Services mission ------------------------------------------------->
    <section id="services-mission">
      <div class="main-container flex max-sm:flex-col justify-between items-center gap-16 py-24 border-b border-border">
        <!-------------------------------------------------- content ------------------------------------------------------>
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">how we work</p>
          <h2 class="text-text-1">One team, every stage of the campaign</h2>
          <p class="text-body-style text-text-2">
            Most agencies hand you off between departments. We don't. The same
            team that matches you with creators also manages execution, tracks
            performance, and coordinates across platforms - so nothing gets
            lost in translation.
          </p>
        </div>

        <!-------------------------------------------------- Image -------------------------------------------------------->
        <div class="flex-1 flex justify-end items-center">
          <img src="${te}" alt="Services Section Visual"
            class="max-w-full w-100 aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl bg-page-bg object-cover object-center" />
        </div>
      </div>
    </section>

    <!-------------------------------------------------- Info cards ------------------------------------------------------->
    <section id="services-info-cards">
      <div class="main-container flex flex-col gap-10 py-24">
        <div class="flex flex-col gap-5">
          <p class="text-overline-style text-accent">our services</p>
          <h2 class="text-text-1">What's included</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <!-------------------------------------------------- Card grid -------------------------------------------------->
          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${ne}" class="w-8 h-8" alt="Check Box Ticked Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Strategic brand-influencer matching</h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                We connect brands with influencers whose audiences align
                perfectly with your target demographics.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Audience
                  analysis</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Creator
                  vetting</span>
              </div>
            </div>
          </div>

          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${re}" class="w-8 h-8" alt="Edit Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Influencer campaign strategy</h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                We align creators on goals and outcomes - strategic direction
                that respects creative authenticity.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Briefing</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Goal setting</span>
              </div>
            </div>
          </div>

          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${f}" class="w-8 h-8" alt="Calendar Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Campaign management</h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                Tracking deliverables and keeping everything on schedule and
                on-brand throughout execution.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Delivery
                  tracking</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">QA</span>
              </div>
            </div>
          </div>

          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${ie}" class="w-8 h-8" alt="Grid Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">
                Multi-platform campaign coordination
              </h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                Consistent messaging across Instagram, TikTok, and YouTube —
                execution tailored to each platform.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Cross-platform</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Localized
                  execution</span>
              </div>
            </div>
          </div>

          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${v}" class="w-8 h-8" alt="Users Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Audience analytics & targeting</h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                We analyze influencer audiences for demographic alignment,
                identifying the right matches.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Demographic
                  data</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Targeting</span>
              </div>
            </div>
          </div>

          <div class="feature-card border-l-4 border-l-accent rounded-l-none flex gap-7 pb-4">
            <img src="${p}" class="w-8 h-8" alt="Line Chart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">
                Performance analytics & growth insights
              </h4>
              <p class="text-body-sm-style text-text-2 mb-2">
                Clear ROI reporting and insights that drive smarter strategies
                for future partnerships.
              </p>
              <div class="flex max-md:flex-col items-start gap-2 mt-auto">
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">ROI reporting</span>
                <span class="text-overline font-medium bg-accent/10 text-accent px-2 py-1 rounded">Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-------------------------------------------------- CTA -------------------------------------------------------------->
    <section id="cta-section" class="bg-page-bg border-t border-border">
      <div class="dark main-container flex flex-col items-center gap-5 py-16">
        <h2 class="text-text-1">Ready to start a campaign?</h2>
        <p class="text-body-style text-text-2">
          Tell us what you're working on - we'll respond within 48 hours.
        </p>
        <a href="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  </div>
  `}var x=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23d0021b'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%3e%3c/circle%3e%3cline%20x1='12'%20y1='8'%20x2='12'%20y2='12'%3e%3c/line%3e%3cline%20x1='12'%20y1='16'%20x2='12.01'%20y2='16'%3e%3c/line%3e%3c/svg%3e`,S=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%2018l-6-6%206-6'/%3e%3c/svg%3e`,C=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M9%2018l6-6-6-6'/%3e%3c/svg%3e`,w=null;async function T(){let e=document.getElementById(`campaigns-grid`),n=document.getElementById(`carousel-slide`);n.innerHTML=`
    <div class="flex justify-center py-44">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `,e.innerHTML=`
    <div class="col-span-3 flex justify-center py-12">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;try{let r=await fetch(`${t}/data/campaigns.json`);if(!r.ok)throw Error(r.status);let i=await r.json(),a=i.filter(e=>e.featured);n.innerHTML=k(a[0]),D(i,e),e.addEventListener(`click`,e=>{let t=e.target.closest(`.grid-card`);t&&O(i.find(e=>e.campaignPath===t.id))}),A(a,n)}catch(t){console.log(t);let r=`
      <div class="min-h-100 sm:col-span-2 md:col-span-3 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl bg-card">
        <img src="${x}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Campaigns not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load campaigns
        </p>
        <p class="text-body-sm-style text-error text-center">
          Error: ${t.message}
        </p>
      </div>
    `;e.innerHTML=r,n.innerHTML=r}}function E(e){return`
    <div id="${e.campaignPath}" class="grid-card feature-card p-0 flex flex-col gap-4 overflow-hidden rounded-b-none border-b-4 border-b-accent cursor-pointer animate-fade-in">
      <img src="${t+e.thumbUrl}" class="w-full h-full aspect-4/3 bg-page-bg object-cover object-center" alt="${e.name} Image" />
      <div class="flex flex-col gap-3 px-4 pb-4">
        <h4 class="text-text-1">${e.name}</h4>
        <p class="text-caption text-accent">
          ${e.date}
        </p>
      </div>
    </div>
  `}function D(e,t){let n=0;t.innerHTML=e.slice(n,n+6).map(e=>E(e)).join(``),n+=6;function r(){t.insertAdjacentHTML(`beforeend`,e.slice(n,n+6).map(e=>E(e)).join(``)),n+=6,n>=e.length&&document.getElementById(`see-more-campaigns-button`).remove()}e.length>6&&(t.insertAdjacentHTML(`afterend`,`
      <button id="see-more-campaigns-button" class="btn btn-ghost self-end">See more →</button>
    `),document.getElementById(`see-more-campaigns-button`).addEventListener(`click`,r))}function O(n){document.getElementById(`carousel-backdrop`)?.remove(),document.getElementById(`carousel-details`)?.remove();let r=`
    <div id="carousel-backdrop"
      class="h-screen w-screen bg-black/50 fixed inset-0 z-60 transition-opacity duration-300 ease-out">
    </div>
    <div id="carousel-details" class="flex flex-col gap-2 fixed z-70 main-container top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-fade-in">
      <button aria-label="Close" id="close-campaign-details"
        class="self-end flex flex-col gap-1.5 cursor-pointer">
        <span class="w-6 h-0.5 bg-accent translate-y-1 rotate-45 block"></span>
        <span class="w-6 h-0.5 bg-accent -translate-y-1 -rotate-45 block"></span>
      </button>
      <div class="bg-card border border-border rounded-2xl p-7 flex max-sm:flex-col justify-center items-center gap-7">
        <div class="flex-1 flex items-center">
          <img src="${t+n.thumbUrl}" alt="${n.name} Image"
            class="max-w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl object-cover object-center" />
        </div>
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">${n.date}</p>
          <h2 class="text-text-1">${n.name}</h2>
          <p class="text-body-style text-text-2">
            ${n.description}
          </p>
          <div class="flex flex-wrap gap-6">
            ${n.metrics.map(e=>`
              <div class="flex flex-col items-center bg-accent/10 px-4 py-2 rounded-lg">
                <p class="font-display text-heading-2/heading-2 font-bold text-accent">
                  ${e.metricValue}
                </p>
                <p class="text-body-sm-style text-text-2 mt-1">${e.metricName}</p>
              </div>
            `).join(``)}
          </div>  
        </div>
      </div>
    </div>
  `;document.getElementById(`app-container`).insertAdjacentHTML(`beforebegin`,r);let i=new AbortController,{signal:a}=i,o=document.getElementById(`carousel-backdrop`),s=document.getElementById(`carousel-details`);document.body.classList.add(`overflow-hidden`),e(s,a);function c(){o.classList.add(`opacity-0`),s.classList.remove(`animate-fade-in`),s.classList.add(`animate-fade-out`,`opacity-0`),i.abort(),setTimeout(()=>{s.remove(),o.remove(),document.body.classList.remove(`overflow-hidden`)},300)}o.addEventListener(`click`,c,{signal:a}),document.getElementById(`close-campaign-details`).addEventListener(`click`,c,{signal:a}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&c()},{signal:a})}function k(e){return`
    <div class="flex-1 flex items-center">
      <img src="${t+e.thumbUrl}" alt="${e.name} Image"
        class="max-w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl object-cover object-center" />
    </div>

    <div class="flex-1 flex flex-col items-start gap-5">
      <p class="text-overline-style text-accent">${e.date}</p>
      <h2 class="text-text-1">${e.name}</h2>
      <p class="text-body-style text-text-2">
        ${e.description}
      </p>
      <div class="flex flex-wrap gap-6">
        ${e.metrics.map(e=>`
          <div class="flex flex-col items-center bg-accent/10 px-4 py-2 rounded-lg">
            <p class="font-display text-heading-2/heading-2 font-bold text-accent">
              ${e.metricValue}
            </p>
            <p class="text-body-sm-style text-text-2 mt-1">${e.metricName}</p>
          </div>
        `).join(``)}
      </div>  
    </div>
  `}function A(e,t){document.getElementById(`carousel-dots`).innerHTML=e.map((e,t)=>`
    <div class="dot w-${t===0?`5`:`2`} h-2 rounded-full bg-${t===0?`accent`:`border-soft`} transition-all duration-300 ease-in-out"></div>
  `).join(``);let n=document.getElementById(`carousel-dots`).querySelectorAll(`.dot`),r=0;function i(i){r=(i+e.length)%e.length,t.classList.add(`opacity-0`),setTimeout(()=>{t.innerHTML=k(e[r]),t.classList.remove(`opacity-0`)},600),n.forEach((e,t)=>{t===r?(e.classList.add(`w-5`,`bg-accent`),e.classList.remove(`w-2`,`bg-border-soft`)):(e.classList.remove(`w-5`,`bg-accent`),e.classList.add(`w-2`,`bg-border-soft`))})}function a(){clearInterval(w),w=setInterval(()=>i(r+1),5e3)}document.getElementById(`carousel-nav-prev`).addEventListener(`click`,()=>{i(r-1),a()}),document.getElementById(`carousel-nav-next`).addEventListener(`click`,()=>{i(r+1),a()}),n.forEach((e,t)=>{e.addEventListener(`click`,()=>{i(t),a()})}),w=setInterval(()=>i(r+1),5e3)}function j(){clearInterval(w),w=null,document.getElementById(`see-more-campaigns-button`)?.remove(),document.getElementById(`carousel-details`)?.remove(),document.getElementById(`carousel-backdrop`)?.remove(),document.body.classList.remove(`overflow-hidden`)}function M(){return`
  <div class="bg-surface animate-fade-in">
    <section id="head-section" class="bg-page-bg border-b border-border">
      <div id="head-inner" class="dark main-container flex flex-col gap-5 items-center pt-14 pb-12">
        <p class="text-overline-style text-accent">our portfolio</p>
        <h1 class="text-text-1">Campaigns we're proud of</h1>
        <p class="text-body-lg-style text-text-2">
          A closer look at the partnerships we've built and the results they've delivered.
        </p>
      </div>
    </section>

    <section id="portfolio-carousel">
      <div
        class="main-container flex flex-col gap-4 py-12 border-b border-border">
        <p class="text-overline-style text-accent">featured</p>

        <div id="carousel-slide" class="bg-card border border-border rounded-2xl p-7 flex max-sm:flex-col justify-center items-center gap-7 transition-opacity duration-500 ease-in-out">
        </div>

        <div class="flex justify-between items-center gap-4 w-full">
          <button id="carousel-nav-prev" class="text-accent cursor-pointer" aria-label="Previous Campaign">
            <img src="${S}" class="w-8 h-8" alt="Previous Campaign" />
          </button>

          <div id="carousel-dots" class="flex justify-center gap-2">
          </div>

          <button id="carousel-nav-next" class="text-accent cursor-pointer" aria-label="Next Campaign">
            <img src="${C}" class="w-8 h-8" alt="Next Campaign" />
          </button>
        </div>
      </div>
    </section>

    <section id="portfolio-campaigns">
      <div class="main-container flex flex-col gap-10 pt-12 pb-24">
        <div class="flex flex-col items-center gap-5">
          <p class="text-overline-style text-accent ml-1">campaigns</p>
          <h2 class="text-text-1">Browse our work</h2>
        </div>

        <div id="campaigns-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        </div>

      </div>
    </section>

    <!--------------------------------------------------- CTA --------------------------------------------------------------->
    <section id="cta-section" class="bg-page-bg border-t border-border">
      <div class="dark main-container flex flex-col items-center gap-5 py-16">
        <h2 class="text-text-1">Want results like these?</h2>
        <p class="text-body-style text-text-2">
          Tell us what you're working on - we'll respond within 48 hours.
        </p>
        <a href="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  </div>`}async function N(){let e=document.getElementById(`privacy-policy-content`);e.innerHTML=`
    <div class="col-span-3 flex justify-center h-full py-36">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;try{let n=await fetch(`${t}/data/privacy.html`);if(!n.ok)throw Error(n.status);e.innerHTML=await n.text(),P()}catch(t){console.log(t),e.innerHTML=`
      <div class="min-h-100 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl">
        <img src="${x}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Privacy policy not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load the privacy policy
        </p>
        <p class="text-body-sm-style text-error text-center">Error: ${t.message}</p>
      </div>
    `}}function P(){let e=document.querySelectorAll(`#privacy-sidebar-nav a[data-hash]`),t=Array.from(e).map(e=>document.getElementById(e.dataset.hash)).filter(Boolean);function n(t){e.forEach(e=>{e.dataset.hash===t?e.classList.add(`active`):e.classList.remove(`active`)})}let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target.id)})},{rootMargin:`-10% 0px -80% 0px`,threshold:0});t.forEach(e=>r.observe(e)),e.forEach(e=>{e.addEventListener(`click`,()=>{n(e.dataset.hash)})})}function F(){return`
    <div class="bg-surface animate-fade-in">
      <section id="head-section" class="bg-page-bg border-b border-border">
        <div id="head-inner" class="dark main-container flex flex-col gap-5 pt-14 pb-12">
          <p class="text-overline-style text-accent">legal</p>
          <h1 class="text-text-1">Privacy policy</h1>
          <p class="text-body-lg-style text-text-2">
            Last updated October 27, 2025
          </p>
        </div>
      </section>
        
      <section id="privacy-policy-content">
      </section>

    </div>
  `}var ae=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23047857'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M22%2011.08V12a10%2010%200%201%201-5.93-9.14'%3e%3c/path%3e%3cpolyline%20points='22%204%2012%2014.01%209%2011.01'%3e%3c/polyline%3e%3c/svg%3e`,I=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='4'%3e%3c/circle%3e%3cpath%20d='M16%208v5a3%203%200%200%200%206%200v-1a10%2010%200%201%200-3.92%207.94'%3e%3c/path%3e%3c/svg%3e`,L=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M22%2016.92v3a2%202%200%200%201-2.18%202%2019.79%2019.79%200%200%201-8.63-3.07%2019.5%2019.5%200%200%201-6-6%2019.79%2019.79%200%200%201-3.07-8.67A2%202%200%200%201%204.11%202h3a2%202%200%200%201%202%201.72%2012.84%2012.84%200%200%200%20.7%202.81%202%202%200%200%201-.45%202.11L8.09%209.91a16%2016%200%200%200%206%206l1.27-1.27a2%202%200%200%201%202.11-.45%2012.84%2012.84%200%200%200%202.81.7A2%202%200%200%201%2022%2016.92z'%3e%3c/path%3e%3c/svg%3e`,R=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%3e%3c/circle%3e%3cpolyline%20points='12%206%2012%2012%2016%2014'%3e%3c/polyline%3e%3c/svg%3e`,z=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234DA6FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%3e%3c/circle%3e%3cline%20x1='12'%20y1='16'%20x2='12'%20y2='12'%3e%3c/line%3e%3cline%20x1='12'%20y1='8'%20x2='12.01'%20y2='8'%3e%3c/line%3e%3c/svg%3e`;function B(){window.hcaptcha.render(`hcaptcha-widget`,{sitekey:`50b2fe65-b00b-4b9e-ad62-3ba471098be2`,theme:document.documentElement.classList.contains(`dark`)?`dark`:`light`,size:window.innerWidth<768?`compact`:`normal`})}async function V(e,t){if(t.preventDefault(),!H(e))return;if(!window.hcaptcha?.getResponse()){q(e,`Please complete the captcha.`);return}let n=e.querySelector(`button[type="submit"]`);n.disabled=!0,n.classList.add(`text-text-3`);let r=new FormData(e);r.delete(`g-recaptcha-response`),r.append(`access_key`,`32669c55-bd87-4cb8-a80d-1aeac67894b1`);try{let t=await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{Accept:`application/json`},body:r})).json();if(t.success)K(e);else throw Error(t.message)}catch(t){q(e,t),n.disabled=!1,n.classList.remove(`text-text-3`),window.hcaptcha?.reset()}}function H(e){let t=!0;return e.querySelectorAll(`input, textarea`).forEach(e=>{e.closest(`#hcaptcha-widget`)||(e.dataset.listenerAttached||(e.addEventListener(`input`,()=>{U(e)}),e.dataset.listenerAttached=`true`),U(e)||(t=!1))}),t}function U(e){G(e);let t=e.value.trim();return e.getAttribute(`name`)===`email`&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(W(e,`Please enter a valid email`),!1):!t||t.length<5?(W(e,`Please fill out this field with at least 5 characters`),!1):!0}function W(e,t){e.classList.add(`focus-visible:ring-error`,`focus:ring-error`),e.insertAdjacentHTML(`afterend`,`
    <p role="alert" class="field-error text-body-sm-style text-error animate-fade-in">${t}</p>
  `)}function G(e){let t=e.nextElementSibling;t?.classList.contains(`field-error`)&&t.remove(),e.classList.remove(`focus-visible:ring-error`,`focus:ring-error`)}function K(e){e.setAttribute(`aria-hidden`,`true`),e.insertAdjacentHTML(`beforeend`,`
    <div role="alert" class="animate-fade-in flex flex-col gap-2 items-center justify-center absolute inset-5 rounded-2xl bg-card z-10">
      <img src="${ae}" class="w-8 h-8" alt="Success Icon" />
      <h4 class="text-text-1">Message sent</h4>
      <p class="text-body-sm-style text-text-2">
        We'll be in touch within 48 hours.
      </p>
    </div>
  `)}function q(e,t){let n=e.querySelector(`.form-error`);n&&n.remove(),e.insertAdjacentHTML(`beforeend`,`
    <div role="alert" class="animate-fade-in form-error flex flex-col gap-2 items-center justify-center rounded-2xl bg-card pointer-events-none mt-2">
      <img src="${x}" class="w-8 h-8" alt="Alert Icon" />
      <h4 class="text-text-1">Message not sent</h4>
      <p class="text-body-sm-style text-error text-center">
        ${t}
      </p>
    </div>
  `)}function J(){let e=document.getElementById(`contact-us-form`);if(e){if(window.hcaptcha)window.hcaptcha.reset(),B();else{window.onHcaptchaLoad=B;let e=document.createElement(`script`);e.src=`https://js.hcaptcha.com/1/api.js?onload=onHcaptchaLoad&render=explicit`,document.head.appendChild(e)}e.addEventListener(`submit`,t=>V(e,t))}}function oe(){return`
  <div class="bg-surface animate-fade-in">
    <section id="contact-us-split">
      <div class="main-container flex max-sm:flex-col justify-between gap-16 py-24">
        <div class="flex-1 flex flex-col gap-5">
          <p class="text-overline-style text-accent sm:hidden">send us a message</p>
          <!--------------------------------------------------- Contact form --------------------------------------------------------------->
          <form id="contact-us-form" class="flex flex-col gap-2 p-7 bg-card border border-border rounded-2xl relative">
            <label for="contact-name" class="text-body-style text-text-2 mb-1">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="John Smith" class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"/>
            <label for="contact-email" class="text-body-style text-text-2 mt-4 mb-1">Email</label>
            <input id="contact-email" name="email" type="text" placeholder="john@email.com" class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"/>
            <label for="contact-message" class="text-body-style text-text-2 mt-4 mb-1">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell us what you're working on..." class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"></textarea>
            <div class="h-captcha self-center my-4" id="hcaptcha-widget"></div>
            <button type="submit" class="btn btn-primary self-center">Submit</button>
          </form>
        </div>
        
        <!--------------------------------------------------- Other contacts --------------------------------------------------------------->
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">connect with us</p>
          <h2 class="text-text-1">Other ways to reach us</h2>
          <p class="text-body-style text-text-2">
            Prefer email or a quick message? We're available through either, and respond just as quickly.
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${I}" class="w-5 h-5" alt="@"/>
              </div>
              <a href="mailto:baig.faizan1999@gmail.com" target="_blank" class="text-body-style text-accent">baig.faizan1999@gmail.com</a>
            </div>
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${L}" class="w-5 h-5" alt="Phone"/>
              </div>
              <a href="https://wa.me/918861088019" target="_blank" class="text-body-style text-accent">+91 88610 88019</a>
            </div>
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${R}" class="w-5 h-5" alt="Clock"/>
              </div>
              <p class="text-body-style text-text-2">Replies within 48 hours</p>
            </div>
          </div>
          <!--------------------------------------------------- Trust card ---------------------------------------------------------------->
          <div class="bg-card border border-border rounded-xl px-7 py-4 flex max-md:flex-col max-md:self-center max-md:text-center gap-7 items-center mt-5">
            <img src="${z}" class="w-8 h-8" alt="Info Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Your information stays private</h4>
              <p class="text-body-sm-style text-text-2">
                We never share your details with third parties. See our <a href="/privacy" class="btn btn-ghost text-body-sm-style text-accent font-normal">privacy policy.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  `}function se(){return`
  <div class="bg-page-bg animate-fade-in">
    <div class="dark main-container flex justify-center pt-28 pb-24">
      <div class="flex flex-col items-center gap-5">
        <p class="text-overline-style text-accent">
          page not found
        </p>
        <h1 class="text-text-1 -ml-2">
          404
        </h1>
        <p class="text-body-lg-style text-text-2">
          The page you are trying to reach doesn't exist.
        </p>
        <a href="/" class="btn btn-ghost self-end">Go to home →</a>
      </div>
    </div>
  </div>
  `}var ce={"/":m,"/about":ee,"/services":b,"/portfolio":M,"/contact":oe,"/privacy":F},le={"/":`Amplidia`,"/about":`About Us | Amplidia`,"/services":`Services | Amplidia`,"/portfolio":`Portfolio | Amplidia`,"/contact":`Contact Us | Amplidia`,"/privacy":`Privacy Policy | Amplidia`},Y=null,X=document.getElementById(`app-container`);X.insertAdjacentHTML(`beforebegin`,a()),X.insertAdjacentHTML(`afterend`,l()),i(),n();function Z(){return window.location.pathname.replace(t,``)||`/`}async function Q(){window.location.pathname===`/index.html`&&history.replaceState(null,``,`/`);let e=Z();Y=e,$(e),window.location.hash||window.scrollTo(0,0),X.innerHTML=`
    <div id="page-loader" role="status" aria-busy="true" aria-label="Loading"
      class="flex justify-center items-center fixed inset-0 z-60 bg-page-bg h-screen pb-15"
      >
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;let t=ce[e]??se;document.title=le[e]??`404 | Amplidia`,X.innerHTML=t(),e===`/contact`&&J(),e===`/privacy`&&await N(),e===`/portfolio`?await T():j(),document.getElementById(`initial-loader`)?.remove()}function $(e){let t=e===`/`?`home`:e.replace(`/`,``);document.getElementById(`burger-nav-links`).querySelectorAll(`a`).forEach(e=>{e.dataset.page===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}document.addEventListener(`click`,e=>{let n=e.target.closest(`a`);n&&n.target!==`_blank`&&(n.href&&!n.href.startsWith(window.location.origin)||n.getAttribute(`href`).startsWith(`#`)||(e.preventDefault(),history.pushState(null,``,t+n.getAttribute(`href`)),Q().catch(console.error)))}),window.addEventListener(`popstate`,()=>{Y!==Z()&&Q().catch(console.error)}),Q().catch(console.error);