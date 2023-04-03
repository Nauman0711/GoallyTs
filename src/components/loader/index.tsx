import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../../theme/colors"
import { LoaderContainer } from "./styledComponent";

const Loader: React.FC = () => {
    return (
        <LoaderContainer>
            <ActivityIndicator color={colors.red} />
        </LoaderContainer>
    );
};

export default Loader;