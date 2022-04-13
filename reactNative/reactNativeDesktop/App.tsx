/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import {useTranslation} from 'react-i18next';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  Button,
  ColorSchemeName,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
  isDarkMode: boolean;
  children: any;
}> = ({children, title, isDarkMode}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<ColorSchemeName>();
  const isDarkMode = theme === 'dark';

  const themeChangeListener = useCallback(() => {
    setTheme(Appearance.getColorScheme());
  }, []);

  useEffect(() => {
    const list = Appearance.addChangeListener(themeChangeListener);
    return () => list.remove();
  }, [themeChangeListener]);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  const handleCountReset = () => {
    setCount(0);
  };

  // const App = () => (
  //   <Router>
  //     <Stack key="root">
  //       <Scene key="login" component={Login} title="Login" />
  //       <Scene key="register" component={Register} title="Register" />
  //       <Scene key="home" component={Home} />
  //     </Stack>
  //   </Router>
  // );

  //   // navigate to 'home' as defined in your top-level router
  // Actions.home(PARAMS);

  // // go back (i.e. pop the current screen off the nav stack)
  // Actions.pop();

  // // refresh the current Scene with the specified props
  // Actions.refresh({ param1: 'hello', param2: 'world' });

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View style={[styles.rootViewContainer, backgroundStyle]}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            // thumbColor={theme === 'light' ? '#f5dd4b' : '#f4f3f4'}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={changeTheme}
            value={theme === 'light'}
          />
          <Section title="Increament example" isDarkMode={theme === 'dark'}>
            Counter: <Text style={styles.highlight}>{count}</Text>
          </Section>
          <View style={styles.buttonCounterContainer}>
            <Pressable
              style={[
                styles.buttonCountIncr,
                backgroundStyle,
                {
                  borderColor: isDarkMode ? Colors.white : Colors.black,
                },
              ]}
              onPress={handleCountIncrement}>
              <Text
                style={[
                  {
                    color: isDarkMode ? Colors.white : Colors.black,
                  },
                ]}>
                Count++
              </Text>
            </Pressable>
            <Button
              title="Reset"
              // color={isDarkMode ? Colors.light : Colors.dark}
              onPress={handleCountReset}
            />
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootViewContainer: {
    alignItems: 'center',
  },
  sectionContainer: {
    width: 500,
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
  buttonCounterContainer: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    cursor: 'pointer',
  },
  buttonCountIncr: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
});

export default App;
