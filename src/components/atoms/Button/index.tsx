import React from 'react';

import { StyleSheet } from 'react-native';

import { Text } from 'native-base';

import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';

import { THEME } from '@theme/index';

export function Button({ children }: RectButtonProps) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RectButton style={styles.button}>
        <Text fontWeight="bold">{children}</Text>
      </RectButton>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
  },
  button: {
    backgroundColor: THEME.colors.green[700],
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
