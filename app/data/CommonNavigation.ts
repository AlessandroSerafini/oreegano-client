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
    DRAWER: 'Drawer',
};
export const NAVIGATION_COMPONENTS_CUSTOMER = {
    SIGN_UP_ACCOUNT: 'SignupCustomer',
    SIGN_UP_ADDRESS: 'SignupAddress',
    HOME: 'HomeCustomer',
    ORDER_DETAIL: 'OrderDetailCustomer',
    BOX_DETAIL: 'BoxDetailCustomer',
};
export const NAVIGATION_COMPONENTS_RUNNER = {
    SIGN_UP: 'SignupRunner',
    HOME: 'HomeRunner',
};

export const DEFAULT_TOP_BAR = {
    visible: false,
}

export const SCREEN_TOP_BAR = {
    ...DEFAULT_TOP_BAR, ...{
        background: {
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

export function openDrawer() {
    Navigation.mergeOptions(NAVIGATION_STACKS.LEFT, {
        sideMenu: {
            left: {
                visible: true
            }
        }
    });
}
