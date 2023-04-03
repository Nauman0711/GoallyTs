import { View, Text } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import { ArrowIcon } from '../../../../../theme/assets/svg';
import Swipeable from '../../../../../components/swipeable';
import { colors } from '../../../../../theme/colors';

export const Wrapper = styled(Swipeable)`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 10px;
  border-width: 1px;
  border-bottom-color: ${colors.listBorderColor};
  border-color: ${colors.transparent};
  padding-horizontal: 5px;
`;

export const Image = styled(FastImage)`
  width: 48px;
  height: 48px;
`;

export const InfoWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-horizontal: 5px;
`;

export const Name = styled(Text)`
  color: ${colors.black};
`;

export const Arrow = styled(ArrowIcon)``;