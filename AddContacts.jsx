import React, { useState } from "react";

function AddContacts({addContact}) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handlechange = (e) => {
    if (e.target.name == "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (contactData.email === "" || contactData.name === "") {
      alert("Please fill all required fields");
      return;
    }
    addContact(contactData);
    setContactData({name:"",email:""})
  };

  return (
    <div>
      <div className="formHeader">Add Contacts</div>
      <div className="add-contact">
        <form>
          <label htmlFor="">Name:</label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={contactData.name}
            onChange={handlechange}
          />
          <br />
          <label htmlFor="">Email:</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={contactData.email}
            onChange={handlechange}
          />
        </form>
        <button className="btn" onClick={handleAdd}>
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default AddContacts;
