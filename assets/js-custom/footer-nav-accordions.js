// Mobile accordion for footer.

if (typeof window !== "undefined") {
  const accordionWraps = document.querySelectorAll(".accordion-wrap")
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

    // element that will be wrapped
    const el = document.querySelector("div.wrap_me")
    // create wrapper container
    const wrapper = document.createElement("button")
    // insert wrapper before el in the DOM tree
    el.parentNode.insertBefore(wrapper, el)
    // move el into wrapper
    wrapper.appendChild(el)

    // Media query change function for width specific functions.

    function WidthChange640(mq) {
      const accordionButton = item.querySelector(".usa-accordion__button")
      if (mq640.matches) {
        // If wider than 640px
        accordionButton.style.display = "none"

        console.log("heloooooooo", accordionButton)
      } else {
        // If narrower than 640px.
        console.log("narrow")
        accordionButton.style.display = "block"
      }
    }
  })
}
