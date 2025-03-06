import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const {formState, onInputChange, OnResetForm} = useForm ({
      username: '',
      email: '',
      password: ''
  });


const {username, email, password} = formState;


  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />

        <input 
            type="text" 
            className="form-control mt-2" 
            placeholder="username" 
            name="username"
            value={username}
            onChange={onInputChange}
            />

        <input 
            type="mail" 
            className="form-control mt-2" 
            placeholder="email" 
            name="email"
            value={email}
            onChange={onInputChange}
            />
        
        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="password" 
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <hr />

        { (username==='Gonzalo') && <Message/>}
        
        <button className="btn btn-danger" onClick={OnResetForm}> Clean form </button>
    </>
  )

}
