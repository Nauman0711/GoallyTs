import styled from "styled-components";
import { View, Text, Dimensions } from "react-native";
import { colors } from "../../../../../theme/colors";

const { height } = Dimensions.get('window')

export const Wrapper = styled(View)`
  height: ${height/2}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${colors.black};
  font-weight: bold;
`;