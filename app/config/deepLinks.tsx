/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {MODAL_TOP_BAR, NAVIGATION_COMPONENTS_COMMON} from "../data/CommonNavigation";
import {environment} from "../environment/environment";
import {Navigation} from "react-native-navigation";
import {Linking} from "react-native";

enum DEEP_LINKS {
    RESET_PASSWORD = "reset-password",
}

const DeepLinks = () => {
    // ••• local variables •••
    let isProcessing = true;

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••

    // ••• render methods •••

    // ••• working methods •••
    const handleProcessDeepLinks = async (url: string | null) => {
        if (url) {
            const persedUrl = url.match(new RegExp(environment.APP_URI + "(.*)" + "/"));
            const action = persedUrl && persedUrl.length > 0 ? persedUrl[1] : null;
            if (action) {
                switch (action) {
                    case DEEP_LINKS.RESET_PASSWORD:
                        const token = url.split("/").pop();
                        await Navigation.dismissAllModals();
                        setTimeout(async () => {
                            await Navigation.showModal({
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RESET,
                                                passProps: {
                                                    token,
                                                },
                                                options: {
                                                    topBar: MODAL_TOP_BAR
                                                }
                                            }
                                        }
                                    ]
                                }
                            });
                        }, 1000);
                        break;
                    default:
                        break;
                }
            }

        }
    };
    const getUrlAsync = async () => {
        const initialUrl = await Linking.getInitialURL();
        isProcessing = false;
        return initialUrl;
    };
    const initDeepLinks = async () => {
        const initialUrl = await getUrlAsync();
        handleProcessDeepLinks(initialUrl);

        Linking.addEventListener('url', (data) => {
            handleProcessDeepLinks(data.url);
        });
    };

    initDeepLinks();

    return null;
};


export default DeepLinks;
