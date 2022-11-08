import React from 'react';
import {Text, View} from 'react-native';
import {ExperienceType} from '../../models/experience';
import {styles} from '../style';

interface cardProps extends ExperienceType {}

export function CardExperience({position, description, company}: cardProps) {
  return (
    <View>
      <Text style={[styles.sectionTitle]}>{position}</Text>
      <Text>{company}</Text>
      <Text>
        Descrição: {'\n'}
        {description}
      </Text>
    </View>
  );
}
