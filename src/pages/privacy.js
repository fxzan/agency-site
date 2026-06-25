import alertIcon from "../assets/alert-circle.svg";

export async function initPrivacyPolicy() {
  const privacySection = document.getElementById("privacy-policy-content");

  //--- Insert loading spinner before fetch -------------------------------------------------------------------
  privacySection.innerHTML = `
    <div class="col-span-3 flex justify-center h-full py-36">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  try {
    const response = await fetch("/data/privacy.html");

    if (!response.ok) throw new Error(response.status);

    const html = await response.text();

    privacySection.innerHTML = html;
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

export default function renderPrivacyPolicy() {
  return `
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
  `;
}
