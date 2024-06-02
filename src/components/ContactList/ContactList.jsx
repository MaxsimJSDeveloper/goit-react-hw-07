import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getError, getIsLoading } from "../Redux/selectors";
import { filteredContacts } from "../Redux/operations";

const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(filteredContacts);
  return (
    <ul className={css.contactList}>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
