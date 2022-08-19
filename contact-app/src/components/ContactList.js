import React from 'react'
import { Button, List, Container, Header, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const removeContactItem = (id) => {
		props.removeContact(id);
	}

	const renderContactListItems = props.contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} removeItem={removeContactItem}/>
	});

  return (
		<Container>
			<Header as='h2' block style={{"marginTop" : "30px"}}>
				<Link to='/add'>
					<Button 
						color='blue'
						floated='right'
					>
					Add Contact</Button>
				</Link>
				Contact List
			</Header>
			<Grid>
				<Grid.Row>
					<Grid.Column width={3}></Grid.Column>
					
					<Grid.Column width={10}>
						<List divided style={{"marginTop" : "25px"}}>
							{renderContactListItems}
						</List>
					</Grid.Column>
					
					<Grid.Column width={3}></Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	) 
}

export default ContactList