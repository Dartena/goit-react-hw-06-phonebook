import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { AppDiv, Text, Title } from "./components/styles/styled";
import { getVisibleContacts } from "./store/contacts/selectors";

function App() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <AppDiv>
      <Title>Phone book</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <Text>Nothing</Text>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AppDiv>
  );
}

export default App;

// function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState("");
//   useEffect(() => {
//     const contacts = LocalStorage.getFromList();
//     setContacts(contacts);
//   }, []);

//   useEffect(() => {
//     LocalStorage.addToList(contacts);
//   }, [contacts]);

//   const addContact = (data) => {
//     const id = nanoid();
//     checkUniqueContact(data) === -1
//       ? setContacts((prevState) => [...prevState, { id, ...data }])
//       : alert(`${data.name} is already in contacts`);
//   };

//   const deleteContact = (id) => {
//     setContacts((prevState) =>
//       [...prevState].filter((contact) => contact.id !== id)
//     );
//   };

//   const filterHandler = (event) => {
//     const { value } = event.target;
//     setFilter(value);
//   };

//   const getFilteredContacts = () => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   function checkUniqueContact(data) {
//     return contacts.findIndex(
//       (contact) =>
//         contact.name.toLowerCase() === data.name.toLowerCase() ||
//         contact.number === data.number
//     );
//   }

//   const filteredContacts = getFilteredContacts();
//   return (
//     <AppDiv>
//       <Title>Phone book</Title>
//       <ContactForm onSubmit={addContact} />
//       <Title>Contacts</Title>
//       <Filter filterHandler={filterHandler} filter={filter} />
//       {filteredContacts.length ? (
//         <ContactList contacts={filteredContacts} onDelete={deleteContact} />
//       ) : (
//         <Text>Nothing</Text>
//       )}
//     </AppDiv>
//   );
// }

// export default App;
