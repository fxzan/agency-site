import imgAbout from "../assets/img-about.avif";
import heartIcon from "../assets/heart.svg";
import barChartIcon from "../assets/bar-chart.svg";
import usersIcon from "../assets/users.svg";
import eyeIcon from "../assets/eye.svg";

export default function renderAbout() {
  return `
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
          <img src="${imgAbout}" alt="About Us Section Visual"
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
            <img src="${heartIcon}" class="w-8 h-8" alt="Heart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Authenticity first</h4>
              <p class="text-body-sm-style text-text-2">
                Only genuine creator-brand fit, never forced partnerships.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${barChartIcon}" class="w-8 h-8" alt="Bar Chart Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Results that matter</h4>
              <p class="text-body-sm-style text-text-2">
                Every decision is backed by data, measured against real goals.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${usersIcon}" class="w-8 h-8" alt="Users Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Relationships over transactions</h4>
              <p class="text-body-sm-style text-text-2">
                Long-term partnerships, not one-off deals.
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${eyeIcon}" class="w-8 h-8" alt="Eye Icon" />
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
  `;
}
