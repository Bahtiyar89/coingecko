import React from "react";
import {View} from 'react-native';
import {connect} from 'react-redux'

import { COLORS, SIZES, icons } from '../constants'
import { IconTextButton } from '../components'

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