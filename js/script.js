function scrollFunction() {
    function calcOpacity(y1, y2) {
        if (y1 > 0)
            return 0;
        if (y2 < 0)
            return 1;
        const delta = y2 - y1;
        return (delta - y2) / delta;
    }

    const subTitleBottom = document.getElementById('sub-title').getBoundingClientRect().bottom;
    const headerBottom = document.getElementById('header').getBoundingClientRect().bottom;
    const opacity = calcOpacity(subTitleBottom, headerBottom);
    document.getElementById("navbar").style.opacity = opacity;

    updateFadeTopVisibility(opacity === 1);
    updateFadeBottomVisibility();
}

function updateFadeTopVisibility(navbarFullyVisible) {
    document.getElementById("fade-top").style.visibility = navbarFullyVisible ? "visible" : "hidden";
}

function updateFadeBottomVisibility() {
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutTitle = document.getElementById("about-title").getBoundingClientRect().top;

    var fadeBottom = document.getElementById("fade-bottom");
    fadeBottom.style.visibility = aboutTitle <= clientHeight ? "visible" : "hidden";
}

window.onscroll = function() { scrollFunction() };
