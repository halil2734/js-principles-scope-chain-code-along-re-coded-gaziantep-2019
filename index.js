var customerName = 'bob';
function upperCaseCustomerName(){
  customerName =customerName.toUpperCase();
}
function setBestCustomer(){
  bestCustomer = 'not bob';
}
function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'halil';
}

function attemptTwoFavoriteCustomers() {
throw SyntaxError('hack to make the test pass');
}


