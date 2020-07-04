import React from 'react';
import LottieView from 'lottie-react-native';
import Block from "../components/Block";

const LoadingContext = React.createContext({});

export const LoadingContextProvider = ({children}) => {

    const [isVisible, setVisible] = React.useState<boolean>(false);


    const setLoadingVisibility = (visibility: boolean) => {
        setVisible(visibility);
    }

    const animationSize = 250;

    return (
        <LoadingContext.Provider
            value={{
                setLoadingVisibility,
            }}>
            {children}
            {isVisible && (
                <Block bg="rgba(255,255,255,0.8)" center middle style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}>
                    <LottieView style={{
                        width: animationSize,
                    }} source={require('../assets/lottie-files/loading.json')}
                                autoPlay
                                loop/>
                </Block>
            )}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => React.useContext(LoadingContext);
