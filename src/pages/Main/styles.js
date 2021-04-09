import styled from 'styled-components/native';
// import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8a05be;
  padding-top: ${getStatusBarHeight()}px;
`;
