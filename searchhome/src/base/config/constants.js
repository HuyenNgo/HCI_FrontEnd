import {Platform} from 'react-native'

const constants={
    IS_ENV_DEVELOPMENT: __DEV__,
    IS_ANDROID: Platform.OS==='android',
    IS_IOS: Platform.OS==='ios',
    IS_DEBUG_MODE_ENABLED:Boolean(window.navigator.userAgent),

    SCREEN_HOME_ID:'Home',
    SCREEN_WORKING_DIARY_ID:'WorkingDiary',
    SCREEN_SB_DETAIL_ID:'ServiceBillDetailInStack',
   
    URL_BASE:'http://myprofile.info',
    STORAGE_TOKEN:'@TOKEN',
    TIMEOUT:50000,
    PAGE_INDEX:1,
    PAGE_SIZE:10,
    ROW_SPAN:3,
    NO_IMAGE_LINK:'https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png',
    NO_AVATAR_LINK:'https://bootdey.com/img/Content/avatar/avatar6.png',
    FORMAT_DATE_PICKER_STRING:'DD-MM-YYYY',
    MIN_DATE_STRING:"01-01-2016 "
};

export default constants;