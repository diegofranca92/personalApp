import {Box, Skeleton} from 'native-base';
import React from 'react';

export function SkeletonCard() {
  return (
    <Box p="4" my={4} borderColor="coolGray.600" rounded="md" borderWidth={1}>
      {/* <Spinner size="lg" /> */}
      <Skeleton
        w="80%"
        marginX={'auto'}
        startColor="gray.500"
        rounded="md"
        h="8"
      />
      <Skeleton.Text startColor="gray.500" my="6" />
      <Skeleton mb="4" rounded="md" startColor="gray.500" />
    </Box>
  );
}
