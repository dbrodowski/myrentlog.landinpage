const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburgerButton && menu) {
  hamburgerButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const cookieConsentKey = "myrentlog_cookie_consent_v1";

function saveCookieConsent(value) {
  localStorage.setItem(cookieConsentKey, value);
}

function createCookieBanner() {
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.setAttribute("aria-label", "Cookie consent");

  banner.innerHTML = `
    <p>
      We use cookies to improve site performance and user experience. You can accept or reject non-essential cookies.
    </p>
    <div class="cookie-banner-actions">
      <button type="button" class="cookie-btn" data-consent="reject">Reject</button>
      <button type="button" class="cookie-btn" data-consent="accept">Accept</button>
    </div>
  `;

  banner.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const consent = target.getAttribute("data-consent");
    if (!consent) return;
    saveCookieConsent(consent);
    banner.remove();
  });

  document.body.appendChild(banner);
}

if (localStorage.getItem(cookieConsentKey) === null) {
  createCookieBanner();
}
