import React from 'react';
import {Title, Card} from 'react-native-paper';
import {View, Image} from 'react-native';
import {TextMask} from 'react-native-masked-text';

export default function Menu({option, ...props}) {
  return (
    <Card
      {...props}
      style={{
        height: 100,
        marginVertical: 10,
        backgroundColor: 'rgba(44, 47, 51, 0.2)'
      }}>
      <Card.Content
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between'
          }}>
          <Title
            style={{
              textAlign: 'justify',
              color: '#fff'
            }}>
            {option.title}
          </Title>
          <TextMask
            style={{textAlign: 'justify', color: '#fff'}}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={option.price}
          />
        </View>
        <View
          opacity={1}
          style={{
            height: '90%',
            borderLeftWidth: 2,
            backgroundColor: '#000',
          }}
        />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image
            style={{height: 80, width: 110, borderRadius: 8}}
            source={{
              uri: option.image,
            }}
          />
        </View>
      </Card.Content>
    </Card>
  );
}
