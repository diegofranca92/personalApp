import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CardExperience} from '../components/CardExperience';
import {ExperienceType} from '../models/experience';
import {useNavigation} from '@react-navigation/native';
import {SkeletonCard} from '../components/SkeletonCard';
import {styles} from './style';

export function List() {
  // const isDarkMode = useColorScheme() === 'dark';

  const [refreshExperiences, setRefreshExperience] = React.useState(false);
  const {navigate} = useNavigation();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   padding: 10,
  // };

  const [isLoading, setIsLoading] = React.useState(false);

  const [experienceList, setExperienceList] = React.useState<ExperienceType[]>(
    [],
  );

  async function getExperience() {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    <SafeAreaView style={styles.pageContainer}>
      {isLoading && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      <FlatList
        contentContainerStyle={{paddingBottom: 60}}
        data={experienceList}
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
