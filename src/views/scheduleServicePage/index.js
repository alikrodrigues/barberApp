import React, {useState, useContext, useEffect} from 'react';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {View, FlatList} from 'react-native';
import Template from '../../components/template';
import options from '../../data';
import CustomChip from '../../components/customChip';
import ListServicesSelecteds from '../../components/listServicesSelected';
import {ServicesContext} from '../../context/Services';
import CustomButton from '../../components/customButton';
import { Actions } from 'react-native-router-flux';

function ScheduleServicePage() {
  const {services} = useContext(ServicesContext);
  const [addMore, setAddMore] = useState(false);

  return (
    <Template title={'Agendamento'}>
      <View style={styles.container}>
        <FlatList
          data={addMore ? options : services}
          numColumns={2}
          keyExtractor={item => item.title}
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
      <CustomButton onPress={() => Actions.scheduleProfessional()} />
    </Template>
  );
}

export default ScheduleServicePage;
