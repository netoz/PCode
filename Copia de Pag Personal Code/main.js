const container = document.querySelector('.fcontainer')
const colors = ['#95E5AC', '#23D1CD', '#0D6A76', '#063A51']

const figures = () => {
    for(let i = 0; i <= 50; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length * Math.random())

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 3000)
    }
}

figures()

var owl = $('.owl-soluciones');
owl.owlCarousel({
    items:4,
	stagePadding: 10,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});

var owl_casos = $('.owl-casos');
owl_casos.owlCarousel({
	stagePadding: 10,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

