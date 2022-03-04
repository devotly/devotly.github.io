function scrollToAbout() {
    document
        .getElementById("about-section")
        .scrollIntoView({behavior: "smooth", block: "center"});
}

function scrollFunction() {
    function calcOpacity(y1, y2) {
        if (y1 > 0)
            return 0;
        if (y2 < 0)
            return 1;
        const delta = y2 - y1;
        return (delta - y2) / delta;
    }

    const arrowTop = document.getElementById('arrow').getBoundingClientRect().top;
    const headerBottom = document.getElementById('header').getBoundingClientRect().bottom;
    const opacity = calcOpacity(arrowTop, headerBottom);
    document.getElementById("navbar").style.opacity = opacity;

    updateFadeTopVisibility(opacity === 1);
    updateFadeBottomVisibility();
}

function updateFadeTopVisibility(navbarFullyVisible) {
    document.getElementById("fade-top").style.visibility = navbarFullyVisible ? "visible" : "hidden";
}

function updateFadeBottomVisibility() {
    var fadeBottom = document.getElementById("fade-bottom");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const fadeBottomHeight = fadeBottom.offsetHeight;
    fadeBottom.style.visibility = scrollTop > fadeBottomHeight ? "visible" : "hidden";
}

window.onscroll = function() { scrollFunction() };
