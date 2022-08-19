import React from 'react'
import {Link} from 'react-router-dom'
import { List, Icon} from 'semantic-ui-react'

const ContactItem = (props) => {
    const {id, name, email} = props.contact;
    return (
			<List.Item>
				<List.Content floated='right'>
					<Link to={ {pathname:`/delete/${id}`, state:{contact: props.contact}} }>
						<Icon name="delete" color='grey' link/>
					</Link>
				</List.Content>

				<List.Icon name='user' size='large' verticalAlign='middle' />
				<List.Content>
					<Link to={ {pathname:`/contact/${id}`, state:{contact: props.contact}} }>
						<List.Header>{name}</List.Header>
						<List.Description>{email}</List.Description>
					</Link>
				</List.Content>
    	</List.Item>
    )
}

export default ContactItem