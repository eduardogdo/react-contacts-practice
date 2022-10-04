import Contact from "../../models/Contact";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => {
  return (
    <div className="ContactList">
      <h4>Contacts</h4>
      <ul>
        {contacts.map((contact) => (
          <ContactCard key={contact.number} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
