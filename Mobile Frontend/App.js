import Home from './screens/HomeScreen/Home';
import Tests from './screens/HomeScreen/Tests';
import Profile from './screens/HomeScreen/Profile';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
          ),
        }}
        />
      
        <Tab.Screen name="Tests" component={Tests} 
          options={{
            tabBarLabel: 'Tests',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flask" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
     
    </NavigationContainer>
  );
}