import React, { useState } from "react";

export const FormularioComponent = () =>{
    
    const [formState, setformState] = useState({
        userName:"Cristian Tahay",
        email: "tahayk3@gmail.com",
        password: "contrasenia2024xd"
    });

    const {userName,email, password } = formState;

    return(
        <form>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="userName" 
                    value={userName}
                    placeholder="Enter user name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value= {email}
                    placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    value= {password}
                    placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}