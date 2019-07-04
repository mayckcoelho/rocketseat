import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

const Menu = ({ translateY }) => 
    <Container style={{
        opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
        }),
    }}>
        <Code>
            <QRCode 
                value="https://github.com/mayckcoelho/rocketseat"
                size={60}
                fgColor="#FFF"
                bgColor="#01318C"/>
        </Code>

        <Nav>
            <NavItem>
                <Icon name="help-outline" size={20} color="#FFF" />
                <NavText>Me ajuda</NavText>
            </NavItem>
            <NavItem>
                <Icon name="chat" size={20} color="#FFF" />
                <NavText>Termos de uso</NavText>
            </NavItem>
            <NavItem>
                <Icon name="not-interested" size={20} color="#FFF" />
                <NavText>Cancelar viagem</NavText>
            </NavItem>
            <NavItem>
                <Icon name="person-outline" size={20} color="#FFF" />
                <NavText>Perfil</NavText>
            </NavItem>
            <NavItem>
                <Icon name="smartphone" size={20} color="#FFF" />
                <NavText>Configurações do app</NavText>
            </NavItem>
        </Nav>

        <SignOutButton onPress={() => { }}>
            <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
    </Container>;

export default Menu;
