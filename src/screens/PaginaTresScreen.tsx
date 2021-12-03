import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BottomTabs } from '../navegacion/BottomTabs'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}

export const PaginaTresScreen = ({navigation}: Props) => {
    return (
        /* <View style={styles.globalMargin}>
            <Text style={styles.subTitulo}>3</Text>
            <Button title="Regresar" onPress={() => navigation.pop()}/>
            <Button title="Ir a pag 1" onPress={() => navigation.popToTop()}/>
            <View>
                <BottomTabs/>
            </View>
        </View> */
        <BottomTabs/>
    )
}
