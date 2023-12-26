// // Form.js
// import React, { useState } from 'react';

// const Form = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     dob: '',
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });

//     e.target.setCustomValidity('');

//     if (id === 'email') {
//       if (value && !value.includes('@')) {
//         e.target.setCustomValidity(`Please include an '@' in the email address. '${value}' is missing an '@'.`);
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!/^\d{10}$/.test(formData.phone)) {
//       alert('Invalid phone number. Please enter a 10-digit phone number.');
//       return;
//     }

//     const currentDate = new Date();
//     const enteredDate = new Date(formData.dob);

//     if (enteredDate > currentDate) {
//       alert('Invalid date of birth. Date of birth cannot be in the future.');
//       return;
//     }

//     console.log(formData);
//     closeModal();
//   };

//   return (
    
//   );
// };

// export default Form;
