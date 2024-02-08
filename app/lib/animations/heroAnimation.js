/**
 * @param {HTMLElement} firstBg
 * @param {HTMLElement} secondBg
 */
export const reverseAnimation = (firstBg, secondBg) => {
    if(secondBg.style.opacity == '0') {
        secondBg.style.opacity = 1;
    } else {
        secondBg.style.opacity = 0;
    }
}