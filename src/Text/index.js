import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function TextComponent() {
  return (
    <View style={{justifyContent:'center',flex:1}}>
      <Text style={{
        fontSize:20,
        color:'black',
        textAlign:'center' // left,right
      }}>Text Component</Text>

      <Text>hello every one Please
        <Text style={{
            textDecorationLine:'line-through',  //underline
            color:'red'

        }}
        onPress={()=>{Alert.alert('sdd')}}
        > Subscribe</Text>

      </Text>

      <Text style={{textAlign:'justify'}}>lrdfsfsdfsdf sdfsdf sdfsdf sdf sdf sdf sdf next Line{'\n\n'}sdfsdfdsfsd sdfsdfsdf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sdfsdf sdf sdf</Text>

     </View>
  );
}
