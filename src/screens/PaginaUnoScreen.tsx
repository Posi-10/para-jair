import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { PaginaDosScreen } from './PaginaDosScreen'
import { PersonaScreen } from './PersonaScreen'

interface Props extends StackScreenProps<any, any>{}

export const PaginaUnoScreen = ( {navigation} : Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.subTitulo}>1</Text>
            <Button title="Ir a la pag 2" onPress={() => navigation.navigate('PaginaDosScreen')} />
            <Text style={styles.params}>Navegacion con argumentos</Text>
            <View style={{alignSelf: 'center', flexDirection: 'column', height: 100,}}>
                <View style={styles.btnPersona}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Fernando'
                    })}>
                        <Text style={styles.btnTexto}>Fernando</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnPersona}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Carlos'
                    })}>
                        <Text style={styles.btnTexto}>Carlos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnPersona}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen', {
                        id: 3,
                        nombre: 'Miguel'
                    })}>
                        <Text style={styles.btnTexto}>Miguel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
