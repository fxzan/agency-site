import servicesImg from "../assets/img-services.avif";
import checkSquareIcon from "../assets/check-square.svg";
import editIcon from "../assets/edit.svg";
import calendarIcon from "../assets/calendar.svg";
import gridIcon from "../assets/grid.svg";
import usersIcon from "../assets/users.svg";
import lineChartIcon from "../assets/line-chart.svg";

export default function renderServices() {
  return `
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
          <img src="${servicesImg}" alt="Services Section Visual"
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
            <img src="${checkSquareIcon}" class="w-8 h-8" alt="Check Box Ticked Icon" />
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
            <img src="${editIcon}" class="w-8 h-8" alt="Edit Icon" />
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
            <img src="${calendarIcon}" class="w-8 h-8" alt="Calendar Icon" />
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
            <img src="${gridIcon}" class="w-8 h-8" alt="Grid Icon" />
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
            <img src="${usersIcon}" class="w-8 h-8" alt="Users Icon" />
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
            <img src="${lineChartIcon}" class="w-8 h-8" alt="Line Chart Icon" />
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
  `;
}
