import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const visibleContacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <p className={s.error}>There are no contacts yet.</p>
  }

  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map(contact =>
          <li key={contact.id} className={s.item}>
            <Contact data={contact} />
          </li>)}
      </ul> 
    </>
  )
}

export default ContactList

