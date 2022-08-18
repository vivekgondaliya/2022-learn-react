import React, {useState, useEffect} from "react";
import { Container } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

import AddContact from "./components/AddContact";
import HeaderComponent from "./components/Header";
import ContactList from "./components/ContactList";


function App() {
	const LOCAL_STORAGE_KEY="contacts";
	const [contacts, setContacts] = useState([]);
	
	const addContactHandler = (contact) => {
		setContacts([...contacts, {id: uuidv4(), ...contact}]);
	}

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	}

	useEffect(() => {
		const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(retrieveContacts) 
			setContacts(retrieveContacts);

	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

  return (
    <>
      <HeaderComponent />
      <Container>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} removeContact={removeContactHandler}/>
      </Container>
    </>
  );
}

export default App;
