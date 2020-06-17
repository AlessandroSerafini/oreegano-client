import React, {useRef} from 'react';
import DropdownAlert from 'react-native-dropdownalert';
const DropdownAlertContext = React.createContext({});

export const DropDownAlertContextProvider = ({children}) => {
  let ref = useRef<DropdownAlert>();
  return (
    <DropdownAlertContext.Provider
      value={{
        ref,
      }}>
      {children}
      <DropdownAlert
        ref={ref}
        defaultContainer={{paddingHorizontal: 20}}
        imageStyle={{width: 25, height: 25, alignSelf: 'center'}}
      />
    </DropdownAlertContext.Provider>
  );
};

export const useDropDown = () => React.useContext(DropdownAlertContext);
