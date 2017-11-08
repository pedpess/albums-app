import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Card from './src/components/Card';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Card />
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
