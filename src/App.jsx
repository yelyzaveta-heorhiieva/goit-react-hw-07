
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

function App() {

  return (
    <div className='content'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
