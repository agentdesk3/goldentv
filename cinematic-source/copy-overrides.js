(() => {
  "use strict";

  function normalize(text) {
    return (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function findText(root, selector, phrase) {
    return [...root.querySelectorAll(selector)]
      .find(el => normalize(el.textContent).includes(normalize(phrase)));
  }

  function updateCopy() {
    const hero = document.querySelector("#section-hero");
    if (hero) {
      const title = hero.querySelector("h1");
      const subtitle = findText(hero, "p", "The match that moves you");

      if (title) {
        title.textContent = "Your next favourite night starts here.";
      }
      if (subtitle) {
        subtitle.textContent =
          "Whether it's match night or movie night, find your way to unwind with Golden IPTV.";
      }
    }

    const sports = document.querySelector("#section-sports");
    if (sports) {
      const title = findText(sports, "h2", "Every moment");
      const subtitle = findText(sports, "p", "The moments that stay");

      if (title) {
        title.textContent = "Some games stay with you.";
      }
      if (subtitle) {
        subtitle.textContent =
          "The build-up. The tension. The final whistle. The moments you'll talk about tomorrow.";
      }
    }
  }

  function hidePreviewContent() {
    const phrases = [
      "Private visual design study only",
      "Private visual concept",
      "Private local design preview",
      "Private design preview",
      "Content and service claims require verification",
      "Membership design study",
      "Layout study",
      "Asset provenance",
      "Reference comparison"
    ];

    const sections = document.querySelectorAll('[id^="section-"]');

    for (const section of sections) {
      const elements = section.querySelectorAll(
        "p, small, span, div, aside, footer, a"
      );

      for (const element of elements) {
        if (element.children.length > 0) continue;

        const text = normalize(element.textContent);

        if (phrases.some(phrase =>
          text.includes(normalize(phrase))
        )) {
          element.style.setProperty("display", "none", "important");
        }
      }
    }
  }

  function init() {
    updateCopy();
    hidePreviewContent();
    /* FINAL PREVIEW CLEANUP V1 */
    const finalPreview = document.querySelector("#section-final .preview");
    if (finalPreview) finalPreview.style.setProperty("display", "none", "important");

    /* SPORTS COPY CLEANUP V1 */
    const sportsCleanup = document.querySelector("#section-sports");

    if (sportsCleanup) {
      const compact = text =>
        (text || "").replace(/\s+/g, "").toLowerCase();

      const targets = [
        "Made for the big moments.",
        "Big nights. Bigger feelings.",
        "All your leagues. One subscription.",
        "More sports. More adrenaline."
      ];

      for (const phrase of targets) {
        const matches = [...sportsCleanup.querySelectorAll("h2,p")]
          .filter(el => compact(el.textContent) === compact(phrase));

        for (const el of matches) {
          el.style.setProperty("display", "none", "important");
        }
      }
    }

    /* PRICING PREVIEW NOTE CLEANUP V1 */
    const pricing = document.querySelector("#section-pricing");
    if (pricing) {
      const note = [...pricing.querySelectorAll("p")]
        .find(el => normalize(el.textContent).includes(
          "content catalogue figures and service features"
        ));

      if (note) {
        note.style.setProperty("display", "none", "important");
      }
    }

    /* ENTERTAINMENT COPY CLEANUP V1 */
    const universe = document.querySelector("#section-universe");

    if (universe) {
      const phrases = [
        "Stories beyond the screen.",
        "Feel every moment.",
        "Made for the moment.",
        "Discover the feeling of entertainment."
      ];

      for (const phrase of phrases) {
        const element = [...universe.querySelectorAll("*")]
          .find(el =>
            el.children.length === 0 &&
            normalize(el.textContent).includes(normalize(phrase))
          );

        if (element) {
          element.style.setProperty("display", "none", "important");
        }
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();