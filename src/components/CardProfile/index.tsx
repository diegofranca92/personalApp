import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Button,
  Image,
} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {ProfileType} from '../../models/profile';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../style';
import {useNavigation} from '@react-navigation/native';

interface cardProps extends ProfileType {
  onPress?: () => void;
}

export function CardProfile({
  name,
  position,
  company,
  bio,
  onPress,
}: cardProps) {
  const {navigate} = useNavigation();
  return (
    <Box bg={'blueGray.200'} shadow={1} p={4}>
      <Center>
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: 'https://diegofranca.netlify.app/assets/images/perfil.jpeg',
          }}
          alt="Imagem do perfil de Diego"
        />
      </Center>
      <HStack space={2} justifyContent="space-between" alignItems="center">
        <Text style={styles.title}>{name}</Text>
        <IconButton
          onPress={onPress}
          icon={
            <Icon
              as={MCIcon}
              name="account-edit"
              color={'blue.700'}
              size="lg"
            />
          }
        />
      </HStack>
      <Text style={styles.subtitle}>
        {position} - {company}
      </Text>
      <Text style={styles.description}>
        Bio: {'\n'}
        {bio}
      </Text>
      <Center>
        <Button
          style={styles.button}
          size="lg"
          onPress={() => navigate('new')}
          endIcon={<Icon as={MCIcon} name="text-box-plus-outline" size="lg" />}>
          Novo Job
        </Button>
      </Center>
    </Box>
  );
}
