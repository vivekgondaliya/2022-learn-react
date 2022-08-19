import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Card, Button, Image, Header, Container} from 'semantic-ui-react'


const ConfirmDelete = (props) => {
    
	const handleDelete = (id) => {
		props.removeContact(id);
		props.history.push("/");
	}
	
	const {id, name, email} = props.location.state.contact;
    return (
        <Container>
            <Header 
                as='h2' 
                block
                style={{"marginTop" : "15px"}}
            >
            Confirm Delete</Header>
            <Grid>
				<Grid.Row columns={3}>
					<Grid.Column></Grid.Column>

					<Grid.Column>
					<Card>
						<Card.Content>
							<Image
							floated='right'
							size='mini'
							src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
							/>
							<Card.Header>{name}</Card.Header>
							<Card.Meta>{email}</Card.Meta>
							<Card.Description>
								Are you sure you want to delete this user?
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div>

								<Button 
									floated='right'
									color='red'
									onClick={() => handleDelete(id)}>
									Delete
								</Button>
								<Link to='/'>
									<Button floated='right'>Cancel</Button>
								</Link>
							</div>
						</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
        </Container>
    )
}

export default ConfirmDelete;