import { useState } from "react";
import Contact from "../../models/Contact";
import ContactList from "../ContactList/ContactList";
import "./Home.css";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { fullName: "Albert", number: 289983, isFavorite: true },
    { fullName: "Roger", number: 563289, isFavorite: true },
    { fullName: "Greg", number: 8524763, isFavorite: false },
  ]);
  return (
    <div className="Home">
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
