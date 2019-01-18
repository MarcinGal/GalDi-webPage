const mainNavHamburger = document.querySelector('.main-nav__hamburger')
const mainNavMenu = document.querySelector('.main-nav__main-list-container')
const mainNavYachtsList = document.querySelector('.main-nav__list-container_yacht-category')
const mainNavYachtsCategory = document.querySelector('.main-nav__list-container_yacht-category_yachts')
const mainNavListItem = document.querySelectorAll('.main-nav__list-container_item-not-Yacht')

mainNavMenu.classList.add('main-nav__main-list-container--closed')

mainNavHamburger.addEventListener("click",
    (event) => {
        event.preventDefault();
        if (mainNavMenu.classList.contains('main-nav__main-list-container--closed')) {
            mainNavMenu.classList.remove('main-nav__main-list-container--closed');
        } else {
            mainNavMenu.classList.add('main-nav__main-list-container--closed');
        }
    }
)

if (window.innerWidth >= 960) {
    mainNavMenu.classList.remove('main-nav__main-list-container--closed');
    mainNavHamburger.classList.add('main-nav__hamburger--closed');
}

window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 960px)").matches) {
        mainNavMenu.classList.remove('main-nav__main-list-container--closed');
        mainNavHamburger.classList.add('main-nav__hamburger--closed');
    } else {
        mainNavMenu.classList.add('main-nav__main-list-container--closed')
        mainNavHamburger.classList.remove('main-nav__hamburger--closed')
    }
})

mainNavListItem.forEach(element => element.addEventListener('click', () => {
    mainNavYachtsCategory.classList.remove('main-nav__list-container_yacht-category_yachts--open')
}))

mainNavYachtsList.addEventListener('click', () => {
    mainNavYachtsCategory.classList.toggle('main-nav__list-container_yacht-category_yachts--open')
})