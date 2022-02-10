'use strict';

const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.btn--tip');
const tipCustom = document.getElementById('custom');
const numberOfPeople = document.getElementById('people');

const tipAmount = document.getElementById('amount');
const tipTotal = document.getElementById('total');

const reset = document.querySelector('.btn--reset');
const error = document.getElementById('error');

const inputs = document.querySelectorAll('input');

let billValue = 0.0;
let tipValue = 0;
let peopleValue = 0;

function handleBillInput(e) {
  billValue = parseFloat(e.target.value);

  calculateTipAmount();
}

function handleTipButtons(e) {
  tipValue = parseInt(e.target.value);

  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });
  e.currentTarget.classList.add('btn--active');

  calculateTipAmount();
}

function handlePeopleInput(e) {
  peopleValue = parseFloat(e.target.value);
  if (peopleValue === 0) {
    numberOfPeople.classList.add('error--border');
    error.classList.add('error');
  } else {
    numberOfPeople.classList.remove('error--border');
    error.classList.remove('error');
  }

  calculateTipAmount();
}

function calculateTipAmount() {
  if (peopleValue >= 1) {
    let amount = billValue * (tipValue / 100);
    tipAmount.textContent = `$${amount.toFixed(2)}`;
    let total = (billValue + amount) / peopleValue;
    tipTotal.textContent = `$${total.toFixed(2)}`;
  }

  if (tipCustom.value === '' && tipCustom === document.activeElement) {
    tipAmount.textContent = `$0.00`;
    tipTotal.textContent = `$0.00`;
  }
}

function handleReset() {
  billValue = 0.0;
  tipValue = 0;
  peopleValue = 0;

  bill.value = '';
  tipCustom.value = '';
  numberOfPeople.value = '';
  tipAmount.textContent = `$0.00`;
  tipTotal.textContent = `$0.00`;
  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });
}

function handleCharacterInput(e) {
  let charValue = String.fromCharCode(e.keyCode);
  if (isNaN(charValue) && e.which != 8) {
    e.preventDefault();
  }
  return true;
}

function handleMaxLength(e) {
  let input = e.target;

  if (input.value > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
  if (tipCustom.value > 100) {
    tipCustom.value = 100;
  }
}

bill.addEventListener('input', handleBillInput);
tipBtns.forEach(btn => {
  btn.addEventListener('click', handleTipButtons);
  btn.addEventListener('input', handleTipButtons);
});
numberOfPeople.addEventListener('input', handlePeopleInput);
reset.addEventListener('click', handleReset);
inputs.forEach(input => {
  input.addEventListener('keydown', handleCharacterInput);
  input.addEventListener('input', handleMaxLength);
});
