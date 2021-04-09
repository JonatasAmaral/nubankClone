import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function App() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
