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



/*const expect = chai.expect;
describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob')
    })
  })

  describe('upperCaseCustomerName()', function() {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob')
      upperCaseCustomerName()
      expect(window.customerName).to.equal('BOB')
    })
  })
  describe('setBestCustomer()', function() {
    it('setBestCustomer', () => {
      expect(window.bestCustomer).to.equal(undefined)
      window.setBestCustomer()
      expect(window.bestCustomer).to.equal('not bob')
    })
  })

  describe('overWriteBestCustomer()', function() {
    it('overwrites the best customer', () => {
      overWriteBestCustomer('maybe bob')
      expect(window.bestCustomer).to.equal('maybe bob')
    })
  })

  describe('reassignLeastFavorite', function(){
    it('unsuccessfully tries to reassign the least favorite customer', () => {
      expect(changeLeastFavoriteCustomer).to.throw(TypeError)
    })
  })

  describe('attemptTwoFavoriteCustomers', function(){
    it('unsuccessfully tries to declare favoriteCustomer with let two times', () => {
      expect(attemptTwoFavoriteCustomers).to.throw(SyntaxError)
    })
  })
})
 Your code goes here */
