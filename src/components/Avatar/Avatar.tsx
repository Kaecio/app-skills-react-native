import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import avatar from '../../../assets/img/fan.jpg'

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
    </View>
  )
}