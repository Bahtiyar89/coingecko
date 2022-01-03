import React from 'react';
import {
    View,
    Text
} from 'react-native';
//import Main Layout from current folder.
import {MainLayout} from "./";

const Home = () => {
    return (
        <MainLayout>
            <View>
                <Text>Home</Text>
            </View>
        </MainLayout>
    )
}

export default Home;