import { createBottomTabNavigator } from 'react-navigation';
// Vues
import LoginScreen from '../../app/views/unconnected/LoginScreen';
import AboutScreen from '../../app/views/unconnected/AboutScreen';

// Router
export const AuthStack = createBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: true,
      showIcon: false
    }
  },
  // Default route
  {
    initialRouteName: 'Login',
  }
);