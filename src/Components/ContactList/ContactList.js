import ContactItem from "../ContactItem";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    <ContactItem contacts={contacts} onDelete={onDelete} />
  </ul>
);

export default ContactList;
