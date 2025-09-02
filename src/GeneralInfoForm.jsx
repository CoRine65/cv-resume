import React from 'react';

function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  return (
    <form className="card">
      <h2>General Information</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={generalInfo.name}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, name: e.target.value })
          }
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, email: e.target.value })
          }
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={generalInfo.phone}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, phone: e.target.value })
          }
          placeholder="Enter your phone number"
        />
      </div>
    </form>
  );
}

export default GeneralInfoForm;
