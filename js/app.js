// plan for JS logic

// select all elments by id
// or should I be looping over all the inputs?
// do i need to prevent form from submitting: e.preventDefault();
// update fields when info gets entered
// prevent negative numbers?
// reset all fields
// add active states
// add erorr number of people cant be zero

// bill
// - input field
// - store value in vairable and make sure its a number
// parseInt(bill.value); ??

// tip
// - input field
// - store value in variable
// - tip.value ??

// tip amount
// bill / 100 * tip

// number of people
// - input field
// - store value in variable

// tip amount per person
// tip amount / number of people

// total bill per person
// bill per person = bill / number of people
// tip amount + bill per person

/*
selecting these items to add active and error classes:

const btnTip = document.querySelector('.btn--tip');
const splitterBill = document.querySelector('.splitter__bill');
const splitterPeople = document.querySelector('.splitter__people');
const error = document.querySelector('.splitter__error');

*/

/*
aiming to select all tip bts, loop over them and do math from their data id

const btns = document.getElementById('btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
  });
});
*/

/*

prevent form from submitting

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
});


*/
