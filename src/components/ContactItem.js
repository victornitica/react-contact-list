import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

export class ContactItem extends Component {
    getStyle = () => {
        return {
            
            borderBottom: '1px solid #D3D3D3',
            borderLeft: this.props.contact.selected ? '3px solid black' : 'none'
        }
    }
    render() {
        const { id, name, email, category } = this.props.contact;
        return (
            <Container className="contactContainer" style={this.getStyle()}>
                <Row className="contactDetailsRow">
                    <Col><h6><input class="selectbtn" type="checkbox" onChange={this.props.markSelected.bind(this, id)}/>{ name }</h6></Col>
                    <Col><h6>{ email }</h6></Col>
                    <Col><h6>{ category }</h6></Col>      
                </Row>
            </Container>
        )
    }
}

ContactItem.propTypes = {
    contacts: propTypes.array.isRequired
}

export default ContactItem;
