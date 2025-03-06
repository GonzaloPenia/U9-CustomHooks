import { useState } from "react"

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'gonzalo',
        email: 'gonzalo@gmail.com'
    })

    const {username, email, password} = formState;

    const onInputChange = ({target}) => {
        
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        });

    }

  return (
    <>
      <h1>SimpleForm</h1>
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

        <button className="btn btn-danger">Clean form</button>
    </>
  )

}
