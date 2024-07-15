import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './FormField.css';

const FormField = ({ label, type, placeholder }) => (
  <div className="molecule-form-field">
    <Label text={label} />
    <Input type={type} placeholder={placeholder} />
  </div>
);

export default FormField;