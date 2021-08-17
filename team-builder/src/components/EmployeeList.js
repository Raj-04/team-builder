import React from "react";
import Employee from "./Employee";
import { Link } from "react-router-dom";

const EmployeeList = (props) => {
  const { employeeList, handleEditor } = props;

  return (
    <div>
      <h4> Current Employees</h4>
      <div>
        {employeeList.map((employee) => {
          return (
            <div>
              <EmployeeDetails key={employee.id} employee={employee} />
              <button
                key={employee.email}
                onClick={() => handleEditor(employee)}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function EmployeeDetails(props) {
  return (
    <div>
      <Link to={`/employees/${props.employee.name}`}>
        <Employee employee={props.employee} key={props.employee.name}/>
      </Link>
    </div>
  );
}

export default EmployeeList;
