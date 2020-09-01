import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Info from './components/Info';
import { Button, Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  state = {
    contacts: [],
  }

  // Toggle Selected Contact
  markSelected = (id) => {
    this.setState({ contacts: this.state.contacts.map(contact => {
      if(contact.id === id) {
        contact.selected = !contact.selected;
      }
      return contact;
    }) });
  }

  // Delete Contact
  deleteContact = (id) =>
  {
    this.setState({ contacts: [...this.state.contacts.filter(contact => contact.selected !== true)] });
  }

  // Add Contact
  addContact = (name, email, category) => {
    const newTodo = {
      id: uuid(),
      name,
      email,
      category
    }
    if(name !== '' && email !== '') 
    {
      this.setState({ contacts: [...this.state.contacts, newTodo] });
    }
    else {
      alert('Please insert Name AND Email');
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/info" component={Info} />
            <Route path="/" exact render={props =>
              <Container>
                    <AddContact addContact={this.addContact}/>
                    <Row className="contactDetailsPresetRow">
                      <Col><p><i class="fas fa-user-alt"></i>{' '}Name</p></Col>
                      <Col><p><i class="fas fa-envelope"></i>{' '}Email</p></Col>
                      <Col><p><i class="fas fa-tag"></i>{' '}Category</p></Col>      
                    </Row>
                    <Contacts contacts={this.state.contacts} markSelected={this.markSelected} deleteContact={this.deleteContact} />
                    <Button className="button" onClick={this.deleteContact} variant="dark" >Delete Selected Contacts </Button>
              </Container>
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
