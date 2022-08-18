import React, {useState, useEffect} from "react";
import { Container } from 'semantic-ui-react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddContact from "./AddContact";
import HeaderComponent from "./Header";
import ContactList from "./ContactList";


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
	<Router>
		<HeaderComponent />
		<Container>
			<Routes>
					<Route path="/add" element={<AddContact />} />
					<Route path="/" element={<ContactList />} />
				{/* <Container></Container> */}
				{/* <AddContact addContactHandler={addContactHandler} /> */}
				{/* <ContactList contacts={contacts} removeContact={removeContactHandler}/> */}
				
				
			</Routes>
		</Container>
	</Router>
  );
}

export default App;
