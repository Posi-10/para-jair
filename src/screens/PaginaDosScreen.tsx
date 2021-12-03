import { CommonActions, useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { PaginaTresScreen } from './PaginaTresScreen'

export const PaginaDosScreen = () => {
    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            title: 'Home'
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.subTitulo}>2</Text>
            <Button title="Ir a la pag 3" onPress={() => navigator.dispatch(CommonActions.navigate('PaginaTresScreen'))} />
            <Text>Navegacion con argumentos</Text>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigator.dispatch(CommonActions.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Carlos'
                    }))}>
                        <Text>Carlos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
