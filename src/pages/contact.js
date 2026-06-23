import successIcon from "../assets/check-circle.svg"
import alertIcon from "../assets/alert-circle.svg";
import atSignIcon from "../assets/at-sign.svg";
import phoneIcon from "../assets/phone.svg";
import clockIcon from "../assets/clock.svg";
import infoIcon from "../assets/info.svg";

export function initContact() {
  const form = document.getElementById('contact-us-form');

  if(!form) return

  if (!window.hcaptcha) {
    window.onHcaptchaLoad = renderHcaptcha;

    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js?onload=onHcaptchaLoad&render=explicit';
    document.head.appendChild(script);

  } else {
    renderHcaptcha();
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const captchaToken = window.hcaptcha?.getResponse();
    if (!captchaToken) {
      showError(form, 'Please complete the captcha.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.classList.add('text-text-3');

    const formData = new FormData(form);
    formData.delete('g-recaptcha-response')
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        showSuccess(form);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      showError(form, error);
      submitBtn.disabled = false;
      submitBtn.classList.remove('text-text-3');
      window.hcaptcha?.reset();
    }
  });
}

function renderHcaptcha() {
  window.hcaptcha.render('hcaptcha-widget', {
    sitekey: import.meta.env.VITE_HCAPTCHA_SITEKEY
  });
}

function validateForm (form) {

  let isValid = true

  form.querySelectorAll('input, textarea').forEach(inputField => {
    if (inputField.closest('#hcaptcha-widget')) return;

    if (!inputField.dataset.listenerAttached) {
      inputField.addEventListener('input', () => {
        validateInputField(inputField);
      })
      inputField.dataset.listenerAttached = 'true';
    }

    if(!validateInputField(inputField))
      isValid = false
  });

  return isValid
}

function validateInputField (inputField) {
  clearFieldError(inputField);
  const value = inputField.value.trim();
  if (inputField.getAttribute('name') === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    showFieldError(inputField, 'Please enter a valid email')
    return false;
  } else if (!value || value.length < 5) {
    showFieldError(inputField, 'Please fill out this field with at least 5 characters')
    return false;
  }
  return true;
}

function showFieldError (inputField, message) {
  inputField.classList.add('focus-visible:ring-error', 'focus:ring-error')
  inputField.insertAdjacentHTML('afterend', `
    <p class="field-error text-body-sm-style text-error animate-fade-in">${message}</p>
  `)
}

function clearFieldError (inputField) {
  const fieldErrorText = inputField.nextElementSibling
  if (fieldErrorText?.classList.contains('field-error'))
    fieldErrorText.remove();

  inputField.classList.remove('focus-visible:ring-error', 'focus:ring-error');
}

function showSuccess(form) {
  form.setAttribute('aria-hidden', 'true');
  form.insertAdjacentHTML('beforeend', `
    <div class="animate-fade-in flex flex-col gap-2 items-center justify-center absolute inset-5 rounded-2xl bg-card z-10">
      <img src="${successIcon}" class="w-8 h-8" alt="Success Icon" />
      <h4 class="text-text-1">Message sent</h4>
      <p class="text-body-sm-style text-text-2">
        We'll be in touch within 48 hours.
      </p>
    </div>
  `);
}

function showError(form, message) {
  const existing = form.querySelector('.form-error');
  if (existing) existing.remove();
  form.insertAdjacentHTML('beforeend', `
    <div class="animate-fade-in form-error flex flex-col gap-2 items-center justify-center rounded-2xl bg-card pointer-events-none mt-2">
      <img src="${alertIcon}" class="w-8 h-8" alt="Alert Icon" />
      <h4 class="text-text-1">Message not sent</h4>
      <p class="text-body-sm-style text-error text-center">
        ${message}
      </p>
    </div>
  `);
}

export default function renderContact() {
  return `
  <div class="animate-fade-in">
    <section id="contact-us-split">
      <div class="main-container flex max-sm:flex-col justify-between gap-16 py-24">
        <div class="flex-1 flex flex-col gap-5">
          <p class="text-overline-style text-accent sm:hidden">send us a message</p>
          <form id="contact-us-form" class="flex flex-col gap-2 p-7 bg-card border border-border rounded-2xl relative">
            <label class="text-body-style text-text-2 mb-1">Name</label>
            <input name="name" type="text" placeholder="John Smith" class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"/>
            <label class="text-body-style text-text-2 mt-4 mb-1">Email</label>
            <input name="email" type="text" placeholder="john@email.com" class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"/>
            <label class="text-body-style text-text-2 mt-4 mb-1">Message</label>
            <textarea name="message" rows="4" placeholder="Tell us what you're working on..." class="text-body-lg-style text-text-1 border border-border bg-surface rounded-lg px-3 py-2"></textarea>
            <div class="h-captcha self-center my-4" id="hcaptcha-widget"></div>
            <button type="submit" class="btn btn-primary self-center">Submit</button>
          </form>
        </div>
        
        <div class="flex-1 flex flex-col items-start gap-5">
          <p class="text-overline-style text-accent">connect with us</p>
          <h2 class="text-text-1">Other ways to reach us</h2>
          <p class="text-body-style text-text-2">
            Prefer email or a quick message? We're available through either, and respond just as quickly.
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${atSignIcon}" class="w-5 h-5" alt="@"/>
              </div>
              <a href="mailto:info@amplidia.com" target="_blank" class="text-body-style text-accent">info@amplidia.com</a>
            </div>
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${phoneIcon}" class="w-5 h-5" alt="Phone"/>
              </div>
              <a href="https://wa.me/918861088019" target="_blank" class="text-body-style text-accent">+91 88610 88019</a>
            </div>
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent/20 rounded-lg">
                <img src="${clockIcon}" class="w-5 h-5" alt="Clock"/>
              </div>
              <p class="text-body-style text-text-2">Replies within 48 hours</p>
            </div>
          </div>
          <div class="bg-card border border-border rounded-xl px-7 py-4 flex max-md:flex-col max-md: self-center max-md:text-center gap-7 items-center mt-5">
            <img src="${infoIcon}" class="w-8 h-8" alt="Info Icon" />
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
  `
}