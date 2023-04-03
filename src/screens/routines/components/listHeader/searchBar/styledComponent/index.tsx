import styled from 'styled-components';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../../../../../theme/colors';

export const Wrapper = styled(View)`
  flex-direction: row;
  border-color: ${colors.black};
  border-width: 1px;
  flex: 1;
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding-horizontal: 10px;
`;

export const CloseButton = styled(TouchableOpacity)`
background-color: ${colors.ashWhite};
padding: 5px;
align-self: center;
border-radius: 50px;
margin-horizontal: 5px;
`;

export const Button = styled(TouchableOpacity)`
  padding: 12px;
  background-color: ${colors.green};
`;