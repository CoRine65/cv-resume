
//education form: school name, title fo study, and date of study
function PracticalExpForm({practical, setPractical}) {
    //add states
    /*
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainRespon, setMainRespon] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({companyName, positionTitle, mainRespon, fromDate, toDate});

        setCompanyName('');
        setPositionTitle('');
        setMainRespon('');
        setFromDate('');
        setToDate('');
    };
*/

    return (
        <div className='card'>
            <h2>Practical Experience Information</h2>
                <div>
                    <label htmlFor='companyName'>Company Name: </label>
                    <input
                        type='text'
                        id='companyName'
                        value={practical.companyName}
                        onChange={(e) => setPractical({...practical, companyName: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='positionTitle'>Position Title: </label>
                    <input
                        type='text'
                        id='positionTitle'
                        value={practical.positionTitle}
                        onChange={(e) => setPractical({...practical, positionTitle: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='mainRespon'>Main responsibilities: </label>
                    <input
                        type='text'
                        id='mainRespon'
                        value={practical.mainRespon}
                        onChange={(e) => setPractical({...practical, mainRespon: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='fromDate'>From Date: </label>
                    <input 
                        type='date'
                        id='fromDate'
                        value={practical.fromDate}
                        onChange={(e) => setPractical({...practical, fromDate: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='toDate'>To Date: </label>
                    <input 
                        type='date'
                        id='toDate'
                        value={practical.toDate}
                        onChange={(e) => setPractical({...practical, toDate: e.target.value})}
                    />
                </div>
        </div>

    )
}

export default PracticalExpForm;