const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  acceptCookies() {
    $('[id=onetrust-accept-btn-handler]').click()
  }
  selectSearchButton() {
    $('[name="query"]').click()
  }

  setSearchText(string) {
    const element = $('//*[@id="home_root"]/div[1]/nav/div[1]/div[1]/div[2]/div/div/div/div[1]/div[1]/input')
    element.click()
    element.setValue(string)
    const errorMessage = 'actual does not equal expected'
    expect(element.getValue(), errorMessage).to.equal(string)
  }

  checkResults(string) {
    const element = $('/html/body/div[2]/div[1]/nav/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div/div[2]/div[1]/div/a[1]/div/span[1]')
    this.isElementEqualToExpected(element, string)
  }
}

module.exports = simpleSearchPageObject
