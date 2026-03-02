// Opening cannons + money FX ------------------------------------------------

const openingFx = document.getElementById("openingFx");
const moneyLayer = document.getElementById("moneyLayer");
const yearEl = document.getElementById("year");
const scrollSphere = document.getElementById("scrollSphere");
const sections = Array.from(document.querySelectorAll("[data-section]"));

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function spawnMoneyBurst(side) {
  const count = 30;
  const rect = moneyLayer.getBoundingClientRect();

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "money-particle";

    const baseX = side === "left" ? rect.width * 0.1 : rect.width * 0.9;
    const baseY = rect.height * 0.85;

    const offsetX = (Math.random() - 0.5) * 60;
    el.style.left = `${baseX + offsetX}px`;
    el.style.top = `${baseY}px`;

    const driftX = (side === "left" ? 1 : -1) * (80 + Math.random() * 180);
    const driftY = -window.innerHeight * (0.4 + Math.random() * 0.5);
    const rotate = (Math.random() - 0.5) * 260;
    const duration = 1200 + Math.random() * 600;
    const delay = Math.random() * 80;

    const keyframes = [
      {
        opacity: 0,
        transform: "translate3d(0,0,0) rotate(0deg) scale(0.8)",
      },
      {
        opacity: 1,
        offset: 0.2,
      },
      {
        opacity: 0,
        transform: `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(1.1)`,
      },
    ];

    const anim = el.animate(keyframes, {
      duration,
      delay,
      easing: "cubic-bezier(0.2, 0.9, 0.2, 1)",
      fill: "forwards",
    });

    anim.onfinish = () => {
      el.remove();
    };

    moneyLayer.appendChild(el);
  }
}

window.addEventListener("load", () => {
  // Delay a touch so the user perceives the opening
  setTimeout(() => {
    openingFx?.classList.add("has-fired");
    spawnMoneyBurst("left");
    spawnMoneyBurst("right");

    // Fade out overlay after the effect
    setTimeout(() => {
      openingFx?.classList.add("is-hidden");
      // Fully remove from layout after fade
      setTimeout(() => {
        openingFx?.remove();
      }, 900);
    }, 1400);
  }, 400);
});

// Smooth scrolling for nav & side icons -------------------------------------

function smoothScrollTo(targetSelector) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 80;
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

document.addEventListener("click", (evt) => {
  const target = evt.target;
  if (!(target instanceof HTMLElement)) return;

  const btn =
    target.closest("[data-target]") ||
    (target.matches("a[href^='#']") ? target : null);

  if (!btn) return;

  const selector =
    btn.getAttribute("data-target") || btn.getAttribute("href") || "";
  if (!selector.startsWith("#")) return;

  evt.preventDefault();
  smoothScrollTo(selector);
});

// Scroll-triggered metallic sphere + unfold effect --------------------------

let lastActiveIndex = -1;

function triggerSphere() {
  if (!scrollSphere) return;
  scrollSphere.classList.remove("is-active");
  // Force reflow to restart animation
  void scrollSphere.offsetWidth;
  scrollSphere.classList.add("is-active");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const index = sections.indexOf(entry.target);
      if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
        entry.target.classList.add("is-visible");
        if (index !== -1 && index !== lastActiveIndex) {
          triggerSphere();
          lastActiveIndex = index;
        }
      }
    });
  },
  {
    threshold: [0.25, 0.4],
  }
);

sections.forEach((sec, idx) => {
  observer.observe(sec);
  // Make hero visible on first paint
  if (idx === 0) {
    sec.classList.add("is-visible");
  }
});

// Contact form (demo only) --------------------------------------------------

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "This is a demo contact form.\n\nHook this up to your email service, CRM, or backend when you’re ready to go live."
    );
  });
}

