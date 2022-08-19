import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

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
		<Switch>
			<Route 
				path="/" 
				exact
				render={(props) => (
					<ContactList 
						{...props}
						contacts={contacts} 
						removeContact={removeContactHandler}
					/>
				)}
			/>
			<Route 
				path="/add" 
				render={(props) => (
					<AddContact
						{...props}
						addContactHandler={addContactHandler}
					/>
				)} 
			/>	
			<Route 
				path="/contact/:id" 
				render={(props) => (
					<ContactDetail
						{...props}
					/>
				)} 
			/>
		</Switch>
	</Router>
  );
}

export default App;
