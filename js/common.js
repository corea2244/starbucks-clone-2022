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

// 자동으로 연도 받아오는 기능
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022