import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/icon_push.png'
import { Container, Top, Logo, Title } from './styles';

const Header = () => {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Lucas Carvalho</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF"/>
        </Container>
    );
}

export default Header;
