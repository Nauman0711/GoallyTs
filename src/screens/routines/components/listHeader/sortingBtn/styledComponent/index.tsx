import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../../../../../theme/colors';

export const Wrapper = styled(TouchableOpacity)`
  background-color: ${colors.white};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-color: ${colors.black};
  border-width: 1px;
  border-radius: 50px;
  margin-left: 14px;
`;