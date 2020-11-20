import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { fontsName } from '../utils/fonts'

const textCustom = ({fontFamily, ...props}) => {

    let textStyle;

    switch(fontFamily){
        case 'regular':
            textStyle = styles.textRegular
            break
        case 'bold':
            textStyle = styles.textBold
            break
        case 'fancy':
            textStyle = styles.textFancy
            break
        default:
            textStyle = styles.textRegular
            break
    }

    return (
        <Text {...props} style={[props.style, textStyle]}>

        </Text>
    )
}

export default textCustom

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: fontsName.REGULAR
    },
    textBold: {
        fontFamily: fontsName.BOLD
    },
    textFancy: {
        fontFamily: fontsName.FANCY
    },

});
