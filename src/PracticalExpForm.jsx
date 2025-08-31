import React, { useState } from 'react';

//education form: school name, title fo study, and date of study
function PracticalExpForm() {
    //add states
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


    return (
        <div className='card'>
            <h2>Practical Experience Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='companyName'>Company Name: </label>
                    <input
                        type='text'
                        id='companyName'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='positionTitle'>Position Title: </label>
                    <input
                        type='text'
                        id='positionTitle'
                        value={positionTitle}
                        onChange={(e) => setPositionTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='mainRespon'>Main responsibilities: </label>
                    <input
                        type='text'
                        id='mainRespon'
                        value={mainRespon}
                        onChange={(e) => setMainRespon(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='fromDate'>From Date: </label>
                    <input 
                        type='date'
                        id='fromDate'
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='toDate'>To Date: </label>
                    <input 
                        type='date'
                        id='toDate'
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default PracticalExpForm;