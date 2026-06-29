import alertIcon from "../assets/alert-circle.svg";
import chevronLeft from "../assets/chevron-left.svg";
import chevronRight from "../assets/chevron-right.svg";

import { trapFocus } from "../js/utils";

//--- Timer variable for carousel ---------------------------------------------------------------------------
let autoAdvanceTimer = null;

export async function initPortfolio() {
  const grid = document.getElementById("campaigns-grid");
  const slideBox = document.getElementById("carousel-slide");

  //--- Insert loading spinner before fetch -----------------------------------------------------------------
  slideBox.innerHTML = `
    <div class="flex justify-center py-44">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;
  grid.innerHTML = `
    <div class="col-span-3 flex justify-center py-12">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  try {
    const response = await fetch("/data/campaigns.json");

    if (!response.ok) throw new Error(response.status);

    const campaigns = await response.json();

    const featured = campaigns.filter((c) => c.featured);

    //--- Render campaign cards ------------------------------------------------------------------------------
    slideBox.innerHTML = renderCarouselSlide(featured[0]);
    renderGrid(campaigns, grid);

    //--- Attach event listener for cards -------------------------------------------------------------------
    grid.addEventListener("click", (e) => {
      const gridCard = e.target.closest(".grid-card");
      if (!gridCard) return; // if not grid card do nothing

      //--- Render campaign details on click ----------------------------------------------------------------
      renderCampaignDetails(
        campaigns.find((c) => c.campaignPath === gridCard.id)
      );
    });

    grid.addEventListener("keydown", (e) => {
      const gridCard = e.target.closest(".grid-card");
      if (e.key !== 'Enter' && e.key !== ' ') return
      if (!gridCard) return; // if not grid card do nothing

      e.preventDefault();
      e.stopPropagation();

      //--- Render campaign details on enter/space ----------------------------------------------------------
      renderCampaignDetails(
        campaigns.find((c) => c.campaignPath === gridCard.id)
      );
    });

    initCarousel(featured, slideBox);
  } catch (error) {
    console.log(error);
    const errorContent = `
      <div class="min-h-100 sm:col-span-2 md:col-span-3 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl bg-card">
        <img src="${alertIcon}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Campaigns not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load campaigns
        </p>
        <p class="text-body-sm-style text-error text-center">
          Error: ${error.message}
        </p>
      </div>
    `;
    grid.innerHTML = errorContent;
    slideBox.innerHTML = errorContent;
  }
}

//--- Function for rendering each grid card -----------------------------------------------------------------
function renderGridCard(gridCampaign) {
  return `
    <div id="${gridCampaign.campaignPath}" aria-label="${gridCampaign.name}" tabindex="0" role="button"
        class="grid-card feature-card p-0 flex flex-col gap-4 overflow-hidden rounded-b-none border-b-4 border-b-accent cursor-pointer animate-fade-in">
      <img src="${gridCampaign.thumbUrl}" class="w-full h-full aspect-4/3 bg-page-bg object-cover object-center" alt="${gridCampaign.name} Image" />
      <div class="flex flex-col gap-3 px-4 pb-4">
        <h4 class="text-text-1">${gridCampaign.name}</h4>
        <p class="text-caption text-accent">
          ${gridCampaign.date}
        </p>
      </div>
    </div>
  `;
}

//--- Function for rendering grid cards  --------------------------------------------------------------------
function renderGrid(allCampaigns, grid) {
  let indexLast = 0; // tracker for showing more cards button

  //--- Render first batch of grid cards --------------------------------------------------------------------
  grid.innerHTML = allCampaigns
    .slice(indexLast, indexLast + 6)
    .map((c) => renderGridCard(c))
    .join("");
  indexLast += 6;

  //--- Render next batch of grid cards  --------------------------------------------------------------------
  function showMoreCampaigns() {
    grid.insertAdjacentHTML(
      "beforeend",
      allCampaigns
        .slice(indexLast, indexLast + 6)
        .map((c) => renderGridCard(c))
        .join(""),
    );
    indexLast += 6;

    //--- Remove see more button if all cards rendered  -----------------------------------------------------
    if (indexLast >= allCampaigns.length) {
      document.getElementById("see-more-campaigns-button").remove();
    }
  }

  //--- Insert see more button if all cards not rendered (first load) ---------------------------------------
  if (allCampaigns.length > 6) {
    grid.insertAdjacentHTML(
      "afterend",
      `
      <button id="see-more-campaigns-button" class="btn btn-ghost self-end">See more →</button>
    `,
    );
    //--- Attach event listener -----------------------------------------------------------------------------
    document
      .getElementById("see-more-campaigns-button")
      .addEventListener("click", showMoreCampaigns);
  }
}

//--- Function for rendering campaign details ---------------------------------------------------------------
function renderCampaignDetails(campaign) {
  //--- Guard to prevent double render ----------------------------------------------------------------------
  document.getElementById("carousel-backdrop")?.remove();
  document.getElementById("carousel-details")?.remove();

  const campaignDetails = `
    <div id="carousel-backdrop"
      class="h-screen w-screen bg-black/50 backdrop-blur-md fixed inset-0 z-60 transition-opacity duration-300 ease-out">
    </div>
    <div id="carousel-details" class="flex flex-col gap-2 fixed z-70 main-container top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-fade-in">
      <button aria-label="Close" id="close-campaign-details"
        class="self-end flex flex-col gap-1.5 cursor-pointer px-2 py-4 rounded-full">
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
  `;

  //--- Render campaign detail and backdrop -----------------------------------------------------------------
  document
    .getElementById("app-container")
    .insertAdjacentHTML("beforebegin", campaignDetails);

  const controller = new AbortController(); // abort controller for removing event listeners
  const { signal } = controller; //controller.signal

  const carouselBackdrop = document.getElementById("carousel-backdrop");
  const carouselDetails = document.getElementById("carousel-details");

  document.body.classList.add("overflow-hidden");
  trapFocus(carouselDetails, signal); //focus trap
  
  //--- Function to close campaign details ------------------------------------------------------------------
  function closeCampaign() {
    //--- Transition effects before close -------------------------------------------------------------------
    carouselBackdrop.classList.add("opacity-0");
    carouselDetails.classList.remove("animate-fade-in");
    carouselDetails.classList.add("animate-fade-out", "opacity-0"); // guard incase animation ends before timeout
    controller.abort();
    //--- Close after transition end ------------------------------------------------------------------------
    setTimeout(() => {
      carouselDetails.remove();
      carouselBackdrop.remove();
      document.body.classList.remove("overflow-hidden");
    }, 300);
  }

  //--- Attach event listeners ------------------------------------------------------------------------------
  carouselBackdrop.addEventListener("click", closeCampaign, { signal: signal });
  document
    .getElementById("close-campaign-details")
    .addEventListener("click", closeCampaign, { signal }); //shorthand used
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") closeCampaign();
    },
    { signal },
  );
}

//--- Function to render carousel card ----------------------------------------------------------------------
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

//--- Function for carousel rendering -----------------------------------------------------------------------
function initCarousel(featuredCampaigns, slideContainer) {
  //--- Insert carousel dots --------------------------------------------------------------------------------
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

  let current = 0; // tracker to track carousel slides + dots

  //--- Navigate previous/next slide -----------------------------------------------------------------------
  function navigateSlide(index) {
    current = (index + featuredCampaigns.length) % featuredCampaigns.length;
    //--- Transition effect before next/prev slide ---------------------------------------------------------
    slideContainer.classList.add("animate-fade-out", "opacity-0");
    //--- Render after transition time ---------------------------------------------------------------------
    setTimeout(() => {
      slideContainer.innerHTML = renderCarouselSlide(
        featuredCampaigns[current],
      );
      slideContainer.classList.remove("animate-fade-out", "opacity-0");
    }, 600);
    //--- update dots --------------------------------------------------------------------------------------
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

  //--- Reset timer on manual nav --------------------------------------------------------------------------
  function resetAutoAdvance() {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = setInterval(() => navigateSlide(current + 1), 5000);
  }

  //--- Attach event listeners -----------------------------------------------------------------------------
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

  autoAdvanceTimer = setInterval(() => navigateSlide(current + 1), 5000); // auto advance init
}

//--- Clean up ---------------------------------------------------------------------------------------------
export function destroyPortfolio() {
  clearInterval(autoAdvanceTimer);
  autoAdvanceTimer = null;
  document.getElementById("see-more-campaigns-button")?.remove();
  document.getElementById('carousel-details')?.remove();
  document.getElementById('carousel-backdrop')?.remove();
  document.body.classList.remove("overflow-hidden");
}

export default function renderPortfolio() {
  return `
  <div class="bg-surface animate-fade-in">
    <section id="head-section" class="bg-page-bg border-b border-border">
      <div id="head-inner" class="dark main-container flex flex-col gap-5 items-center pt-14 pb-12">
        <p class="text-overline-style text-accent">our portfolio</p>
        <h1 class="text-text-1 animate-fade-in-500">Campaigns we're proud of</h1>
        <p class="text-body-lg-style text-text-2 animate-fade-in-700">
          A closer look at the partnerships we've built and the results they've delivered.
        </p>
      </div>
    </section>

    <section id="portfolio-carousel">
      <div
        class="main-container flex flex-col gap-4 py-12 border-b border-border">
        <p class="text-overline-style text-accent">featured</p>

        <div id="carousel-slide" class="bg-card border border-border rounded-2xl p-7 flex max-sm:flex-col justify-center items-center gap-7 animate-fade-in">
        </div>

        <div class="flex justify-between items-center gap-4 w-full">
          <button id="carousel-nav-prev" class="text-accent cursor-pointer" aria-label="Previous Campaign">
            <img src="${chevronLeft}" class="w-8 h-8" alt="Previous Campaign" />
          </button>

          <div id="carousel-dots" class="flex justify-center gap-2">
          </div>

          <button id="carousel-nav-next" class="text-accent cursor-pointer" aria-label="Next Campaign">
            <img src="${chevronRight}" class="w-8 h-8" alt="Next Campaign" />
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
        <a href="/contact" class="btn btn-primary animate-pulse-accent">Get in touch</a>
      </div>
    </section>
  </div>`;
}
