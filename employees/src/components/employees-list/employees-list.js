import React from "react";
import EmployeesListItem from "../emploeers-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;

    return (
      // <EmployeesListItem key ={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
      <EmployeesListItem key ={id}
                         {...itemProps}
      onDelete={() => console.log('Deleted')}
      />
      // <EmployeesListItem name={item.name} salary={item.salary} {...item}/> то же самое.
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
