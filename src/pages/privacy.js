import alertIcon from "../assets/alert-circle.svg"

export default async function renderPrivacyPolicy() {
  try {
    const response = await fetch("/data/privacy.html");
    const html = await response.text();
    
    if (!response.ok) throw new Error(response.status);

    return html;
  } catch(error) {
    console.log(error)
    return `
      <section id="head-section" class="bg-page-bg border-b border-border">
        <div id="head-inner" class="dark main-container flex flex-col gap-5 pt-14 pb-12">
          <p class="text-overline-style text-accent">legal</p>
          <h1 class="text-text-1">Privacy policy</h1>
          <p class="text-body-lg-style text-text-2">
            Last updated October 27, 2025
          </p>
        </div>
      </section>
      <div class="min-h-100 animate-fade-in form-error flex flex-col gap-5 items-center justify-center rounded-2xl">
        <img src="${alertIcon}" class="w-10 h-10" alt="Alert Icon" />
        <h2 class="text-text-1 text-center">Privacy policy not found</h2>
        <p class="text-body-style text-text-2 text-center">
          Failed to load the privacy policy
        </p>
        <p class="text-body-sm-style text-error text-center">Error code: ${error.message}</p>
      </div>
    `
  }
}