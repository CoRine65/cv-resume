
//education form: school name, title fo study, and date of study
function EducationalInfoForm({education, setEducation}) {
    return (
        <div className='card'>
            <h2>Educational Information</h2>
                <div>
                    <label htmlFor='schoolName'>School Name: </label>
                    <input
                        type='text'
                        id='schoolName'
                        value={education.schoolName}
                        onChange={(e) => setEducation({ ...education, schoolName: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='studyTitle'>Title of Study: </label>
                    <input
                        type='text'
                        id='studyTitle'
                        value={education.titleStudy}
                        onChange={(e) => setEducation({ ...education, titleStudy: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='dateStudy'>Date of study: </label>
                    <input
                        type='text'
                        id='dateStudy'
                        value={education.dateStudy}
                        onChange={(e) => setEducation({ ...education, dateStudy: e.target.value})}
                    />
                </div>
        </div>

    )
}

export default EducationalInfoForm;