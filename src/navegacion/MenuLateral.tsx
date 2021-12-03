import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StarckNav } from './StarckNav';
import { Opciones } from '../screens/Opciones';
import { ImageScreen } from '../screens/ImageScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StarckNav" component={StarckNav} />
            <Drawer.Screen name="Optiones" component={Opciones} />
            <Drawer.Screen name="ImageScreen" component={ImageScreen} />
        </Drawer.Navigator>
    )
}
