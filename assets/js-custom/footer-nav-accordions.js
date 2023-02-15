/**
 * Footer navigation accordions.
 */
if (typeof window !== "undefined") {
  // Define all the accordion wraps.
  const accordionWraps = document.querySelectorAll(".footer-nav-accordion-wrap")
  // Spread the array to get all iterable items.
  const accordionWrap = [...accordionWraps]
  // Loop through each accordion wrap.
  accordionWrap.forEach((item) => {
    // Define the media query.
    const mq640 = window.matchMedia("(min-width: 640px)")
    // Add a Listener.
    mq640.addListener(WidthChange640)
    // Define the width change.
    WidthChange640(mq640)
    // Media query change function for width specific functions.
    function WidthChange640(mq) {
      // Define the accordion content within.
      const accordionContent = item.querySelector(".usa-list")
      if (mq640.matches) {
        // If wider than 640px.
        accordionContent.removeAttribute("hidden")
      } else {
        // If narrower than 640px.
        accordionContent.setAttribute("hidden", "hidden")
      }
    }
  })
}
