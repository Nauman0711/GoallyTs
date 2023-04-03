import React from "react";
import FastImage from 'react-native-fast-image'
import { Wrapper, Image, InfoWrapper, Name, Arrow } from "./styledComponent";
import { routineStore } from "../../../../mobx/store";
interface Item {
    visualAidUrl?: string;
    name?: string;
    _id: string;
}

interface RoutinesProps {
    item: Item;
}

const Content: React.FC<RoutinesProps> = ({ item }) => {
    const { visualAidUrl, name, _id } = item
    return (
        <Wrapper onSwipe={() => routineStore.removeItem(_id)}>
            <Image
                source={{
                    uri: visualAidUrl,
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <InfoWrapper>
                <Name>{name}</Name>
            </InfoWrapper>
            <Arrow />
        </Wrapper>
    )
}

export default Content;