const { byValueKey } = require('appium-flutter-finder');

class counterPage {
    get counterTextFinder () { return byValueKey('counter'); }
    get buttonFinder (){ return byValueKey('incrementButton'); }
}

module.exports = new counterPage();