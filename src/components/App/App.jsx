import { nanoid } from 'nanoid';

import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Contacts } from 'components/ContactList/ContactList';
import { AppContainer, Title } from './App.styled';
import { Filter } from 'components/Filter/Filter';

import initialContacts from '../initialContacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNewContact = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (
      contactsLists.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return filterContactsList;
  };

  render() {
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm onFormSubmit={this.addNewContact}></ContactForm>

        <Title as="h2">Contacts</Title>
        <Filter
          filter={this.state.filter}
          handleChange={this.handleChange}
        ></Filter>
        <Contacts
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        ></Contacts>
      </AppContainer>
    );
  }
}
