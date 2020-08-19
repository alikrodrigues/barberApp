import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import Template from '../../components/template';
import {ServicesContext} from '../../context/Services';
import api from '../../services/api';

function MenuPage() {
  const {saveServices} = useContext(ServicesContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('services').then(response => {
      if (response.status === 200)
        setServices(response.data);
    });
  }, []);

  return (
    <Template title={'Serviços'} subtitle={'disponiveis'}>
      <FlatList
        data={services}
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
        keyExtractor={item => item.id}
      />
    </Template>
  );
}

export default MenuPage;
