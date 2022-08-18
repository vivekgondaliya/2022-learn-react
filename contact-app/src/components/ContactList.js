import React from 'react'
import { List } from 'semantic-ui-react'

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const removeContactItem = (id) => {
		props.removeContact(id);
	}

	const contacts = [
		{
			id:1,
			name:'Vivek',
			email:'v@gmail.com'
		}
	] 
	const renderContactListItems = contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} removeItem={removeContactItem}/>
	});

  return (
		<List divided style={{"marginTop" : "25px"}}>
			{renderContactListItems}
 	 	</List>
	) 
}

export default ContactList