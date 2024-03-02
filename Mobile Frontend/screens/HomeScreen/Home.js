import * as React from 'react';

import Doctors from '../HomeScreen/Doctors';
import Doctor from '../HomeScreen/Doctor';
import Chat from '../HomeScreen/Chat';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Doctor" component={Doctor} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>

  );
}