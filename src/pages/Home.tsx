import React from 'react';
import {Button, Icon, Center} from 'native-base';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export function Home() {
  const {navigate} = useNavigation();
  function handleSubmit() {
    navigate('new');
  }
  return (
    <Center h="100%">
      <Button
        style={styles.button}
        size="lg"
        onPress={handleSubmit}
        endIcon={<Icon as={MCIcon} name="text-box-plus-outline" size="lg" />}>
        Nova Formação
      </Button>
    </Center>
  );
}
