import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import Template from '../../components/template';
import options from '../../data';
import {ServicesContext} from '../../context/Services';

function MenuPage() {
  const {saveServices} = useContext(ServicesContext);

  return (
    <Template title={'Serviços'} subtitle={'disponiveis'}>
      <FlatList
        data={options}
        style={[styles.screen, styles.flatListStyle]}
        renderItem={rowData => (
          <Menu
            key={rowData.index}
            onPress={() => {
              saveServices(rowData.item);
              Actions.scheduleService();
            }}
            option={rowData.item}
          />
        )}
        keyExtractor={item => item.title}
      />
    </Template>
  );
}

export default MenuPage;
