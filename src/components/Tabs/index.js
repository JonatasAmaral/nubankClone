import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabItem, TabsContainer, TabText } from './styles';

const tabsItens = [
  {icon: 'person-add', text: 'Indicar amigos' },
  {icon: 'chat-bubble-outline', text: 'Cobrar' },
  {icon: 'arrow-downward', text: 'Depositar' },
  {icon: 'arrow-upward', text: 'Transferir' },
  {icon: 'lock', text: 'Broquear cartão' },
]

export default function Tabs({translateY}) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0,380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0,380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}>
      <TabsContainer>
        {tabsItens.map((tab, idx)=>{
          return (
            <TabItem key={idx}>
              <Icon name={tab.icon} size={24} color="#fff"></Icon>
              <TabText>{tab.text}</TabText>
            </TabItem>
          )
        })}
        
      </TabsContainer>
    </Container>
  );
}