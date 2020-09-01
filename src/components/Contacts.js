import React, { Component } from 'react';
import ContactItem from './ContactItem';
import propTypes from 'prop-types';

export default class Contacts extends Component {
    render() {
        return this.props.contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} markSelected={this.props.markSelected} deleteContact={this.props.deleteContact} />
        ));
    }
}

Contacts.propTypes = {
    contacts: propTypes.array.isRequired 
}
