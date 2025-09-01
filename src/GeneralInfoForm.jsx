//general form for: name, email, phone number
function GeneralInfoForm({ generalInfo, setGeneralInfoForm}) {
    //adding states
    /*
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, phone});

        setName('');
        setEmail('');
        setPhone('');
    };*/
  
  return (
    <div className='card'>
        <h2>General Information</h2>
        
            <div> 
                <label htmlFor='name'>Name: </label>
                <input
                  type='text'
                  id='name'
                  value={generalInfo.name}
                  onChange={(e) => setGeneralInfoForm({...generalInfo, name: e.target.value})}
                />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                  type='email'
                  id='email'
                  value={generalInfo.email}
                  onChange={(e) => setGeneralInfoForm({...generalInfo, email: e.target.value})}
                />
            </div>
            <div>
                <label htmlFor='phone'>Phone: </label>
                <input 
                  type='phone'
                  id='phone'
                  value={generalInfo.phone}
                  onChange={(e) => setGeneralInfoForm({...generalInfo, phone: e.target.value})}
                />
            </div>
        </div>
   
  );
}

export default GeneralInfoForm;
