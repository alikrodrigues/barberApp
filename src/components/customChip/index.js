import React, {useState, useEffect, useContext} from 'react';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {ServicesContext} from '../../context/Services';

function CustomChip({item}) {
  const [hasInSelected, setHasIn] = useState(false);
  const {services, saveServices} = useContext(ServicesContext);

  useEffect(() => {
    let hasIn = services.includes(item);
    setHasIn(hasIn);
  }, [item, services]);

  return (
    <>
      <Chip
        textStyle={styles.textStyleChips(hasInSelected)}
        style={styles.styleChips(hasInSelected)}
        onPress={() => {
          setHasIn(currentValue => !currentValue);
          saveServices(item);
        }}>
        {item.title}
      </Chip>
    </>
  );
}

export default CustomChip;
