import React from 'react';
import {Center} from 'native-base';
import {CardProfile} from '../components/CardProfile';
import {ProfileType} from '../models/profile';
import api from '../api/api';

export function Home() {
  const [profileInfo, setProfileInfo] = React.useState<ProfileType[]>([]);

  async function fetchProfile() {
    try {
      const response = await api.getProfile();
      const profileData = await response.json();
      setProfileInfo(profileData);
    } catch (error) {
      console.warn(error);
    }
  }

  React.useEffect(() => {
    fetchProfile();
  }, [profileInfo]);

  return (
    <Center h="95%">
      {profileInfo.map(profile => (
        <CardProfile
          key={profile.id}
          name={profile.name}
          position={profile.position}
          company={profile.company}
          bio={profile.bio}
        />
      ))}
    </Center>
  );
}
