import React from 'react';
import {FlatList} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import Template from '../../components/template';
import options from '../../data';

function MenuPage() {
  return (
    <Template title={'Serviços'} subtitle={'disponiveis'}>
      <FlatList
        data={options}
        style={[styles.screen, styles.flatListStyle]}
        renderItem={rowData => (
          <Menu
            key={rowData.index}
            onPress={() => Actions.scheduleService({service: rowData.item})}
            option={rowData.item}
          />
        )}
        keyExtractor={item => item.title}
      />
    </Template>
  );
}

export default MenuPage;
