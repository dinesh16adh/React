// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Contact from "./components/Contact";
 const App = ()=> {
  const contacts=[
    {
      name: "john",
      number:"1234",
      location:"ktm"
    },
    {
      name: "jDav",
      number:"1234",
      location:"ktm"
    },
    {
      name: "jloes",
      number:"1234",
      location:"ktm"
    },
  ];
  return <>
  <div className='container'>
    <h3>Contact List:</h3>
      <Contact data={contacts[0]}/>
      <Contact data={contacts[1]}/>
      <Contact data={contacts[2]}/>
    </div>
  </>;
};

export default App;
