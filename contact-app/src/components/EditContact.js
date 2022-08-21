import React, {Component} from 'react';
import { Form, Button, Header, Container } from 'semantic-ui-react';

export default class EditContact extends Component {
    constructor(props){
        super(props);
        const { id,name, email } = props.location.state.contact;
        this.state={
			id,
            name,
            email
        }
        
    }

	edit = () => {
		if(this.state.name === ""  || this.state.email === ""){
			alert("All the field are mandatory!");
			return;
		}

		this.props.editContact(this.state);
		this.props.history.push("/");
	}

	cancel = () => {
		this.setState({name:"", email:""});
		this.props.history.push("/");
	}

    render(){
        return(
			<Container>
				<Header as='h2' block style={{"marginTop" : "15px"}}>Edit Contact</Header>
				<Form style={{"marginTop" : "15px"}}>
					<Form.Field>
						<label>Name</label>
						<input 
							placeholder='Name'
							name='name'
							value={this.state.name}
							onChange={(e) => this.setState({name : e.target.value})}
						/>
					</Form.Field>
					<Form.Field>
						<label>Email</label>
						<input 
							placeholder='Email'
							name='email'
							value={this.state.email}
							onChange={(e) => this.setState({email : e.target.value})}
						/>
					</Form.Field>
					<Button 
						color="blue"
						onClick={this.edit}
					>
						Update</Button>
					<Button
						onClick={this.cancel}
					>
						Cancel</Button>
				</Form>
			</Container>	
		)
    }
}

