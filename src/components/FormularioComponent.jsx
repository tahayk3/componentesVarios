import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () =>{
    
    const initialForm = {
        userName:"",
        email: "",
        password: ""
    };

    const {formState,onInputChange} = useForm(initialForm);

    const {userName, email, password } = formState;

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(formState);
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="userName" 
                    value={userName}
                    onChange={onInputChange}
                    placeholder="Enter user name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value= {email}
                    onChange={onInputChange}
                    placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    value= {password}
                    onChange={onInputChange}
                    placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}