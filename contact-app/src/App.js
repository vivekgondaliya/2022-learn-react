import React, {useState, useEffect} from "react";
import { Container } from 'semantic-ui-react';

import AddContact from "./components/AddContact";
import HeaderComponent from "./components/Header";
import ContactList from "./components/ContactList";


function App() {
  // const contacts = [
  //   {
  //     id: 1,
  //     name : "Chanakya",
  //     email : "chankaya@gmail.com"
  //   },
	// 	{
  //     id: 2,
  //     name : "Chandragupta",
  //     email : "chandragupta@gmail.com"
  //   }
  // ];
	const LOCAL_STORAGE_KEY="contacts";
	const [contacts, setContacts] = useState([]);
	
	const addContactHandler = (contact) => {
		console.log(contact);
		setContacts([...contacts, contact]);
	}

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

  return (
    <>
      <HeaderComponent />
      <Container>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </Container>
    </>
  );
}

export default App;
