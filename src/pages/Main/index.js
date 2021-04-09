import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function App() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color='#666' />
            <Icon name="visibility-off" size={28} color='#666' />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 2.504.169,55</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranf. de R$ 536.000,00 recebida do Alem
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
