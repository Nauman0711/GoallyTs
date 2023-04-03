import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Observer } from 'mobx-react';
import { routineStore } from "../../mobx/store";
import Content from "./components/content";
import Loader from "../../components/loader";
import ListHeaderComponent from "./components/listHeader";
import NothingToShow from "./components/nothingToShow";
import { Container } from "./syledComponents";

const Routines: React.FC = () => {
    useEffect(() => {
        routineStore.onMount()
    }, [])

    return (
        <Container>
            <Observer>
                {() => (
                    <>
                        {routineStore.loading ?
                            <Loader /> :
                            <>
                                {/* We can Pass ListHeaderComponent into flatlist but it will scroll with the content, We can stop it by sticky header, but this not seems to important there */}
                                <ListHeaderComponent />
                                <FlatList
                                    data={routineStore.routineList}
                                    refreshing={routineStore.refresh}
                                    showsVerticalScrollIndicator={false}
                                    onRefresh={() => routineStore.onRefresh()}
                                    onEndReached={() => routineStore.pagination()}
                                    ListEmptyComponent={!routineStore.refresh ? NothingToShow : null}
                                    ListFooterComponent={!routineStore.loading && routineStore.currentPage < routineStore.totalPages ? Loader : null}
                                    onEndReachedThreshold={0.5}
                                    keyExtractor={(item) => item?._id}
                                    renderItem={({ item }) => <Content item={item} />}
                                />
                            </>
                        }

                    </>
                )}
            </Observer>
        </Container>
    )
}
export default Routines