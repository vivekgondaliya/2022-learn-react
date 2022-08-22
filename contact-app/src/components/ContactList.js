import React, {useRef} from 'react'
import { Button, List, Container, Header, Grid, Message } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

import ContactItem from './ContactItem';

const ContactList = (props) => {
	const inputEl = useRef("");

	const removeContactItem = (id) => {
		props.removeContact(id);
	}

	const getSearchTerm = () => {
		props.searchHandler(inputEl.current.value);
	}

	const renderContactListItems = props.contacts.length ? props.contacts.map((item) => {
		return <ContactItem key={item.id} contact={item} removeItem={removeContactItem}/>
	}) :
	inputEl.current.value ? (
		<Message size='mini' warning>
			<Message.Content>
				Contact Not Found.
			</Message.Content>
  		</Message>
	)
	:
	(
		<Message size='mini' info>
			<Message.Header>
				Contact list is empty.
			</Message.Header>
  		</Message>
	);

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
					<div class="ui big fluid action input">
						<input
							ref={inputEl}
							type="text"
							value={props.term}
							onChange={getSearchTerm}
							placeholder="Search Contacts..."
							/>
						<button class="ui icon button">
							<i aria-hidden="true" class="search icon"></i>
						</button>
					</div>
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