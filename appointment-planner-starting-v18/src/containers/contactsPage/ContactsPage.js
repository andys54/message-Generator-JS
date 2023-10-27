import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && phone !== "" && email !== "") {
      if (!contacts.some((contact) => contact.name === name)) {
        addContact(name, phone, email);
        setEmail("");
        setName("");
        setPhone("");
      } else {
        setEmail("");
        setName("");
        setPhone("");
      }
    } else {
      alert("You need enter in every field!")
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm phone={phone} name={name} email={email} setEmail={setEmail} setName={setName} setPhone={setPhone} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
      
    </div>
  );
};
