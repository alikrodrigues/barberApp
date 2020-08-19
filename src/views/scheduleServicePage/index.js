import React, {useState, useContext, useEffect} from 'react';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {View, FlatList} from 'react-native';
import Template from '../../components/template';
import CustomChip from '../../components/customChip';
import ListServicesSelecteds from '../../components/listServicesSelected';
import {ServicesContext} from '../../context/Services';
import CustomButton from '../../components/customButton';
import {Actions} from 'react-native-router-flux';
import api from '../../services/api';

function ScheduleServicePage() {
  const {services} = useContext(ServicesContext);
  const [addMore, setAddMore] = useState(false);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    api.get('services').then(response => {
      if (response.status === 200) {
        setOptions(response.data);
      }
    });
  }, []);

  return (
    <Template title={'Agendamento'}>
      <View style={styles.container}>
        <FlatList
          data={addMore ? options : services}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{marginHorizontal: 10}}
          renderItem={rowData => (
            <CustomChip
              isService={true}
              key={rowData.index}
              item={rowData.item}
            />
          )}
        />
        <Chip
          style={styles.chipAddMore}
          icon={addMore ? 'arrow-up' : 'plus'}
          onPress={() => setAddMore(current => setAddMore(!current))}>
          {addMore ? 'Voltar' : 'Mais serviços'}
        </Chip>
      </View>
      <ListServicesSelecteds />
      <CustomButton onPress={() => Actions.scheduleDate()} />
    </Template>
  );
}

export default ScheduleServicePage;
