import Contact from "../../models/Contact";
import "./ContactCard.css";

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => {
  return (
    <li className="ContactCard">
      <p>Full Name: {contact.fullName}</p>
      <p>Number: {contact.number}</p>
      {contact.isFavorite && <p className="favorite">&hearts;</p>}
    </li>
  );
};

export default ContactCard;
