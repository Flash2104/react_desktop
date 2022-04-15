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
  ActivityIndicator,
  Alert,
  Appearance,
  Button,
  ColorSchemeName,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import HoverableButton from './src/shared/components/HoverableButton';

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
  const [modalVisible, setModalVisible] = useState(false);
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
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
    color: isDarkMode ? Colors.light : Colors.dark,
    height: '100%'
  };

  const handleCountIncrement = (): void => {
    setCount(count + 1);
  };

  const handleCountReset = (): void => {
    setCount(0);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View style={[styles.rootViewContainer, backgroundStyle]}>
          <Switch
            trackColor={{false: '#81b0ff', true: '#767577'}}
            thumbColor={theme === 'light' ? '#f5dd4b' : '#f4f3f4'}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={changeTheme}
            value={theme === 'dark'}
          />
          <Section title="Increament example" isDarkMode={theme === 'dark'}>
            Counter: <Text style={styles.highlight}>{count}</Text>
          </Section>
          <View style={styles.buttonBlock}>
            <HoverableButton
              isDarkMode={isDarkMode}
              title='Count++'
              // isDisabled
              onPress={handleCountIncrement}>
            </HoverableButton>
            <HoverableButton
              isDarkMode={isDarkMode}
              title='Reset'
              // isDisabled
              onPress={handleCountReset}>
            </HoverableButton>
          </View>
          <View style={styles.buttonBlock}>
            <Button
              title="Left button"
              onPress={() => setModalVisible(true)}
            />
            <Button
              title="Right button"
              onPress={() => setModalVisible(false)}
            />
        </View>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootViewContainer: {
    // alignItems: 'center',
    height: '100%'
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
  buttonBlock: {
    // marginHorizontal: 60,
    alignSelf: 'center',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 10,
  },
  button: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
