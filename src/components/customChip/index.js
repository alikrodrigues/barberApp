import React, {useState, useEffect, useContext} from 'react';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {ServicesContext} from '../../context/Services';
import {ShiftsContext} from '../../context/Shifts';

function CustomChip({item, isService, onPress}) {
  const [hasInSelected, setHasIn] = useState(false);
  const {services, saveServices} = useContext(ServicesContext);
  const {shift, saveShift} = useContext(ShiftsContext);

  useEffect(() => {
    if (isService) {
      let hasIn = services.includes(item);
      setHasIn(hasIn);
    }
  }, [isService, item, services]);

  useEffect(() => {
    if (!isService && shift) {
      shift.id === item.id ? setHasIn(true) : setHasIn(false);
    }
  }, [shift, item, isService]);

  const handlePressChip = () => {
    if (isService) {
      setHasIn(currentValue => !currentValue);
      saveServices(item);
    } else {
      setHasIn(currentValue => !currentValue);
      saveShift(item);
    }
  };

  return (
    <>
      <Chip
        textStyle={styles.textStyleChips(hasInSelected)}
        style={styles.styleChips(hasInSelected)}
        onPress={onPress ? onPress : handlePressChip}>
        {item.name ? item.name : item.label}
      </Chip>
    </>
  );
}

export default CustomChip;
