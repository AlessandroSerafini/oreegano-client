import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Block from "../components/Block";
import Geolocation from "@react-native-community/geolocation";

const LocationContext = React.createContext({});

export const LocationContextProvider = ({children}) => {

    const getLocation = ():Promise<any> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(info => {

                // TODO: REMOVE ME
                resolve ({latitude: 43.994359, longitude: 12.662218});

                //resolve (info.coords);
            })
        });
    }

    return (
        <LocationContext.Provider
            value={{
                getLocation,
            }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => React.useContext(LocationContext);
