import React from 'react';
import {ScrollView, Text, View, TextInput, useColorScheme} from 'react-native';
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
  Switch,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import api from '../api/api';
import {InputForm} from '../components/InputForm';

export function Form() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [position, setPosition] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [contrat, setContrat] = React.useState('');
  const [moment, setMoment] = React.useState(false);

  const [duration, setDuration] = React.useState({
    begin: {
      ano: '',
      mes: '',
    },
    finish: {
      ano: '',
      mes: '',
      moment,
    },
  });

  const [skills, setSkills] = React.useState('');
  const [text, setText] = React.useState('');

  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();
  const toast = useToast();

  // function includeSkills() {
  //   skills.push(years)
  // }

  const [service, setService] = React.useState('');

  const {id}: any = params || '';

  function fetchEditData(data: any) {
    setPosition(data.position);
    setDescription(data.description);
    setCompany(data.company.name);
  }

  const years = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const experienceData = {
    id: id,
    position,
    description,
    company: {
      name: company,
    },
  };

  async function createExperience() {
    try {
      console.log(experienceData);

      // await api.saveExperience(experienceData);
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
      style={backgroundStyle}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={
        (styles.pageContainer, {padding: 12, paddingBottom: 120})
      }>
      <InputForm
        onChangeText={setPosition}
        value={position}
        placeholder="Profissão"
      />
      <InputForm
        onChangeText={setCompany}
        value={company}
        placeholder="Empresa"
      />

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
      <Text>Periodo Inicial</Text>
      <Flex direction="row" mb="2.5" mt="1.5">
        <Select
          selectedValue={duration.begin.ano}
          minWidth="100"
          accessibilityLabel="Choose Service"
          placeholder="Ano"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setDuration({begin: {ano: itemValue}})}>
          {years.map((year, index) => (
            <Select.Item key={index} label={year} value={year} />
          ))}
        </Select>
        <Select
          selectedValue={duration.begin.mes}
          minWidth="130"
          accessibilityLabel="Choose Service"
          placeholder="Mês"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setDuration({begin: {mes: itemValue}})}>
          {months.map((month, index) => (
            <Select.Item key={index} label={month} value={month} />
          ))}
        </Select>
      </Flex>
      <Text>Periodo Final</Text>
      <Flex direction="row" mb="2.5" mt="1.5">
        <Select
          selectedValue={duration.finish.ano}
          minWidth="100"
          accessibilityLabel="Choose Service"
          placeholder="Ano"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setDuration({finish: {ano: itemValue}})}>
          {years.map((year, index) => (
            <Select.Item key={index} label={year} value={year} />
          ))}
        </Select>
        <Select
          selectedValue={duration.finish.mes}
          minWidth="130"
          accessibilityLabel="Choose Service"
          placeholder="Mês"
          _selectedItem={{
            bg: 'blue.600',
            color: 'white',
          }}
          mt={1}
          onValueChange={itemValue => setDuration({finish: {mes: itemValue}})}>
          {months.map((month, index) => (
            <Select.Item key={index} label={month} value={month} />
          ))}
        </Select>
        <Switch value={moment} onToggle={setMoment} size="sm" />
      </Flex>
      <Text>{contrat}</Text>
      <Select
        selectedValue={contrat}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Contrato"
        _selectedItem={{
          bg: 'blue.600',
          color: 'white',
        }}
        mt={1}
        onValueChange={itemValue => setContrat(itemValue)}>
        <Select.Item label="CLT" value="clt" />
        <Select.Item label="PJ" value="pj" />
        <Select.Item label="Freelancer" value="freela" />
      </Select>
      <Divider
        my="4"
        _light={{
          bg: 'blueGray.300',
        }}
        _dark={{
          bg: 'blueGray.700',
        }}
      />
      <Text>Skills {skills} - No enter ele da um push na lista de Skills</Text>

      <View style={{padding: 10}}>
        <TextInput
          style={styles.button}
          placeholder="JavaScript, Css"
          onChangeText={newText => setSkills(newText)}
          onKeyPress={newText => setSkills(newText)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {skills
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
        <InputForm
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
          <InputForm
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
        <InputForm
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
