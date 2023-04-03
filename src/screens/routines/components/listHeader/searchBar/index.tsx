import React from "react";
import { Observer } from "mobx-react";
import { Wrapper, Input, Button, CloseButton } from "./styledComponent";
import { CrossIcon, SearchIcon } from "../../../../../theme/assets/svg";
import { routineStore } from "../../../../../mobx/store";

const SearchBar: React.FC = () => {
    return (
        <Wrapper>
            <Observer>
                {() => (
                    <>
                        <Input value={routineStore.search} onChangeText={(text) => routineStore.setSearch(text)} placeholder="Search Here" />
                        {routineStore.search &&
                            <CloseButton onPress={() => { routineStore.setSearch(""), routineStore.onSearch() }}>
                                <CrossIcon />
                            </CloseButton>
                        }
                        <Button onPress={() => routineStore.onSearch()}>
                            <SearchIcon />
                        </Button>
                    </>
                )}
            </Observer>
        </Wrapper>
    )
}

export default SearchBar