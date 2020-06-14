import React, {useState, useEffect} from 'react';
import Template from '../../components/template';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Moment from 'moment';
import {Actions} from 'react-native-router-flux';

const ScheduleDatePage = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(null);
  const DISABLED_DAYS = ['Domingo'];

  LocaleConfig.locales.pt = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar',
      'Abril',
      'Mai',
      'Jun',
      'Jul.',
      'Ago',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
      'Domingo',
    ],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: 'Hoje',
  };
  LocaleConfig.defaultLocale = 'pt';

  useEffect(() => {
    setMaxDate(
      Moment(todayDate)
        .add(7, 'days')
        .toDate(),
    );
  }, [todayDate]);

  function getDaysInMonth(month, year, days) {
    let pivot = Moment()
      .month(month)
      .year(year)
      .startOf('month');
    const end = Moment()
      .month(month)
      .year(year)
      .endOf('month');

    let dates = {};
    const disabled = {disabled: true};
    while (pivot.isBefore(end)) {
      days.forEach(day => {
        dates[pivot.day(day).format('YYYY-MM-DD')] = disabled;
      });
      pivot.add(7, 'days');
    }

    return dates;
  }

  return (
    <Template title={'Datas'} subtitle={'disponiveis'}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 8,
          marginVertical: 50,
        }}>
        <Title style={{textAlign: 'center', color: '#fff', marginBottom: 15}}>
          Selecione uma data
        </Title>
        <Calendar
          current={todayDate}
          minDate={todayDate}
          maxDate={maxDate}
          hideArrows={true}
          disableArrowLeft={true}
          disableArrowRight={true}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={day => {
            Actions.scheduleProfessional({selectedDay: day});
          }}
          markedDates={getDaysInMonth(
            todayDate.getMonth(),
            todayDate.getFullYear(),
            DISABLED_DAYS,
          )}
        />
      </View>
    </Template>
  );
};

export default ScheduleDatePage;
