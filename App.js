import React, { useState } from 'react';
import TextField from './TextField';
const Home = ({ details }) => {
return (
  <div className="home">
    <div className="top-bar">
      <p>Time: {getCurrentTime()}</p>
      <p>Battery: {getBatteryPercentage()}</p>
    </div>
    <div className="app">
      <TextField  value={"Hello"}  />
      <TextField  value={"Hi James"} />
    {
    doctorsData.map((doctor, index) => (
      <Doctor key={index} {...doctor} />
    ))
    }
    <h2>{doctor.name} Office</h2>
    <p>image: {doctor.image}</p>
    <p>name: {doctor.name}</p>
    <p>specialisation: {doctor.specialisation}</p>
    <p>currentdate: {doctor.date}</p>
    <p>Schedule: {doctor.time}</p>
    const handleSearch = (searchTerm) ={
    console.log(`Searching for: ${searchTerm}`);&rbrace;;
      return (
    <div className="home">
        <div className="action-buttons">
        <button onClick={() => handleButtonClick('COVID-19')}>COVID-19</button>
        <button onClick={() => handleButtonClick('Doctor')}>Doctor</button>
        <button onClick={() => handleButtonClick('Medicine')}>Medicine</button>
        <button onClick={() => handleButtonClick('Hospital')}>Hospital</button>
      </div>
      {doctorsData.map((doctor, index) => (
        <Doctor key={index} {...doctor} />
      ))}
    </div>
  );


  return (
    <div className="app">
      <SearchField onSearch={handleSearch} />
      </div>
  );
  </div>
);
doctorsData.map((doctor, index) =&gt; (
  <Doctor key={index} {...doctor} />
))
<div className="home">;
        <div className="action-buttons">
        <h2>{doctor.name} doctor</h2>
        <p> image:{doctor.image}</p>
        <p>name: {doctor.name}</p>
        <p>specialisation: {doctor.specialisation}</p>
        <p>review: {doctor.review}</p>
        <p>Schedule: {doctor.time}</p>
        </div>
        return (
    <div className="home">
        <div className="action-buttons">
        <button onClick={() => handleButtonClick('Home')}>Home</button>
        <button onClick={() => handleButtonClick('Schedule')}>schedule</button>
        <button onClick={() => handleButtonClick('Messages')}>Messages</button>
        <button onClick={() => handleButtonClick('Profile')}>Profile</button>
      </div>
      {doctorsData.map((doctor, index) => (
        <Doctor key={index} {...doctor} />
      ))}
    </div>

const App = () =&gt; {
 
 const getCurrentTime = () =&gt; {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
&rbrace;;

const getBatteryPercentage = () =&gt; {
  return '90%';
&rbrace;;
  function App() {
    const [selecteddoctor, setSelecteddoctor] = useState(null);

    const officeLocations = [
      { name: 'Imran syahir', specialisation: 'General doctor', current, date: 'sunday ,12 june' &rbrace;,
      { name: 'Joseph Brostito', specialisation: 'Dental specialist', current, date: 'sunday ,12 june' &rbrace;,
      ];

    const handleSave = () =&gt; {
      setSelectedLocation(officeLocations[0]); 
    &rbrace;;

    return (
      <div>
        <h1>doctorDetails</h1>
        < alt="Upcomming schedule" style={{ width: '100%' }} />
 
        <div>
          <h2></h2>
          <ul>
            {doctordetails.map((name, index) => (
              <li key={index}>
                <button onClick={() => setSelecteddoctor(doctor)}>{doctor.name}</button>
              </li>
            ))}
          </ul>
          <button onClick={handleSave}>Save</button>
        </div>

        {selecteddoctor && <doctorDetails doctor={doctordetailsLocation} />}
      </div>
    );
    return (
      <div className="app">
        <SearchField onSearch={handleSearch} />
        </div>
    );
  
  &rbrace;

</div>
export default App; 
&rbrace;
