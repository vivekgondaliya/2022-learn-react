import React, {Component} from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

export default class AddComponent extends Component {
    render(){
        return(
					<>
						<Header as='h2' style={{"marginTop" : "15px"}}>Add Contact</Header>
						<Form style={{"marginTop" : "15px"}}>
							<Form.Field>
								<label>Name</label>
								<input placeholder='Name' />
							</Form.Field>
							<Form.Field>
								<label>Email</label>
								<input placeholder='Email' />
							</Form.Field>
							<Button color="blue">Add</Button>
						</Form>
					</>
				)
    }
}

