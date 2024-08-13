import React from 'react';
import { View, Text, Image } from 'react-native';
import ImageWithLoading from './ImageWithLoading';

export default function ImageApp() {
  return (
    <View>
      <Image
      source={require('./Asserts/download.png')}
      style={{
        height:100,
        width:100,
        tintColor:'green',
      }}
      />
      <Image
      source={require('./Asserts/pexels-sebastian-palomino-933481-1955134.jpg')}
      style={{
        height:100,
        width:100,
        resizeMode:'cover',
        borderRadius:50,
        borderWidth:1,
        borderColor:'green'
      }}
      blurRadius={10}
      />
       <ImageWithLoading
        source={{ uri: 'https://w0.peakpx.com/wallpaper/881/520/HD-wallpaper-bridge-architecture-construction-lights-city-night.jpg' }}
        style={{ width: 200, height: 200 }}
        
      />
     </View>
  );
}
