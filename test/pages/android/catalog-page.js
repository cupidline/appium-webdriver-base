class catalogPage {

    get burgerIcon () { return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'); }
    get loginMenu (){ return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView'); }
    get containerHeader (){ return $('~container header'); }
}

module.exports = new catalogPage();