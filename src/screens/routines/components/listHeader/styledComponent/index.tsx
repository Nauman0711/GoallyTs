import { View, Text } from "react-native";
import styled from 'styled-components';
import { colors } from "../../../../../theme/colors";

interface RoutineTimeTextProps {
    isNight: boolean;
}

export const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ListHeaderContainer = styled(View)`
flex-direction: row; align-items: center; justify-content: space-between;
`;

export const RoutineContainer = styled(View)`
align-items: center;
margin-top: 24px
`;

export const RoutineText = styled(Text)`
color: ${colors.fontBlack}; font-weight: bold;
`;

export const RoutineWrapper = styled(View)`
width: 168px; border-radius: 12px; padding: 10px; margin-top: 10px;
`;

export const RoutineDetailsContainer = styled(View)`
flex-direction: row; align-items: center; justify-content: space-between; margin-top: 6px;
`;

interface RoutineTimeTextProps {
    isNight: boolean;
}
export const RoutineTimeText = styled(Text)`
color: ${({ isNight }: RoutineTimeTextProps) => (isNight ? colors.white : colors.fontBlack)};`
    ;

export const Separator = styled(View)`
height: 1px; background-color: ${colors.listBorderColor}; margin-vertical: 10px;
`;