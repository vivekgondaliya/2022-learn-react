import React, {useState} from "react";
import { Container } from 'semantic-ui-react';

import AddComponent from "./components/AddComponent";
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

	const [contacts, setContacts] = useState([]);

  return (
    <>
      <HeaderComponent />
      <Container>
        <AddComponent />
        <ContactList contacts={contacts}/>
      </Container>
    </>
  );
}

export default App;
