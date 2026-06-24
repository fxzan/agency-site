import amplidiaIcon from "../assets/amplidia-icon.svg";
import homeHeroImage from "../assets/img-home-hero.avif";
import homeImage1 from "../assets/img-home-1.avif";
import calendarIcon from "../assets/calendar.svg";
import lineChartIcon from "../assets/line-chart.svg";

export default function renderHome() {
  return `
  <div class="animate-fade-in">
    <section id="hero-section" class="bg-page-bg border-b border-border">
      <div id="hero-inner" class="dark main-container flex justify-between items-center gap-16 pt-28 pb-24">
        <div class="flex-1 flex flex-col gap-5">
          <p class="text-overline-style text-accent">
            amplify your influence
          </p>
          <h1 class="text-text-1 -ml-2">
            <img src="${amplidiaIcon}" class="w-14 h-14 inline -translate-y-1.5" alt="A" />mplidia
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

        <div class="flex-1 max-sm:hidden">
          <img src="${homeHeroImage}" alt="Hero Section Visual"
            class="w-full aspect-3/4 md:aspect-4/3 rounded-2xl bg-page-bg object-cover object-center" />
        </div>
      </div>
    </section>

    <section id="about-us-teaser">
      <div
        class="main-container flex max-sm:flex-col-reverse justify-between items-center gap-16 py-24 border-b border-border">
        <div class="flex-1 flex items-center">
          <img src="${homeImage1}" alt="About Us Section Visual"
            class="max-w-full w-100 aspect-4/3 sm:aspect-3/4 md:aspect-4/3 bg-page-bg rounded-2xl object-cover object-center" />
        </div>

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

    <section id="services-teaser">
      <div class="main-container flex max-md:flex-col justify-between gap-10 py-24 border-b border-border">
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">what we do</p>
          <h2 class="text-text-1">Every layer of your campaign</h2>
          <p class="text-body-style text-text-2">
            Driving measurable growth for both brands and creators.<br />
            Co-ordination, strategy, analytics; we'll take care of it.
          </p>
        </div>

        <div class="flex-1 grid grid-cols-1 gap-4">
          <div class="feature-card flex gap-7 items-center">
            <img src="${calendarIcon}" class="w-8 h-8" alt="Calendar Icon" />
            <div class="flex flex-col gap-3">
              <h4 class="text-text-1">Campaign Strategy & Management</h4>
              <p class="text-body-sm-style text-text-2">
                Aligning goals and directions; delivering on-time and on-brand
              </p>
            </div>
          </div>

          <div class="feature-card flex gap-7 items-center">
            <img src="${lineChartIcon}" class="w-8 h-8" alt="Line Chart Icon" />
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
  `;
}
