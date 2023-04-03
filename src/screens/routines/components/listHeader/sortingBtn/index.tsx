import React from "react";
import { routineStore } from "../../../../../mobx/store";
import { Wrapper } from "./styledComponent";
import { SortingIcon } from "../../../../../theme/assets/svg";
import { colors } from "../../../../../theme/colors";

const SortingBtn: React.FC = () => {
    return (
        <Wrapper onPress={() => routineStore.toggleSortingOrder()}>
            <SortingIcon color={colors.green} />
        </Wrapper>
    )
}

export default SortingBtn