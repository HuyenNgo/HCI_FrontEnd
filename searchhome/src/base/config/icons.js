import constants from './constants'
const icons = {
    home: constants.IS_IOS ? 'ios-home' : 'md-home',
    menu: constants.IS_IOS ? 'ios-menu' : 'md-menu',
    roomate: constants.IS_IOS ? 'ios-people' : 'md-people',
    setting: constants.IS_IOS ? 'ios-settings' : 'md-settings',
    add: constants.IS_IOS ? 'ios-add' : 'md-add',
    remove: constants.IS_IOS ? 'ios-remove' : 'md-remove',
    bookmarks: constants.IS_IOS ? 'ios-bookmarks' : 'md-bookmarks',
    search: constants.IS_IOS ? 'ios-search' : 'md-search',
    product: constants.IS_IOS ? 'ios-albums' : 'md-albums',
    profile:  constants.IS_IOS ? 'ios-person' : 'md-person',
    back:constants.IS_IOS ? 'ios-arrow-back' : 'md-arrow-back',
    message:constants.IS_IOS ? 'ios-chatbubbles' : 'md-chatbubbles',
}

export default icons;