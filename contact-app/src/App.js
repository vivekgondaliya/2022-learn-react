import AddComponent from "./components/AddComponent";
import HeaderComponent from "./components/Header";
import ContactList from "./components/ContactList";

import { Container } from 'semantic-ui-react';

function App() {
  const contacts = [
    {
      id: 1,
      name : "Chanakya",
      email : "chankaya@gmail.com"
    },
		{
      id: 2,
      name : "Chandragupta",
      email : "chandragupta@gmail.com"
    }
  ];

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
