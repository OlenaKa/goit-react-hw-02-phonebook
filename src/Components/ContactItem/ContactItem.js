import "./ContactItem.css";

const ContactItem = ({ contacts, onDelete }) =>
  contacts.map((contact) => (
    <li key={contact.id} className="contactItem">
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className="delete-contact-btn"
      >
        Delete
      </button>
    </li>
  ));

export default ContactItem;
