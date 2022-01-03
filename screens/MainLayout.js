import React from "react";
 import {} from 'react-native';

 import { COLORS, SIZES, icons } from '../constants'

const MainLayout = ({ children }) => {
    return (
        <View style={{
            flex: 1
        }}>
            {children}
        </View>
    )
}

export  default MainLayout;