import React, {useRef} from 'react'
import { Button, List, Container, Header, Grid, Message, Input } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const inputEl = useRef("");
	
	const removeContactItem = (id) => {
		props.removeContact(id);
	}

	const getSearchTerm = () => {

	}

	const renderContactListItems = props.contacts.length ? props.contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} removeItem={removeContactItem}/>
	}) :
	(
		<Message info>
			<Message.Header>
				Contact list is empty.
			</Message.Header>
  		</Message>
	)
	;

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
						<Input
							ref={inputEl}
							value={props.term}
							onChange={getSearchTerm} 
							action={{ icon: 'search' }}
							placeholder="Search..." 
							fluid 
							style={{"marginTop" : "15px"}} 
						/>
					</Grid.Column>
					
					<Grid.Column width={3}></Grid.Column>
				</Grid.Row>

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