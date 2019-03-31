import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component {
  constructor(){
    super()
    this.state={
      albums:[]
    }
    this.renderAlbums = this.renderAlbums.bind(this)
  }
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
  }

  renderAlbums(){
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album}/>
    ))
  }

  render () {
    const { albums } = this.state

    if(albums.length ===0){
      return <Text>No Albums</Text>
    }

    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList
