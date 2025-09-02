TOP: https://www.theodinproject.com/lessons/react-new-cv-application

Goal: To create a form app for a CV/resume
core objective: using react components, props, keys, understanding and manipulating states efficiently. 


Steps: 

1. Create a new React Project
- new create vite@latest . 
2. Component and Form Structure
- GeneralInfoForm: name, email, phone number
--- commit ----
- EducationalInfoForm: school name, title fo study, date of study
- PracticalExpForm: company name, position title, main responsibilities, Date From and Date Until
----- commit ---------
- imports to app.jsx
- css styling 
-------- commit --------
3. Having the information submitted be displayed onto the view.
- In order to display the submitted information App.jsx needs to hold the state and pass it down.
    - update App.jsx to hold the states by creating instance of the components, and retaining the value: lifting the state up. moving from child to parent
    - update / double check compnonets
    [error:] could not type into the input fields: mismatching name consistencies.