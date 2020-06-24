import React, {useEffect, useState} from 'react';
import {Linking} from "react-native";
import {environment} from "../environment/environment";
import {Navigation} from "react-native-navigation";
import {MODAL_TOP_BAR, NAVIGATION_COMPONENTS} from "../data/CommonNavigation";

const DeepLinksContext = React.createContext({});

export const DeepLinksContextProvider = ({children}) => {





    useEffect(() => {
        initDeepLinks();

        return () => {
            Linking.addEventListener('url', (data) => {});
        };
    }, []);

    return (
        <DeepLinksContext.Provider
            value={{}}>
            {!isProcessing && (
                children
            )}
        </DeepLinksContext.Provider>
    );
};

export const useDeepLinks = () => React.useContext(DeepLinksContext);
