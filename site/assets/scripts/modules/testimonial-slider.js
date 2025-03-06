function initTestimonialSlider(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto',

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '[data-slider-next]',
            prevEl: '[data-slider-prev]',
        },
    });
}

export default initTestimonialSlider;