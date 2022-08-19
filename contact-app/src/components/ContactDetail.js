import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Card, Button, Image, Header, Container, Icon} from 'semantic-ui-react'

const ContactDetail = (props) => {
	const {name, email} = props.location.state.contact;
    return (
        <Container>
            <Header as='h2' block style={{"marginTop" : "15px"}}>Contact Detail</Header>
			<Grid>
				<Grid.Row columns={3}>
					<Grid.Column></Grid.Column>

					<Grid.Column>
						<Card>
							<Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
							<Card.Content>
								<Card.Header>{name}</Card.Header>
								<Card.Meta>{email}</Card.Meta>
								<Card.Description>
									Daniel is a comedian living in Nashville.
								</Card.Description>
							</Card.Content>
						</Card> 
						<Link to='/'>
							<Button
								color='blue'
								icon
								floated='left'
								labelPosition='left'
							>
								<Icon name='left arrow' />
								Back to Contact List
							</Button> 
						</Link>
					</Grid.Column>

					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
        </Container>
    )
}

export default ContactDetail