// Get DOM elements
const slider = document.getElementById("slider");
const nextButton = document.getElementById("nextButton");
const ab1 = document.getElementById("abc1");
const ab2 = document.getElementById("abc2");
const ab3 = document.getElementById("abc3");

// Helper to update opacities based on slider value (0..1)
function updateTextOpacity(t) {
    // abc1 fades in from 0 to 0.3, then stays at 1
    let opacity1 = t < 0.3 ? t / 0.3 : 1;
    // abc2 fades in from 0.3 to 0.6, stays at 1 afterwards
    let opacity2 = t < 0.3 ? 0 : (t < 0.6 ? (t - 0.3) / 0.3 : 1);
    // abc3 fades in from 0.6 to 0.9, stays at 1 afterwards
    let opacity3 = t < 0.6 ? 0 : (t < 0.9 ? (t - 0.6) / 0.3 : 1);

    ab1.style.opacity = opacity1;
    ab2.style.opacity = opacity2;
    ab3.style.opacity = opacity3;
}

// Update everything when slider moves
function onSliderUpdate() {
    let t = parseFloat(slider.value);
    updateTextOpacity(t);

    // Make slider value available globally for other scripts (geom.js, g1.js)
    window.sliderValue = t;

    // Dispatch a custom event so other scripts can react
    window.dispatchEvent(new CustomEvent('sliderChanged', { detail: { value: t } }));

    // If other scripts expose an update function, call it
    if (typeof window.updateGeometry === 'function') window.updateGeometry(t);
    if (typeof window.setTiltAngle === 'function') window.setTiltAngle(t);
}

// Initial setup
function init() {
    // Ensure initial opacity matches slider start value (0)
    onSliderUpdate();

    // Listen to slider events
    slider.addEventListener('input', onSliderUpdate);
    slider.addEventListener('change', onSliderUpdate);

    // Next button: increment slider by 0.05, cap at 1
    nextButton.addEventListener('click', () => {
        let newVal = parseFloat(slider.value) + 0.05;
        if (newVal > 1) newVal = 1;
        slider.value = newVal;
        onSliderUpdate();
        // Also trigger 'input' event for any other listeners
        slider.dispatchEvent(new Event('input'));
    });
}

// Run after DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
