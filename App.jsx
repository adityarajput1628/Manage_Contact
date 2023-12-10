import { useEffect, useState } from "react";
import "./App.css";
import AddContacts from "./Component/AddContacts";
import ContactList from "./Component/ContactList";
import Header from "./Component/Header";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";

  //useState declareation
  const [contact, setcontact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  function addcontact(data) {
    setcontact([...contact, { id: uuid4(), data }]);
  }

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setcontact(updatedList);
  };

  function removeAll() {
    setcontact([]);
  }

  return (
    <div>
      <Header />
      <AddContacts addContact={addcontact} />
      <ContactList contact={contact} removeContact={removeContact} />
      {contact.length == 0 && (
        //YEH MENE BAAD ME ADD KIYA HAI
        <p
          style={{
            borderColor: "cadetblue",
            color: "#8e0625",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your Contact List is Empty!
        </p>
      )}
      <div className="btn2">
        {contact.length >= 1 && (
          <button
            style={{
              borderRadius: "3px",
              backgroundColor: "#8e0625",
              color: "white",
              fontWeight:"500",
              fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
            }}
            onClick={removeAll}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
