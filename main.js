'use strict'

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const koBtn = document.querySelector('.navbar__lang__ko');

koBtn.addEventListener('click', ()=>{
    document.querySelector('.navbar__menu__home').innerHTML = '홈';
    document.querySelector('.navbar__menu__gallery').innerHTML = '사진첩';
    document.querySelector('.navbar__menu__wedding').innerHTML = '결혼식 정보';
    document.querySelector('.navbar__menu__faq').innerHTML = '자주묻는질문';
    document.querySelector('.navbar__menu__booking').innerHTML = '예약';
});

const engBtn = document.querySelector('.navbar__lang__eng');

engBtn.addEventListener('click', ()=>{
    document.querySelector('.navbar__menu__home').innerHTML = 'Home';
    document.querySelector('.navbar__menu__gallery').innerHTML = 'Gallery';
    document.querySelector('.navbar__menu__wedding').innerHTML = 'Weddings';
    document.querySelector('.navbar__menu__faq').innerHTML = 'FAQ';
    document.querySelector('.navbar__menu__booking').innerHTML = 'Booking';
});