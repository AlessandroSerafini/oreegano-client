import React, {useRef} from 'react';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';
import {FONT_FAMILIES, FONT_SIZES, SIZES} from "../data/ThemeConstants";

const DropdownAlertContext = React.createContext({});

export const DropDownAlertContextProvider = ({children}) => {
    interface DropdownAlertData {
        type: DropdownAlertType;
        title: string;
        message?: string;
        time: number;
        callback: () => void;
    }

    let ref = useRef<DropdownAlert>();

    const openDropDownAlert = (data: DropdownAlertData) => {
        ref.current.alertWithType(data.type, data.title, data.message);
        setTimeout(() => {
            if(ref.current) {
                ref.current.closeAction();
            }
            data.callback();
        }, data.time || 3500);
    }

    return (
        <DropdownAlertContext.Provider
            value={{
                openDropDownAlert,
            }}>
            {children}
            <DropdownAlert
                ref={ref}
                closeInterval={0}
                defaultContainer={{paddingHorizontal: 20}}
                imageStyle={{marginRight: 5, width: 25, height: 25, alignSelf: 'center'}}
                titleStyle={{marginTop: SIZES.DEFAULT_PADDING/2, color: "#FFF", fontFamily: FONT_FAMILIES.SEMI_BOLD, fontSize: FONT_SIZES.P}}
                messageStyle={{marginTop: 5, marginBottom: SIZES.DEFAULT_PADDING/2, color: "#FFF", fontFamily: FONT_FAMILIES.REGULAR, fontSize: FONT_SIZES.P}}
            />
        </DropdownAlertContext.Provider>
    );
};

export const useDropDown = () => React.useContext(DropdownAlertContext);
