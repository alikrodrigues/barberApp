import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuPage from './src/views/menuPage';
import ScheduleServicePage from './src/views/scheduleServicePage';
import MainPage from './src/views/mainPage';
import ScheduleProfessionalPage from './src/views/scheduleProfessionalPage';
import ScheduleDatePage from './src/views/scheduleDatePage';
import RegisterCustomer from './src/views/registerCustomer';

export default () => (
  <Router getSceneStyle={sceneStyle}>
    <Scene key="root" hideNavBar>
      <Scene key="mainPage" component={MainPage} title="mainPage" />
      <Scene key="menuPage" component={MenuPage} title="menuPage" />
      <Scene
        key="scheduleService"
        component={ScheduleServicePage}
        title="scheduleServicePage"
      />
      <Scene
        key="scheduleProfessional"
        component={ScheduleProfessionalPage}
        title="scheduleProfessional"
      />
      <Scene
        key="scheduleDate"
        component={ScheduleDatePage}
        title="scheduleDate"
      />
      <Scene
        key="registerCustomer"
        component={RegisterCustomer}
        title="registerCustomer"
      />
    </Scene>
  </Router>
);

const sceneStyle = () => {
  let style = {
    backgroundColor: 'transparent',
  };
  return style;
};
