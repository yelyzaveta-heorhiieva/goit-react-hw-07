import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./ContactFrom.module.css"
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "../../redux/contactsSlice";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = {
        name: '',
        number: ''
    }

  const handleSubmit = (values, actions) => {
    const condition = [...contacts].some(contact => {
      const number = contact.number.split('-').join('');
      const name = contact.name.toLowerCase();
      return +number === +values.number && name === values.name.toLowerCase().trim()
    });
    if (condition) {
      return toast.error('This contact already exists, check the correctness of the entered data');
    }
         dispatch(addContact({
             name: values.name.trim(),
             number: handleNumberChange(values.number),
             id: nanoid()
         }))
		actions.resetForm();
  };
  
    
  const handleNumberChange = (value) => {
    if (value.length > 3 && value.length <= 5) {
     return  value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 5) {
      return value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 7)}`;
    }
  };
  
    const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, 'Enter only letters').required("Required"),
  number: Yup.string().min(7, "Too Short!").max(7, "Too Long!").matches(/^[0-9\-]+$/, 'Enter only numbers').required("Required"),
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
          <button className={s.btn} type="submit">Add contact</button>
        </Form>
            </Formik>
            <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </>
  )
}

export default ContactForm
