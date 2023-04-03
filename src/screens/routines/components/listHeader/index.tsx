import React, { useState } from "react";
import { Switch } from "react-native";
import { ArrowIcon, Eclipse, Moon } from "../../../../theme/assets/svg";
import { colors } from "../../../../theme/colors";
import SearchBar from "./searchBar";
import SortingBtn from "./sortingBtn";
import { Wrapper, ListHeaderContainer, RoutineContainer, RoutineDetailsContainer, RoutineText, RoutineTimeText, RoutineWrapper, Separator } from "./styledComponent";

const ListHeaderComponent: React.FC = () => {
    const [isWeekendEnabled, setisWeekendEnabled] = useState<boolean>(false);
    const [isNightEnabled, setisNightEnabled] = useState<boolean>(false);
    const toggleWeekendSwitch = (): void => setisWeekendEnabled((previousState: boolean) => !previousState);
    const toggleNightSwitch = (): void => setisNightEnabled((previousState: boolean) => !previousState);
    return (
        <>
            <ListHeaderContainer>
                <RoutineContainer>
                    <RoutineText>Morning Routine</RoutineText>
                    <RoutineWrapper
                        style={{
                            backgroundColor: colors.seiraBlue,
                        }}
                    >
                        <RoutineDetailsContainer>
                            <RoutineTimeText isNight={false}>Weekdays{'\n'}7:00 AM</RoutineTimeText>
                            <Eclipse />
                        </RoutineDetailsContainer>
                        <RoutineDetailsContainer>
                            <Switch
                                trackColor={{
                                    false: colors.lightGray,
                                    true: colors.lightGreen,
                                }}
                                thumbColor={colors.white}
                                ios_backgroundColor={colors.lightGray}
                                onValueChange={toggleWeekendSwitch}
                                value={isWeekendEnabled}
                            />
                            <ArrowIcon />
                        </RoutineDetailsContainer>
                    </RoutineWrapper>
                </RoutineContainer>
                <RoutineContainer>
                    <RoutineText>Night Routine</RoutineText>
                    <RoutineWrapper
                        style={{
                            backgroundColor: colors.darkBlue,
                        }}
                    >
                        <RoutineDetailsContainer>
                            <RoutineTimeText isNight>
                                Everyday{'\n'}9:00 PM
                            </RoutineTimeText>
                            <Moon />
                        </RoutineDetailsContainer>
                        <RoutineDetailsContainer>
                            <Switch
                                trackColor={{
                                    false: colors.lightGray,
                                    true: colors.lightGreen,
                                }}
                                thumbColor={colors.white}
                                ios_backgroundColor={colors.lightGray}
                                onValueChange={toggleNightSwitch}
                                value={isNightEnabled}
                            />
                            <ArrowIcon color={colors.white} />
                        </RoutineDetailsContainer>
                    </RoutineWrapper>
                </RoutineContainer>
            </ListHeaderContainer>
            <Separator />
            <Wrapper>
                <SearchBar />
                <SortingBtn />
            </Wrapper>
        </>
    );
};

export default ListHeaderComponent;