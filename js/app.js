'use strict';

// SELECT INPUTS
const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.btn--tip');
const tipCustom = document.getElementById('custom');
const numberOfPeople = document.getElementById('people');
// SELECT OUTPUTS
const tipAmount = document.getElementById('amount');
const tipTotal = document.getElementById('total');
// SELECT RESET
const reset = document.querySelector('.btn--reset');

// DEFAULT STATES
let billValue = 0.0;
let tipValue = 0;
let customValue = 0;
// let peopleValue = 1;

// GET BILL VALUE
function handleBillInput(e) {
  billValue = parseFloat(e.target.value);

  calculateTipAmount();
}

// GET TIP VALUE
function handleTipButtons(e) {
  tipValue = parseInt(e.target.value);

  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });
  e.currentTarget.classList.add('btn--active');

  calculateTipAmount();
}

// GET CUSTOM TIP
function handleCustomInput(e) {
  customValue = parseFloat(e.target.value);

  calculateTipAmount();
}

// GET NUMBER OF PEOPLE
function handlePeopleInput(e) {
  peopleValue = parseFloat(e.target.value);

  calculateTipAmount();
}

// CALCULATE TIP
function calculateTipAmount() {
  if (peopleValue >= 1) {
    let amount = billValue * (tipValue / 100);
    tipAmount.textContent = `$${amount}`;
    let total = (billValue + amount) / peopleValue;
    tipTotal.textContent = `$${total}`;
  }
}

// RESET
function handleReset() {
  bill.value = ``;
  tipCustom.value = 'Custom';
  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });
  numberOfPeople.value = '';
  tipAmount.textContent = `$0.00`;
  tipTotal.textContent = `$0.00`;
}

// EVENT LISTENERS
bill.addEventListener('input', handleBillInput);
tipBtns.forEach(btn => {
  btn.addEventListener('click', handleTipButtons);
});
tipCustom.addEventListener('input', handleCustomInput);
numberOfPeople.addEventListener('input', handlePeopleInput);
reset.addEventListener('click', handleReset);
