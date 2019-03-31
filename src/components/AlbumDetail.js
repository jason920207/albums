import React from 'react'
import { View, Text } from 'react-native'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
  return (
    <View style={styles.containerStyle}>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shaderColor: '#000',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation:1,
    marginLeft: 5,
    marginRigth: 5,
    marginTop: 10
  }
}

export default AlbumDetail
