import React from 'react';

import { ImageBackground, StyleSheet } from 'react-native';

import { Heading, Text } from 'native-base';

import BackgroundIMG from '@images/background.png';

import { Button as TestButton } from '@atoms/Button';

export function SignIn() {
  return (
    <ImageBackground source={BackgroundIMG} style={styles.container}>
      <Heading mt="196px" color="green.500">
        Ignite Fleet
      </Heading>
      <Text mb={8}>Gestão de uso de veículos</Text>
      <TestButton>Entrar com Google</TestButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 52,
  },
});
