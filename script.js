'use strict';

const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const text = document.getElementById('text');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const colorText = window.getComputedStyle(text).color;

const changeColor = function () {
  square.style.backgroundColor = colorText;
};

const changeHeightWidth = function () {
  rangeSpan.textContent = event.target.value;
  circle.style.cssText = `height: ${rangeSpan.textContent}%; width:${rangeSpan.textContent}%`;
};

square.addEventListener('click', changeColor);
range.addEventListener('input', changeHeightWidth);
eBtn.style.cssText = 'display: none';
