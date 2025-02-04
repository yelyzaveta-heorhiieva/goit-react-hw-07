import { FaUser, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOps'
import { openModal } from "../../redux/editSlice";
import { MdDeleteForever, MdEdit } from "react-icons/md";


const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  
   const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  const openEditForm = () => {
    dispatch(openModal({ name, number, id }))
  }

  return (
    <>
      <div>
        <p className={s.text}><FaUser /><span className={s.span}>{name}</span></p>
        <a className={s.text} href={`tel:+${number}`}><FaPhone /><span className={s.span}>{number}</span></a>
      </div>
      <ul className={s.btnList}>
        <li><button className={s.btn} type="button" onClick={handleDelete}><MdDeleteForever className={s.icon} /></button></li>
        <li><button className={s.btn} type="button" onClick={openEditForm}><MdEdit className={s.icon} /></button></li>
      </ul>
    </>
  )
}

export default Contact

