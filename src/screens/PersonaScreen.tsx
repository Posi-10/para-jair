import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navegacion/StarckNav'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

interface RouterParams {
    id: number,
    nombre: string,
}

export const PersonaScreen = ({route, navigation}: Props) => {
    const params = route.params as RouterParams

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={{fontSize: 30}}>
                {
                JSON.stringify(params, null, 4)
                }
            </Text>
        </View>
    )
}
