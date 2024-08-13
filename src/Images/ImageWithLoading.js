import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';


export default function ImageWithLoading({ source, style }) {
        const [loading, setLoading] = useState(true);
      
        return (
          <View style={[styles.container, style]}>
            {true && (
              <ActivityIndicator
                style={StyleSheet.absoluteFill}
                size="large"
                color="#0000ff"
              />
            )}
            <Image
              source={source}
              style={[styles.image, style]}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)} 
            />
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth:1,borderRadius:1
        },
        image: {
          width: '100%',
          height: '100%',
        },
      });
      

