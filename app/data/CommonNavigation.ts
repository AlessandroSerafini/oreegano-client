import {COLORS, FONT_FAMILIES} from "./ThemeConstants";


export const NAVIGATION_COMPONENTS = {
    SPLASH: 'Splash',
    TUTORIAL: 'Tutorial',
    SIGN_UP: 'Signup',
    HOME: 'Home',
    PASSWORD_RECOVERY: 'RecoveryPassword',
    TOP_BAR_BACKGROUND: 'TopBarBackground',
};


export const TOP_BAR = {
    visible: true,
    animate: true,
    drawBehind: false,
    noBorder: true,
    background: {
        color: '#f2f3ee',
        component: {name: NAVIGATION_COMPONENTS.TOP_BAR_BACKGROUND},
    },
    largeTitle: {
        visible: true,
        fontSize: 10,
        color: COLORS.DARK,
        fontFamily: FONT_FAMILIES.BOLD,
    },
    title: {
        color: COLORS.DARK,
        fontFamily: FONT_FAMILIES.BOLD,
    },
    /*title: {
                    color: 'white'
                },
                backButton: {
                    color: 'white'
                },
                background: {
                    color: '#4d089a'
                }*/
}
