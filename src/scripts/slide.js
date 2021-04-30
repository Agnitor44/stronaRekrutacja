let w = window.innerWidth


if(w > 319) {
    splide = new Splide( '.splide', {
        type   : 'loop',
        autoplay: true,
        perPage: 2,
        padding: {
            right: '0%',
            left : '0%',
        },
     
    } ).mount();
}


window.addEventListener('resize', () => {
    w = window.innerWidth
    splide.destroy(completly = true)
    if(w > 319) {
        splide = new Splide( '.splide', {
            type   : 'loop',
            autoplay: true,
            perPage: 2,
            padding: {
                right: '0%',
                left : '0%',
            },
         
        } ).mount();
    }
 
    
 
    
    
})