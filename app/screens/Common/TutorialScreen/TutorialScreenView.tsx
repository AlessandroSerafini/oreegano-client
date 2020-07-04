import React, {useEffect, useRef} from 'react';
import {Image, NodeRequire, SafeAreaView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import {Navigation} from "react-native-navigation";
import {writeFirstLaunch} from "../../../services/StorageService";
import {NAVIGATION_COMPONENTS_CUSTOMER} from "../../../data/CommonNavigation";
import Block from "../../../components/Block";
import {SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import Button from "../../../components/Button";
import Text from "../../../components/Text";

interface SLIDE {
    image: NodeRequire,
    title: string,
    content: string,
}

interface Props {
}

const styles = StyleSheet.create({});

const TutorialScreenView = (props) => {
    // ••• local variables •••
    // TODO: IMMAGINI E TESTI NON SONO DEFINITIVI
    const SLIDES: SLIDE[] = [
        {
            image: require('../../../assets/images/test1.png'),
            title: "Titolo prima slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../../assets/images/test2.png'),
            title: "Titolo seconda slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../../assets/images/test3.png'),
            title: "Titolo terza slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../../assets/images/test4.png'),
            title: "Titolo quarta slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../../assets/images/test5.png'),
            title: "Titolo quinta slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../../assets/images/test6.png'),
            title: "Titolo sesta slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
    ];
    const Y_OFFSET = "55%";

    // ••• navigation variables •••

    // ••• state variables & methods •••
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    // ••• refs variables •••
    let imageSwiperEl = useRef(null);
    let contentSwiperEl = useRef(null);

    // ••• useSelector methods •••

    // ••• working methods •••
    const handlePressNext = async () => {
        if (activeIndex < SLIDES.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            await writeFirstLaunch();
            await Navigation.setStackRoot(props.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ACCOUNT,
                },
            })
        }
    }

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        if (contentSwiperEl && activeIndex < SLIDES.length) {
            contentSwiperEl.current.scrollTo(activeIndex);
        }
    }, [activeIndex]);


    return (
        <SafeAreaView style={{flex: 1}}>
            <Swiper showsPagination={false}
                    showsButtons={false}
                    loop={false}
                    onIndexChanged={(newIndex) => {
                        setActiveIndex(newIndex);
                        imageSwiperEl.current.scrollTo(newIndex);
                    }}
                    ref={contentSwiperEl}>
                {SLIDES.map((slide: SLIDE, i) => (
                    <Block key={`text-${i}`} style={{top: Y_OFFSET, paddingHorizontal: SIZES.DEFAULT_PADDING}} flex>
                        <Text h1 bold center>{slide.title}</Text>
                        <NewLine multiplier={1.5}/>
                        <Text center>{slide.content}</Text>
                    </Block>
                ))}
            </Swiper>
            <Block fluid flex style={{position: "absolute", zIndex: -1, top: 0}}>
                <Swiper showsPagination={false}
                        showsButtons={false}
                        scrollEnabled={false}
                        loop={false}
                        ref={imageSwiperEl}
                        style={{height: Y_OFFSET}}>
                    {SLIDES.map((slide: SLIDE, i) => (
                        <Block key={`image-${i}`} style={{height: Y_OFFSET, justifyContent: "center"}}>
                            <Image
                                source={slide.image}
                                resizeMode={"contain"}
                                style={{width: 200, height: 200, alignSelf: "center"}}
                            />
                        </Block>
                    ))}
                </Swiper>
            </Block>
            <Button
                style={{
                    alignSelf: "center",
                    width: "90%",
                }}
                title={activeIndex < SLIDES.length - 1 ? 'Avanti' : 'Inizia'}
                onPress={() => {
                    handlePressNext();
                    setTimeout(() => {
                        imageSwiperEl.current.scrollTo(activeIndex);
                    }, 200);
                }}
            />
        </SafeAreaView>
    );
};

export default TutorialScreenView;
