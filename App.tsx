import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { NativeBaseProvider } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';

import { SignIn } from '@screens/SignIn';

import { Loading } from '@atoms/Loading';

import { THEME } from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          style="light"
          backgroundColor={THEME.colors.green[700]}
        />
        <SignIn />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.gray[600],
  },
});
