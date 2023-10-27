import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} placeholder="Enter name here" onChange={({ target }) => setName(target.value)} />
      <input value={phone} placeholder="Enter phone number here" onChange={({ target }) => setPhone(target.value)} />
      <input value={email} placeholder="Enter email here" onChange={({ target }) => setEmail(target.value)} />
      <button type="submit">
        Add contact
      </button> 
    </form>
  );
};

