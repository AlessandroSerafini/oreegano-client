import React, {useRef} from 'react';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';

const DropdownAlertContext = React.createContext({});

export const DropDownAlertContextProvider = ({children}) => {
    interface DropdownAlertData {
        type: DropdownAlertType;
        title: string;
        message: string;
        callback: () => void;
    }

    let ref = useRef<DropdownAlert>();

    const openDropDownAlert = (data: DropdownAlertData) => {
        ref.current.alertWithType(data.type, data.title, data.message);
        setTimeout(() => {
            ref.current.closeAction();
            data.callback();
        }, 3500);
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
                imageStyle={{width: 25, height: 25, alignSelf: 'center'}}
            />
        </DropdownAlertContext.Provider>
    );
};

export const useDropDown = () => React.useContext(DropdownAlertContext);
