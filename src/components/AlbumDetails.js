import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetails = ({ albumItem }) => {
  const { title, artist, thumbnail_image, image, url } = albumItem;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainer,
    headerTextStyle,
    imageStyle } = styles;
  return (
    <Card>

      <CardItem>
        <View style={thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(url)} >
          Buy now
        </Button>
      </CardItem>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18,
  },

  thumbnailStyle: {
    width: 50,
    height: 50,
  },

  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }

};

export default AlbumDetails;
