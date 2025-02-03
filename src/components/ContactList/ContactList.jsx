import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length > 0 ? <ul className={s.list}>
          {visibleContacts.map(contact =>
              <li key={contact.id} className={s.item}>
                  <Contact data={contact} />
          </li>)}
      </ul> : <p className={s.error}>There are no contacts yet.</p>}
    </>
  )
}

export default ContactList

