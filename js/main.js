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
        // 버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        });
    }
    else{
        // 배지 보이기
        gsap.to(badgeEl, .4, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)


const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



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
    // autoplay: true,
    loop: true
});

new Swiper('.notice__promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.notice__promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.notice__promotion .swiper-prev',
        nextEl: '.notice__promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    apaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


// 버튼 클릭시 사라지게 하는 애니메이션
const promotionEl = document.querySelector('.notice__promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion;
    console.log(isHidePromotion);
    if(isHidePromotion){
        // 숨김 처리!
        promotionEl.classList.add('hide');
    }else{
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// floating 되어서 랜덤하게 움직이는 아이콘 애니메이션 추가
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// 스크롤이 내려감에 따라 자동으로 보이게 하는 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면 높이의 80% 위치에 감시할 트리거를 위치시키겠다는 의미
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// 자동으로 연도 받아오는 기능
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022