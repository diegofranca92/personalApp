import React from 'react';
import {Center} from 'native-base';
import {CardProfile} from '../components/CardProfile';
import {ProfileType} from '../models/profile';

export function Home() {
  const [profileInfo, setProfileInfo] = React.useState<ProfileType[]>([]);

  async function fetchProfile() {
    try {
      const url = 'https://kyoywntqsmqhwsxkrktm.supabase.co/rest/v1';
      const response = await fetch(`${url}/perfil`, {
        method: 'GET',
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2MDcyMTcsImV4cCI6MTk4MzE4MzIxN30.vlQ2lfa6Q9C7UrzRuhTfvLHiIy0UQ0zIQ-P2u5g1FIY',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzYwNzIxNywiZXhwIjoxOTgzMTgzMjE3fQ.eRSROClaIhmlqRETuHpGass8cpdx10FwIt5T4vNcDlY',
        },
      });
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
          name={profile.name}
          position={profile.position}
          company={profile.company}
          bio={profile.bio}
        />
      ))}
    </Center>
  );
}
