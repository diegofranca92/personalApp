import React from 'react';
import {
  ScrollView,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './style';

export function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [position, setPosition] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [company, setCompany] = React.useState('');

  const {navigate} = useNavigation();
  const {params} = useRoute();

  function fetchEditData(data: any) {
    setPosition(data.position);
    setDescription(data.description);
    setCompany(data.company.name);
  }

  const experienceData = {
    position,
    description,
    company: {
      name: company,
    },
  };

  async function createExperience() {
    try {
      const url = 'https://kyoywntqsmqhwsxkrktm.supabase.co/rest/v1';
      await fetch(`${url}/experience`, {
        method: 'POST',
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2MDcyMTcsImV4cCI6MTk4MzE4MzIxN30.vlQ2lfa6Q9C7UrzRuhTfvLHiIy0UQ0zIQ-P2u5g1FIY',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzYwNzIxNywiZXhwIjoxOTgzMTgzMjE3fQ.eRSROClaIhmlqRETuHpGass8cpdx10FwIt5T4vNcDlY',
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify(experienceData),
      });
    } catch (error) {
      console.warn(error);
    }
  }

  React.useEffect(() => {
    if (params) {
      fetchEditData(params);
    }
  }, [params]);

  function handleSubmit() {
    createExperience();
    navigate('list');
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      contentContainerStyle={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={[styles.sectionTitle]}>Novo Cadastro </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPosition}
          value={position}
          placeholder="Profissão"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCompany}
          value={company}
          placeholder="Empresa"
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Periodo"
        /> */}
        <TextInput
          style={styles.textArea}
          onChangeText={setDescription}
          value={description}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholder="Descrição"
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={() => set}
          value={text}
          placeholder="Skills"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Projetos"
        /> */}
        <TouchableOpacity
          onPress={handleSubmit}
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
