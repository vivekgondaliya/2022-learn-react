import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react'

const ContactItem = (props) => {
    const {name, email} = props.contact;
    return (
			<List.Item>
				<List.Content floated='right'>
					<Button icon>
						<Icon name="delete" />
					</Button>
				</List.Content>

				<List.Icon name='user' size='large' verticalAlign='middle' />
				<List.Content>
					<List.Header as='a'>{name}</List.Header>
					<List.Description as='a'>{email}</List.Description>
				</List.Content>
    	</List.Item>
    )
}

export default ContactItem