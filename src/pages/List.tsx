import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CardExperience} from '../components/CardExperience';
import {ExperienceType} from '../models/experience';
import {useNavigation} from '@react-navigation/native';
import {SkeletonCard} from '../components/SkeletonCard';
import {styles} from './style';
import api from '../api/api';

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
      const response = await api.getExperiences();
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
            id={item.id}
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
