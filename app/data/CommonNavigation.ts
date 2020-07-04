import {COLORS, FONT_FAMILIES} from "./ThemeConstants";
import {Navigation} from "react-native-navigation";


export const NAVIGATION_STACKS = {
    LEFT: 'SideNavigation',
    CENTER: 'AppRoot',
};
export const NAVIGATION_COMPONENTS_COMMON = {
    SPLASH: 'Splash',
    TUTORIAL: 'Tutorial',
    SIGN_IN: 'Signin',
    PASSWORD_RECOVERY: 'RecoveryPassword',
    PASSWORD_RESET: 'ResetPassword',
    TOP_BAR_BACKGROUND: 'TopBarBackground',
    DRAWER: 'Drawer',
};
export const NAVIGATION_COMPONENTS_CUSTOMER = {
    SIGN_UP_ACCOUNT: 'SignupCustomer',
    SIGN_UP_ADDRESS: 'SignupAddress',
    HOME: 'HomeCustomer',
    ORDER_DETAIL: 'OrderDetailCustomer',
};
export const NAVIGATION_COMPONENTS_DELIVERY = {
    SIGN_UP: 'SignupDelivery',
    HOME: 'HomeDelivery',
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
            // color: '#f2f3ee',
            color: '#FFF',
        },
        backButton: {
            color: "#888",
        }
    }
}
export const MODAL_TOP_BAR = {
    ...DEFAULT_TOP_BAR, ...{}
}

export function closeDrawer() {
    Navigation.mergeOptions(NAVIGATION_STACKS.LEFT, {
        sideMenu: {
            left: {
                visible: false
            }
        }
    });
}
