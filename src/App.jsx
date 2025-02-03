import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'
import { fetchContacts } from './redux/contactsOps';
import { Hourglass } from "react-loader-spinner";
import { selectError, selectLoading } from "./redux/selectors";


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className='content'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      { loading && !error && <Hourglass wrapperClass='spinner' colors={['#008000', '#66FF00']}/>}
      {!loading && <ContactList />}
    </div>
  )
}

export default App
