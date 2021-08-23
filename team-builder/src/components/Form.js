import React from "react";
import { useState, useEffect } from "react";

const Form = (props) => {
  const { empToEdit, handleEdit, handleAdd, setEmpToEdit } = props;   
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
    id: Date.now(),
  });


  const changeHandler = (evt) => {
    setEmployee({
      ...employee,
      [evt.target.name]: evt.target.value,
    });
  };

  useEffect(() => {
    if (empToEdit) {
      setEmployee(empToEdit);
    }
  }, [empToEdit]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (empToEdit) {
        handleEdit(employee);
        setEmpToEdit(null);
        setEmployee({
          name: "",
          email: "",
          role: "",
        });
        console.log("editor");
      } else {
        console.log("adder");
        handleAdd(employee);
        setEmployee({
          name: "",
          email: "",
          role: "",
        });
      }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      {empToEdit ? (
        <p>
         
        </p>
      ) : (
        <p>
          {`Adding new employee: ${employee.name}`}
        </p>
      )}

      <label>
          Name :
          {empToEdit ? (
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={employee.name}
            />
          ) : (
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={employee.name}
              placeholder="Type in a username"
              maxLength="30"
            />
          )}
        </label><br></br>
        <label>
          Email :
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={employee.email}
            placeholder="Type in an email"
            maxLength="50"
          />
        </label><br></br>
        <label>Role :
        <select onChange={changeHandler} name='role' value={employee.role} >
            <option value=''>-- Select a Role --</option>
            <option value='Executive'>Executive</option>
            <option value='Manager'>Manager</option>
            <option value='Operations and Production'>Operations and Production</option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Sales Associate'>Sales Associate</option>
            <option value='Marketing Manager'>Marketing Manager</option>
            <option value='Receptionist'>Receptionist</option>
          </select>
        </label><br></br>
        <label>Password : 
            <input type="password" 
            value={employee.password} 
            onChange={changeHandler}
            placeholder="Password"
            />
        </label><br></br>
        <label >

        </label><br></br>
        <input
          type="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
