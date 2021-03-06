import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      },
    ],
    { useNativeDriver: true },
  )

  let opened = false;
  
  function onHandlerStateChanged (event) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent
      let dragDistance = 100;
      offset += translationY;

      if (opened) dragDistance = 250

      if(offset >= dragDistance) {
        opened = true;
        offset = 380;
      } else {
        opened = false;
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: offset,
        duration: 200,
        useNativeDriver: true,
      }).start(()=>{
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }
  
  return (
    <Container>
      <Header />

      <Content>
        < Menu translateY={translateY} />
        
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 350],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color='#666' />
              <Icon name="visibility-off" size={28} color='#666' />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 2.563.502,55</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Tranf. de R$ 666,16 recebida do Al??m
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
