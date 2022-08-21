import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import api from '../api/contacts';

import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ConfirmDelete from "./ConfirmDelete";
import EditContact from "./EditContact";

function App() {
	const LOCAL_STORAGE_KEY="contacts";
	const [contacts, setContacts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const retrieveContacts = async () => {
		const response = await api.get("/contacts");
		return response.data;
	}

	const addContactHandler = async (contact) => {
		const request = {
			id: uuidv4(),
			...contact
		};

		const response = await api.post("/contacts", request);
		setContacts([...contacts, response.data]);
	}

	const removeContactHandler = async (id) => {
		await api.delete(`/contacts/${id}`);

		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	}

	const editContactHandler = async (updatedContact) => {
		const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
		
		setContacts(contacts.map(item => {
			return item.id === response.data.id ? {...response.data} : item;
		}));
	}

	const searchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
	}

	useEffect(() => {
		const getAllContacts = async () => {
			const allContacts = await retrieveContacts();
			if(allContacts) setContacts(allContacts);
		}
		getAllContacts();
	}, []);

	useEffect(() => {
		//localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
						term={searchTerm}
						searchHandler={searchHandler}
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
			<Route 
				path="/delete/:id" 
				render={(props) => (
					<ConfirmDelete
						{...props}
						removeContact={removeContactHandler}
					/>
				)} 
			/>
			<Route 
				path="/edit/:id" 
				render={(props) => (
					<EditContact
						{...props}
						editContact={editContactHandler}
					/>
				)} 
			/>
		</Switch>
	</Router>
  );
}

export default App;
