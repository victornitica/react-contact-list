import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class AddContact extends Component {
    state = {
        name: '',
        email: '',
        category: 'Family',
        selected: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.email, this.state.category);
        this.setState({
            name: '',
            email: '',
            category: 'Family',
            selected: false
        })
    }

    onChangeName = (e) => this.setState({
        name: e.target.value
    });

    onChangeEmail = (e) => this.setState({
        email: e.target.value
    });

    categoryChange = (e) => this.setState({
        category: e.target.value
    });

    resetForm = () => { 
        document.getElementById("form").reset();
      }

    render() {
        return (
            <Form onSubmit={this.onSubmit} id="form">
                <input 
                    className="nameInput"
                    type="text"    
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onChangeName}/>
                <input 
                    className="emailInput"
                    type="text"    
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}/>
                <select className="select" onChange={this.categoryChange}>
                    <option defaultValue="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Work">Work</option>
                </select>
                <Button variant="primary" className="Submit" type="submit" onClick={this.resetForm}>Add Contact</Button>
            </Form>
        )
    }
}

export default AddContact
