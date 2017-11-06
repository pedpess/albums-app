import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

  state = { albums: [] };

  componentDidMount() {
    console.log('componentWillMount');
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} albumItem={album} />
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
