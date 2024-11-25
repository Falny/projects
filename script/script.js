// card
const card_select = () => {
    const cards = document.querySelectorAll('.plan--card')

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('card-active')
            card.style.transition = '.3s'
        })

        card.addEventListener('mouseout', function() {
            card.classList.remove('card-active')
        })
    })
}

card_select()

// footer icon

const footer_icon = () => {
    const img_f = document.querySelectorAll('.footer__img')

    img_f.forEach(i => {
        const i_src = i.src
        const i_data = i.getAttribute('data-new-img')
    
        i.addEventListener('mouseover', function() {
            i.style.opacity = '0';

            setTimeout(() => {
                i.src = i_data;
                i.style.opacity = '1';
                i.style.transition = '.3s'
            }, 100)
        })

        i.addEventListener('mouseout', function() {
            i.src = i_src
        })
    })
}

footer_icon()

// link

const link_menu = () => {
    const about = document.querySelector('.about')
    const price = document.querySelector('.price')

    about.addEventListener('click', function() {
        document.querySelector('.new__glasses').scrollIntoView({behavior: 'smooth'})
    })

    price.addEventListener('click', function() {
        document.querySelector('.choose-plan').scrollIntoView({behavior: 'smooth'})
    })

}

link_menu()

// burger

const burger = () => {
    const burger_menu = document.querySelector('.burger-menu')
    const burger_open = document.querySelector('.burger-open')
    const burger_close = document.querySelector('.burger-close')

    const body = document.body

    burger_open.addEventListener('click', function() {
        burger_menu.classList.add('burger-menu__open')
        burger_open.style.display = 'none';
        body.classList.add('no-scrolling')
    })

    burger_close.addEventListener('click', function() {
        burger_menu.classList.remove('burger-menu__open')
        burger_open.style.display = 'flex';
        body.classList.remove('no-scrolling')
    })


}

burger()