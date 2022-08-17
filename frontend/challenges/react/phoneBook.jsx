import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* 
REACT PHONE BOOK
Hide Question
We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:

First name = Coder
Last name = Byte
Phone = 8885559999

You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output. 
*/

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ setPhoneBook }) {
  const [firstName, setFirstName] = useState('Coder')
  const [lastName, setLastName] = useState('Byte')
  const [phone, setPhone] = useState(8885559999)

  function compare( a, b ) {
    if ( a.lastName < b.lastName){
      return -1;
    }
    if ( a.lastName > b.lastName){
      return 1;
    }
    return 0;
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let contact = {
      firstName,
      lastName,
      phone
    }
    setPhoneBook((prevState) => [...prevState, contact])
    setPhoneBook(prevState => prevState.sort(compare))
  }



    

  return (
      <form onSubmit={(e) => onSubmit(e)} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userFirstname'
          name='userFirstname' 
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userLastname'
          name='userLastname' 
          type='text' 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userPhone' 
          name='userPhone' 
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br/>
        <input 
          style={style.form.submitBtn} 
          className='submitButton'
          type='submit' 
          value='Add User' 
        />
      </form>
  )
}

function InformationTable({phoneBook}) {

  console.log(phoneBook)

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>

        
        {phoneBook.map((item, i) => {
          return (
            <tr key={i}>
              <td style={style.tableCell}>{item.firstName}</td>
              <td style={style.tableCell}>{item.lastName}</td>
              <td style={style.tableCell}>{item.phone}</td>
            </tr>
          )
        })}
 
      </thead>
    </table>
  );
}

function Application(props) {
  const [ phoneBook, setPhoneBook ] = useState([]);

  return (
    <section>
      <PhoneBookForm setPhoneBook={setPhoneBook}/>
      <InformationTable phoneBook={phoneBook}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);