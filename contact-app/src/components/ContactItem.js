import React from 'react'
import {Link} from 'react-router-dom'
import { List, Button} from 'semantic-ui-react'

const ContactItem = (props) => {
    const {id, name, email} = props.contact;
    return (
			<List.Item>
				<List.Content floated='right'>
					<Button 
						icon="delete" 
						onClick={() => props.removeItem(id)}
					/>
				</List.Content>

				<List.Icon name='user' size='large' verticalAlign='middle' />
				<List.Content>
					<Link to={`/contact/${id}`}>
						<List.Header>{name}</List.Header>
						<List.Description>{email}</List.Description>
					</Link>
				</List.Content>
    	</List.Item>
    )
}

export default ContactItem