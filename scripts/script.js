'use strict';

let wrap = document.querySelector('.wrap');

let nextBtn = document. querySelector('.btn-next');
let backBtn = document. querySelector('.btn-back');
let amountOfImg = 3;

let widthOfWrap = (130 * wrap.children.length) - (130 * 3);

console.log(wrap.children.length, widthOfWrap);

nextBtn.addEventListener('click', function () {
  console.log(wrap.scrollLeft);
  wrap.scrollLeft += 130 * amountOfImg;
  if (wrap.scrollLeft !== 0) {
    backBtn.classList.remove('inactive-btn');
  }
  if (wrap.scrollLeft === widthOfWrap) {
    nextBtn.classList.add('inactive-btn');
  }
});

backBtn.addEventListener('click', function () {
  console.log(wrap.scrollLeft);
  wrap.scrollLeft -= 130 * amountOfImg;
  if (wrap.scrollLeft == 0) {
    backBtn.classList.add('inactive-btn');
  } else {
    backBtn.classList.remove('inactive-btn');
  }
  if (wrap.scrollLeft !== widthOfWrap) {
    nextBtn.classList.remove('inactive-btn');
  }
});
