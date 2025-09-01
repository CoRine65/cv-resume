
import { useState } from 'react'
import GeneralInfoForm from './GeneralInfoForm'
import EducationalInfoForm from './EducationalInfoForm'
import PracticalExpForm from './PracticalExpForm'
import './App.css'

function App() {
  //holding state and passing it down
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Education Info
  const [education, setEducation] = useState({
    schoolName: '',
    titleStudy: '',
    dateStudy: '',
  })

  // Practical Experience
  const [practical, setPractical] = useState({
    companyName: '',
    positionTitle: '',
    mainRespon: '',
    fromDate: '',
    toDate: '',
  })


  // Submission toggle
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
       <h1>My CV</h1>
       {!submitted ? (
        <div>
          <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
          <EducationalInfoForm education={education} setEducation={setEducation} />
          <PracticalExpForm practical={practical} setPractical={setPractical} />
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </div>

       ) : (
        <div className="card">
          <h2>General Information</h2>
          <p><strong>Name:</strong> {generalInfo.name}</p>
          <p><strong>Email:</strong> {generalInfo.email}</p>
          <p><strong>Phone:</strong> {generalInfo.phone}</p>

          <h2>Education</h2>
          <p><strong>School:</strong> {education.schoolName}</p>
          <p><strong>Study:</strong> {education.titleStudy}</p>
          <p><strong>Date:</strong> {education.dateStudy}</p>

          <h2>Practical Experience</h2>
          <p><strong>Company:</strong> {practical.companyName}</p>
          <p><strong>Position:</strong> {practical.positionTitle}</p>
          <p><strong>Responsibilities:</strong> {practical.mainRespon}</p>
          <p><strong>From:</strong> {practical.fromDate} <strong>Until:</strong> {practical.toDate}</p>

          <button onClick={() => setSubmitted(false)}>Edit</button>
        </div>
      )};
    </>
  )



}

export default App
