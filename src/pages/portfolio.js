import alertIcon from "../assets/alert-circle.svg";
import chevronLeft from "../assets/chevron-left.svg";
import chevronRight from "../assets/chevron-right.svg";

import {trapFocus} from "../js/utils";

let autoAdvanceTimer = null;

export async function initPortfolio() {
  const grid = document.getElementById("campaigns-grid");
  const slideBox = document.getElementById("carousel-slide");

  try {
    slideBox.innerHTML = `
    <div class="flex justify-center py-44">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
    `
    grid.innerHTML = `
    <div class="col-span-3 flex justify-center py-12">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
    `
    const response = await fetch("/data/campaigns.json");
    const campaigns = await response.json();

    if (!response.ok) throw new Error(response.status);
    
    const featured = campaigns.filter((c) => c.featured);

    slideBox.innerHTML = renderCarouselSlide(featured[0]);
    grid.innerHTML = campaigns.map((c) => renderGridCard(c)).join("");

    grid.querySelectorAll('.grid-card').forEach(gridCard => {
      gridCard.addEventListener('click', () => {
        renderCampaignDetails(campaigns.find(c => c.campaignPath === gridCard.id))
      })
    })

    initCarousel(featured, slideBox);
  } catch (error) {
    console.log(error);
    const errorContent = `
      <div class="min-h-100 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl bg-card">
        <img src="${alertIcon}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Campaigns not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load campaigns
        </p>
        <p class="text-body-sm-style text-error text-center">
          Error code: ${error.message}
        </p>
      </div>
    `;
    grid.innerHTML = errorContent;
    slideBox.innerHTML = errorContent;
  }
}

function renderCampaignDetails(campaign) {
  const campaignDetails = `
    <div id="carousel-backdrop"
      class="h-screen w-screen bg-black/50 fixed inset-0 z-60 transition-opacity duration-300 ease-out">
    </div>
    <div id="carousel-details" class="flex flex-col gap-2 fixed z-70 main-container top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-fade-in">
      <button aria-label="Close" id="close-campaign-details"
        class="self-end flex flex-col gap-1.5 cursor-pointer z-10">
        <span class="w-6 h-0.5 bg-accent translate-y-1 rotate-45 block"></span>
        <span class="w-6 h-0.5 bg-accent -translate-y-1 -rotate-45 block"></span>
      </button>
      <div class="bg-card border border-border rounded-2xl p-7 flex max-sm:flex-col justify-center items-center gap-7">
        <div class="flex-1 flex items-center">
          <img src="${campaign.thumbUrl}" alt="${campaign.name} Image"
            class="max-w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl object-cover object-center" />
        </div>
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">${campaign.date}</p>
          <h2 class="text-text-1">${campaign.name}</h2>
          <p class="text-body-style text-text-2">
            ${campaign.description}
          </p>
          <div class="flex flex-wrap gap-6">
            ${campaign.metrics
          .map(
            (m) => `
              <div class="flex flex-col items-center bg-accent/10 px-4 py-2 rounded-lg">
                <p class="font-display text-heading-2/heading-2 font-bold text-accent">
                  ${m.metricValue}
                </p>
                <p class="text-body-sm-style text-text-2 mt-1">${m.metricName}</p>
              </div>
            `,
          )
          .join("")}
          </div>  
        </div>
      </div>
    </div>
  `
  document.getElementById('app-container').insertAdjacentHTML('beforebegin', campaignDetails);

  const controller = new AbortController();
  const { signal } = controller; //controller.signal

  const carouselBackdrop = document.getElementById('carousel-backdrop');
  const carouselDetails = document.getElementById('carousel-details');
  
  document.body.classList.add('overflow-hidden');
  trapFocus(carouselBackdrop, signal)
  
  function closeCampaign () {
    carouselBackdrop.classList.add('opacity-0')
    carouselDetails.classList.remove('animate-fade-in')
    carouselDetails.classList.add('animate-fade-out', 'opacity-0');
    controller.abort();
    setTimeout(() => {
      carouselDetails.remove();
      carouselBackdrop.remove();
      document.body.classList.remove('overflow-hidden');
    }, 300)
  }

  carouselBackdrop.addEventListener('click', closeCampaign, { signal: signal });
  document.getElementById('close-campaign-details').addEventListener('click', closeCampaign, { signal }); //shorthand used
  
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeCampaign();
  }, { signal })
}

function renderGridCard(gridCampaign) {
  return `
    <div id="${gridCampaign.campaignPath}" class="grid-card feature-card p-0 flex flex-col gap-4 overflow-hidden rounded-b-none border-b-4 border-b-accent cursor-pointer">
      <img src="${gridCampaign.thumbUrl}" class="w-full h-full aspect-4/3 bg-accent object-cover object-center" alt="${gridCampaign.name} Image" />
      <div class="flex flex-col gap-3 px-4 pb-4">
        <h4 class="text-text-1">${gridCampaign.name}</h4>
        <p class="text-caption text-accent">
          ${gridCampaign.date}
        </p>
      </div>
    </div>
  `;
}

function renderCarouselSlide(campaignSlide) {
  return `
    <div class="flex-1 flex items-center">
      <img src="${campaignSlide.thumbUrl}" alt="${campaignSlide.name} Image"
        class="max-w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/3 rounded-2xl object-cover object-center" />
    </div>

    <div class="flex-1 flex flex-col items-start gap-5">
      <p class="text-overline-style text-accent">${campaignSlide.date}</p>
      <h2 class="text-text-1">${campaignSlide.name}</h2>
      <p class="text-body-style text-text-2">
        ${campaignSlide.description}
      </p>
      <div class="flex flex-wrap gap-6">
        ${campaignSlide.metrics
      .map(
        (m) => `
          <div class="flex flex-col items-center bg-accent/10 px-4 py-2 rounded-lg">
            <p class="font-display text-heading-2/heading-2 font-bold text-accent">
              ${m.metricValue}
            </p>
            <p class="text-body-sm-style text-text-2 mt-1">${m.metricName}</p>
          </div>
        `,
      )
      .join("")}
      </div>  
    </div>
  `;
}

function initCarousel(featuredCampaigns, slideContainer) {
  document.getElementById("carousel-dots").innerHTML = featuredCampaigns
    .map(
      (_, i) => `
    <div class="dot w-${i === 0 ? "5" : "2"} h-2 rounded-full bg-${i === 0 ? "accent" : "border-soft"} transition-all duration-300 ease-in-out"></div>
  `,
    )
    .join("");

  const dotsArray = document
    .getElementById("carousel-dots")
    .querySelectorAll(".dot");

  let current = 0;

  function navigateSlide(index) {
    current = (index + featuredCampaigns.length) % featuredCampaigns.length;
    slideContainer.classList.add("opacity-0");

    setTimeout(() => {
      slideContainer.innerHTML = renderCarouselSlide(
        featuredCampaigns[current],
      );
      slideContainer.classList.remove("opacity-0");
    }, 600);

    dotsArray.forEach((dot, i) => {
      if (i === current) {
        dot.classList.add("w-5", "bg-accent");
        dot.classList.remove("w-2", "bg-border-soft");
      } else {
        dot.classList.remove("w-5", "bg-accent");
        dot.classList.add("w-2", "bg-border-soft");
      }
    });
  }

  function resetAutoAdvance() {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = setInterval(() => navigateSlide(current + 1), 5000);
  }

  document.getElementById("carousel-nav-prev").addEventListener("click", () => {
    navigateSlide(current - 1);
    resetAutoAdvance();
  });

  document.getElementById("carousel-nav-next").addEventListener("click", () => {
    navigateSlide(current + 1);
    resetAutoAdvance();
  });

  dotsArray.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      navigateSlide(i);
      resetAutoAdvance();
    });
  });

  autoAdvanceTimer = setInterval(() => navigateSlide(current + 1), 5000);
}

export function destroyPortfolio() {
  clearInterval(autoAdvanceTimer);
  autoAdvanceTimer = null;
}

export default function renderPortfolio() {
  return `
  <div class="animate-fade-in">
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
          <button id="carousel-nav-prev" class="text-accent cursor-pointer">
            <img src="${chevronLeft}" class="w-8 h-8" alt="Previous Campaign" aria-label="Previous Campaign"/>
          </button>

          <div id="carousel-dots" class="flex justify-center gap-2">
          </div>

          <button id="carousel-nav-next" class="text-accent cursor-pointer">
            <img src="${chevronRight}" class="w-8 h-8" alt="Next Campaign" aria-label="Next Campaign"/>
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

    <section id="cta-section" class="bg-page-bg border-t border-border">
      <div class="dark main-container flex flex-col items-center gap-5 py-16">
        <h2 class="text-text-1">Want results like these?</h2>
        <p class="text-body-style text-text-2">
          Tell us what you're working on - we'll respond within 48 hours.
        </p>
        <a href="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  </div>`;
}
