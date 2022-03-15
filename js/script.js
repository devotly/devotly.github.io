function scrollHandler() {
    function calcOpacity(y1, y2) {
        if (y1 > 0)
            return 0;
        if (y2 < 0)
            return 1;
        const delta = y2 - y1;
        return (delta - y2) / delta;
    }

    const headerLogoTop = document.getElementById('header-logo').getBoundingClientRect().top;
    const headerBottom = document.getElementById('header').getBoundingClientRect().bottom;
    const opacity = calcOpacity(headerLogoTop, headerBottom);
    document.getElementById("navbar").style.opacity = opacity;

    updateFadeTopVisibility(opacity === 1);
    slideInSections();
}

function updateFadeTopVisibility(navbarFullyVisible) {
    document.getElementById("fade-top").style.visibility = navbarFullyVisible ? "visible" : "hidden";
}

function slideInSections() {
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    const sections = document.getElementsByTagName("section");

    Array.prototype.forEach.call(sections, function(section) {
        const visible = section.getBoundingClientRect().top <= clientHeight;
        var classList = section.classList
        if (visible && !classList.contains("slidein")) {
            classList.add("slidein");
        }
    });
}

/* Feature detection */
let passiveIfSupported = false;

try {
  window.addEventListener("test", null,
    Object.defineProperty(
      {},
      "passive",
      {
        get: function() { passiveIfSupported = { passive: true }; }
      }
    )
  );
} catch(err) {}

/* Event Listeners */
window.addEventListener('scroll', scrollHandler, passiveIfSupported);
