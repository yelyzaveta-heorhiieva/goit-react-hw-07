import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux';


const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter(({ name }) => name.toLowerCase().includes(statusFilter.toLowerCase().trim()));
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const statusFilter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

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

