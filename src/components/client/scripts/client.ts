import { AccordionScripts } from "@accordion/index";
import { CardInit } from "@card/index";

// Initialize all client-side functionality
export function initializeClient() {
  // Initialize accordions and all card scripts
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runClientInit, {
      once: true,
    });
  } else {
    runClientInit();
  }
  // Re-inicializa tras navegaciones con View Transitions (no hay DOMContentLoaded)
  document.addEventListener("astro:page-load", runClientInit);
}

function runClientInit() {
  // Evita doble inicialización sobre el mismo DOM (DOMContentLoaded + astro:page-load).
  // La marca vive en <main>, que es nuevo en cada página/swap.
  const main = document.querySelector("main");
  if (!main || (main as HTMLElement).dataset.clientInit === "1") return;
  (main as HTMLElement).dataset.clientInit = "1";
  AccordionScripts();
  CardInit();
}
