import React, { useContext, useState } from 'react';
import { UserProfileContext } from '../../contexts/UserProfileContext';
import './Form.css';

const Form = () => {
  const { setUserProfile } = useContext(UserProfileContext);
  const [formData, setFormData] = useState({ name: '', role: '', status: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile(formData);
  };

  return (
    <form className="organism-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={formData.role} onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Form;