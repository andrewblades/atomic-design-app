import React, { useContext } from 'react';
import MainTemplate from '../templates/MainTemplate';
import UserProfile from '../organisms/UserProfile';
import { UserProfileContext } from '../../contexts/UserProfileContext';

const UserProfilePage = () => {
  const { userProfile } = useContext(UserProfileContext);

  return (
    <MainTemplate>
      <h1>User Profile Page</h1>
      <UserProfile name={userProfile.name} role={userProfile.role} status={userProfile.status} />
    </MainTemplate>
  );
};

export default UserProfilePage;