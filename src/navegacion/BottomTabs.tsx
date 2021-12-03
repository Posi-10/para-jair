import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/Tab1';
import { Tab2 } from '../screens/Tab2';
import { Tab3 } from '../screens/Tab3';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1} />
            <Tab.Screen name="Tab2" component={Tab2} />
            <Tab.Screen name="Tab3" component={Tab3} />
        </Tab.Navigator>
    )
}
