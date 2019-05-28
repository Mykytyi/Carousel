'use strict';

let wrap = document.querySelector('.wrap');

let nextBtn = document. querySelector('.btn-next');
let backBtn = document. querySelector('.btn-back');
let amountOfImg = 3;

let imgWidth = wrap.children[0].clientWidth;

let widthOfWrap = (imgWidth * wrap.children.length) - (imgWidth * 3);

nextBtn.addEventListener('click', function () {
  wrap.scrollLeft += imgWidth * amountOfImg;
  backBtn.classList.remove('inactive-btn');
  if (wrap.scrollLeft === widthOfWrap) {
    nextBtn.classList.add('inactive-btn');
  }
});

backBtn.addEventListener('click', function () {
  wrap.scrollLeft -= imgWidth * amountOfImg;
  nextBtn.classList.remove('inactive-btn');
  if (wrap.scrollLeft === 0) {
    backBtn.classList.add('inactive-btn');
  }
});

