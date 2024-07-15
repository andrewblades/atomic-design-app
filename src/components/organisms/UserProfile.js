import React from 'react';
import Card from '../molecules/Card';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import './UserProfile.css';

const UserProfile = ({ name, role, status }) => (
  <Card>
    <div className="organism-user-profile">
      <Icon name="user-icon" />
      <h2>{name}</h2>
      <Badge label={role} />
      <Badge label={status} />
    </div>
  </Card>
);

export default UserProfile;