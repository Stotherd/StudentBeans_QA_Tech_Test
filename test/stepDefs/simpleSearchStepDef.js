const { Given, When, Then, By} = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()

})

Given('I open the search bar', function () {
  simpleSearchPageObject.acceptCookies()
  simpleSearchPageObject.selectSearchButton()
})

When('I enter {string}', function (search_term) {
  simpleSearchPageObject.setSearchText(search_term)

})

Then('I should be shown a search listing for {string}', function (search_term) {
  simpleSearchPageObject.checkResults(search_term)
})
