import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetails';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
        <AlbumDetail />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
