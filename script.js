const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.nav--links');
const featureTabsBtns = document.querySelector('.feature-tabs-list');

const clickTab = function (e) {
    const clickedTab = e.target.closest('.feature-tab');

    const allTabs = [...document.querySelector('.feature-tabs-list').children];
    allTabs.forEach(tab => tab.classList.remove('feature-tab-btn-clicked'));
    clickedTab.classList.add('feature-tab-btn-clicked');

    // Shows feature depending on the data-tab number of the clicked tab.
    const tabNumber = clickedTab.dataset.tab;
    const features = document.querySelector('.features-content-container');
    [...features.children].forEach(feature => feature.classList.add('hidden'));
    features.querySelector(`.feature-${tabNumber}`).classList.remove('hidden');
};

const toggleMenu = function (e) {
    console.log(window.getComputedStyle(menuBtn).getPropertyValue('display'));
    if (e.target.classList.contains('login-link') ||
        window.getComputedStyle(menuBtn.parentElement).getPropertyValue('display') === 'none'
    )
        return;
    mobileMenu.classList.toggle('mobile-nav');
    menuBtn.classList.toggle('menu-btn--icon-close');

};
mobileMenu.addEventListener('click', toggleMenu);
menuBtn.addEventListener('click', toggleMenu);
featureTabsBtns.addEventListener('click', clickTab);