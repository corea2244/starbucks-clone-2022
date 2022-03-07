// 헤더 - 검색(input 스타일)
const searchEl = document.querySelector('.header__submenu__item__search');
const searchInputEl = document.querySelector('.header__submenu__item__search__input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 헤더 - 뱃지(스크롤)
const badgeEl = document.querySelector('.header__badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .4, {
            opacity: 0,
            display: 'none'
        });
    }
    else{
        // 배지 보이기
        gsap.to(badgeEl, .4, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간)


// visual animation
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .5,
        opacity: 1
    });
});


// Swiper
new Swiper('.notice__line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});