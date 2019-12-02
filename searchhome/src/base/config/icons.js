import constants from './constants'
const icons = {
    home: constants.IS_IOS ? 'ios-home' : 'md-home',
    menu: constants.IS_IOS ? 'ios-menu' : 'md-menu',
    favoritos: constants.IS_IOS ? 'ios-heart' : 'md-heart',
    setting: constants.IS_IOS ? 'ios-settings' : 'md-settings',
    add: constants.IS_IOS ? 'ios-add' : 'md-add',
    remove: constants.IS_IOS ? 'ios-remove' : 'md-remove',
    bookmarks: constants.IS_IOS ? 'ios-bookmarks' : 'md-bookmarks',
    cart: constants.IS_IOS ? 'ios-cart' : 'md-cart',
    product: constants.IS_IOS ? 'ios-albums' : 'md-albums',
    profile:  constants.IS_IOS ? 'ios-person' : 'md-person',
    back:constants.IS_IOS ? 'ios-arrow-back' : 'md-arrow-back',
}

export default icons;