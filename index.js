import React, {useEffect} from 'react';
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-reanimated';
import ToastProvider from './src/components/ToastProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Stacks from './src/screens/Stacks';

const Jap = () => {
  useEffect(() => {
    return function () {};
  }, []);

  return (
    <GestureHandlerRootView>
      <ToastProvider>
        <View style={{flex: 1}}>
          <Stacks />
        </View>
      </ToastProvider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => Jap);
