export default function render404() {
  return `
  <div class="animate-fade-in">
    <div class="bg-page-bg">
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
  </div>
  `;
}
