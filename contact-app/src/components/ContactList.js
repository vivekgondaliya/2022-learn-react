import React from 'react'
import { List } from 'semantic-ui-react'

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const renderContactListItems = props.contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} />
	});

  return (
		<List celled style={{"marginTop" : "25px"}}>
			{renderContactListItems}
 	 	</List>
	) 
}

export default ContactList