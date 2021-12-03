import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StarckNav } from './src/navegacion/StarckNav';
import { MenuLateral } from './src/navegacion/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
      {/* <StarckNav/> */}
    </NavigationContainer>
  )
}
