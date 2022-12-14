import React, {Component} from 'react';
import { Form, Button, Header, Container } from 'semantic-ui-react';

export default class AddContact extends Component {
	state={
		name:"",
		email:""
	}

	add = () => {
		if(this.state.name === ""  || this.state.email === ""){
			alert("All the field are mandatory!");
			return;
		}

		this.props.addContactHandler(this.state);
		this.setState({name:"", email:""});
		console.log(this.props);
		this.props.history.push("/");
	}

	cancel = () => {
		this.setState({name:"", email:""});
		this.props.history.push("/");
	}

    render(){
        return(
			<Container>
				<Header as='h2' block style={{"marginTop" : "15px"}}>Add Contact</Header>
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
						onClick={this.add}
					>
						Add</Button>
					<Button
						onClick={this.cancel}
					>
						Cancel</Button>
				</Form>
			</Container>	
		)
    }
}

