import { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { onSubmitClick } = this.props;
    return (
      <form onSubmit={onSubmitClick} className="form">
        <label className="name-label">
          Name{" "}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>

        <label className="number-label">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit"> Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
