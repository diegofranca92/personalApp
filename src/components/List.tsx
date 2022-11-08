import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CardExperience} from './CardExperience';
import {ExperienceType} from '../models/experience';
import {useNavigation} from '@react-navigation/native';

export function List() {
  const isDarkMode = useColorScheme() === 'dark';

  const [refreshExperiences, setRefreshExperience] = React.useState(false);
  const {navigate} = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const [isLoading, setIsLoading] = React.useState(false);

  const [experienceList, setExperienceList] = React.useState<ExperienceType[]>(
    [],
  );

  async function getExperience() {
    try {
      const url = 'https://kyoywntqsmqhwsxkrktm.supabase.co/rest/v1';
      const response = await fetch(`${url}/experience`, {
        method: 'GET',
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2MDcyMTcsImV4cCI6MTk4MzE4MzIxN30.vlQ2lfa6Q9C7UrzRuhTfvLHiIy0UQ0zIQ-P2u5g1FIY',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzYwNzIxNywiZXhwIjoxOTgzMTgzMjE3fQ.eRSROClaIhmlqRETuHpGass8cpdx10FwIt5T4vNcDlY',
        },
      });
      const experiences = await response.json();
      setExperienceList(experiences);
    } catch (error) {
      console.warn(error);
    }
  }

  function onRefresh() {
    try {
      setRefreshExperience(true);
      getExperience();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshExperience(false);
    }
  }

  React.useEffect(() => {
    getExperience();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={[styles.sectionTitle]}>Configs</Text>
      </View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={experienceList}
        style={{paddingBottom: 100}}
        onRefresh={() => onRefresh()}
        refreshing={refreshExperiences}
        renderItem={({item}: any) => (
          <CardExperience
            onPress={() => {
              navigate('new', item);
            }}
            key={item.id}
            position={item.position}
            company={item.company.name}
            description={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
}
