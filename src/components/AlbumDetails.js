import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetails = props => {
  return (
    <Card>
      <CardItem>
        <View>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.albumItem.title}</Text>
          <Text>{props.albumItem.artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetails;
