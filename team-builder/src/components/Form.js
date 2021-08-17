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
          Name:
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
            />
          )}
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={employee.email}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            onChange={changeHandler}
            value={employee.role}
          />
        </label>
        <input
          type="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
