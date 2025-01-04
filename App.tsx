import {RouteProp} from '@react-navigation/native';
import Flex from '@src/components/Flex';
import {useCaches} from '@src/constants/store';
import {RootStacksParams, RootStacksProp} from '@src/screens/Stacks';
import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'App'>;
}

const App = (props: MyProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {navigation} = props;
  const {bears, increase} = useCaches();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('HelloWorld', {id: '123456'});
    }, 1000);
    return function () {};
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Flex horizontal>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                increase(1);
              }}>
              <FastImage
                source={{uri: 'https://cctv3.net/i.jpg'}}
                style={{height: 32, width: 32}}
              />
            </TouchableOpacity>
            <Text>Bears: {bears}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('HelloWorld', {id: '666666'});
              }}>
              <Image
                source={require('@src/assets/images/android.png')}
                style={{height: 32, width: 32}}
              />
            </TouchableOpacity>
          </Flex>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
