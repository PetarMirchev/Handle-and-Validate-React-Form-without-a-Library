import React, { useRef } from 'react';
import { useState } from 'react';
import FormInput from './components/FormInput';
import './index.css';


// this logic in this file is experimental only, not part of all app <--------------

//whit useREF 
const FormInputV2 = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }


  // in file in FormInput.jsx  add to work --->   <input name={props.name} placeholder={props.placeholder}/>



  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="fullname" placeholder="Full Name"/>
        <FormInput name="tel." placeholder="Tel."/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormInputV2;