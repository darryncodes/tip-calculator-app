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
  billValue = parseInt(e.target.value, 10);

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
  if (e.target.value)
    return e.target.value.replace(
      /[^0+][^0-9.][~`!@#$%^&()_={}[\]:;,.<>+\/?-]/g,
      ''
    );
}

function handleMaxLength() {
  if (bill.value > 5) {
    bill.value = bill.value.substr(0, 5);
  }
  if (tipCustom.value > 100) {
    tipCustom.value = 100;
  }
  if (numberOfPeople.value > 4) {
    numberOfPeople.value = numberOfPeople.value.substr(0, 4);
  }
}

bill.addEventListener('input', handleBillInput);
numberOfPeople.addEventListener('input', handlePeopleInput);
reset.addEventListener('click', handleReset);
tipBtns.forEach(btn => {
  btn.addEventListener('click', handleTipButtons);
  btn.addEventListener('input', handleTipButtons);
});
inputs.forEach(input => {
  input.addEventListener('keydown', handleCharacterInput);
  input.addEventListener('input', handleMaxLength);
});
