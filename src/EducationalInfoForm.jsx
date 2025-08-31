import React, { useState } from 'react';

//education form: school name, title fo study, and date of study
function EducationalInfoForm() {
    //add states
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [dateStudy, setDateStudy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({schoolName, studyTitle, dateStudy});

        setSchoolName('');
        setStudyTitle('');
        setDateStudy('');
    };


    return (
        <div>
            <h2>Educational Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='schoolName'>School Name: </label>
                    <input
                        type='text'
                        id='schoolName'
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='studyTitle'>Title of Study: </label>
                    <input
                        type='text'
                        id='studyTitle'
                        value={studyTitle}
                        onChange={(e) => setStudyTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='dateStudy'>Date of study: </label>
                    <input
                        type='text'
                        id='dateStudy'
                        value={dateStudy}
                        onChange={(e) => setDateStudy(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default EducationalInfoForm;