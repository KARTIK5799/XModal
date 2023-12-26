import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

   
    e.target.setCustomValidity('');

    if (id === 'email' && value && !value.includes('@')) {
      e.target.setCustomValidity(`Please include an '@' in the email address. '${value}' is missing an '@'.`);
    }
  };

  const handleSubmit = () => {

    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number.Please enter a 10-digit phone number.');
      return;
    }

  
    const currentDate = new Date();
    const enteredDate = new Date(formData.dob);

    if (enteredDate > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in future.');
      return;
    }

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Fill Details</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
