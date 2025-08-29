//general form for: name, email, phone number
import React, { useState } from 'react';

function GeneralInfoForm() {
    //adding states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, phone});

        setName('');
        setEmail('');
        setPhone('');
    };
  
  
  return (
    <div>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
            <div> 
                <label htmlFor='name'>Name: </label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='phone'>Phone: </label>
                <input 
                  type='phone'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default GeneralInfoForm;
