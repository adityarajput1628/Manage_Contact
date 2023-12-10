import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {
    const{contact,removeContact}=props
    console.log(contact,"from")

    const contactList=contact.map((val)=>{
        return(
            <div className='contacts'>
            <div className='name'>{val.data.name}</div>
            <div className='email'>{val.data.email}</div>
            <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
            </div>
        )
    })
    
  return (
    <>
    <div className='ContactHeader'>ContactList</div>
    <div>{contactList}</div>
    </>
  )
}

export default ContactList