import "./App.css";
import Form from "./components/Form";
import EmployeePage from "./components/EmployeePage";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import { Route } from "react-router-dom";

function App() {
  const [empToEdit, setEmpToEdit] = useState(null);
  const [employeeList, setEmployeeList] = useState([
    {
      name: "Bunny William",
      email: "bwilliam@gmail.com",
      role: "CEO"
    },
    {
      name: "Tom Boy",
      email: "tboy@gmail.com",
      role: "Marketing Manager"
    },
    {
      name: "Sophia Lucas",
      email: "lucas@gmail.com",
      role: "Receptionist"
    },
  ]);

  const handleAdd = (employee) => {
    if (employee.name) {
      setEmployeeList([...employeeList, employee]);
    }
  };

  const handleEdit = (employee) => {
    setEmployeeList(
      employeeList.map((elem) => {
        if (elem.name === empToEdit.name) {
          return employee;
        } else {
          return elem;
        }
      })
    );
  };

  const handleEditor = (employee) => {
    setEmpToEdit(employee);
  };

  return (
    <div className="App">
      <Route exact path="/">
      <h1>
          Important Company Employee Database
        </h1>
        <Form
          handleAdd={handleAdd}
          empToEdit={empToEdit}
          handleEdit={handleEdit}
          setEmpToEdit={setEmpToEdit}
        />
        <EmployeeList employeeList={employeeList} handleEditor={handleEditor} />
      </Route>
      <Route path="/employees/:name">
        <EmployeePage employeeList={employeeList} />
      </Route>
    </div>
  );
}

export default App;
