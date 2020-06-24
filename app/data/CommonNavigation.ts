import {COLORS, FONT_FAMILIES} from "./ThemeConstants";


export const NAVIGATION_COMPONENTS = {
    SPLASH: 'Splash',
    TUTORIAL: 'Tutorial',
    SIGN_UP: 'Signup',
    SIGN_IN: 'Signin',
    HOME: 'Home',
    PASSWORD_RECOVERY: 'RecoveryPassword',
    PASSWORD_RESET: 'ResetPassword',
    TOP_BAR_BACKGROUND: 'TopBarBackground',
};

const TOP_BAR_TITLE = {
    color: COLORS.DARK,
    fontFamily: FONT_FAMILIES.BOLD,
};

export const DEFAULT_TOP_BAR = {
    visible: true,
    animate: true,
    drawBehind: false,
    noBorder: true,
    largeTitle: {
        visible: true,
        fontSize: 10,
        color: COLORS.DARK,
        fontFamily: FONT_FAMILIES.BOLD,
    },
    title: TOP_BAR_TITLE,
}

export const SCREEN_TOP_BAR = {
    ...DEFAULT_TOP_BAR, ...{
        background: {
            color: '#f2f3ee',
        },
        backButton: {
            color: "#888",
        }
    }
}
export const MODAL_TOP_BAR = {
    ...DEFAULT_TOP_BAR, ...{}
}
