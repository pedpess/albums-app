import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {

  state = { albums: [] };

  componentDidMount() {
    console.log('componentWillMount');
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
