import {Box, Button} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {ExperienceType} from '../../models/experience';
import {styles} from '../style';

interface cardProps extends ExperienceType {
  onPress: () => void;
}

export function CardExperience({
  position,
  description,
  company,
  onPress,
}: cardProps) {
  return (
    <Box bg={'blue.600'} rounded="md" p={4} my={4} shadow={1}>
      <Text style={[styles.sectionTitle]}>{position}</Text>
      <Text>{company}</Text>
      <Text>
        Descrição: {'\n'}
        {description}
      </Text>
      <Button rounded="md" onPress={onPress} style={styles.button}>
        <Text>Editar</Text>
      </Button>
    </Box>
  );
}
