import {View, Text, Image} from 'react-native';
import React from 'react';
import {cardStyle} from './card.style';

type TCard = {
  title: string;
  rating: string;
  image: string;
};

export default function Card({title, rating, image}: TCard) {
  return (
    <View style={cardStyle.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${image}`}}
        alt={title}
        style={cardStyle.image}
        resizeMode="cover"
      />

      <View style={cardStyle.desc}>
        <Text style={cardStyle.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={cardStyle.rating}>Rating : {rating}</Text>
      </View>
    </View>
  );
}
