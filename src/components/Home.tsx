import React from 'react';
import {
  ScrollView,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './style';

export function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');

  const {navigate} = useNavigation();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      contentContainerStyle={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={[styles.sectionTitle]}>Novo Cadastro </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Profissão"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Empresa"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Periodo"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Descrição"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Skills"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Projetos"
        />
        <TouchableOpacity
          onPress={() => navigate('list')}
          style={styles.button}
          accessibilityLabel="Learn more about this purple button">
          <Text>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
          accessibilityLabel="Learn more about this purple button">
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
