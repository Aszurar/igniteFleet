import React from 'react';

import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} backgroundColor="gray.500">
      <Spinner color="green.500" accessibilityLabel="Loading App" />
    </Center>
  );
}
