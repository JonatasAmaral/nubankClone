import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

const navItens = [
  {icon: 'help-outline', text: 'Me ajuda'},
  {icon: 'person-outline', text: 'Perfil'},
  {icon: 'credit-card', text: 'Configurar cartão'},
  {icon: 'smartphone', text: 'Configurações do app'},
]

export default function Menu({translateY}) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0,150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="https://github.com/JonatasAmaral"
          size={80}
          color="#8a05be"
          backgroundColor="#fff"
          
          style={{
            flex: 0,
          }}
        />
      </Code>

      <Nav>
        { navItens.map((item,idx)=>{ return(
          <NavItem key={idx}>
            <Icon name={item.icon} size={20} color="#fff"/>
            <NavText>{item.text}</NavText>
          </NavItem>
        ) }) }
      </Nav>

      <SignOutButton onPress={() => {}} >
        <SignOutButtonText>
          Sair do app 
        </SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}