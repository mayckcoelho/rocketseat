import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

const Tabs = ({ translateY }) => {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            }),
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                })
            }]
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="visibility" size={24} color="#FFF" />
                    <TabText>Visualizar averbações</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="settings-overscan" size={24} color="#FFF" />
                    <TabText>Averbar Barcode</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="insert-drive-file" size={24} color="#FFF" />
                    <TabText>Averbar Manual</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="not-interested" size={24} color="#FFF" />
                    <TabText>Encerrar Viagem</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="cancel" size={24} color="#FFF" />
                    <TabText>Cancelar Viagem</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}

export default Tabs;
