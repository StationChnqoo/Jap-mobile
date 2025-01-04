import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import App from 'App';
import HelloWorld from './HelloWorld';

export type RootStacksParams = {
  App: undefined;
  HelloWorld: {id: string};
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigator}>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          animationDuration: 618,
        }}>
        <RootStack.Screen
          name="App"
          component={App}
          options={{freezeOnBlur: true, animation: 'fade'}}
        />
        <RootStack.Screen
          name="HelloWorld"
          component={HelloWorld}
          // options={{freezeOnBlur: true, animation: 'fade'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
