// ハンバーガーメニュー
$(function(){
  $('.hamburger').click(function(){
    $('body').toggleClass('on');
  });
});

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('display');
  });
});

// topicのカルーセルをボタンクリックてで水平方向に移動
'use strict';{
  const next = document.getElementById('btn-next');
  // const prev = document.getElementById('btn-back');
  const ul = document.querySelector('#topic');
  const slides = ul.children;
  let currentIndex = 0;

  function updateButtons() {
    // prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      // prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  // updateButtons();

  next.addEventListener('click', () => {
    currentIndex++;
    // updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  // prev.addEventListener('click', () => {
  //   currentIndex--;
  //   updateButtons();
  //   const slideWidth = slides[0].getBoundingClientRect().width;
  //   ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  // });
}