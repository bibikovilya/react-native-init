import { createDrawerNavigator } from 'react-navigation';
import RootScreen from '../../app/views/connected/RootScreen';
import { AppointmentStack } from './AppointmentStack';

// Router
export const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: RootScreen,
    },
    Appointments: {
      screen: AppointmentStack,
    },
  },
  // Default route
  {
    initialRouteName: 'Home',
  }
);