import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Title} from 'react-native-paper';
import {TextMask} from 'react-native-masked-text';
import {ServicesContext} from '../../context/Services';
import styles from './styles';

const ListServicesSelecteds = () => {
  const serviceContext = useContext(ServicesContext);

  const renderRow = item => {
    return (
      <View key={item.title} style={styles.containerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <TextMask
          style={styles.price}
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
      <Title style={styles.labelTitle}>{'Serviços selecionados'} </Title>
      <FlatList
        extraData={serviceContext.services}
        data={serviceContext.services}
        contentContainerStyle={styles.flatContainer}
        renderItem={rowData => renderRow(rowData.item)}
        keyExtractor={item => item.title}
      />
    </>
  );
};

export default ListServicesSelecteds;
