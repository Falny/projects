// появление улиц над точками на карте
const cart = document.querySelectorAll('.points_street')
const img = document.querySelectorAll('.points_maps')

// карусель
const carousel = document.querySelector('.carousel');
const arrows = document.querySelectorAll('.arrow');
const itemWidth = document.querySelector('.carousel_img').offsetWidth;
const carouselChildren = [...carousel.children];
const carItem = Math.round(carousel.offsetWidth / itemWidth);

// переключатели по кнопкам
const dots = document.querySelectorAll('.dots')

// бургер
const burgerMenu = document.querySelector('.burger-menu')
const open_btn = document.querySelector('.head-burger')
const close_btn = document.querySelector('.burger-close')

const body = document.body


// бургер
open_btn.addEventListener('click', () => {
    burgerMenu.classList.add('active')
    body.classList.add('lock')
})

close_btn.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('lock')
})


// переключатели по кнопкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        carousel.scrollLeft = (index + 1) * (itemWidth * carItem);
    })
})


// карусель
carouselChildren.slice(0, carItem).forEach(item => {
    carousel.insertAdjacentHTML('beforeend', item.outerHTML)
})

carouselChildren.slice(-carItem).reverse().forEach(item => {
    carousel.insertAdjacentHTML('afterBegin', item.outerHTML)
})

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        carousel.scrollLeft += arrow.id === 'left' ? -itemWidth : itemWidth
    })
    
})

const infintyScroll = () => {
    if (carousel.scrollLeft === 0){
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition')
    } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition')
    }
}

carousel.addEventListener('scroll', infintyScroll)

// появление улиц над точками на карте
img.forEach((i, index) => {
    i.addEventListener('mouseenter', () => {
        cart[index].style.opacity = '1';
        cart[index].style.visibility = 'visible';
        cart[index].style.transition = 'opacity 0.5s ease-in-out';
    })
})

img.forEach((i, index) => {
    i.addEventListener('mouseleave', () => {
        cart[index].style.opacity = '0';
        cart[index].style.visibility = 'hidden';
    })
})







