import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./ContactFrom.module.css"
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import toast from 'react-hot-toast';
import { selectContacts, selectLoading } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  const initialValues = {
        name: '',
        number: ''
    }

  const handleSubmit = (values, actions) => {
    const condition = [...contacts].some(contact => {
      const number = contact.number.split('-').join('');
      return +number === +values.number
    });
    if (condition) {
      return toast.error('This number already exists, check the correctness of the entered data');
    }
         dispatch(addContact({
             name: values.name.trim(),
             number: handleNumberChange(values.number),
         }))
		actions.resetForm();
  };
  
    
  const handleNumberChange = (value) => {
     return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
  };
  
    const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, 'Enter only letters').required("Required"),
  number: Yup.string().min(10, "Too Short!").max(10, "Too Long!").matches(/^[0-9\-]+$/, 'Enter only numbers').required("Required"),
});


  return (
      <>
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={FeedbackSchema}>
          <Form className={s.form}>
          <label className={s.label}>Name
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>Number
            <Field className={s.input} type="tel" name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.btn} type="submit" disabled={loading}>Add contact</button>
          </Form>
        </Formik>
        
      </>
  )
}

export default ContactForm
