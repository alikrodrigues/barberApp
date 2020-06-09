import React, {useState, useContext, useEffect} from 'react';
import {Chip, Title, Button} from 'react-native-paper';
import styles from './styles';
import {View, FlatList, Text} from 'react-native';
import Template from '../../components/template';
import options from '../../data';
import CustomChip from '../../components/customChip';
import ListServicesSelecteds from '../../components/listServicesSelected';
import {TextMask} from 'react-native-masked-text';
import {ServicesContext} from '../../context/Services';

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
            <CustomChip key={rowData.index} item={rowData.item} />
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          color={'#fff'}
          mode="outlined"
          style={{borderColor: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
          onPress={() => {}}>
          Proximo
        </Button>
      </View>
    </Template>
  );
}

export default ScheduleServicePage;
