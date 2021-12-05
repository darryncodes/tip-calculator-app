'use strict';

// SELECT INPUTS
const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.btn--tip');
const tipCustom = document.getElementById('custom');
const numberOfPeople = document.getElementById('people');

// SELECT OUTPUTS

const tipAmount = document.getElementById('amount');
const tipTotal = document.getElementById('total');

// RESET

const reset = document.querySelector('.btn--reset');

/*

tipBtns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

function handleClick(e) {
  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });
  e.currentTarget.classList.add('btn--active');
}

*/
