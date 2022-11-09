import React from 'react';
import {ScrollView, Text, useColorScheme, View, TextInput} from 'react-native';
import {
  TextArea,
  useToast,
  Box,
  Select,
  Flex,
  Divider,
  Container,
  Button,
  Icon,
  IconButton,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

export function Form() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [position, setPosition] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [text, setText] = React.useState('');

  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();
  const toast = useToast();

  const [service, setService] = React.useState('');

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
    // createExperience();
    toast.show({
      render: () => {
        return (
          <Box
            bg="green.700"
            _text={{color: 'white', fontWeight: 'medium'}}
            p="3"
            rounded="sm"
            mb={5}>
            Experiencia Salva com sucesso
          </Box>
        );
      },
    });
    navigate('list');
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      contentContainerStyle={
        (styles.pageContainer, {padding: 12, paddingBottom: 120})
      }>
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
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Contrato"
        _selectedItem={{
          bg: 'blue.600',
          color: 'white',
        }}
        mt={1}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="CLT" value="ux" />
        <Select.Item label="PJ" value="web" />
        <Select.Item label="Freelancer" value="cross" />
      </Select>
      <TextArea
        style={styles.textArea}
        onChangeText={setDescription}
        value={description}
        autoCompleteType={''}
        numberOfLines={5}
        placeholder="Text Area Placeholder"
      />
      <Divider
        my="4"
        _light={{
          bg: 'blueGray.300',
        }}
        _dark={{
          bg: 'blueGray.700',
        }}
      />
      <Text>Periodo</Text>
      <Flex direction="row" mb="2.5" mt="1.5">
        <Select
          selectedValue={service}
          minWidth="100"
          accessibilityLabel="Choose Service"
          placeholder="Ano"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="2015" value="2015" />
          <Select.Item label="2016" value="2016" />
          <Select.Item label="2017" value="2017" />
          <Select.Item label="2018" value="2018" />
          <Select.Item label="2019" value="2019" />
          <Select.Item label="2020" value="2020" />
          <Select.Item label="2021" value="2021" />
          <Select.Item label="2022" value="2022" />
        </Select>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Mês"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Janeiro" value="ux" />
          <Select.Item label="Fevereiro" value="web" />
          <Select.Item label="Março" value="cross" />
          <Select.Item label="Abril" value="ui" />
          <Select.Item label="Maio" value="backend" />
        </Select>
      </Flex>

      <Divider
        my="4"
        _light={{
          bg: 'blueGray.300',
        }}
        _dark={{
          bg: 'blueGray.700',
        }}
      />
      <Text>Skills</Text>

      <View style={{padding: 10}}>
        <TextInput
          style={styles.button}
          placeholder="JavaScript, Css"
          onChangeText={newText => setText(newText)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {text
            .split(' ')
            .map(word => word)
            .join(' ')}
        </Text>
      </View>
      <Divider
        my="4"
        _light={{
          bg: 'blueGray.300',
        }}
        _dark={{
          bg: 'blueGray.700',
        }}
      />
      <Text>Projetos</Text>
      <Container>
        <TextInput
          style={styles.input}
          onChangeText={setCompany}
          value={company}
          placeholder="Nome do projeto"
        />
        <TextArea
          style={styles.textArea}
          onChangeText={setDescription}
          value={description}
          autoCompleteType={''}
          numberOfLines={5}
          placeholder="Descreva seu projeto..."
        />
        <Text>Skills</Text>
        <View style={{padding: 10}}>
          <TextInput
            style={styles.button}
            placeholder="JavaScript, Css"
            onChangeText={newText => setText(newText)}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {text
              .split(' ')
              .map(word => word)
              .join(' ')}
          </Text>
        </View>
      </Container>
      <Divider
        my="4"
        _light={{
          bg: 'blueGray.300',
        }}
        _dark={{
          bg: 'blueGray.700',
        }}
      />
      <Text>Promoções</Text>
      <Container>
        <TextInput
          style={styles.input}
          onChangeText={setCompany}
          value={company}
          placeholder="Novo cargo"
        />
        <TextArea
          style={styles.textArea}
          onChangeText={setDescription}
          value={description}
          autoCompleteType={''}
          numberOfLines={5}
          placeholder="Descreva suas atividades"
        />
      </Container>
      <Button
        style={styles.button}
        onPress={handleSubmit}
        endIcon={<Icon as={MCIcon} name="content-save" size="sm" />}>
        Salvar Dados
      </Button>
      <Button onPress={() => goBack()} variant="outline">
        Cancelar
      </Button>
    </ScrollView>
  );
}
