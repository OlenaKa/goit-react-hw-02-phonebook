import { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./Components/ContactForm/";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: e.target[0].value,
      number: e.target[1].value,
    };

    const nameCheck = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (nameCheck) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }

    e.target[0].value = "";
    e.target[1].value = "";
  };

  deleteContact = (key) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== key),
    }));
  };

  render() {
    // console.log(this.state)

    const filteredContacts = this.filterContacts();
    // console.log(filteredContacts)
    return (
      <>
        <h1> Phonebook </h1>
        <ContactForm
          onFormInput={this.handleChange}
          onSubmitClick={this.handleSubmit}
        />
        <h2> Contacts </h2>
        <Filter onInput={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
