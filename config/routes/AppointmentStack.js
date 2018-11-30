import { createStackNavigator } from 'react-navigation';
// Vues
import AppointmentsIndexScreen from '../../app/views/appointments/AppointmentsIndexScreen';
import AppointmentShow from '../../app/views/appointments/Show';
import AppointmentNew from '../../app/views/appointments/New';
import AppointmentEdit from '../../app/views/appointments/Edit';

// Router
export const AppointmentStack = createStackNavigator(
  {
    Index: {
      screen: AppointmentsIndexScreen,
    },
    Show: {
      screen: AppointmentShow,
    },
    New: {
      screen: AppointmentNew,
    },
    Edit: {
      screen: AppointmentEdit,
    },
  },
  // Default route
  {
    initialRouteName: 'Index',
  }
);