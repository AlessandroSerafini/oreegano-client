import React, {useEffect, useRef} from 'react';
import {Image, NodeRequire, SafeAreaView, StyleSheet} from 'react-native';
import {DropdownAlertContext,} from '../../providers/DropdownAlertProvider';
import Swiper from 'react-native-swiper'
import Block from "../../components/Block";
import {SIZES} from "../../data/ThemeConstants";
import Text from "../../components/Text";
import NewLine from "../../components/NewLine";
import Button from "../../components/Button";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS} from "../../data/CommonNavigation";
import {writeFirstLaunch} from '../../services/StorageService';

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
    const SLIDES: SLIDE[] = [
        {
            image: require('../../assets/images/test1.png'),
            title: "Titolo prima slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../assets/images/test2.png'),
            title: "Titolo seconda slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../assets/images/test3.png'),
            title: "Titolo terza slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        },
        {
            image: require('../../assets/images/test4.png'),
            title: "Titolo quarta slide",
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
        if (activeIndex < SLIDES.length-1) {
            setActiveIndex(activeIndex + 1);
        } else {
            await writeFirstLaunch();
            await Navigation.setStackRoot(props.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS.SIGN_UP,
                },
            })
        }
    }

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        if (contentSwiperEl && activeIndex > 0 && activeIndex < SLIDES.length) {
            contentSwiperEl.current.scrollTo(activeIndex);
            setTimeout(() => {
                imageSwiperEl.current.scrollTo(activeIndex);
            }, 250);
        }
    }, [activeIndex]);


    return (
        <SafeAreaView style={{flex: 1}}>
            <Swiper showsPagination={false}
                    showsButtons={false}
                    scrollEnabled={false}
                    loop={false}
                    ref={contentSwiperEl}>
                {SLIDES.map((slide: SLIDE, i) => (
                    <Block key={`text-${i}`} style={{top: Y_OFFSET, paddingHorizontal: SIZES.DEFAULT_PADDING * 2}} flex>
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
                onPress={handlePressNext}
            />
        </SafeAreaView>
    );
};

export default TutorialScreenView;