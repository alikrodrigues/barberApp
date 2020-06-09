import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Title, Button} from 'react-native-paper';
import {TextMask} from 'react-native-masked-text';
import {useServicesList} from '../../context/Services';
import {ServicesContext} from '../../context/Services';

const ListServicesSelecteds = () => {
  const serviceContext = useContext(ServicesContext);

  const renderRow = item => {
    return (
      <View
        key={item.title}
        style={{
          borderBottomWidth: 0.8,
          borderBottomColor: '#000',
          paddingLeft: 15,
          minHeight: '10%',
          flexDirection: 'row',
          paddingTop: 2,
          paddingBottom: 2,
        }}>
        <Title style={{color: '#fff', flex: 1}}>{item.title}</Title>
        <TextMask
          style={{
            textAlign: 'right',
            color: '#fff',
            flex: 1,
            alignSelf: 'center',
            fontSize: 20,
          }}
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          }}
          value={item.price}
        />
      </View>
    );
  };

  return (
    <>
      <Title style={{textAlign: 'center', color: '#fff'}}>
        {'Serviços selecionados'}{' '}
      </Title>
      <FlatList
        extraData={serviceContext.services}
        data={serviceContext.services}
        contentContainerStyle={{
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: 8,
          flex: 1,
        }}
        renderItem={rowData => renderRow(rowData.item)}
        keyExtractor={item => item.title}
      />
    </>
  );
}

export default ListServicesSelecteds;
