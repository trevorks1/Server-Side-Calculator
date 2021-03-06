console.log('Hello!');

$(document).ready(readyNow);

const equationObject = {
  input1: 0,
  input2: 0,
  operator: null,
};

// event listener
function readyNow() {
  console.log('Is This Working?');

  // event listeners
  $('.js-btn-op').on('click', clickBtnOperator);
  $('.js-btn-submit').on('click', calculationOutputs);
  $('.js-btn-clear').on('click', inputClear);

  getUserHistory();
}

// clearing inputs
function inputClear() {
  $('.js-input1').val('');
  $('.js-input2').val('');
}

// creating a base for all my clicks with the data op
function clickBtnOperator() {
  console.log('Math is Good!');
  equationObject.operator = $(this).data('op');
}

// display the input and preventing 0 from being default
function calculationOutputs(event) {
  event.preventDefault();

  equationObject.input1 = $('.js-input1').val();
  equationObject.input2 = $('.js-input2').val();

  // AJAX handshake post data
  postCalculations();
}

// POST calculation to the client side
function postCalculations() {
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: equationObject,
  })
    .then((response) => {
      getUserHistory();
    })
    .catch((err) => {
      console.log(err);
      alert('Nope Wrong way');
    });
}

// History of inputs
function getUserHistory() {
  console.log('User History Works!');
  $.ajax({
    type: 'GET',
    url: '/hello',
  })
    .then((response) => {
      render(response);
    })
    .catch((err) => {
      console.log(err);
      alert('No Output!');
    });
}

// render history to display in line under my equation output
function render(history) {
  console.log(history);
  if (history.length > 0) {
    $('.js-total').text(history[history.length - 1].total);
  }

  $('.js-history').empty();
  for (let equation of history) {
    $('.js-history').append(
      `<li>${equation.input1} ${equation.operator} ${
        equation.input2
      } = ${parseInt(equation.total)}</li>`
    );
  }
}
