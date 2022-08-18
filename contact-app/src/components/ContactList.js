import React from 'react'
import { List } from 'semantic-ui-react'

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const removeContactItem = (id) => {
		props.removeContact(id);
	}

	const renderContactListItems = props.contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} removeItem={removeContactItem}/>
	});

  return (
		<List celled style={{"marginTop" : "25px"}}>
			{renderContactListItems}
 	 	</List>
	) 
}

export default ContactList