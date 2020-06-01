import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuPage from './src/views/menuPage';
import ScheduleServicePage from './src/views/scheduleServicePage';
import MainPage from './src/views/mainPage';

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
    </Scene>
  </Router>
);

const sceneStyle = () => {
  let style = {
    backgroundColor: 'transparent',
  };
  return style;
};