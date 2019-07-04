import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
    Container, 
    Content, 
    Card, 
    CardHeader, 
    CardContent, 
    CardFooter,
    Title,
    Description,
    Annotation
} from './styles';

const Main = () => {
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event([{
        nativeEvent: {
            translationY: translateY
        }
    }],{
        useNativeDriver: true
    })

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;
            
            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 480 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 480 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
    <Container>
        <Header />

        <Content>
            <Menu translateY={translateY}/>

            <PanGestureHandler
                onGestureEvent={animatedEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Card style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [-450, 0, 480],
                            outputRange: [-50, 0, 480],
                            extrapolate: 'clamp',
                        }),
                    }]
                }}>
                    <CardHeader>
                        {/* <Icon name="attach-money" size={28} color="#666" /> */}
                        <Annotation>Veículo: FAE6668</Annotation>
                        <Icon name="timeline" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Valor em Transporte</Title>
                        <Description>R$ 220.611,65</Description>
                    </CardContent>
                    <CardFooter>
                        <Icon name="query-builder" size={28} color="#666" />
                        <Annotation>
                            Viagem iniciada à 32 minutos
                        </Annotation>
                    </CardFooter>
                </Card>
            </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY}/>
    </Container>
    );
}

export default Main;
