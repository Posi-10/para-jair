import React from 'react'
import { Image, Text, View } from 'react-native'

export const ImageScreen = () => {
    return (
        <View>
            <Text>Imagen Screen</Text>
            <Image source={{uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'}} style={{height: 100, width: 100 }}/>
        </View>
    )
}
