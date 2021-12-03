import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import { PaginaDosScreen } from '../screens/PaginaDosScreen'
import { PaginaTresScreen } from '../screens/PaginaTresScreen'
import { PaginaUnoScreen } from '../screens/PaginaUnoScreen'
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    PaginaUnoScreen: undefined
    PaginaDosScreen: undefined
    PaginaTresScreen: undefined
    PersonaScreen: {id: number, nombre: string}
}

const Stack = createStackNavigator<RootStackParams>()

export const StarckNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PaginaUnoScreen" component={PaginaUnoScreen}/>
            <Stack.Screen name="PaginaDosScreen" component={PaginaDosScreen}/>
            <Stack.Screen name="PaginaTresScreen" component={PaginaTresScreen}/>
            <Stack.Screen name="PersonaScreen" component={PersonaScreen}/>
        </Stack.Navigator>
    )
}
