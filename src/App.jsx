import React, { useState } from 'react';
import Form from './components/Form';
import './App.css'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
           <Form/>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
