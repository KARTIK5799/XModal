import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

    if (id === 'email') {
      if (value && !value.includes('@')) {
        e.target.setCustomValidity(`Please include an '@' in the email address. '${value}' is missing an '@'.`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const currentDate = new Date();
    const enteredDate = new Date(formData.dob);

    if (enteredDate > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    console.log(formData);
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className='app'>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
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

                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
