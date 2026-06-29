import alertIcon from "../assets/alert-circle.svg";
import { base } from "../js/utils";

export async function initPrivacyPolicy() {
  const privacySection = document.getElementById("privacy-policy-content");

  //--- Insert loading spinner before fetch -------------------------------------------------------------------
  privacySection.innerHTML = `
    <div class="col-span-3 flex justify-center h-full py-36">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  try {
    const response = await fetch(`${base}/data/privacy.html`);

    if (!response.ok) throw new Error(response.status);

    const html = await response.text();

    privacySection.innerHTML = html;
    initScrollSpy();
    
  } catch (error) {
    console.log(error);
    privacySection.innerHTML = `
      <div class="min-h-100 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl">
        <img src="${alertIcon}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Privacy policy not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load the privacy policy
        </p>
        <p class="text-body-sm-style text-error text-center">Error: ${error.message}</p>
      </div>
    `;
  }
}

function initScrollSpy () {
  const sideLinks = document.querySelectorAll('#privacy-sidebar-nav a[data-hash]');
  const sections = Array.from(sideLinks).map(link => document.getElementById(link.dataset.hash)).filter(Boolean);

  // update navlinks to active
  function setActive(id) {
    sideLinks.forEach(link => {
      if (link.dataset.hash === id) link.classList.add('active');
      else link.classList.remove('active');
    })
  }

  // observer for when section is within top 10% of viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    })
  }, {
    rootMargin: '-10% 0px -80% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section)); //observe each section and callback

  // click event listeners
  sideLinks.forEach(link => {
    link.addEventListener('click', () => {
      setActive(link.dataset.hash);
    });
  });
}

export default function renderPrivacyPolicy() {
  return `
    <div class="bg-surface animate-fade-in">
      <section id="head-section" class="bg-page-bg border-b border-border">
        <div id="head-inner" class="dark main-container flex flex-col gap-5 pt-14 pb-12">
          <p class="text-overline-style text-accent">legal</p>
          <h1 class="text-text-1 animate-fade-in-500">Privacy policy</h1>
          <p class="text-body-lg-style text-text-2 animate-fade-in-700">
            Last updated October 27, 2025
          </p>
        </div>
      </section>
        
      <section id="privacy-policy-content">
      </section>

    </div>
  `;
}
