import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
    <View style={[styles.card]}>
      <Text style={[styles.sectionTitle]}>{position}</Text>
      <Text>{company}</Text>
      <Text>
        Descrição: {'\n'}
        {description}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.button}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
