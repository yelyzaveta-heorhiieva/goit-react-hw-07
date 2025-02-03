import { FaUser, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { name, number, id }}) => {
  const dispatch = useDispatch();
  
   const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
      <>
        <div>
            <p className={s.text}><FaUser /><span className={s.span}>{name}</span></p>
            <a className={s.text} href={`tel:+${number}`}><FaPhone /><span className={s.span}>{number}</span></a>
        </div>
        <button className={s.deleteBtn} type="button" onClick={handleDelete}>Delete</button>
    </>

  )
}

export default Contact

